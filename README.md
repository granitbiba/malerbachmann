# Maler Bachmann Website

A modern, beautiful website for Maler Bachmann GmbH - A family-run painting business in Zurich, Switzerland since 1953.

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Icons:** Lucide React

## Features

- ✨ Modern, clean design
- 🎨 Smooth animations and transitions
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized
- 🌐 German language content
- 📧 Contact form with validation

## Pages

1. **Home** (`/`) - Hero section with rotating taglines
2. **Service** (`/service`) - Professional painting services
3. **Showroom** (`/showroom`) - Consultation and design services
4. **About** (`/wer-wir-sind`) - Company history and family story
5. **Contact** (`/kontakt`) - Contact form and information

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Deploy

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with Header & Footer
│   ├── page.tsx            # Home page
│   ├── service/
│   │   └── page.tsx        # Services page
│   ├── showroom/
│   │   └── page.tsx        # Showroom page
│   ├── wer-wir-sind/
│   │   └── page.tsx        # About page
│   └── kontakt/
│       └── page.tsx        # Contact page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with social links
│   ├── RotatingText.tsx    # Animated rotating text
│   └── ContactForm.tsx     # Contact form component
└── public/                 # Static assets
```

## Customization

### Colors

Edit the Tailwind configuration to customize colors.

### Content

All content is in German and can be edited directly in the page files under `/app`.

### Animations

Animations are powered by Framer Motion and can be customized in each component.

## License

© 2026 Maler Bachmann GmbH. All rights reserved.
# malerbachmann
