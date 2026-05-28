# thekey.ACADEMY — Design System

> Offizielle Design-Referenz für die **thekey.ACADEMY** — eine deutsche Online-Weiterbildungsplattform mit IHK-Zertifizierung.  
> Visuelles Credo: **vertrauenswürdig · modern · optimistisch**

---

## Produktkontext

**thekey.ACADEMY** ist die Digital-Learning-Marke der theKey Group. Angeboten werden vollständig online, selbstgesteuerte **Weiterbildungen** in Kombination mit einem offiziellen **IHK-Zertifikat**.

**6 Themenbereiche:** Führung & Transformation · KI & digitale Kompetenzen · Selbstführung & Resilienz · Menschen & Wirkung · Marketing & Vertrieb · Prozesse & Qualität

**Key Messages:** 21 Lehrgänge / 100 % online / Ratenzahlung / Schneller Abschluss

---

## Markenidentität

### Wordmark-Logik

```
thekey.  ACADEMY
```

- `thekey.` — Kleinbuchstaben, **mit Punkt**, in Dunkelindigo `#291371`
- `ACADEMY` — Kapitälchen, **letter-spacing: 0.14em**, in Dunkelindigo `#291371`
- Der **Punkt** zwischen beiden Teilen ist immer **Signal-Grün** `#1bc699` — der einzige Grünton im Wordmark
- Diese Rhythmus-Regel ist unveränderlich — nie die Abstände enger ziehen

### Logoversionen

| Variante | Verwendung |
|---|---|
| `logo-academy.svg` (Farbe) | Heller Hintergrund, Standard |
| `logo-academy-white.svg` (Weiß) | Dunkler/Brand-Hintergrund |
| `logo-top-academy.svg` (Farbe) | Variante mit vertikaler Anordnung |
| `logo-top-academy-white.svg` (Weiß) | Wie oben, dunkel |
| `favicon.svg` | Gradient-Key-Square — App-Icon / Loader |

---

## Farben

### Brand-Palette

| Token | Hex | Name | Verwendung |
|---|---|---|---|
| `--tk-brand-900` | `#291371` | Deep Indigo | Primäre Flächen, Wordmark, Hauptfarbe |
| `--tk-brand-700` | `#5327e6` | Electric Violet | Akzent, Logo-Gradientenstart, Links |
| `--tk-brand-500` | `#7270cf` | Muted Lavender | Promo-Bänder (30%-Rabatt-Streifen) |
| `--tk-brand-100` | `#e6e5ef` | Whisper Lavender | Oberflächentönung |

### Signal-Grün (Secondary Brand)

| Token | Hex | Verwendung |
|---|---|---|
| `--tk-green-120` | `#079e83` | Dunkleres Grün, Hover |
| `--tk-green-100` | `#1bc699` | **Signal-Grün** — High-Intent-CTA in Promo-Kontexten, Logotype-Punkt |
| `--tk-green-80` | `#4ed4ad` | Aufgehellt |
| `--tk-green-40` | `#a9eccd` | Stark aufgehellt |
| `--tk-green-20` | `#d4f6e6` | Hauch |

