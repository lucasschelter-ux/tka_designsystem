# thekey.ACADEMY — Design System

A working design system for **thekey.ACADEMY** — a German online continuing-education platform (Weiterbildung) that pairs flexible video courses with official **IHK certifications**.

> *"Finde deine Online-Weiterbildung und hol dir dein IHK-Zertifikat – flexibel, digital, in deinem Tempo."* — homepage hero

---

## Sources provided

The system was built from these inputs (the reader may or may not have access to them; archived locally either way):

| Source | Stored as |
|---|---|
| Logotype — `academy` (color) | `assets/logo-academy.svg` |
| Logotype — `academy` (white) | `assets/logo-academy-white.svg` |
| Logotype — `top academy` (color) | `assets/logo-top-academy.svg` |
| Logotype — `top academy` (white) | `assets/logo-top-academy-white.svg` |
| Favicon | `assets/favicon.svg` |
| Homepage reference screenshot | `assets/reference-homepage.png` |
| Figma colour styles (Farben) | `assets/reference-colors-figma.png` |
| Figma type styles (Schriftarten) | `assets/reference-typography-figma.png` |

No codebase, no Figma file URL, and no font files were supplied — only screenshots and the logos above. **The webfont is therefore a substitution** (see "Visual foundations → Type"); flag this with the user when iterating.

---

## Product context

**thekey.ACADEMY** is the digital-learning brand of theKey Group. It sells fully online, self-paced **Weiterbildungen** (continuing-education courses) bundled with an **IHK-Zertifikat** (Chamber of Commerce certificate) — a strongly recognised German credential.

What the homepage shows:
- 6 thematic streams: *Führung & Transformation · KI & digitale Kompetenzen · Selbstführung & Resilienz · Menschen & Wirkung · Marketing & Vertrieb · Prozesse & Qualität*
- A "21 Lehrgänge / 100 % online / Ratenzahlung / Schneller Abschluss" benefit row
- A promo band ("Weiterbildungs-Mai: 30 % Rabatt") with a live countdown
- Stage imagery: in-studio video lessons shot on laptop + phone (real instructors, dressed business-casual, warm soft lighting)
- A B2B angle ("Unternehmen") sits alongside the consumer route

The visual personality is **trustworthy, modern, optimistic** — deep indigo authority, green action, real instructor photography.

---

## Index

| File | Purpose |
|---|---|
| `README.md` | This document — context, content & visual foundations, iconography, manifest |
| `SKILL.md` | Agent Skill manifest — load this skill to start a thekey-branded design |
| `colors_and_type.css` | All CSS tokens — colors, type scale, spacing, radii, shadows, gradients |
| `assets/` | Logos, favicon, reference screenshots |
| `fonts/` | Roboto TTFs (brand-supplied) |
| `preview/` | Card files that populate the **Design System** tab (typography specimens, palettes, components, etc) |
| `ui_kits/academy/` | High-fidelity recreation of the academy homepage + key components |
| `package/` | **The publishable npm package** — `@thekey/academy-design`. TypeScript source, build config, Storyblok adapters, and a Next.js example. See `package/PUBLISHING.md` and `package/STORYBLOK.md`. |
| `.github/workflows/` | CI: `pages.yml` deploys the design-system preview to GitHub Pages on push; `release.yml` publishes the package and syncs Storyblok schemas on git tag `v*.*.*`. |

---

## Content fundamentals

The product is **German-language**, formal-but-warm, written in the **familiar second-person "du"** form. It treats the learner as a peer who is making a real career move.

**Voice**
- **Du-form, never Sie.** "Finde deine Online-Weiterbildung", "Wähle die Kategorie, die zu dir passt".
- Short, confident lines. No marketing hype, no exclamation marks (except in time-limited promo: "30 % Rabatt Nur noch heute!").
- Direct benefit promises stacked in pairs: noun + qualifier. *"21 Lehrgänge / mit offiziellem IHK-Zertifikat"*, *"100 % online / inkl. IHK-Leistungsüberprüfung"*.
- Compound German nouns are kept intact ("Lehrgangs-Kategorien", "Weiterbildungs-Mai") — capitalised per German grammar.

