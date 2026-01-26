# Spice Bank

An elegant restaurant website featuring contemporary design, smooth animations, and an immersive dining experience showcase. Built with modern web technologies and inspired by sophisticated restaurant websites.

## Features

- **Smooth Animations** - Framer Motion powered scroll animations and interactive elements
- **Responsive Design** - Mobile-first approach with seamless tablet and desktop experiences
- **Modern UI/UX** - Clean, sophisticated design with attention to typography and spacing
- **Performance Optimized** - Server-side rendering with Next.js App Router
- **Type-Safe** - Full TypeScript implementation
- **Accessible** - Semantic HTML and ARIA labels

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm format` - Format code with Prettier

## Tech Stack

- **Next.js 16** - React framework with App Router for optimal performance
- **TypeScript** - Type-safe JavaScript for robust development
- **Tailwind CSS 4** - Utility-first CSS framework with custom design system
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful, consistent icon library
- **ESLint & Prettier** - Code quality and formatting

## Project Structure

```
spice-bank/
├── app/
│   ├── layout.tsx     # Root layout with fonts and metadata
│   ├── page.tsx       # Main landing page
│   └── globals.css    # Global styles and Tailwind imports
├── components/
│   ├── Navigation.tsx     # Header with mobile menu
│   ├── Hero.tsx           # Hero section with CTA
│   ├── DiningSection.tsx  # Reusable dining area component
│   ├── MenuSection.tsx    # Menu display with pricing
│   └── Footer.tsx         # Footer with contact and newsletter
├── public/            # Static assets (images, etc.)
└── ...config files
```

## Site Sections

1. **Hero** - Full-screen introduction with animated elements
2. **Dining Spaces** - Three distinct dining areas with detailed descriptions
3. **Sample Menu** - Seasonal menu items with pricing (Starters, Mains, Desserts)
4. **About** - Restaurant story and philosophy
5. **Contact CTA** - Reservation call-to-action
6. **Footer** - Opening hours, contact info, and newsletter signup

## Customization

### Colors
The site uses a sophisticated color palette based on neutral and amber tones:
- Primary: Amber (600, 500, 700)
- Neutral: Gray scale (50-900)
- Accent: Various amber shades

### Typography
Using Inter font family for clean, modern typography with proper hierarchy.

### Animations
All animations use Framer Motion with `useInView` hooks for performance optimization.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