> Signal-Grün ist **ausschließlich** dem High-Intent-CTA innerhalb von Promos vorbehalten (z. B. „Zur Aktion"). Der primäre Nav-CTA (Login) bleibt Brand-Indigo.

### Neutrals (System Shades)

| Token | Hex | Bedeutung |
|---|---|---|
| `--tk-shade-0` | `#ffffff` | Weiß |
| `--tk-shade-50` | `#f5f6f7` | Seitenoberfläche |
| `--tk-shade-100` | `#e9ebee` | Borders ruhend |
| `--tk-shade-200` | `#d7dade` | Borders betont |
| `--tk-shade-300` | `#a6aeb9` | Border stark |
| `--tk-shade-400` | `#758090` | Tertiärer Text |
| `--tk-shade-500` | `#3b495d` | Sekundärer Text |
| `--tk-shade-700` | `#0e1723` | Primärer Text |
| `--tk-shade-1000` | `#000000` | Schwarz |

### Systemakzente (funktional)

| Token | Wert | Verwendung |
|---|---|---|
| `--tk-success` | `#079e83` | Erfolgsstatus |
| `--tk-info` | `#184276` | Info-Status |
| `--tk-warning` | `#e0a827` | Warnung |
| `--tk-error` | `#ea561c` | Fehler |
| `--tk-cyan` | `#0cc0df` | Akzent |
| `--tk-violet` | `#8c52ff` | Akzent |
| `--tk-pink` | `#dc99ef` | Akzent |
| `--tk-blue` | `#2794fe` | Akzent |

### Semantische Tokens

```css
--fg-1        /* Primärer Text     → --tk-shade-700 */
--fg-2        /* Sekundärer Text   → --tk-shade-500 */
--fg-3        /* Tertiär / Meta    → --tk-shade-400 */
--fg-inverse  /* Invertierter Text → --tk-shade-0   */
--fg-brand    /* Markenfarbe Text  → --tk-brand-900 */
--fg-accent   /* Akzentfarbe Text  → --tk-brand-700 */

--bg-page     /* Seitengrund       → --tk-shade-0   */
--bg-subtle   /* Subtiler BG       → --tk-shade-50  */
--bg-brand    /* Brand-Fläche      → --tk-brand-900 */
--bg-promo    /* Promo-Band        → --tk-brand-500 */

--border-1    /* Border ruhend     → --tk-shade-100 */
--border-2    /* Border betont     → --tk-shade-200 */
--border-strong /* Border stark    → --tk-shade-300 */
```

### Gradienten

```css
/* Brand-Gradient — Violet → Signal-Grün (aus dem Logotype-SVG) */
--tk-gradient-brand: linear-gradient(135deg,
    #5327e6 0%, #4c46da 27%, #436bcb 48%,
    #379fb7 72%, #28e09d 98%, #27e59b 100%);

/* Promo-Gradient — Lila-Band */
--tk-gradient-promo: linear-gradient(135deg, #7270cf 0%, #8c7df0 100%);
```

> Den Brand-Gradient **sparsam einsetzen** — nur auf Marketing-Flächen und im Favicon-Mark.

---

## Typografie

### Schriftfamilien

| Rolle | Familie | Verwendung |
|---|---|---|
| Display & Body | **Roboto** | Alle Fließtexte, Headlines |
| Kondensiert | **Roboto Condensed** | Dichte Headlines, Stat-Karten |
| Halbkondensiert | **Roboto SemiCondensed** | Sub-Headlines |
| Numerics / Code | **Roboto Mono** | Zahlen, Code |

```css
--font-display: "Roboto", system-ui, -apple-system, "Segoe UI", sans-serif;
--font-body:    "Roboto", system-ui, -apple-system, "Segoe UI", sans-serif;
--font-mono:    "Roboto Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
```

### Verfügbare Gewichte (lokal)

**Roboto:** 100 (Thin), 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold) ~~800 (ExtraBold), 900 (Black)~~ — je regulär + kursiv

> **Gewichts-Regel:** Der fetteste verwendete Schnitt ist **700 (Bold)**. Weight 800 und 900 werden nicht eingesetzt.

**Roboto Condensed:** 100–700 vollständig, mit Kursivvarianten

**Roboto SemiCondensed:** 200, 300, 500, 600, 800 — mit Kursivvarianten

### Schriftgrößen-Skala

| Token | Größe | Figma-Ebene | Anmerkung |
|---|---|---|---|
| `--fs-display` | `72px` | — | Hero-Oversized |
| `--fs-h1` | `48px` | Titel | |
| `--fs-h2` | `36px` | Untertitel | |
| `--fs-h3` | `28px` | Überschrift | |
| `--fs-h4` | `22px` | Zwischenüberschrift | |
| `--fs-h5` | `18px` | Kopfzeile für Abschnitt | |
| `--fs-body` | `16px` | Text | |
| `--fs-small` | `14px` | Untertitel small | |
| `--fs-micro` | `12px` | Eyebrow / Legal | |

### Zeilenhöhen

```css
--lh-tight:   1.1;   /* Hero-Headlines */
--lh-snug:    1.25;  /* Sub-Headlines */
--lh-normal:  1.45;  /* Utility-Text */
--lh-relaxed: 1.6;   /* Fließtext */
```

### Letter-Spacing

```css
--tracking-tight:   -0.02em;  /* Große Headlines */
--tracking-snug:    -0.01em;  /* Sub-Headlines */
--tracking-wide:     0.04em;  /* Eyebrow */
--tracking-widest:   0.14em;  /* „ACADEMY" Wordmark — unveränderlich */
```

