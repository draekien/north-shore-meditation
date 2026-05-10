---
name: North Shore Meditation
description: Warm-craft brand site for Grace, a Transcendental Meditation teacher on Sydney's North Shore.
colors:
  sage-emerald: "#079669"
  sage-emerald-deep: "#10b981"
  honey-amber: "#f69109"
  honey-amber-deep: "#d97706"
  dusk-iris: "#8b43e8"
  warm-paper: "#ffffff"
  warm-paper-tinted: "#f4f4f5"
  ink: "#0a0a0f"
  ink-soft: "#71717a"
  fine-rule: "#e4e4e7"
  signal-red: "#ef4444"
  focus-ring: "#16a34a"
typography:
  display:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw + 1rem, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 2vw + 1rem, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  cjk-display:
    fontFamily: "var(--font-ma-shan-zheng), 'KaiTi', serif"
    fontSize: "clamp(2.25rem, 5vw + 1rem, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "normal"
  cjk-body:
    fontFamily: "var(--font-noto-sans), 'PingFang SC', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "normal"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.sage-emerald}"
    textColor: "{colors.warm-paper}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: "36px"
  button-primary-hover:
    backgroundColor: "{colors.sage-emerald-deep}"
    textColor: "{colors.warm-paper}"
  button-outline-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.honey-amber}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-lg:
    rounded: "{rounded.md}"
    padding: "0 32px"
    height: "40px"
  card:
    backgroundColor: "{colors.warm-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "24px"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "4px 12px"
    height: "36px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "8px 12px"
    typography: "{typography.label}"
---

# Design System: North Shore Meditation

## 1. Overview

**Creative North Star: "The Long Breath"**

Pacing is the design. The site is read at the speed of someone considering a teacher, not converting on a funnel. Vertical rhythm is generous, transitions are slow, type breathes. A visitor should be able to land on any page, exhale once, and feel that the site is in no hurry. The work of every layout is to keep that breath intact.

The system sits in the warm-craft lane: independent yoga studios and boutique retreats, not consumer wellness apps. Surfaces are mostly paper-white, lifted only where lift earns its place. Color is used sparingly and warmly. Typography carries hierarchy, not chrome. Imagery is photographic and human (Grace, the studio, real students), not iconographic.

It explicitly rejects the wellness-app SaaS sheen (Calm/Headspace pastel-gradient blobs, friendly rounded geometry as decoration), the new-age cliché (mandalas, lotus icons, chakra hues, purple-cosmos imagery), the corporate-startup template (hero-metric grids, identical feature card rows, navy-and-blue tech palette), and the devotional/ashram register. If a visitor could swap the logo for any other meditation studio without noticing, the design has failed.

**Key Characteristics:**

- Pacing first: generous spacing, unhurried motion, long scroll
- Paper-white default surfaces with warm tinted neutrals
- Restrained color: one accent at a time, never three at once
- Photography of people and place, not stock serenity
- Bilingual parity: the same craft in en and zh-Hans, never a paste-in translation
- Reduced-motion as a first-class state, not an opt-in

## 2. Colors: A Restrained, Warm-Craft Palette

The palette is **Restrained**: paper-white surfaces, warm tinted neutrals, and one accent at a time. Sage Emerald is the working voice; Honey Amber appears only as a quiet counter-note; Dusk Iris is reserved for tertiary signals (tags, marginal status). The system never deploys all three at once on the same surface.

Color values below are documented as hex (sRGB) for tooling compatibility. The project authors them as HSL custom properties in `globals.css`; OKLCH equivalents are noted in parentheses as the canonical perceptual reference for future retuning.

### Primary

- **Sage Emerald** (`#079669`, oklch(57% 0.13 162)): The teaching voice. Used for primary CTAs, primary headings on quiet sections, link underlines, and the focus ring. Reads as living plant rather than corporate green.

### Secondary

- **Honey Amber** (`#f69109`, oklch(75% 0.17 60)): A quiet counter-note. Used sparingly for secondary CTAs, outlined buttons in the hero, and accents where Sage would over-claim. Never used as a fill across large surfaces; never paired with Iris on the same screen.

