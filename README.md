<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>OpenTree — a free, open-source Linktree alternative</title>
<meta name="description" content="OpenTree: the free, open-source, ad-free Linktree alternative. One config file, GitHub Pages hosting, zero cost — forever." />
<style>
  body { font-family: system-ui, sans-serif; max-width: 720px; margin: 0 auto; padding: 40px 20px; line-height: 1.7; color: #1a1a1a; }
  h1 { font-size: 2em; } h2 { margin-top: 2em; }
  code { background: #f0f0f0; padding: 2px 6px; border-radius: 4px; }
  pre { background: #111; color: #eee; padding: 16px; border-radius: 8px; overflow-x: auto; }
  pre code { background: none; padding: 0; }
  table { border-collapse: collapse; width: 100%; }
  th, td { border: 1px solid #ddd; padding: 8px 12px; text-align: left; }
  .live { display: inline-block; background: #111; color: #fff; padding: 10px 24px; border-radius: 999px; text-decoration: none; font-weight: 700; }
</style>
</head>
<body>

<h1>🌳 OpenTree</h1>
<p><b>The free, open-source Linktree alternative.</b> No ads. No subscription. No paywalled "premium" features. Your links, your page, your rules — hosted free on GitHub Pages.</p>
<p><a class="live" href="https://amanxdev0.github.io/opentree/">See it live →</a></p>

<h2>✨ Features (all free, forever)</h2>
<ul>
  <li>Unlimited links with emoji or image icons, <code>NEW</code> badges, highlighted priority links</li>
  <li><b>Scheduled links</b> — appear/disappear automatically between dates</li>
  <li><b>6 built-in themes</b> (midnight, sunset, ocean, forest, candy, mono) + full custom colors</li>
  <li>Custom Google Fonts, 3 button shapes, optional background image</li>
  <li>Social icons row, verified badge, bio</li>
  <li>Link search, share button (native share / copy link), optional QR code</li>
  <li>Per-link click counts (private, stored in the visitor's own browser)</li>
  <li>SEO + Open Graph tags, mobile-first, staggered entrance animations</li>
  <li>Optional analytics slot (Plausible/Umami) — empty by default = zero tracking</li>
</ul>

<h2>🚀 Get your own in 3 minutes</h2>
<ol>
  <li><b>Fork</b> this repo (top-right Fork button).</li>
  <li>Edit <code>config.js</code> — put your name, links, socials, theme. It's all commented.</li>
  <li>Go to repo <b>Settings → Pages → Deploy from a branch → <code>main</code> → <code>/(root)</code></b>.</li>
</ol>
<p>Your page is live at <code>https://YOUR-USERNAME.github.io/opentree/</code>. Want your own domain? Add it under Settings → Pages → Custom domain. Still free.</p>

<h2>🎨 Customizing</h2>
<p>Everything lives in <code>config.js</code>:</p>
<table>
  <tr><th>Section</th><th>What it does</th></tr>
  <tr><td><code>profile</code></td><td>Name, bio, avatar, verified badge</td></tr>
  <tr><td><code>theme.preset</code></td><td>midnight / sunset / ocean / forest / candy / mono</td></tr>
  <tr><td><code>theme.font</code></td><td>Any Google Font name</td></tr>
  <tr><td><code>theme.buttonShape</code></td><td>rounded / pill / sharp</td></tr>
  <tr><td><code>theme.custom</code></td><td>Uncomment for full color control</td></tr>
  <tr><td><code>links</code></td><td>Your links — icon, badge, highlight, schedule</td></tr>
  <tr><td><code>socials</code></td><td>Icon buttons row</td></tr>
  <tr><td><code>features</code></td><td>Toggle search / share / qr / click counts</td></tr>
</table>

<h2>💚 Free forever — for every creator</h2>
<p><b>Yes, anyone can use OpenTree. Really.</b></p>
<ul>
  <li><b>No ads.</b> Your page will never show ads — to you or your visitors.</li>
  <li><b>No subscription.</b> There is no "Pro plan". Every feature on this page is free.</li>
  <li><b>No paywalled features.</b> Themes, scheduled links, QR codes, custom fonts — all included.</li>
  <li><b>No tracking.</b> Zero analytics by default. Click counts live only in each visitor's own browser.</li>
  <li><b>No account.</b> Nobody signs up for anything. It's just files.</li>
  <li><b>MIT licensed.</b> Any creator can fork it, use it, modify it, rebrand it — even commercially — free forever. Nobody can take that away.</li>
</ul>
<p><b>How any creator gets their own:</b> Fork this repo → edit <code>config.js</code> → Settings → Pages → done. Three minutes, zero cost, forever.</p>

<h2>🔒 Privacy</h2>
<p>OpenTree ships with <b>zero tracking</b>. Click counts are stored in each visitor's own browser via <code>localStorage</code> — nothing leaves their device. Add your own Plausible/Umami script URL in <code>config.js</code> only if you want real analytics.</p>

<h2>📄 License</h2>
<p>MIT © 2026 Aman Singh — use it, fork it, sell it, whatever. It's yours.</p>

</body>
</html>
