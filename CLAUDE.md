# Claude Code Instructions — tka_designsystem

## Kontext
Dies ist das offizielle Design System der **thekey.ACADEMY** — einer deutschen Online-Weiterbildungsplattform mit IHK-Zertifizierung.

## Design System
Lies immer zuerst `DESIGN.md` bevor du Komponenten baust oder editierst.
Alle Farben, Typografie und Abstände kommen ausschließlich aus den CSS-Tokens in `src/styles/tokens.css`.

## Komponentenregeln
- Buttons immer `border-radius: 999px` (Pill-Form) — nie eckig
- Primärfarbe: `--tk-brand-900` (#291371 Deep Indigo)
- Signal-Grün `--tk-green-100` (#1bc699) nur für Promo-CTAs (z.B. „Zur Aktion")
- Schrift: Roboto — nie eine andere Font-Family verwenden
- Schatten: nur `--shadow-sm` im Ruhezustand, `--shadow-md` beim Hover
- Ecken: `--radius-lg` (20px) für Cards, `--radius-pill` für Buttons/Chips

## Sprache & Ton
- Immer **Du-Form**, nie Sie
- Deutsch im Produkttext — kein „Learn more", „Get started" etc.
- Keine Emojis im Produkttext oder in UI-Elementen
- Kurze, selbstbewusste Zeilen — kein Marketing-Hype

## Projektstruktur
```
src/
  app/          # Next.js App Router (layout.tsx, page.tsx)
  components/   # UI-Komponenten (TopNav, Hero, Button, etc.)
  styles/       # tokens.css — alle CSS Design Tokens
DESIGN.md       # Vollständiges Design System als Markdown
colors_and_type.css  # CSS-Token-Datei
```

## Storyblok
Dieses Projekt wird mit Storyblok als CMS verbunden.
Komponenten sollen als editierbare „Bloks" gebaut werden.
Space: TKA Migration Lab (EU)

## Wichtige Tokens (Kurzreferenz)
```css
--tk-brand-900: #291371   /* Deep Indigo — Hauptfarbe */
--tk-brand-700: #5327e6   /* Electric Violet — Akzent */
--tk-green-100: #1bc699   /* Signal-Grün — Promo-CTA */
--tk-shade-0:   #ffffff   /* Weiß */
--tk-shade-50:  #f5f6f7   /* Seitenhintergrund */
--tk-shade-700: #0e1723   /* Primärer Text */
--radius-pill:  999px     /* Buttons */
--radius-lg:    20px      /* Cards */
--shadow-sm:    0 2px 6px rgba(14,23,35,0.06)
--shadow-md:    0 8px 24px rgba(14,23,35,0.08)
```
