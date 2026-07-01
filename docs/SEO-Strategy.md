# DentaLand SEO Strategy & Keyword Map

This document outlines the search engine optimization (SEO) architecture built into the **DentaLand Digital Growth Platform** to drive local organic traffic and increase dental bookings.

---

## 1. Target Local Keywords
Our SEO structure target searches inside the Pimpri-Chinchwad municipal corporation (PCMC) and Pune regions:

### Primary Keywords:
- `Dentist in Pimpri` / `Dental Clinic in Pimpri`
- `Best Dentist in Pune` / `Dental Clinic PCMC`
- `Dental Implant Pune` / `Root Canal Treatment Pimpri`
- `Smile Design Pune` / `Cosmetic Dentist Pune`
- `Dental Clinic Near Me`

### Secondary Keywords:
- `Dentist near Chinchwad` / `Dentist near Nigdi`
- `Emergency Dentist Pune`
- `Teeth Whitening Pune`
- `Pediatric Dentist Pune`
- `Scaling and Polishing Pune`

---

## 2. Dynamic Landing Pages Mapping
Rather than pointing all traffic to the home page (causing branch selection confusion), we map search terms directly to optimized landing templates:

| Search Keyword | URL Target | React Page View | Localized Context |
| :--- | :--- | :--- | :--- |
| "Dentist in Pimpri" | `/dentist-in-pimpri` | `LocalLandingPage.jsx` | Pimpri Address, Dr. Pankaj, Maps |
| "Dentist near Chinchwad" | `/dentist-near-chinchwad` | `LocalLandingPage.jsx` | Maps to Pimpri (nearest branch) |
| "Root Canal Pimpri" | `/root-canal-treatment-in-pimpri` | `LocalTreatmentPage.jsx` | Root Canal copy, Dr. Pankaj Shelke |
| "Best Dentist in PCMC" | `/best-dentist-in-pcmc` | `LocalLandingPage.jsx` | General PCMC details |
| "Dental Implant Pimpri" | `/dental-implant-in-pimpri` | `LocalTreatmentPage.jsx` | Implant copy, Pimpri setup details |

---

## 3. SEO Content Hub (Blogs)
Google rewards websites demonstrating **Topical Authority**. Our `/blog` engine targets educational keywords to capture high-intent users:
- `root-canal-vs-extraction` (Intent: Deciding treatment path under toothache)
- `how-long-do-dental-implants-last` (Intent: Researching implant safety and longevity)
- `how-to-prevent-cavities` (Intent: General hygiene tips)

---

## 4. Technical SEO Directives
- **Canonical Tags**: Injected dynamically via `SEOHelmet.jsx` to prevent duplicate content penalties between landing folders (e.g. `/dentist-in-pimpri` vs `/dental-clinic-in-pimpri`).
- **Sitemap Indexing**: Pinned under `public/sitemap.xml` mapping all pages, treatments, and local URLs.
- **Alt Tags & Lazy Loading**: Enforced on all image objects to maintain Core Web Vitals performance levels.
- **Prerendering**: Executed via `node prerender.js` to dump crawlable HTML indices for bots without JavaScript executing capabilities.
