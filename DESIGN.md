---
name: Bridge AIDE
description: A student-led AI ethics organization, drawn as an engineering drawing set in two print processes.
colors:
  paper: "#f1f5fa"
  paper-2: "#e3ebf4"
  ink: "#0f2f55"
  ink-2: "#3e5e83"
  steel: "#5b87aa"
  rule: "rgb(15 47 85 / 0.22)"
  red: "#c0392b"
  red-fill: "#c0392b"
  on-red: "#ffffff"
  blueprint-paper: "#10335a"
  blueprint-paper-2: "#0b2a4a"
  blueprint-ink: "#eef4fa"
  blueprint-ink-2: "#b4c9e0"
  blueprint-steel: "#7fa6c9"
  blueprint-rule: "rgb(238 244 250 / 0.22)"
  blueprint-red: "#ff7d6e"
  blueprint-red-fill: "#ff5c4d"
  blueprint-on-red: "#0b2a4a"
typography:
  display:
    fontFamily: "'Big Shoulders Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(3rem, 1.9rem + 3.9vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "'Big Shoulders Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.5rem, 1.85rem + 2.3vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.005em"
  title:
    fontFamily: "'Big Shoulders Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.625rem, 1.4rem + 0.75vw, 2.125rem)"
    fontWeight: 750
    lineHeight: 1.02
    letterSpacing: "-0.005em"
  lead:
    fontFamily: "'Atkinson Hyperlegible Next Variable', system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.08rem + 0.55vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "'Atkinson Hyperlegible Next Variable', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Atkinson Hyperlegible Mono Variable', ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 450
    lineHeight: 1.4
    letterSpacing: "0.06em"
  button:
    fontFamily: "'Big Shoulders Variable', 'Arial Narrow', sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 750
    lineHeight: 1
    letterSpacing: "0.045em"
  stamp:
    fontFamily: "'Big Shoulders Stencil Variable', 'Big Shoulders Variable', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.1em"
rounded:
  none: "0px"
  balloon: "50%"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4rem"
  section: "clamp(4.5rem, 3rem + 5vw, 8rem)"
  gutter: "clamp(16px, 4vw, 48px)"
  col-gap: "clamp(16px, 2vw, 28px)"
components:
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-redline:
    backgroundColor: "{colors.red-fill}"
    textColor: "{colors.on-red}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "48px"
  button-redline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-small:
    padding: "0 1rem"
    height: "40px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.65rem 0.85rem"
    height: "48px"
  input-line:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.65rem 0.85rem"
    height: "48px"
  stamp:
    backgroundColor: "transparent"
    textColor: "{colors.red}"
    typography: "{typography.stamp}"
    rounded: "{rounded.none}"
    padding: "0.45em 0.75em 0.38em"
  print-switch-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    height: "36px"
  keynote-balloon:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.balloon}"
    size: "1.75rem"
---

# Design System: Bridge AIDE

## Overview

**Creative North Star: "The Checked Drawing Set"**

Every page is a sheet from one engineering drawing set for a bridge between AI development and ethics. The set exists in two print processes that share every line and differ only in exposure: Blueprint, a cyanotype with pale linework on Prussian blue, and Whiteprint, a diazo print with navy linework on cool white paper. A header control switches between them and remembers the choice in `localStorage` under the key `print`; with no stored choice the system colour scheme decides (dark gets Blueprint). An inline script in the document head applies the stored print before first paint.

Drawings carry the identity: a sheet frame with a heavy border inside a thin trim line, dimension lines with filled arrowheads, leader lines to numbered balloons, section hatching, dashed outlines for work not yet built, and red stencil stamps for state. The two signature drawings (a suspension-bridge elevation and a composite-deck section) are computed SVG, not illustrations. Photographs print through the same process as the sheet and develop to full colour under the pointer. Density is moderate: generous section spacing, a rigid twelve-column grid, prose held to about seventy characters.

