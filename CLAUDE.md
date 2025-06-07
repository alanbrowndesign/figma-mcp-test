# Project Context for Claude Code

## Project Overview

This is a Next.js application with a responsive sidebar navigation and card-based layout system.

## Technologies & Versions

### Core Framework

- **Next.js**: Latest (App Router)
- **React**: Latest
- **TypeScript**: Latest

### Styling & UI

- **Tailwind CSS**: v4 (latest)
- **ShadCN/UI**: Latest components
- **Radix UI**: Underlying component primitives

### Fonts

- **Inter**: Primary font (via Next.js Google Fonts)
- **Poppins**: Secondary/heading font (via Next.js Google Fonts)

### Key Features Implemented

- **Responsive Sidebar**: Desktop fixed, mobile overlay with Sheet component
- **Mobile Navigation**: Hamburger menu, backdrop overlay, close button
- **Theme System**: Light/dark mode support

### Component Architecture

- Uses ShadCN/UI component library
- Custom mobile navigation components (`MobileNav`, `MobileOverlay`)
- Platform-specific sidebar (`PlatformSidebar`)
- Card-based layout with subgrid alignment

### State Management

- **Sidebar State**: Context-based with dual mobile/desktop state
- **Theme**: React Context with persistence
- **Mobile Detection**: Custom hook at 768px breakpoint

### File Structure

```
app/
├── layout.tsx          # Root layout with fonts and theme
├── page.tsx           # Home page with subgrid card layout
└── globals.css        # Tailwind imports and custom styles

components/
├── ui/                # ShadCN/UI components
├── mobile-nav.tsx     # Mobile header with hamburger
├── mobile-overlay.tsx # Mobile backdrop overlay
├── platform-sidebar.tsx # Main sidebar component
└── theme-*.tsx        # Theme related components
```

### Key Implementation Notes

- Mobile sidebar uses Sheet component (Radix Dialog primitive)
- ESC key handling is built-in via Radix Dialog
- CSS custom properties for theming
- Responsive design with mobile-first approach
- Font loading optimized via Next.js
- CSS Subgrid for card alignment across responsive breakpoints

### Current Layout Constraints

- Max width: 1840px
- Mobile breakpoint: 768px (md:)
- Sidebar positioning: Fixed on desktop, overlay on mobile
