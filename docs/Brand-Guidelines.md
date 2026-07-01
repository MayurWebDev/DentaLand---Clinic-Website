# DentaLand Design System & Brand Guidelines

This document outlines the brand guidelines and design system specifications for the **DentaLand Digital Growth Platform** redesign. 

---

## 1. Visual Language & Aesthetics
DentaLand’s visual identity represents a shift from generic clinic styling to a high-end private healthcare aesthetic, characterized by:
- **Minimalist luxury**: Abundant white space, clean grids, and borders.
- **Glassmorphism**: Translucent components with soft backing blurs (`backdrop-filter`) and thin borders that convey clinical precision.
- **Apple-level details**: Soft ambient shadows, circular control elements, and responsive hover transitions.

---

## 2. Color Palette
To align with a medical theme while asserting premium value, we utilize a curated Blue + White palette:

| Token Name | Hex Code | Purpose | Tailwind Class |
| :--- | :--- | :--- | :--- |
| **Brand Primary** | `#0284c7` (Sky 600) | Main brand headers, primary CTA gradients | `text-sky-600` / `bg-sky-600` |
| **Brand Dark** | `#0f172a` (Slate 900) | Secondary headings, body texts, footer background | `text-slate-900` / `bg-slate-900` |
| **Brand Accent** | `#06b6d4` (Cyan 500) | Highlight badges, success states, secondary gradients | `text-cyan-500` / `bg-cyan-500` |
| **Brand Light** | `#f0f9ff` (Sky 50) | Card backdrops, hover overlays, alerts backgrounds | `bg-sky-50` |
| **Brand Slate** | `#475569` (Slate 600) | Supportive captions and sub-headings | `text-slate-600` |

---

## 3. Typography
We leverage two modern geometric typefaces loaded from Google Fonts:
- **Display Typeface**: `Outfit` (sans-serif) - Used for primary headings, hero blocks, numbers, and stats. It provides a clean, premium, and friendly shape.
- **Body Typeface**: `Inter` (sans-serif) - Industry standard for high legibility, clean paragraph structures, and forms controls.

### Size Hierarchies
- **Hero Title**: `text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-slate-900`
- **Section Title**: `text-3xl sm:text-4xl font-bold font-display text-slate-900`
- **Card Title**: `text-base sm:text-lg font-bold font-display text-slate-900`
- **Body / Cap**: `text-sm sm:text-base font-sans text-slate-600 leading-relaxed`

---

## 4. Radii & Shadows (Apple UI styling)
- **Border Radii**:
  - Cards: `rounded-2xl` / `rounded-3xl` (`radius.card`)
  - Buttons & Badges: `rounded-full` (`radius.button`)
  - Form Fields: `rounded-xl` (`radius.input`)
- **Shadows**:
  - Soft Ambient: `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`
  - Floating Card: `shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)]`
  - Hover Pop: `hover:shadow-[0_20px_40px_-5px_rgba(2,132,199,0.08)]`

---

## 5. Micro-interactions & Animations
We utilize **Framer Motion** with standard easing configurations:
- **Eases**: Cubic-bezier curves (`[0.16, 1, 0.3, 1]`) matching native iOS/macOS transitions.
- **Rules**:
  - Avoid jerky, long animations. Keep duration under `0.4s` for card flips or reveals.
  - Hover effects on cards: Subtle scale up (`scale-[1.01]`), color shift, and deep shadow.
  - CTA Buttons: Hover scaling (`scale-[1.02]`) and soft gradient shift.
