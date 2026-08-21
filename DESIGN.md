---
version: alpha
name: Subnautica 2 Guide — Deep Sea Interface
description: "An information-first fan guide interface inspired by deep-ocean instrumentation: dark surfaces, cyan signal accents, compact data labels, and restrained bioluminescent depth."
colors:
  primary: "#22D3EE"
  secondary: "#94A8B8"
  tertiary: "#F59E0B"
  neutral: "#0B1926"
  surface: "#0F2738"
  text: "#E8EEF3"
  muted: "#5C7385"
typography:
  display:
    fontFamily: Manrope
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: Manrope
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  data:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  sm: 4px
  md: 8px
  lg: 12px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#051520"
    rounded: "{rounded.md}"
    padding: 12px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 12px
  source-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.md}"
    padding: 16px
  status-verified:
    backgroundColor: "#064E3B"
    textColor: "#A7F3D0"
    rounded: "{rounded.sm}"
    padding: 8px
  status-review:
    backgroundColor: "#451A03"
    textColor: "#FDE68A"
    rounded: "{rounded.sm}"
    padding: 8px
---

## Overview

The Stitch direction is a deep-sea game wiki, but the interface must remain an editorial reference product rather than a fictional in-game dashboard. Atmosphere supports hierarchy; it must never reduce readability or imply that unverified gameplay data is confirmed.

## Colors

- **Primary cyan (#22D3EE):** links, focus states, verified signals, and high-emphasis actions.
- **Neutral depth (#0B1926):** page background and large quiet areas.
- **Surface blue (#0F2738):** cards, tables, and source panels.
- **Amber (#F59E0B):** caution and source-review states only.
- Body text uses the light text token and never cyan for long paragraphs.

## Typography

Manrope is the site-wide family for bilingual readability. Display headings may use the existing Space Grotesk fallback through the app token, while compact source metadata and labels use a monospace face. Avoid all-caps for long Chinese strings.

## Layout

Use a centered max-width container close to 1280px with a responsive 12-column desktop grid. On mobile, collapse to one column, keep horizontal overflow out of the viewport, and preserve a minimum 44px target size for interactive controls.

## Elevation & Depth

Prefer one-pixel cyan-tinted borders and very soft glows. Avoid heavy shadows, glassmorphism that harms contrast, and decorative gradients behind body text.

## Shapes

Cards and controls use restrained 4–12px radii. The visual language is instrument-like and precise; do not use pill shapes for ordinary content cards. Pills are reserved for status badges and small metadata.

## Components

Every verified page should expose a clear page hero, status badge where relevant, readable content sections, and a source block with checked date and scope. Under-review pages use the same shell but must visibly state that detailed claims are unavailable and remain `noindex, follow`.

## Do's and Don'ts

- **Do** use the same component shell for English and Chinese routes.
- **Do** show source, last checked date, and applicable scope on verified factual pages.
- **Do** keep placeholders and review notices visually complete without inventing statistics or mechanics.
- **Don't** copy Stitch prompt example counts into production content.
- **Don't** remove canonical, locale, noindex, or sitemap safeguards during visual work.
- **Don't** use decorative imagery as evidence for creatures, resources, locations, recipes, or mechanics.