**Casing**
- Headings: sentence case in German (the noun is naturally capitalised: *"Unsere Lehrgänge"*, *"Lehrgangs-Kategorien"*).
- Wordmark: `thekey.` (lowercase, period) `ACADEMY` (all-caps, wide tracking) — this exact rhythm is sacred.
- Navigation labels: title-cased single nouns — *Lehrgänge, Über uns, IHK-Zertifikat, Unternehmen, Blog, Kontakt*.

**Tone snippets**
- Promise: *"flexibel, digital, in deinem Tempo"*
- Reassurance: *"lebenslanger Zugriff"*, *"mit offiziellem IHK-Zertifikat"*
- Action: *"Zur Aktion"*, *"Login"*

**Emoji**
- Not used in product copy. Promo iconography uses small **3D-rendered objects** (medal, laptop, shopping cart, stopwatch) rather than emoji.

**No-nos**
- No English mixed into German body copy (no "Learn more", no "Get started"). Use *"Mehr erfahren"*, *"Jetzt starten"*.
- No buzzword stacking ("AI-powered next-gen…"). Substance over adjectives.
- No casual humour or memes — IHK certification is a serious credential.

---

## Visual foundations

### Colors
The palette anchors on **deep indigo `#291371`** with an **electric violet `#5327e6`** accent, and uses **signal green `#1bc699`** as the action / promo color. Neutrals are cool greys running white → near-black. See `colors_and_type.css` for the full token set.

- **Brand surfaces** (`--tk-brand-900`) are full-bleed: stat cards, primary buttons.
- **Soft promo bands** use the lighter lavender `--tk-brand-500` (`#7270cf`) — see the "30% Rabatt" strip.
- **Signal green** is reserved for the *high-intent CTA inside a promo* ("Zur Aktion"). The primary nav CTA ("Login") stays brand-indigo.
- **The brand gradient** (violet → cyan → signal green) is lifted from the logo and appears in marketing surfaces and the favicon mark. Use sparingly.

### Type
- **Display & body:** **Roboto** — the brand's main typeface, loaded locally from `/fonts/` (TTF) with Google Fonts as a fallback for missing weights.
- **Available locally:** Roboto (100 Thin, 900 Black, plus italics 300/400/500/700/800), Roboto Condensed (full 100-700 + italics), Roboto SemiCondensed (selective weights). Use Condensed for dense headlines / stat cards; SemiCondensed for subheadlines; standard Roboto for body and UI.
- **Numerics / code:** Roboto Mono (via Google Fonts).
- **Wordmark tracking:** `ACADEMY` carries `letter-spacing: 0.14em` and ALL CAPS — never tighten it.
- **Hierarchy** mirrors the Figma "Schriftarten" list: Titel · Untertitel · Überschrift · Zwischenüberschrift · Kopfzeile · Text · Zitat · Untertitel small.
- **The period "." between *thekey* and *ACADEMY* is always Signal Green** (`#1bc699`) — the only spot of green in the logotype.

### Spacing
8-pt scale with a 4-pt half-step. Hero sections sit on **80-96 px** vertical rhythm; cards on **24-32 px** padding; chips on **12-16 px**.

### Backgrounds
- **Surfaces are flat.** No textures, no patterns, no hand-drawn illustrations.
- **Real photography** dominates hero areas — instructors mid-lesson, framed in a laptop+phone composite. Imagery is warm-temperature, soft natural lighting, business-casual wardrobe.
- **Promo bands** are flat purple gradients (`#7270cf → #8c7df0`) with a small glowing badge ("30% RABATT" with a soft pink halo).
- **No bluish-purple SaaS gradients** outside the explicit brand gradient.

### Animation
- **Subtle, fast, no bounce.** 120-200ms ease-out transitions on hover, opacity dips for press.
- Countdown timer is the only persistent motion on the homepage — large digits tick down inside soft purple chips.
- No parallax, no scroll-jacking.

### Hover & press states
- **Hover** on primary buttons: slight darken (≈ 8% k) + cursor pointer. On links: 78% opacity.
- **Hover** on category chips: lift 1px + soft shadow appears.
- **Press**: same color, 96% scale, no shadow.

### Borders
- 1px borders, color `--border-1` (`#e9ebee`) for resting state; `--border-strong` for emphasis.
- Card outlines on the "Lehrgangs-Kategorien" chips: 1px `--border-2`, no shadow.