### Text-Klassen (CSS-Utilities)

| Klasse | Bedeutung |
|---|---|
| `h1` / `.tk-h1` | 48px, Weight 700, Tight, Brand-Farbe |
| `h2` / `.tk-h2` | 36px, Weight 700, Snug, Brand-Farbe |
| `h3` / `.tk-h3` | 28px, Weight 700, Snug, fg-1 |
| `h4` / `.tk-h4` | 22px, Weight 700, Snug, fg-1 |
| `h5` / `.tk-h5` | 18px, Weight 700, Snug, fg-1 |
| `p` / `.tk-body` | 16px, fg-2 |
| `.tk-small` | 14px, fg-2 |
| `.tk-micro` | 12px, fg-3 |
| `.tk-eyebrow` | 12px, Weight 700, UPPERCASE, wide tracking, fg-accent |
| `blockquote` / `.tk-quote` | 22px italic, linker Border 3px violet |
| `code` / `.tk-code` | Roboto Mono, bg-subtle, radius-xs |

---

## Abstände

8-pt-System mit 4-pt Halbschritt.

| Token | Wert | Kontext |
|---|---|---|
| `--space-1` | `4px` | Micro-Gap |
| `--space-2` | `8px` | Chip-intern |
| `--space-3` | `12px` | Chip-Padding |
| `--space-4` | `16px` | Standard |
| `--space-5` | `20px` | Card-Padding klein |
| `--space-6` | `24px` | Card-Padding |
| `--space-8` | `32px` | Card-Padding groß |
| `--space-10` | `40px` | Section-Margin |
| `--space-12` | `48px` | — |
| `--space-16` | `64px` | Gutters |
| `--space-20` | `80px` | Vertikaler Rhythmus Hero |
| `--space-24` | `96px` | Vertikaler Rhythmus groß |

**Faustregel:** Hero-Sections auf 80–96px vertikalen Rhythmus · Cards auf 24–32px Padding · Chips auf 12–16px

---

## Eckenradien

```css
--radius-xs:   6px;    /* Code-Snippets, Tags */
--radius-sm:   10px;
--radius-md:   14px;   /* Category Chips, Inputs */
--radius-lg:   20px;   /* Stat-Karten, große Karten */
--radius-xl:   28px;
--radius-pill: 999px;  /* Buttons, Badges, Chips (Pills) */
```

> Das Produkt bevorzugt **Vollpillen** für CTAs — niemals eckige Buttons.

---

## Schatten

Nur äußere Schatten — keine Inset-Schatten, kein Purple-Tint im Ruhezustand.

```css
--shadow-xs:          0 1px 2px rgba(14, 23, 35, 0.04);
--shadow-sm:          0 2px 6px rgba(14, 23, 35, 0.06);   /* Ruhende Karten */
--shadow-md:          0 8px 24px rgba(14, 23, 35, 0.08);  /* Hover-Karten */
--shadow-lg:          0 18px 48px rgba(41, 19, 113, 0.12);
--shadow-glow-green:  0 0 0 6px rgba(27, 198, 153, 0.18); /* Focus-Ringe */
--shadow-glow-brand:  0 0 0 6px rgba(83, 39, 230, 0.16);  /* Brand-Glow */
```

---

## Komponenten

### Buttons / CTAs

