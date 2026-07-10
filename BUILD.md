# Subnautica 2 Guide — Build Overview

**Build Status:** ✅ Successful

## Pages Generated (28 pages total)

| Group | Route | Type |
|-------|-------|------|
| 🏠 Home | `/` | Landing page |
| 🐟 Creatures | `/creatures/` | Hub (placeholder) |
| ⛏️ Resources | `/resources/` | Hub |
| ⛏️ Copper | `/resources/copper/` | Resource guide |
| ⛏️ Silver | `/resources/silver/` | Resource guide |
| ⛏️ Lead | `/resources/lead/` | Resource guide |
| ⛏️ Salt | `/resources/salt/` | Resource guide |
| ⛏️ Titanium | `/resources/titanium/` | Resource guide |
| ⛏️ Quartz | `/resources/quartz/` | Resource guide |
| ⛏️ Gold | `/resources/gold/` | Resource guide |
| ⛏️ Lithium | `/resources/lithium/` | Resource guide |
| 🏗️ Base Building | `/base-building/` | Full guide |
| 🧬 Biomods | `/biomods/` | Full guide |
| 📋 Guides Hub | `/guides/` | Index |
| 👶 Beginner Guide | `/guides/beginner-guide/` | Full walkthrough |
| 🩺 Digestive Incompatibility | `/guides/digestive-incompatibility/` | Full guide |
| 🪮 Angel Comb | `/guides/angel-comb/` | Full guide |
| 🔊 Feedback Resonator | `/guides/feedback-resonator/` | Full guide |
| 🎮 Co-op Multiplayer | `/guides/multiplayer/` | Full guide |
| 💻 System Requirements | `/info/system-requirements/` | Specs page |
| 📋 EA Roadmap | `/updates/roadmap/` | Tracker |
| 📜 Privacy Policy | `/privacy/` | Legal |
| 📜 Terms of Service | `/terms/` | Legal |
| 📜 Cookie Policy | `/cookie-policy/` | Legal |
| 📜 Disclaimer | `/disclaimer/` | Legal |
| 🔍 404 | `/_not-found/` | Custom 404 |

## Key Features
- ✅ **Next.js 16.2.9 SSG** — fully static export to `out/`
- ✅ **Tailwind CSS v4** — Ocean-blue design system (#0ea5e9)
- ✅ **TL;DR first** — every guide starts with a quick answer box
- ✅ **FAQ with `<details><summary>`** — native HTML, no JS
- ✅ **Schema.org WebSite** — structured data for SEO
- ✅ **GA4 + Clarity** — analytics scripts in layout (replace IDs)
- ✅ **hreflang-ready** — English default, Chinese subdomain ready
- ✅ **Legal pages** — Privacy, Terms, Cookie, Disclaimer
- ✅ **Custom 404 page**
- ✅ **Responsive design** — mobile-first, flex/grid layout
- ✅ **No backend** — pure static, deploy to Cloudflare Pages

## Deploy to Cloudflare Pages
1. Set build command: `npm run build`
2. Set output directory: `out`
3. Root path: `/` (English default)
4. For Chinese subdomain, build with separate config

## Dev server
```bash
npm run dev
```
