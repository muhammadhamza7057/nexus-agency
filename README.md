# Nexus Studio — Software Agency Website

A modern, dark-themed software agency website built with **React + Vite**.

## 🗂 Folder Structure

```
agency-site/
├── public/
├── src/
│   ├── assets/            # Static images, icons, fonts
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── layout/        # Navbar, Footer, Layout wrappers
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/      # Page sections (Hero, Services, etc.)
│   │   │   ├── Hero.jsx
│   │   │   ├── TechTicker.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Process.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── FAQ.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/            # Reusable UI primitives (Button, Card, etc.)
│   ├── data/
│   │   └── siteData.js    # All content: services, testimonials, FAQs
│   ├── hooks/
│   │   └── useScrollAnimation.js  # Intersection Observer hooks
│   ├── pages/
│   │   └── Home.jsx       # Page-level component (add more pages here)
│   ├── styles/
│   │   └── globals.css    # CSS variables, resets, animations
│   ├── utils/             # Helper functions
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deploy to Vercel

This repo is configured for a straightforward Vercel deploy:

1. Push the latest `main` branch to GitHub.
2. Import the repository in Vercel.
3. Leave the build command as `npm run build`.
4. Leave the output directory as `dist`.
5. Deploy.

The included `vercel.json` already sets the build command and output directory.

## ✏️ Customizing Content

All site content lives in `src/data/siteData.js`:
- **services** — Edit titles, descriptions, and tech stacks
- **testimonials** — Add/remove client quotes
- **process** — Change the workflow steps
- **faqs** — Update Q&A entries
- **techStack** — Modify the scrolling ticker

## 🎨 Design Tokens

All colors, fonts, and spacing are CSS variables in `src/styles/globals.css`. To retheme, change the `:root` block.

## 📦 Dependencies

- `react` + `react-dom` — UI library
- `react-router-dom` — Routing (ready for multi-page expansion)
- `lucide-react` — Icon library
- `vite` — Build tool