- Form: immer `--radius-pill` (999px)
- **Primär:** `--bg-brand` (#291371), weißer Text, leichtes Abdunkeln (~8%) beim Hover
- **Promo-CTA:** Hintergrund `--tk-shade-0` (#ffffff), Text `--tk-brand-900` (#291371), `border-radius: 999px` — nur bei High-Intent in Promo-Kontext. Weiße Füllung hebt den Button klar vom lila Promo-Hintergrund ab. Hover: `--tk-brand-100` (#e6e5ef). **Wichtig:** Farben als Inline-Style setzen, nicht via CSS-Klasse — externe Stylesheets können `background` auf dem Promo-Strip überschreiben und den Button unsichtbar machen.
- **Hover:** Cursor pointer + ~8% dunkler
- **Press:** gleiche Farbe, 96% Skalierung, kein Schatten

### Navigation (Top-Nav)

- Sticky, opakes Weiß, 80px Höhe auf Desktop
- Layout: Logo links · Links zentriert · CTA-Cluster (Login + Warenkorb) rechts
- Max-Content-Breite: ~1200–1280px, Gutters 64–96px ab 1024px Viewport
- Keine Blur-Effekte auf dem Header

### Stat / Benefit-Karten (4er-Reihe)

- Fläche: `--bg-brand` (#291371), weißer Text
- Radius: `--radius-lg` (20px)
- Padding: `--space-8` (32px)
- Kleines 3D-gerendertes Icon zentriert über der Headline
- Kein Border, kein Schatten

### Category Chips (Lehrgangs-Kategorien)

- Fläche: Weiß, 1px `--border-2`, Radius `--radius-md` (14px), Padding 20px
- Single Line, fetter dunkler Text
- Hover: +1px lift, sanfter Schatten erscheint
- Press: 96% Skalierung, kein Schatten

### Kurs-Karten

- Fläche: Weiß, Radius `--radius-lg` (20px)
- Ruhend: `--shadow-sm`
- Hover: `--shadow-md`

### Promo-Band

- Hintergrund: `--tk-gradient-promo` (#7270cf → #8c7df0)
- Enthält Countdown-Timer (große Ziffern in weichen lila Chips)
- Kleines leuchtendes Badge („30% RABATT" mit softpink Halo/Blur)
- High-Intent-CTA in Signal-Grün

---

## Layout-System

### Grundregeln

- **Flächen sind flach.** Keine Texturen, keine Muster, keine handgezeichneten Illustrationen
- **Echter Fotos-Vorrang** in Hero-Bereichen — Dozenten im Studio, warm beleuchtet, Business-Casual
- Hero-Split: **1:1** zwischen Copy (links) und Gerät-Bildmontage (rechts)
- Max-Breite Content: ~1200–1280px
- Kein Parallax, kein Scroll-Jacking

### Hintergründe

- Weiß oder `--bg-subtle` (#f5f6f7) als Seitengrund
- Promo-Bänder: flache Lila-Gradienten
- Keine blau-lila SaaS-Gradienten außerhalb des expliziten Brand-Gradienten

---

## Animationen

- **Subtil und schnell, kein Bounce.** 120–200ms ease-out-Transitionen auf Hover
- Opacity-Dip auf 78% bei Link-Hover
- Countdown-Timer: einzige persistente Animation auf der Homepage
- Kein Parallax, kein Scroll-Jacking

---

## Ikonografie

Zwei visuelle Vokabulare:

**3D-Objekt-Renders** (Medaille, Laptop, Warenkorb, Stoppuhr) — auf den Indigo-Benefit-Karten. Vollfarbe, weich beschattet, leicht verspielt. Photorealistische PNGs, kein SVG.

**Linien-Icons** in Chrome (Warenkorb, Account, Chevrons) — Stroke ca. 1,5–2px, abgerundete Enden. Empfohlene Open-Source-Entsprechung: **Lucide** (`lucide.dev`).

**Verboten:** Emoji im Produkttext oder in Chrome · Unicode-Glyphen als Icons (kein ★, kein →)

---

## Stimme & Ton

### Kernregeln

- **Du-Form, nie Sie.** „Finde deine Online-Weiterbildung", „Wähle die Kategorie, die zu dir passt"
- Kurze, selbstbewusste Zeilen — kein Marketing-Hype, keine Ausrufezeichen (Ausnahme: zeitlich begrenzte Promos)
- Direkte Nutzenversprechen in Paaren: Substantiv + Qualifier — *„21 Lehrgänge / mit offiziellem IHK-Zertifikat"*
- Komposita bleiben intakt und werden nach deutscher Grammatik großgeschrieben

### Casing

- **Headlines:** Satz-Schreibweise auf Deutsch (Substantive natürlich großgeschrieben)
- **Wordmark:** `thekey.` (Kleinbuchstaben, Punkt) `ACADEMY` (Kapitälchen, weiter Abstand) — dieser Rhythmus ist sakrosankt
- **Nav-Labels:** Einzelne Substantive, titelgeschrieben — *Lehrgänge, Über uns, IHK-Zertifikat, Unternehmen, Blog, Kontakt*

### Sprachschnipsel

| Kontext | Formulierung |
|---|---|
| Versprechen | *„flexibel, digital, in deinem Tempo"* |
| Vertrauen | *„lebenslanger Zugriff"*, *„mit offiziellem IHK-Zertifikat"* |
| Handlungsaufforderung | *„Zur Aktion"*, *„Jetzt starten"*, *„Mehr erfahren"* |

### Verboten

- Englisch im deutschen Fließtext (kein „Learn more", „Get started") → stattdessen *„Mehr erfahren"*, *„Jetzt starten"*
- Buzzword-Stacking: „KI-gestütztes Next-Gen-..." — Substanz vor Adjektiven
- Lässiger Humor oder Memes — IHK-Zertifizierung ist ein ernsthafter Credential

---

## CSS-Tokendatei

Alle Tokens befinden sich in `colors_and_type.css`. Einbinden via:

```html
<link rel="stylesheet" href="colors_and_type.css">
```

oder für Webfont-Import:

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;500&display=swap");
```

---

## Assets-Übersicht

```
assets/
  logo-academy.svg             Logotype Farbe (Standard)
  logo-academy-white.svg       Logotype Weiß
  logo-top-academy.svg         Logotype vertikal Farbe
  logo-top-academy-white.svg   Logotype vertikal Weiß
  favicon.svg                  Gradient-Key-Square

fonts/
  Roboto-*.ttf                 Vollständiger Roboto-Stack
  Roboto_Condensed-*.ttf       Roboto Condensed
  Roboto_SemiCondensed-*.ttf   Roboto SemiCondensed
```

---

## Offene Punkte / Caveats

1. **3D-Illustrationsicons** (Medaille, Laptop, Warenkorb, Stoppuhr) wurden nicht als Assets geliefert — aktuell Lucide-Line-Icons als Platzhalter. Bitte die originalen PNGs nachliefern.
2. **Echte Dozentenfotografie** fehlt im Kit — Hero verwendet eine Platzhalter-Laptop+Telefon-Montage. Bitte freigegebene Studio-Aufnahmen liefern.
3. **Logo-SVGs** wurden repariert (Klassen zu expliziten `fill`-Attributen konvertiert). Für saubere SVGs bitte neu aus Figma/Illustrator exportieren.
4. **B2B-Oberfläche** (`Unternehmen`) ist in diesem Kit nicht abgedeckt — nur die Consumer-Academy-Homepage diente als Referenz.
5. **Keine Figma-URL oder Codebase** wurde übergeben — alles wurde aus Screenshots + Logotype-SVGs rekonstruiert.


---

## Mobile App — Design-Erweiterungen

> Erarbeitet im Rahmen eines UX-Redesigns der iOS/Android-App (Mai 2026). Referenz-Screens: Home-Bereich und Discovery-Bereich.

---

### App-Shell & Navigation

#### Tab-Bar (Bottom Navigation)

- **5 Slots:** Home · Entdecken · Notizen · Nachrichten · Profil
- **Active-Indikator:** kurzer Balken (28px × 3px, `--tk-brand-700`, `border-radius: 0 0 3px 3px`) oben an der aktiven Tab-Item — kein Farbfill der gesamten Fläche
- **Aktive Icons & Labels:** `--tk-brand-900`
- **Inaktive Icons & Labels:** `--tk-shade-200` — bewusst zurückhaltend, lässt aktiven Tab klar hervorstechen
- **Profilslot:** Gradient-Avatar-Ring statt Icon (Initialen, `linear-gradient(135deg, #5327e6, #1bc699)`), mit dünnem Brand-Border wenn aktiv
- **Notification-Dot:** 7px Kreis, `--tk-error` (#ea561c), weißer 1.5px Rand — positioniert absolut oben rechts am Icon
- **Hintergrund:** `--tk-shade-0`, Border-Top `0.5px solid --tk-shade-100`
- **Padding:** `10px` oben, `22px` unten (Safe-Area-Puffer für Home-Indicator)
- **Kein Emoji-Einsatz** in der Tab-Bar — ausschließlich Lucide/Tabler Outline-Icons

#### Top-Nav-Bar (Mobile)

- **Layout:** Greeting-Text links · Wordmark zentriert · Support-Orb rechts
- Support-Orb: 34px Kreis, Brand-Gradient, weißes Message-Icon
- Höhe: ~54px inkl. Statusbar-Puffer
- Hintergrund: `--tk-shade-0`, Border-Bottom `0.5px solid --tk-shade-100`

---

### Home-Screen — Komponentenaufbau

#### 1. Hero-Greeting-Card

- Hintergrund: `--tk-gradient-brand` (135deg, `#3b22c0 → #5327e6 → #2a9eb8 → #1bc699`)
- Radius: `--radius-lg` (20px)
- Padding: 18px
- Inhalt: Avatar-Kreis (40px, semitransparent weiß) · Name · XP-Zahl rechts
- Level-Badge: Pill mit 15% weißem Alpha-Hintergrund, Roboto 10px Bold
- Fortschrittsbalken: 4px hoch, weiß-transparenter Track, `--tk-green-100` Fill
- Subtile Deko-Ellipse: absolut positioniert, oben rechts, `rgba(255,255,255,0.06)`

#### 2. Streak-Banner

- Hintergrund: `linear-gradient(135deg, #4630d0, #2a9eb8, #1bc699)`
- Radius: `--radius-lg`
- Layout: Text-Block links (Titel 12px Bold, Subtitel 10px) · Tages-Dots rechts
- **Tages-Dots:** 7 Kreise à 28px — Heute: weißer Kreis, Brand-Violett-Text · Folgetage: 20% weißes Alpha, weißer Text, 1px Border `rgba(255,255,255,0.3)`
- Kein separates Streak-Badge — der aktuelle Tag ist der visuelle Anker

#### 3. Section-Header

- `font-size: 13px` (bewusst kleiner als Seitenebene-Headlines)
- `font-weight: 700`
- `padding-top: 8px` — Luft nach oben für klare visuelle Trennung
- Sekundärer Link (`sec-link`): 11px, `--tk-green-100`, 500 Weight
- **Kein** großes 15–16px-Heading — Section-Labels sind Orientierungshilfen, keine Seitenüberschriften

#### 4. Kurs-Karten (horizontal)

- Hintergrund: `--tk-shade-0`, Radius: `--radius-lg`, Border: `0.5px solid --tk-shade-100`
- Layout: Thumbnail 80px × 78px links · Info-Block rechts
- **Thumbnail:** kategoriespezifischer Soft-Gradient-Hintergrund + Emoji/Bild-Placeholder; IHK-Badge absolut unten links (Brand-Violett, 9px Bold)
- **Chip:** Pill, 9px, 600 Weight — Farben nach Kategorie (siehe Kategorie-Farbzuordnung)
- **Kursname:** 12px Bold, `--tk-shade-700`, line-height 1.3
- **Footer:** `border-top: 0.5px solid --tk-shade-100`, Padding 7px 10px — Status-Label links · Fortschrittsring + Prozent rechts
- **Fortschrittsring:** SVG, 18px, `--tk-shade-100` Track, `--tk-green-100` Fill, stroke-linecap round

#### 5. News-Cards

- Horizontaler Scroll-Container, `gap: 12px`, kein Scrollbar
- Card: 200px breit, Radius `--radius-lg`, `--shadow-sm`
- Bild-Block: 88–100px hoch, kategoriespezifischer Gradient-Placeholder
- Body: Datum 10px `--tk-shade-400` · Titel 13px Bold · Excerpt 11px `--tk-shade-500`

---

### Discovery-Screen — Komponentenaufbau

#### 1. Suchleiste

- Pill-Form (`--radius-pill`), Padding `10px 16px`
- Hintergrund: `--tk-shade-0`, Border: `0.5px solid --tk-shade-200`
- Such-Icon links (Tabler `ti-search`, 15px, `--tk-shade-400`) · Placeholder-Text 13px
- Schatten: `--shadow-sm`

#### 2. Filter-Chips (horizontal scrollbar)

- Pill-Form, 11px 600 Weight
- **Aktiv:** `--tk-brand-900` Hintergrund, weißer Text
- **Inaktiv:** `--tk-shade-0` Hintergrund, `--tk-shade-500` Text, `0.5px solid --tk-shade-200` Border
- Kein Scrollbar sichtbar (`scrollbar-width: none`)

#### 3. Featured-Card

- Hintergrund: `--tk-brand-900`
- Radius: `--radius-lg`, Padding: 16–18px
- Layout: Icon/Emoji 34–38px links · Content-Block rechts
- NEU-Badge: `--tk-green-100` Hintergrund, `--tk-brand-900` Text, 9px Bold Pill
- Titel: 13–15px Bold, weiß · Meta: 10–11px, 65% Opacity

#### 4. Kategorie-Raster

- 2-spaltig, `gap: 8px`
- Card: `--tk-shade-0`, Radius `--radius-md` (14px), `0.5px solid --tk-shade-100`, `--shadow-sm`
- Inhalt: Emoji-Icon 22px · Name 11px Bold · Anzahl 10px `--tk-shade-400`
- Farbbalken unten: 3px, Radius 2px — Farbe je Kategorie (s. u.)

---

### Kategorie-Farbzuordnung (Chips & Balken)

| Kategorie | Chip-Hintergrund | Chip-Text | Balken-Gradient |
|---|---|---|---|
| Führung & Transformation | `#e0edff` | `#0C447C` | `#5327e6 → #7270cf` |
| KI & digitale Kompetenzen | `#d4f6e6` | `#079e83` | `#1bc699 → #4ed4ad` |
| Selbstführung & Resilienz | `#fce8f0` | `#993556` | `#dc99ef → #e8bdf5` |
| Marketing & Vertrieb | `#fdf3d9` | `#633806` | `#e0a827 → #f0c960` |
| Menschen & Wirkung | `#e0edff` | `#0C447C` | `#2794fe → #6bb8ff` |
| Prozesse & Qualität | `#fce8f0` | `#993556` | `#ea561c → #f08060` |

---

### Mobile Spacing-Ergänzungen

| Kontext | Wert |
|---|---|
| Scroll-Area Padding (horizontal) | `14px` |
| Scroll-Area Padding (oben) | `14px` |
| Gap zwischen Scroll-Elementen | `10px` |
| Section-Header Padding-Top | `8px` |
| Tab-Bar Padding-Top | `10px` |
| Tab-Bar Padding-Bottom (Safe Area) | `22px` |
| Kurs-Karten-Thumbnail-Breite | `80px` |
| Kurs-Karten-Thumbnail-Höhe | `78px` |

---

### Desktop App — Design-Erweiterungen

> Referenz: bestehende Webapp + Redesign-Session Mai 2026.

#### Sidebar (Desktop)

- Breite: **80px** — Icon-only, kein Label-Text außer bei aktivem Tab
- Hintergrund: `--tk-brand-900` (#291371)
- Logo-Block: 40px Gradient-Key-Square (`--tk-gradient-brand`), `border-radius: 10px`
- Nav-Items: 56px × 52px, `border-radius: --radius-md`
  - Aktiv: `rgba(255,255,255,0.12)` Hintergrund, weißes Icon + Label
  - Inaktiv: `rgba(255,255,255,0.45)` Icon, `rgba(255,255,255,0.4)` Label
- Labels: 9px, 500 Weight — sichtbar unter dem Icon
- Avatar unten: 36px Kreis, `--tk-shade-500` Hintergrund, `border: 2px solid rgba(255,255,255,0.15)`

#### Top-Bar (Desktop)

- Höhe: 52px
- **Wordmark zentriert** (nicht links) — konsistent mit Mobile
- Rechts: XP-Coin-Pille (Gold `#fff8e6`/`#e0a827`, 12px Bold) · Support-Orb (Gradient) · Warenkorb-Icon
- Hintergrund: `--tk-shade-0`, Border-Bottom `0.5px solid --tk-shade-100`

#### Kurs-Karten (Desktop, 3-spaltig)

- Radius: `--radius-lg`, Border: `0.5px solid --tk-shade-100`, `--shadow-sm`
- Thumbnail-Block: 110px hoch, Kategorie-Gradient + zentriertes Emoji/Bild
- IHK-Badge: absolut unten links, `--tk-brand-700`, 9px Bold, `border-radius: 4px`
- Chip + Titel im Body-Bereich
- Footer: identisch zur Mobile-Variante

#### Section-Header (Desktop)

- `font-size: 17px`, `font-weight: 700`
- Margin-Bottom: `12px`
- Sekundärer Link: 13px, `--tk-green-120`, unterstrichen (`text-underline-offset: 2px`)
