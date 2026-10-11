/* OpenTree — renders everything from CONFIG (config.js). No build step. */
(function () {
  'use strict';

  var cfg = window.CONFIG || (typeof CONFIG !== 'undefined' ? CONFIG : {}) || {};
  var $ = function (id) { return document.getElementById(id); };

  /* original brand icons (Simple Icons paths, brand colors) */
var ICONS = {
  youtube: { color: "#FF0000", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  discord: { color: "#5865F2", path: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" },
};

  function iconHTML(icon, cls) {
    var b = ICONS[icon];
    if (b) {
      return '<svg class="' + (cls || 'brand-icon') + '" viewBox="0 0 24 24" fill="' + b.color +
        '" aria-hidden="true"><path d="' + b.path + '"/></svg>';
    }
    if (icon && /^https?:\/\//.test(icon)) {
      return '<img class="brand-icon" src="' + icon + '" alt=""/>';
    }
    return '<span class="emoji-icon">' + (icon || '\uD83D\uDD17') + '</span>';
  }

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
      a.innerHTML = iconHTML(s.icon, 'social-icon');
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
      icon.innerHTML = iconHTML(link.icon);

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