### Tertiary

- **Dusk Iris** (`#8b43e8`, oklch(60% 0.22 295)): Reserved for tertiary-status signals (event categories, tag chips, journal taxonomy). Off-limits in hero, primary CTAs, and decorative gradients. *See the No-Iris-Atmosphere Rule below.*

### Neutral

- **Warm Paper** (`#ffffff`): The default page surface.
- **Warm Paper Tinted** (`#f4f4f5`): Muted surfaces, alternating sections, subtle layering.
- **Ink** (`#0a0a0f`): Body and heading text.
- **Ink Soft** (`#71717a`): Secondary text, captions, metadata.
- **Fine Rule** (`#e4e4e7`): Borders, dividers, input strokes. One pixel, never coloured.

### Signal

- **Signal Red** (`#ef4444`): Form errors, destructive actions only. Never decorative.

### Named Rules

**The One Voice Rule.** Sage Emerald is the working accent across the site. Honey Amber appears as a counter-note no more than once per surface, never as a fill across hero or section backgrounds. Dusk Iris is tertiary only. Never use all three on the same page.

**The No-Iris-Atmosphere Rule.** Iris is forbidden in atmospheric / decorative roles: no purple radial gradients in heroes, no purple background washes, no purple tints on imagery overlays. Atmospheric purple reads as new-age cliché and contradicts the warm-craft brief. The current hero's `from-indigo-300 via-indigo-100` and `from-purple-300` radial gradients are documented drift; new work must not extend them.

**The Warm-Paper Rule.** The page background is warm paper, never pure cool white. The current `#ffffff` is a known compromise; future tokens should drift the background to `oklch(99% 0.005 80)` (a near-imperceptible warm tint) to align with the warm-craft brief without sacrificing contrast.

## 3. Typography

**Display / Body Font:** Geist Sans (variable, 100–900) with `system-ui, sans-serif` fallback.
**CJK Display Font:** Ma Shan Zheng (Google Fonts, weight 400) for `:lang(zh-Hans)` headings.
**CJK Body Font:** Noto Sans SC (variable) for `:lang(zh-Hans)` body.

**Character:** Geist is a single committed sans, used across the entire English surface; the voice comes from weight + size contrast within one family rather than from a display + body pairing. Ma Shan Zheng carries the brushwork of Chinese display calligraphy without leaning ornamental; it pairs with Noto Sans SC for everyday reading. The two locales feel like the same brand rendered in two scripts, not like an English site with Chinese pasted in.

### Hierarchy

- **Display** (extrabold 800, `clamp(2.25rem, 5vw + 1rem, 3.75rem)`, line-height 1.05, tracking -0.02em): Hero headlines. Single-purpose viewports. One per page.
- **Headline** (semibold 600, `clamp(1.75rem, 2vw + 1rem, 2.25rem)`, line-height 1.15, tracking -0.015em): Section titles. The current `border-b` underline on `h2` is part of the system; treat it as a quiet rule, not a default.
- **Title** (semibold 600, 24px, line-height 1.25): Sub-section and card titles. Rendered as `h3`.
- **Body** (regular 400, 16px, line-height 1.7): Reading text. **Cap measure at 65–75ch.** Line-height 1.7 (vs the more common 1.5) is part of the long-breath voice; do not tighten.
- **Label** (medium 500, 14px, line-height 1.4): Buttons, nav links, metadata, captions. Sentence case.

### Named Rules

**The One-Family Rule.** English typography is a single Geist family. Do not introduce a serif display font, a mono accent, or a script as decoration. Voice comes from weight contrast (≥300 weight steps between display and body), not from font pairing.

**The Bilingual Parity Rule.** The Chinese surface uses CJK display calligraphy (Ma Shan Zheng) for headings and Noto Sans SC for body. Line-height for CJK body is 1.8 (vs 1.7 for Latin) because Chinese glyphs read denser. Never reuse Latin line-heights on a CJK surface.

