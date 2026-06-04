---
name: Heritage Minimalism
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#414944'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#717974'
  outline-variant: '#c0c8c3'
  surface-tint: '#3b6756'
  primary: '#00261a'
  on-primary: '#ffffff'
  primary-container: '#0f3d2e'
  on-primary-container: '#7ba894'
  inverse-primary: '#a2d1bb'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#21211d'
  on-tertiary: '#ffffff'
  tertiary-container: '#363631'
  on-tertiary-container: '#a09f98'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#beedd7'
  primary-fixed-dim: '#a2d1bb'
  on-primary-fixed: '#002116'
  on-primary-fixed-variant: '#234f3f'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e5e2db'
  tertiary-fixed-dim: '#c9c6c0'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#474742'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The brand personality is an intersection of ancient Indian hospitality and ultra-modern minimalist precision. It seeks to elevate a traditional cultural staple into a high-end lifestyle experience. The UI must evoke a sense of quiet luxury—calm, confident, and meticulously curated.

The design system adopts a **Minimalist Luxury** style, borrowing the spatial clarity of modern technology brands and infusing it with organic textures. This "Apple-meets-Heritage" approach utilizes vast amounts of whitespace (Ivory White) to allow the primary botanical color (Forest Green) and prestigious accents (Gold) to command attention. Motion should be fluid and decelerated, mimicking the deliberate pace of a premium tasting experience.

## Colors

The palette is rooted in the natural elements of the product. **Deep Forest Green** serves as the primary anchor, representing the betel leaf and providing a deep, sophisticated contrast. **Gold** is used sparingly for highlights, interactive states, and iconography to denote premium quality.

**Ivory White** is the foundational canvas color, replacing pure white to provide a warmer, more "paper-like" editorial feel. **Charcoal Black** is reserved for typography and structural elements to ensure readability and a grounded architectural feel. Functional colors for success or error should be muted to maintain the sophisticated atmosphere.

## Typography

This design system utilizes a high-contrast typographic pairing to balance tradition and modernity. **Playfair Display** provides an editorial, authoritative serif voice for headlines, echoing luxury fashion and heritage storytelling. **DM Sans** offers a clean, geometric, and understated counterpoint for body text and functional interface elements.

Hierarchy is established through significant size shifts and the use of uppercase tracking for labels. "Display" styles should be used for hero sections and product titles, while "Label-caps" should be used for category browses and small metadata to maintain a structured, tidy appearance.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model to maintain the "curated" feel of a high-end catalog. On desktop, content is contained within a 1280px max-width, 12-column grid. The generous 64px side margins ensure that the UI never feels crowded, emphasizing the premium nature of the brand through "expensive" use of space.

Spacing follows a strict 8px base unit. Section gaps are intentionally large (up to 120px) to separate different narratives or product collections, allowing the user to focus on one element at a time. On mobile, the grid collapses to 4 columns with reduced margins, but the vertical breathing room remains a priority to avoid a cluttered "m-commerce" aesthetic.

## Elevation & Depth

In this design system, depth is communicated through **Tonal Layers** and **Ambient Shadows** rather than harsh outlines. Surfaces use subtle shifts between Ivory White and a slightly darker "Stone" tint to create hierarchy.

Shadows are exceptionally soft, using the Primary Forest Green or a warm Neutral as a tint base rather than pure black. The goal is to make elements like cards and buttons appear to "float" slightly above the surface with a soft, diffused glow. Use backdrop blurs (glassmorphism) sparingly—only for navigation bars or overlays to maintain a sense of lightness and transparency.

## Shapes

The shape language is **Soft** and architectural. A 0.25rem (4px) base radius is applied to buttons and input fields to provide a hint of approachability without losing the crisp, formal edge associated with luxury goods.

For larger containers like product cards or imagery, `rounded-lg` (8px) is used to create a gentle frame. Circular shapes are reserved exclusively for icon buttons or specific decorative botanical motifs to contrast against the otherwise rectangular, structured grid.

## Components

### Buttons
Primary buttons use the Deep Forest Green background with Gold or Ivory text. They should have a subtle hover transition where the background deepens or a gold border emerges. Secondary buttons are "Ghost" style—thin 1px gold or green borders with high letter-spaced labels.

### Cards
Product cards should be minimal. Image-first, with typography placed either below on an Ivory background or overlaid with a soft gradient scrim. Avoid heavy borders; use subtle shadows to define the card edge.

### Input Fields
Inputs use a "Minimalist" style—often just a bottom border in a muted Gold or Green, or a very light fill with no border. Labels should use the `label-caps` typography style and sit above the field.

### Chips & Tags
Used for flavor profiles (e.g., "Saffron," "Rose"). These should be pill-shaped with light Ivory backgrounds and Forest Green text, maintaining a clean, organic look.

### Navigation
The navigation bar should be persistent but unobtrusive. Use a blurred Ivory background with the brand logo centered. Links should use the `label-caps` style for a sophisticated, uniform appearance.