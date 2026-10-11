/* OpenTree — renders everything from CONFIG (config.js). No build step. */
(function () {
  'use strict';

  var cfg = window.CONFIG || (typeof CONFIG !== 'undefined' ? CONFIG : {}) || {};
  var $ = function (id) { return document.getElementById(id); };

  /* ---------------- theme ---------------- */
  function loadFont(name) {
    if (!name) return;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=' +
      encodeURIComponent(name).replace(/%20/g, '+') + ':wght@400;600;800&display=swap';
    document.head.appendChild(link);
    document.documentElement.style.setProperty('--font', "'" + name + "', system-ui, sans-serif");
  }

  function applyTheme() {
    var t = cfg.theme || {};
    var root = document.documentElement;
    root.dataset.theme = t.preset || 'midnight';
    root.dataset.shape = t.buttonShape || 'rounded';
    loadFont(t.font || 'Inter');
    if (t.backgroundImage) {
      document.body.classList.add('has-bgimg');
      document.body.style.setProperty('--bgimg', 'url("' + t.backgroundImage + '")');
    }
    if (t.custom) {
      var c = t.custom;
      ['bg1', 'bg2', 'card', 'cardHover', 'text', 'muted', 'accent'].forEach(function (k) {
        if (c[k]) root.style.setProperty('--' + k, c[k]);
      });
    }
    if (cfg.analytics) {
      var s = document.createElement('script');
      s.src = cfg.analytics;
      s.defer = true;
      document.head.appendChild(s);
    }
  }

  /* ---------------- profile ---------------- */
  function renderProfile() {
    var p = cfg.profile || {};
    $('avatar').src = p.avatar || '';
    $('avatar').alt = (p.name || 'Profile') + ' photo';
    $('name').textContent = p.name || '';
    $('bio').textContent = p.bio || '';
    $('verified').style.display = p.verified ? '' : 'none';
    var wrap = $('socials');
    wrap.innerHTML = '';
    (cfg.socials || []).forEach(function (s) {
      var a = document.createElement('a');
      a.className = 'social';
      a.href = s.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.title = s.name;
      a.setAttribute('aria-label', s.name);
      a.textContent = s.icon || '🔗';
      wrap.appendChild(a);
    });
  }

  /* ---------------- links ---------------- */
  function isLive(link) {
    if (!link.schedule) return true;
    var now = new Date();
    now.setHours(0, 0, 0, 0);
    var from = link.schedule.from ? new Date(link.schedule.from + 'T00:00:00') : null;
    var to = link.schedule.to ? new Date(link.schedule.to + 'T23:59:59') : null;
    if (from && now < from) return false;
    if (to && now > to) return false;
    return true;
  }

  function getClicks() {
    try { return JSON.parse(localStorage.getItem('opentree_clicks') || '{}'); }
    catch (e) { return {}; }
  }
  function bumpClick(url) {
    try {
      var m = getClicks();
      m[url] = (m[url] || 0) + 1;
      localStorage.setItem('opentree_clicks', JSON.stringify(m));
    } catch (e) { /* private mode — ignore */ }
  }

  var liveLinks = [];
  function renderLinks(filter) {
    var f = (filter || '').trim().toLowerCase();
    var wrap = $('links');
    wrap.innerHTML = '';
    var clicks = getClicks();
    var shown = 0;
    liveLinks.forEach(function (link, i) {
      if (f && link.title.toLowerCase().indexOf(f) === -1) return;
      shown++;
      var a = document.createElement('a');
      a.className = 'link-card' + (link.highlight ? ' highlight' : '');
      a.href = link.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.style.animationDelay = Math.min(i * 60, 600) + 'ms';

      var icon = document.createElement('span');
      icon.className = 'link-icon';
      if (link.icon && /^https?:\/\//.test(link.icon)) {
        var img = document.createElement('img');
        img.src = link.icon;
        img.alt = '';
        icon.appendChild(img);
      } else {
        icon.textContent = link.icon || '🔗';
      }

      var title = document.createElement('span');
      title.className = 'link-title';
      title.textContent = link.title;

      a.appendChild(icon);
      a.appendChild(title);

      if (link.badge) {
        var b = document.createElement('span');
        b.className = 'badge';
        b.textContent = link.badge;
        a.appendChild(b);
      }
      if (cfg.features && cfg.features.clicks && clicks[link.url]) {
        var c = document.createElement('span');
        c.className = 'clicks';
        c.textContent = clicks[link.url] + '↗';
        c.title = 'Your clicks on this device';
        a.appendChild(c);
      }
      a.addEventListener('click', function () { bumpClick(link.url); });
      wrap.appendChild(a);
    });
    $('empty').hidden = shown > 0;
  }

  /* ---------------- toolbar: search / share / qr ---------------- */
  function toast(msg) {
    var t = $('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._h);
    t._h = setTimeout(function () { t.classList.remove('show'); }, 2200);
  }

  function setupToolbar() {
    var f = cfg.features || {};
    var search = $('search');
    if (f.search) {
      search.hidden = false;
      search.addEventListener('input', function () { renderLinks(search.value); });
    }
    var shareBtn = $('shareBtn');
    if (f.share) {
      shareBtn.hidden = false;
      shareBtn.addEventListener('click', function () {
        var data = { title: document.title, url: location.href };
        if (navigator.share) {
          navigator.share(data).catch(function () {});
        } else if (navigator.clipboard) {
          navigator.clipboard.writeText(location.href)
            .then(function () { toast('Link copied ✓'); })
            .catch(function () { toast('Copy failed'); });
        } else {
          toast('Copy this URL: ' + location.href);
        }
      });
    }
    var qrBtn = $('qrBtn'), qrPanel = $('qrPanel');
    if (f.qr) {
      qrBtn.hidden = false;
      qrBtn.addEventListener('click', function () {
        var open = qrPanel.hidden;
        qrPanel.hidden = !open;
        if (open) {
          $('qrImg').src = 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=' +
            encodeURIComponent(location.href);
        }
      });
    }
  }

  /* ---------------- seo ---------------- */
  function applySeo() {
    var s = cfg.seo || {};
    if (s.title) {
      document.title = s.title;
      var og = document.querySelector('meta[property="og:title"]');
      if (og) og.setAttribute('content', s.title);
    }
    if (s.description) {
      var d = document.querySelector('meta[name="description"]');
      if (d) d.setAttribute('content', s.description);
      var ogd = document.querySelector('meta[property="og:description"]');
      if (ogd) ogd.setAttribute('content', s.description);
    }
  }

  /* ---------------- go ---------------- */
  applyTheme();
  applySeo();
  renderProfile();
  liveLinks = (cfg.links || []).filter(isLive);
  renderLinks('');
  setupToolbar();
})();
