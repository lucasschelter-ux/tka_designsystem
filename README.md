# thekey.ACADEMY — Next.js Homepage

Homepage-Nachbau auf Basis des thekey.ACADEMY Design Systems.

## Voraussetzungen

- Node.js 18+
- npm oder pnpm

## Setup

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

## Struktur

```
src/
  app/
    layout.tsx        # Root-Layout (Metadata, globale CSS)
    page.tsx          # Startseite — alle Sektionen
  components/
    TopNav.tsx        # Sticky Navigation
    Hero.tsx          # Hero-Sektion (Split-Layout)
    BenefitStats.tsx  # 4 Indigo-Benefit-Karten
    PromoCountdown.tsx# Promo-Band mit Live-Countdown
    Categories.tsx    # 6 Lehrgangs-Kategorie-Chips
    Footer.tsx        # Indigo Footer
    Button.tsx        # Basis-Button (primary/action/ghost/outline)
    Icon.tsx          # Lucide-Style Inline Icons
  styles/
    tokens.css        # Alle CSS Design Tokens
```

## Design Tokens

Alle Farben, Typografie, Abstände und Schatten sind als CSS-Variablen in `src/styles/tokens.css` definiert und folgen dem `DESIGN.md`.

Wichtigste Variablen:
- `--tk-brand-900` → `#291371` (Deep Indigo)
- `--tk-brand-700` → `#5327e6` (Electric Violet)
- `--tk-green-100` → `#1bc699` (Signal Grün — CTA in Promos)

## Hinweise

- **Logos**: Aktuell als Text-Wordmark gerendert. Echte SVG-Logos in `public/` ablegen und in `TopNav.tsx` + `Footer.tsx` einbinden.
- **Fotos**: Hero zeigt eine CSS-Illustration. Echte Dozenten-Fotos in `public/images/` ablegen.
- **3D-Icons**: Benefit-Karten nutzen Lucide Line-Icons als Platzhalter. Echte 3D-Renders ergänzen.