**The Sentence-Case Rule.** All headings and labels are sentence case. ALL CAPS is forbidden in body, headings, and CTAs. Track-spaced uppercase is editorial-magazine voice and does not belong here.

## 4. Elevation

The system is **flat with a single soft lift**. Surfaces are flat at rest. Layering is mostly tonal: page background (Warm Paper), tinted alternating sections (Warm Paper Tinted), card body. Shadows appear only on a small number of genuinely-lifted elements, and only ever as a single soft tier.

### Shadow Vocabulary

- **rest-lift** (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`): The default `shadow-sm` used on cards and buttons at rest. Diffuse, almost ambient. The visible job is to detach the surface by a millimeter, not to dramatise it.
- **focus-lift** (`box-shadow: 0 0 0 3px rgb(7 150 105 / 0.18)`): The keyboard focus ring on inputs and interactive controls. Sage Emerald at low alpha. Always visible; never `outline: none` without replacement.

### Named Rules

**The Flat-By-Default Rule.** New components are flat. Lift is reserved for cards, popovers, dropdowns, and the hero CTA. If a component is asking for a second shadow tier, the answer is more space, not more elevation.

**The No-Glass Rule.** Glassmorphism (`backdrop-blur` on tinted backgrounds) is forbidden as decoration. The existing `bg-white/30 backdrop-blur-3xl` cards on the Why-TM section are documented drift; new components must not adopt the pattern. If translucency is genuinely required (sticky nav over imagery), keep blur ≤ 8px and tint opacity ≥ 0.85.

## 5. Components

### Buttons

- **Shape:** Gently rounded (6px / `rounded-md`).
- **Primary:** `bg-primary` (Sage Emerald) fill, `text-primary-foreground` (Warm Paper), `shadow-sm` rest-lift, padding 8px × 16px at default size, 0 × 32px at large. Hover deepens the fill (`bg-primary/90`).
- **Secondary:** `bg-secondary` (Honey Amber) fill, used sparingly. Reserved for paired CTAs alongside a Primary on the hero.
- **Tertiary:** Dusk Iris fill. Reserved for marginal contexts; not used in hero or primary navigation.
- **Outline-Primary / Outline-Secondary:** Transparent fill with same-coloured 1px stroke and text. Hover fades the stroke and text to 60% opacity in unison; do not introduce a fill on hover.
- **Ghost:** Transparent at rest, `bg-accent` on hover. For low-priority actions inside dense regions (table row actions, nav).
- **Link:** Sage Emerald text with offset underline on hover. Used for inline navigation in body copy.
- **Sizes:** `default` (36px), `sm` (32px, 12px text), `lg` (40px, 32px horizontal padding), `icon` (36×36).

### Cards

- **Corner Style:** 12px radius (`rounded-xl`). One step softer than buttons, deliberately.
- **Background:** Warm Paper (`bg-card`), Ink text.
- **Border:** 1px Fine Rule.
- **Shadow:** rest-lift only. No hover lift unless the card is an actionable link (then add a single soft transform, no shadow change).
- **Internal Padding:** 24px (`p-6`); header and content share the rhythm. Footer collapses padding-top.
- **Anti-pattern (current drift):** `bg-white/30 backdrop-blur-3xl` translucent card variant on the Why-TM section. See No-Glass Rule.

### Inputs

- **Style:** 1px Fine Rule stroke, transparent background, 6px radius, 36px height, 12px horizontal padding, 14px text.
- **Focus:** `ring-1` Sage Emerald focus ring, no outline. Stroke does not change colour; the ring is the affordance.
- **Disabled:** 50% opacity, `cursor-not-allowed`.
- **Error:** Stroke shifts to Signal Red, helper text Signal Red below the field. Never red fill.

### Navigation

- **Desktop:** Horizontal nav bar, links rendered as label-typography links with subtle hover (text colour shift to Sage Emerald). No underlines at rest, no pill backgrounds, no active-state fill.
- **Mobile:** Sheet drawer (Radix-based) sliding from the right, links stacked at body size. The sheet uses Warm Paper background, Fine Rule divider between items.
- **Active state:** Sage Emerald text. Never coloured pill; never side-stripe border.

### Section Containers

The project ships three primitives (`page-section.container`, `page-section.primary`, `page-section.secondary`) that own vertical rhythm. Use them. Section vertical padding is `py-16` (64px) by default; alternating sections layer with Warm Paper Tinted background. Containers cap inner width and apply responsive horizontal padding (`px-4 md:px-12 lg:px-24`).

### Signature: Hero Section

A 100dvh - nav-height first viewport with a real photograph of the studio or Grace, sitting full-bleed. Foreground content is centred with a clear primary + secondary CTA pair (Sage primary, Honey-Amber outlined secondary). The current implementation overlays indigo and purple radial gradients on top of the hero image and uses `text-yellow-900` foreground; this is documented drift. New hero variants should use a near-black foreground over a softly-darkened image (a single warm-tinted overlay at ~30% opacity), and rely on photography rather than gradient atmosphere.

## 6. Do's and Don'ts

### Do:

- **Do** keep page surfaces Warm Paper (#ffffff today, drifting toward `oklch(99% 0.005 80)`). Sections alternate via Warm Paper Tinted (#f4f4f5), not via colour.
- **Do** use Sage Emerald as the working accent. One voice per page.
- **Do** cap body line length at 65–75ch and keep body line-height at 1.7 (1.8 for CJK).
- **Do** treat `prefers-reduced-motion` as the first-class state. The animated background gradients (`moveVertical`, `moveInCircle`, `moveHorizontal`) must collapse to a static frame when reduced motion is set.
- **Do** keep CJK typography on equal craft footing: Ma Shan Zheng for display, Noto Sans SC for body, line-height tuned per script.
- **Do** lead with photography of Grace, the studio, and real people. One decisive image beats five mediocre ones.
- **Do** use sentence case across headings, labels, and CTAs.
- **Do** treat the focus ring as part of the design (Sage Emerald, 3px, low alpha). Never `outline: none` without a replacement.

### Don't:

- **Don't** use Dusk Iris in atmospheric or decorative roles. No purple radial gradients in heroes, no purple background washes, no purple-cosmos imagery. *(Carries PRODUCT.md anti-reference: "no chakra colour wheels, purple-cosmos imagery".)*
- **Don't** revive the indigo/purple hero gradient pattern (`from-indigo-300 via-indigo-100`, `from-purple-300`). Documented drift; new work must not extend it. *(Carries: "no pastel gradient blobs".)*
- **Don't** ship the translucent glass card variant (`bg-white/30 backdrop-blur-3xl`) as a default. Glassmorphism is rare and purposeful; on quiet sections it reads as wellness-app sheen. *(Carries: "no consumer-app sheen".)*
- **Don't** place colour stripes on the side of cards, list items, or alerts (`border-left` greater than 1px as a colored accent). Use full borders, leading icons, or nothing.
- **Don't** introduce a serif display font, a mono accent, or a script. Geist is the single English family. *(Carries: "no Sanskrit set in decorative display fonts".)*
- **Don't** use ALL CAPS body, headings, or CTA labels. No track-spaced uppercase metadata; that's editorial-magazine voice.
- **Don't** build hero-metric grids ("80% lower stress", "1M practitioners") or identical-feature card rows. *(Carries: "no hero-metric grid, no identical feature card rows".)*
- **Don't** use stock soft-focus imagery of someone meditating on a beach at sunset, mandalas, lotus icons, or chakra colour wheels. *(Carries: "no AI-generated 'serene' stock photography".)*
- **Don't** write reverent or devotional copy. TM is a secular technique; lineage is honoured as history, not invoked as authority. *(Carries: "no devotional, ashram-marketing, or culty framing".)*
- **Don't** treat the Chinese surface as a translation layer. If line-height, font, or rhythm differs from English without per-script tuning, the bilingual-parity rule has been broken.
- **Don't** add a second shadow tier. If a component is asking for it, give it more space instead.
