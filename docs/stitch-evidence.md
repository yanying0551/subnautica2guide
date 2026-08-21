# Stitch UI Handoff Evidence

## 状态
- Status: **DESKTOP ARTIFACTS RECEIVED / MOBILE EVIDENCE PENDING**
- Source: Stitch MCP shared configuration supplied by the owner
- Retrieved: 2026-08-21
- Local archive: `/root/.hermes/projects/subnautica2guide/source/stitch/`
- Manifest: `source/stitch/manifest.json`

## Authoritative project

| Field | Value |
|---|---|
| Project title | `Subnautica 2 Guide Design Spec` |
| Project ID | `9132388808611174597` |
| Project type | `TEXT_TO_UI_PRO` |
| Design system | `Abyssal Intelligence` |
| Theme | dark / deep-sea editorial guide |
| Headline/body font | Manrope |
| Data/label font | JetBrains Mono |
| Primary accent | `#22d3ee` |
| Base surface | `#0e1416` |

## Required evidence

| Item | Required | Received | Notes |
|---|---:|---:|---|
| Stitch project name / ID | yes | yes | verified through MCP `list_projects` |
| Home desktop screen ID + screenshot/export | yes | yes | screen `3dcf3d05067340cea7712482cb873229`; duplicate desktop screen also archived |
| Home mobile screen ID + screenshot/export | yes | **no** | current MCP `list_screens` returned no MOBILE screens |
| Guides Hub desktop/mobile | yes | desktop yes / mobile no | screen `6d72595993514cf3beccb4082343e26e` |
| Verified detail desktop/mobile | yes | desktop yes / mobile no | system requirements `b5cb856ff0314a15b368b34c6d1c473c`; multiplayer `4e1daaee1afa4c809722e6b88e0614c7` |
| Tracker/review-state desktop/mobile | yes | desktop yes / mobile no | map `eed39a0b13ea4204ad25d0c4cdbaea7b`; roadmap `a5acd8a10eb946bc8e9a3cb0c91b4e27`; crafting `e23bf02a90d244f192c33796d9ec7d42` |
| Design tokens | yes | yes | returned in project `designTheme` / `designMd` |
| Assets/icons/fonts | if used | partial | fonts/tokens identified; no separate licensed asset manifest yet |
| Frozen UI copy | yes | partial | screen titles and HTML exports archived; bilingual copy still needs content freeze |

## Acceptance rules

1. A project/screen ID or screenshot must be traceable to the actual Stitch project.
2. Desktop and mobile evidence are both required before visual implementation is marked aligned.
3. Screenshots/exports are inspected against the current route and content contract.
4. Stitch sample data is treated as placeholder until content evidence approves it.
5. This file is not a claim that Stitch delivery is complete; it is the handoff intake record.
