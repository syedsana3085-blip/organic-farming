# Organic Farming – Green Future

**Community Service Project (CSP) Educational Website**
Topic: *Organic Farming – Sustainable Agriculture for a Healthy Future*
Tagline: *"Growing Naturally, Living Sustainably."*

## Overview

This is a complete, responsive, static-ready React + Vite + Tailwind CSS educational web portal designed for a college Community Service Project (CSP). It requires **no paid APIs, no backend server, and no paid hosting**, making it ready for free static hosting on **GitHub Pages** or **Netlify**.

## Included Sections & Interactive Features

1. **Home & Project Dashboard**: Hero showcase, verified facts (ICAR, FAO, NCOF, RySS APCNF), live project search, category filters, and clickable dashboard cards for all 10 modules.
2. **Introduction to Organic Farming**: Meaning, importance, why farmers adopt organic methods, Organic vs. Conventional comparison table, and the 4 IFOAM principles.
3. **Benefits of Organic Farming**: All 7 core ecological and economic benefits.
4. **Organic Farming Methods**: Interactive explorer for Composting, Vermicomposting, Crop Rotation, Green Manure, Biofertilizers, Natural Pest Management, Mulching, and Mixed Cropping.
5. **Organic Farming in Andhra Pradesh**: APCNF 4 pillars (Beejamrutham, Jeevamrutham, Acchadana, Whapasa), role of women SHGs, PKVY & PGS-India / Jaivik Bharat initiatives, and regional agricultural examples.
6. **Data Collection & Farmer Survey**: Field survey methodology, clearly labelled sample placeholder notice, live aggregated summary counts, validated form to log real farmer responses (`localStorage`), and CSV export.
7. **Interactive Organic Farming Guide**: Select any crop and method to view tailored educational practices, composting steps, soil improvement, and natural farming inputs with an educational disclaimer.
8. **Future Scope**: Awareness, AgTech, farmer training, FPO markets, policy support, and youth agri-entrepreneurship.
9. **My Activity (6-Week CSP Journey)**: Editable Week 1–6 descriptions, hours, locations, and field photo upload previews (`localStorage`).
10. **Conclusion, Knowledge Quiz & FAQ**: Synthesis, 8-question interactive quiz with explanations, FAQ accordion, and editable college/student footer metadata.
11. **AgroGuide Assistant**: Built-in offline educational chatbot with quick prompts and direct section jump links.

---

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Building for Production

```bash
npm run build
```

This generates the static production site in `dist/`.

---

## Free Deployment Instructions

### Option A: Deploy for Free on Netlify

1. Run `npm run build` locally (or push your code to GitHub and connect the repo in Netlify).
2. If connecting via GitHub:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Or drag and drop the `dist/` folder onto [Netlify Drop](https://app.netlify.com/drop) for an instant free HTTPS link.

### Option B: Deploy for Free on GitHub Pages

`vite.config.ts` already includes `base: './'`, so all scripts, styles, and generated images resolve properly even when hosted at `https://<username>.github.io/<repo-name>/`.

1. Push this project to a GitHub repository.
2. In GitHub **Settings → Pages**, set Source to **GitHub Actions** (or deploy the `dist/` folder to a `gh-pages` branch):
   - Run `npm run build`
   - Publish the contents of `dist/` to your `gh-pages` branch, or use `actions/upload-pages-artifact` with `path: './dist'`.

---

## Customizing Content Without Coding

- **College, Student & Mentor Info**: Click **"Edit College & CSP Info"** in the footer to customize your institution, student name, roll number, and mentor name.
- **6-Week Activity Log & Photos**: Open **My Activity**, click **Edit** on any week, update your real observations, and upload your farm visit photographs.
- **Field Survey Responses**: Open **Data Collection & Survey**, click **Clear Sample Rows**, and enter your actual farmer survey responses, then click **Download CSV** for your CSP report.