The system is flat, square-cornered, and monochrome blue apart from one checker's red. Depth comes from line weight and the two paper tones, never from shadow.

**Key Characteristics:**
- Two complete themes from one token set (Whiteprint on `:root`, Blueprint under `[data-theme='blueprint']` or a dark system preference).
- Square corners everywhere; circles only for drafting balloons.
- Line weight is the hierarchy: 2px sheet and title-block borders, 1.5px controls and inputs, 1px rules and dimensions.
- Annotation lettering at a single height across the whole set.
- Solid means built; dashed means proposed or in progress.
- Photos are toned prints that develop on hover, on every page including event recaps.
- Motion draws lines and never bounces; all of it is off under reduced motion.

## Colors

A two-ink drafting palette: blue paper and blue ink in two exposures, plus a single red pencil.

### Primary
- **Checker's Red** (`red-fill`, Whiteprint #c0392b / Blueprint #ff5c4d): the fill of the single primary action on a screen, which is the Subscribe button in the mailing-list title block. It also fills text selection. Text and icons on it use `on-red` (white on Whiteprint, deep blueprint navy on Blueprint).
- **Redline** (`red`, Whiteprint #c0392b / Blueprint #ff7d6e): red as linework rather than fill. It colours the stencil stamps, invalid-field borders and error text, the text caret, and a checker's underline under a key phrase.

### Secondary
- **Brand Steel** (`steel`, Whiteprint #5b87aa / Blueprint #7fa6c9): construction work. Dimension lines and arrowheads, leader lines, centre lines, hatching, stipple, list markers, resting link underlines, the scrollbar thumb.

### Neutral
- **Cool Diazo White / Prussian Ground** (`paper`): the sheet. #f1f5fa on Whiteprint, #10335a on Blueprint. Also the header, inputs, and title-block backgrounds.
- **Tinted Stock** (`paper-2`): #e3ebf4 / #0b2a4a. Full-bleed bands, underline-input wells, the backing of photo prints.
- **Drafting Ink** (`ink`): #0f2f55 / #eef4fa. Headings, body text, heavy linework, sheet frames, button outlines, focus rings.
- **Secondary Ink** (`ink-2`): #3e5e83 / #b4c9e0. Muted prose, labels, captions, input borders at rest, proposed-work dashes.
- **Trim Rule** (`rule`): ink at 22% opacity. Section rules, header bottom border, the sheet's outer trim line, print-switch dividers.

### Named Rules
**The One Red Fill Rule.** Red fill marks the one primary action in view. Every other action is an ink outline. Red appears elsewhere only as linework: stamps, errors, and checker's marks.

**The Same Set Rule.** Every colour is a token with a value in both prints. A new colour that exists in only one print is wrong; add it to both theme blocks.

**The Paper Grain Rule.** Grain is one fixed overlay on the body (5% multiply on Whiteprint, 7% soft-light on Blueprint). Never grain individual surfaces.

## Typography

**Display Font:** Big Shoulders (with Arial Narrow)
**Body Font:** Atkinson Hyperlegible Next (with system-ui)
**Label/Mono Font:** Atkinson Hyperlegible Mono (with ui-monospace)
**Stamp Font:** Big Shoulders Stencil (with Big Shoulders)

**Character:** A condensed Chicago gothic sets titles like a drawing's title lettering. A legibility-first humanist sans carries the prose, and its mono sibling does the annotation, the drafter's small capitals.

### Hierarchy
- **Display** (800, clamp(3rem → 5.5rem), 1): the page title inside the sheet frame. Sentence-length titles (over 32 characters) step down to clamp(2.5rem → 4rem).
- **Headline** (800, clamp(2.5rem → 4.25rem), 1): section titles.
- **Title** (750, clamp(1.625rem → 2.125rem), 1.02): card, row, and legend terms.
- **Lead** (400, clamp(1.25rem → 1.5rem), 1.5): intro paragraphs and legend definitions.
- **Body** (400, 1.125rem, 1.6): prose, capped at 52ch (about 70 characters with Atkinson's wide figures).
- **Label** (450 or 750, 0.8125rem, 0.06em, uppercase): annotation lettering. Form labels, captions, dates and venues, the print switch, footer headings, dimension text.
- **Button** (Big Shoulders 750, 1.1875rem, 0.045em, uppercase): actions and nav links (nav at 1.25rem, 700).

### Named Rules
**The One Lettering Height Rule.** All annotation is set at 0.8125rem. Rank comes from weight (450 vs 750), case, and the rule beside it, never from a second size.

**The Drawn Title Rule.** Big Shoulders is for titles, nav, and buttons only. It never sets running text, and annotation never borrows it.

## Layout

One drafting grid: a 1320px container with fluid gutters (16px → 48px), twelve columns, and column gaps of 16px → 28px. Sections are separated by a fluid section space (4.5rem → 8rem), either as a 1px trim rule across the container or as a full-bleed `paper-2` band with section space top and bottom. The header is a 64px sticky bar ruled at the bottom; anchors scroll with header-height padding.

Inner pages open with a framed page-head sheet (fluid padding 1.5rem → 3.5rem, title capped at 16–18ch). Policy pages use a read sheet: a sticky contents rail in columns 1–3 and prose in columns 5–11 from 1024px. Breakpoints in use: 768px (tablet layouts, legend rows go two-column), 960px (desktop nav replaces the menu button; work grid goes to twelve columns), 1024px (hero title block and read rail). Spacing steps follow a 4px-based scale (0.25rem → 4rem).

## Elevation & Depth

Fully flat. No shadows anywhere. Depth comes from three sources only: line weight (2px frame, 1.5px controls, 1px rules), the two paper tones (`paper` on `paper-2` bands), and the sheet's double border, a 2px ink line with a 1px trim rule offset 5px outside it. Overlays (the mobile menu) are full-screen paper with a ruled top edge, not floating panels.

### Named Rules
**The Line Weight Rule.** To lift something, draw it heavier. Never add a shadow, blur, or glow.

## Shapes

Square corners everywhere (0px radius on buttons, inputs, frames, cells, stamps). The only circles are drafting balloons: keynote numbers, grid bubbles on the bridge, and the A/B legend keys. Stamps are the one rotated form (−3deg). Pending work uses a dashed outline (1.5px dashed `ink-2` by default, 2px dashed on project cells). Arrowheads are filled triangles; in HTML dimension lines they are CSS border triangles, in SVG small filled paths.

## Components

### Buttons
Heavy, lettered, square.
- **Shape:** square (0px), 1.5px border, 48px minimum height, 0 1.25rem padding; a 40px small size in the header.
- **Outline (default):** transparent with an ink border and ink lettering. Hover inverts to an ink fill with paper lettering. Every secondary action uses this.
- **Redline:** `red-fill` background and border with `on-red` lettering, used only for the primary action. Hover turns it to ink like the outline.
- **Hover / Focus:** 0.25s ease-out colour change; a trailing arrow icon nudges 3px right; active presses down 1px. Focus is a 2px ink outline offset 3px. Disabled drops to 55% opacity.
- **Arrow link:** a bold text link with a trailing arrow, for "see all" moves.

### Inputs / Fields
- **Style:** square, 48px minimum, label in annotation lettering above. Standalone inputs take a 1.5px `ink-2` border on paper. Inside a title block, inputs are drawn as a line: a `paper-2` well with a 1.5px bottom border only.
- **Focus:** border goes to ink plus a 2px ink outline offset 2px. Hover also moves the border to ink.
- **Error:** border turns `red`. The message below is 0.9375rem, 600, in `red`, and the first invalid field takes focus.

### Navigation
Big Shoulders uppercase links (1.25rem, 700, 0.04em) at the right of the 64px header. The current page and hovered link get a 2px underline that draws in from scaleX(0). Below 960px a ruled "Menu" outline button opens a full-screen paper sheet listing links at 2.75rem/800 with ruled separators, a redline Subscribe, and the print switch. Escape closes it.

### Print Switch (signature)
A segmented control of two annotation-lettered buttons, Blueprint and Whiteprint, 36px tall in a 1px trim-rule frame. The active print is an ink fill with paper lettering and `aria-pressed="true"`. Switching runs a view transition where the new sheet feeds in top to bottom (clip-path, 0.75s), like paper through a diazo machine. Reduced motion swaps instantly.

### Title Block (signature)
The mailing-list form drawn as a drawing's corner title block: a 2px ink frame of 1px ink-ruled cells (heading, first name, email, action). It stacks by default; in the hero it sits on the sheet border in the corner, running as one ruled row on tablets. The redline Subscribe fills the last cell. On success, a RECEIVED stamp replaces the fields. The footer reuses the same ruled-cell language.

### Sheet Frame
A 2px ink border with a 1px trim rule offset 5px outside. It frames the hero, page heads, read-page heads, and event recaps.

### Dimension Line
A steel 1px line with filled arrowheads at both ends and an annotation label in the gap, optionally with extension lines at the ends. It dates the workshops as one continuous chain dimension.

### Stamp
Stencil lettering in a 2px `red` border, rotated −3deg, used for state: REGISTRATION IS CLOSED, IN PROGRESS, DRAFTING, PROPOSED, RECEIVED, ERROR 404.

### Photo Print
Each photo is two stacked copies of the same image. The top copy is toned through the active print's SVG filter (`#print-blueprint` or `#print-whiteprint`: luminance mapped to that process's ink ramp) and fades out over 0.7s on hover or link focus, developing the colour image below. Captions sit beneath in annotation lettering. In forced-colours mode the tone layer is removed.

### Drawings
The suspension-bridge elevation (towers labelled A AI DEVELOPMENT and B ETHICS, span dimensioned BRIDGE AIDE) and Section A-A (slab, shear studs, girder, with keynote balloons) are geometry-driven SVG. Linework is ink at 2.4, 1.6, and 1 stroke weights; construction elements are steel, with 45° hatching for cut material. On load the bridge drafts itself in construction order: ground, caissons, grid, towers, cables, hangers from midspan outward, deck, then dimensions.

### Legend and Rules
Values and goals are set as ruled legend rows: a 2px ink top rule, a Big Shoulders term beside a lead-size definition, and a 1px ink rule under each row that draws left to right as the row enters view.

## Do's and Don'ts

### Do:
- **Do** define every new colour in both the Whiteprint `:root` block and both Blueprint blocks (the `data-theme` selector and the dark-scheme media query).
- **Do** give each screen exactly one red-filled primary action; everything else is an ink-outline button or an arrow link.
- **Do** set every label, caption, date, and metadata line in annotation lettering at 0.8125rem, ranked by weight.
- **Do** draw proposed, pending, or not-yet-happened work with a dashed `ink-2` outline and muted text, and mark state with a stencil stamp.
- **Do** run every photo, event recaps included, through the Print component so it tones to the active print and develops on hover.
- **Do** keep motion to drawing (stroke-dashoffset, scaleX from the left, clip-path feeds) on the ease-out curve, and leave everything visible and static under `prefers-reduced-motion: reduce`.
- **Do** keep linework to the three weights: 2px frames, 1.5px controls, 1px rules and dimensions.

### Don't:
- **Don't** round corners, except drafting balloons.
- **Don't** use box-shadows, glows, blurs, or gradients for depth.
- **Don't** use red fill for anything but the primary action, or red for decoration.
- **Don't** introduce a second annotation size or set annotation in the display face.
- **Don't** show an untoned colour photo anywhere on the site.
- **Don't** add motion that bounces, overshoots, or plays when reduced motion is requested.
