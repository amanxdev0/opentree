# 🌳 OpenTree

**The free, open-source Linktree alternative.** No ads. No subscription. No paywalled "premium" features. Your links, your page, your rules — hosted free on GitHub Pages.

🔗 **Live:** https://amanxdev0.github.io/opentree/

## ✨ Features (all free, forever)

- Unlimited links with emoji or image icons, `NEW` badges, highlighted priority links
- **Scheduled links** — appear/disappear automatically between dates you set
- **6 built-in themes** (midnight, sunset, ocean, forest, candy, mono) + full custom colors
- Custom Google Fonts, 3 button shapes (rounded / pill / sharp), optional background image
- Social icons row, verified badge, bio
- Link search (filter-as-you-type), share button, optional QR code
- Per-link click counts (private — stored in the visitor's own browser)
- SEO + Open Graph tags, mobile-first, staggered entrance animations
- Optional analytics slot (Plausible/Umami) — empty by default = zero tracking

## 💚 Free forever — for every creator

**Yes, anyone can use OpenTree. Really.**

- **No ads.** Your page will never show ads — to you or your visitors.
- **No subscription.** There is no "Pro plan". Every feature listed above is free.
- **No paywalled features.** Themes, scheduled links, QR codes, custom fonts — all included.
- **No tracking.** Zero analytics by default. Click counts live only in each visitor's own browser.
- **No account.** Nobody signs up for anything. It's just files.
- **MIT licensed.** Any creator can fork it, use it, modify it, rebrand it — even commercially — free forever. Nobody can take that away.

**How any creator gets their own:** Fork this repo → edit `config.js` → Settings → Pages → done. Three minutes, zero cost, forever.

## 🚀 Get your own in 3 minutes

1. **Fork** this repo (top-right Fork button).
2. Edit `config.js` — put your name, links, socials, theme. It's all commented.
3. Go to repo **Settings → Pages → Deploy from a branch → `main` → `/(root)`**.

Your page is live at `https://YOUR-USERNAME.github.io/opentree/`. Want your own domain? Add it under Settings → Pages → Custom domain. Still free.

## 🎨 Customizing

Everything lives in `config.js`:

| Section | What it does |
|---|---|
| `profile` | Name, bio, avatar, verified badge |
| `theme.preset` | midnight / sunset / ocean / forest / candy / mono |
| `theme.font` | Any Google Font name |
| `theme.buttonShape` | rounded / pill / sharp |
| `theme.backgroundImage` | Optional image URL (overrides gradient) |
| `theme.custom` | Uncomment for full color control |
| `links` | Your links — icon, badge, highlight, schedule |
| `socials` | Icon buttons row |
| `features` | Toggle search / share / qr / click counts |
| `seo` | Browser tab title + link-preview description |
| `analytics` | Optional Plausible/Umami script URL |

## 🔒 Privacy

OpenTree ships with **zero tracking**. Click counts are stored in each visitor's own browser via `localStorage` — nothing leaves their device. Add your own Plausible/Umami script URL in `config.js` only if you want real analytics.

## 📄 License

MIT © 2026 Aman Singh — use it, fork it, sell it, whatever. It's yours.