### Shadow system
- **Outer only.** No inset shadows. Cool, low-blur, no purple tint at rest.
- Resting cards: `--shadow-sm` (`0 2px 6px rgba(14,23,35,0.06)`).
- Hovered cards: `--shadow-md`.
- Brand-coloured glow used only on focus rings or the promo badge.

### Protection gradients vs. capsules
The brand prefers **solid capsules** ("Login" pill, category chips) over protection gradients on imagery. CTAs are always pills.

### Layout rules
- **Sticky top nav**, white background, 80px tall on desktop. Logo left, links centred, CTA cluster (Login + cart icon) right.
- **Max content width** ≈ 1200-1280 px, generous 64-96px gutters above 1024 viewport.
- Hero is split 1:1 between copy (left) and device imagery (right).

### Transparency & blur
- Not used on chrome. The header is opaque white. Use blur only inside imagery (e.g. promo badge halo).

### Imagery vibe
- **Warm, natural, slightly desaturated.** Studio shots of instructors. No stock photography clichés (no aspirational "hands on keyboard"), no b&w treatment, no grain.

### Corner radii
- Pills: full `--radius-pill` (999px) for buttons, chips, badges.
- Cards: `--radius-lg` (20px) for the big stat cards; `--radius-md` (14px) for category chips.
- Inputs: `--radius-md`.

### What cards look like
- **Stat / benefit cards** (the 4-up row): solid `--bg-brand` (#291371), white text, 20px radius, 32px padding, small 3D-rendered icon centred above the headline. No border, no shadow.
- **Category chips**: white surface, 1px `--border-2`, 14px radius, 20px padding, single line of bold dark text.
- **Course cards** (in the kit): white surface, 20px radius, `--shadow-sm`, hover lifts to `--shadow-md`.

---

## Iconography

The product mixes two visual vocabularies:

1. **3D-rendered illustrative icons** (medal, laptop, shopping cart, stopwatch) sit on the indigo benefit cards. These are full-color, soft-shadowed, slightly playful — closer to "object renders" than flat icons. They are **photographic-style PNGs**, not SVG. *Source assets for these were NOT provided* — flagged below.
2. **Line icons** in chrome (cart, account, chevrons). Stroke weight ~1.5-2px, rounded caps. Closest open-source match: **Lucide** (`https://lucide.dev`). Loaded from CDN where needed.

**Emoji:** not used in product copy or chrome.
**Unicode glyphs:** not used as icons (no ★, no →) — line icons or 3D renders only.
**Logo as icon:** the favicon (`assets/favicon.svg`) is the gradient-keyed square — use it as the app icon / loader.

**Substitutions in this system**
- Line icons → **Lucide** (CDN) as a stand-in for whatever icon font is in the real codebase. *Flag with user.*
- 3D benefit-card icons → **flat Lucide equivalents** with brand styling (e.g. `Medal`, `Monitor`, `ShoppingCart`, `Timer`). These don't match the original look-and-feel. *Strongly flag — please provide the 3D PNG renders.*

---

## Caveats (please provide if available)

1. **Logo SVGs** — your original SVG exports had no `<style>` block, so all classed paths (`.st0`, `.st12`, `.st13`, etc.) fell back to black. I patched them by replacing `class="…"` with explicit `fill="…"` attributes: gradient mark, **`#291371` wordmark**, **`#1BC699` green dot**. One file (`logo-academy-white.svg`) had 16 classes and a different naming scheme — I substituted the **PNG version you uploaded** for that variant. If you can re-export from Figma/Illustrator **with the style block intact**, I'll swap back to clean SVGs.
2. **3D illustrative icons** (medal, laptop, cart, stopwatch) — currently flat Lucide line-icon stand-ins; the real brand uses photographic-style 3D object renders. Please provide.
3. **Real instructor photography** — hero uses a placeholder laptop+phone composite; please supply approved stage shots.
4. **No codebase or Figma URL** was supplied — everything below is reconstructed from screenshots + the logotype SVGs. A direct Figma link or repo would let us tighten components considerably.
5. **B2B (`Unternehmen`) surface** — not represented in this kit; only the consumer academy homepage was provided as a reference.
