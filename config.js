/* ============================================================================
   OPENTREE — your config file. This is the ONLY file most people ever edit.
   ----------------------------------------------------------------------------
   HOW TO USE:
   1. Change the profile, theme, links and socials below to yours.
   2. Save, push to GitHub, enable Pages. Done — your page is live.
   3. Icons: just use any emoji (🔗) or paste an image URL ("https://...").
   4. Schedule a link: add  schedule: { from: "2026-12-01", to: "2026-12-31" }
      and it will only appear between those dates. Delete the line = always on.
   ============================================================================ */

var CONFIG = {

  /* ---------- who is this page for ---------- */
  profile: {
    name: "Aman Singh",
    bio: "Creative WebGL developer · MERN stack · AI automation",
    avatar: "https://github.com/amanxdev0.png", // your photo, or a https:// image link
    verified: true,                             // little ✓ badge next to the name
  },

  /* ---------- look & feel ---------- */
  theme: {
    preset: "midnight",   // midnight | sunset | ocean | forest | candy | mono
    font: "Inter",        // any Google Font name, e.g. "Poppins", "Space Grotesk"
    buttonShape: "rounded", // rounded | pill | sharp
    backgroundImage: "",  // optional: "https://..." — overrides the gradient

    /* Uncomment for total control (overrides the preset):
    custom: {
      bg1: "#0b0b12", bg2: "#1a1030",
      card: "rgba(255,255,255,0.06)", cardHover: "rgba(255,255,255,0.12)",
      text: "#f2ede4", muted: "rgba(242,237,228,0.6)",
      accent: "#ffb35c",
    }, */
  },

  /* ---------- your links (as many as you want) ---------- */
  links: [
    { title: "EVENT HORIZON — dive into a black hole", url: "https://amanxdev0.github.io/event-horizon/", icon: "🕳️", badge: "NEW", highlight: true },
    { title: "HELIOS — voyage across the solar system", url: "https://amanxdev0.github.io/helios/", icon: "☀️" },
    { title: "ABYSS — descend to Challenger Deep", url: "https://amanxdev0.github.io/abyss/", icon: "🌊" },
    { title: "scrollfilm.js — open-source film engine", url: "https://github.com/amanxdev0/scrollfilm", icon: "🎬" },
    { title: "GitHub — @amanxdev0", url: "https://github.com/amanxdev0", icon: "💻" },
    { title: "Stream Pixel — YouTube", url: "https://www.youtube.com/@stream-pixel", icon: "▶️" },

    /* Scheduled link example — appears only between from and to:
    { title: "🚀 Big launch — live now!", url: "https://example.com",
      schedule: { from: "2026-12-01", to: "2026-12-31" } }, */
  ],

  /* ---------- social icons row ---------- */
  socials: [
    { name: "GitHub",   url: "https://github.com/amanxdev0",       icon: "🐙" },
    { name: "YouTube",  url: "https://www.youtube.com/@stream-pixel", icon: "▶️" },
    { name: "CodePen",  url: "https://codepen.io/amanxdev0",       icon: "🖊️" },
  ],

  /* ---------- features (true/false) ---------- */
  features: {
    search: true,  // filter-as-you-type box above the links
    share: true,   // share button (native share, falls back to copy-link)
    qr: false,     // QR code of your page (needs internet for the QR image)
    clicks: true,  // show per-link click counts (stored privately in visitor's browser)
  },

  /* ---------- browser tab + link previews ---------- */
  seo: {
    title: "Aman Singh — Links",
    description: "All my projects, profiles and launches in one place. Free & open source.",
  },

  /* Optional: paste a Plausible/Umami script URL here for real analytics.
     Leave empty for zero tracking. */
  analytics: "",
};
