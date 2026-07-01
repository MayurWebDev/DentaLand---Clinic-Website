# DentaLand Deployment & Compilation Guide

This guide details instructions to compile, pre-render, and host the **DentaLand Digital Growth Platform** in production.

---

## 1. Local Development
To run the project in development mode:
```bash
# 1. Install dependencies (if not already done)
npm install

# 2. Run local dev server (Vite)
npm run dev
```

---

## 2. Production Build Pipeline
To compile and pre-render the SPA for static search indexing:

```bash
# Step 1: Run Vite production bundler
npm run build

# Step 2: Run the static site pre-renderer script
node prerender.js
```

---

## 3. How the Pre-renderer Works
During `npm run build`, Vite outputs compiled assets under the `/dist` directory, including a master `dist/index.html` file.
Running `node prerender.js`:
1. Crawls all SEO-mapped paths (e.g. `/dentist-in-pimpri`, `/about`).
2. Creates corresponding subfolders under `/dist` (e.g. `dist/dentist-in-pimpri/`).
3. Copies `index.html` into each folder, replacing metadata tags with specific page titles, meta descriptions, and canonical links.
4. When hosted on Apache, Nginx, or Netlify/Vercel, the server directly loads the static pre-rendered HTML index, satisfying search bots before executing the client-side React code.

---

## 4. Hosting Recommendations
- **Static Hosting**: Vercel, Netlify, or AWS S3 + CloudFront.
- **Rules**:
  - Configure **rewrites** or **fallback handling** to serve the `/index.html` for any unmatched client-side routes, allowing React Router to take over.
  - For Nginx hosting, use:
    ```nginx
    location / {
        try_files $uri $uri/ /index.html;
    }
    ```
