# Project: Event Manager Web App
This project is a web-based Event Manager application built using Next.js App Router, TypeScript, and Tailwind CSS. It helps users find and explore vendors for event services such as photo studios, DJs, caterers, and decorators.

## Goals
- Showcase vendor portfolios with images, services, and reviews
- Allow vendors to view inquiries and manage their portfolio
- Support public album creation with a QR code for sharing
- Include fake API data (no backend for now)
- Build responsive, clean UI using Tailwind CSS

## Stack & Conventions
- Next.js 14+ using the `app/` directory
- TypeScript is used throughout
- Tailwind CSS for styling
- Mock data is stored in `/mock-data/` and used via API routes or direct imports
- Use functional React components
- Folder structure:
  - `app/` for routing
  - `components/` for reusable UI
  - `lib/` for utility/helper functions
  - `mock-data/` for static JSON used as mock APIs

## UI Guidelines
- Responsive design with mobile-first layout
- Cards, grids, and modals for vendor display and interaction
- QR code displayed on album pages
- Dashboard has tab-like navigation

## Code Style
- Use named exports
- Avoid using `any`; prefer typed interfaces
- Keep components small and focused
- Use `use client` only where necessary
- Use Tailwind utility classes for layout and spacing

## Important Features (to guide Copilot)
- Fetch and display vendor portfolios
- Render rating stars and customer reviews
- Create public photo albums with a sharable QR code
- Allow vendor inquiry submission

## Design Theme
- Primary Color: Purple (`purple-600`, `purple-100`, `purple-800`)
- Secondary: White (`bg-white`, `text-white`)
- Responsive mobile-first layout using Tailwind CSS
- Navigation bar with submenu for login/signup
- Header and footer are reused as components in layout.tsx

