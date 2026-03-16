# Baki Yılmaz Website - Agent Guide

> This file is intended for AI coding agents working on this project. It contains essential information about the project structure, technology stack, and development conventions.

## Project Overview

**Baki Yılmaz Website** is a professional personal trainer/boxing coach website built with modern web technologies. The website showcases the trainer's services, location, and customer testimonials with a distinctive brutalist design aesthetic.

- **Language**: Turkish (content), English (code comments)
- **Website Type**: Single-page application (SPA) with client-side routing
- **Design Philosophy**: Brutalism + Martial Arts Aesthetic

## Technology Stack

### Frontend
- **Framework**: React 19.2.1 with TypeScript 5.6.3
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.14 with CSS variables
- **UI Components**: shadcn/ui (New York style, non-RSC)
- **Animation**: Framer Motion 12.23.22
- **Routing**: wouter 3.3.5 (lightweight React router)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

### Backend
- **Runtime**: Node.js with Express 4.21.2
- **Purpose**: Static file serving and SPA fallback routing

### Package Management
- **Manager**: pnpm 10.4.1 (specified in `packageManager` field)
- **Lock File**: `pnpm-lock.yaml`

## Project Structure

```
.
├── client/                 # Frontend source code
│   ├── index.html         # HTML entry point
│   ├── src/
│   │   ├── App.tsx        # Root React component with routing
│   │   ├── main.tsx       # React entry point
│   │   ├── index.css      # Global styles with Tailwind v4
│   │   ├── const.ts       # Client-side constants
│   │   ├── components/    # React components
│   │   │   ├── ui/        # shadcn/ui components (50+ components)
│   │   │   ├── Carousel.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── ManusDialog.tsx
│   │   │   └── Map.tsx    # Google Maps integration
│   │   ├── contexts/      # React contexts
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/         # Custom React hooks
│   │   │   ├── useComposition.ts  # IME composition handling
│   │   │   ├── useMobile.tsx      # Mobile breakpoint detection
│   │   │   └── usePersistFn.ts    # Persisted callback hook
│   │   ├── lib/           # Utility functions
│   │   │   └── utils.ts   # cn() helper for Tailwind classes
│   │   └── pages/         # Page components
│   │       ├── Home.tsx   # Main landing page
│   │       └── NotFound.tsx
│   └── public/            # Static assets
├── server/                # Backend code
│   └── index.ts           # Express server entry point
├── shared/                # Shared code between client/server
│   └── const.ts           # Shared constants (COOKIE_NAME, etc.)
├── patches/               # pnpm patches
│   └── wouter@3.7.1.patch
├── dist/                  # Build output (generated)
│   ├── public/            # Vite build output
│   └── index.js           # Compiled server
├── .manus-logs/           # Debug logs (development)
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── components.json        # shadcn/ui configuration
├── .prettierrc            # Prettier formatting rules
└── package.json           # Dependencies and scripts
```

## Build and Development Commands

```bash
# Install dependencies
pnpm install

# Development server (Vite dev server with HMR)
pnpm dev
# Runs on http://localhost:3000 by default

# Type check (no emit)
pnpm check

# Build for production
pnpm build
# 1. Builds client to dist/public/
# 2. Compiles server to dist/index.js

# Start production server
pnpm start
# Runs the compiled Express server from dist/

# Preview production build
pnpm preview

# Format code with Prettier
pnpm format
```

## Design System

### Color Palette
- **Primary/Accent**: Red (#DC143C / oklch(0.55 0.25 27)) - boxing theme
- **Background**: Near-black (#0A0A0A / oklch(0.08 0 0))
- **Foreground**: White (#FFFFFF / oklch(0.98 0 0))
- **Card**: Dark gray (oklch(0.12 0 0))
- **Muted**: Medium gray (oklch(0.22 0 0))
- **Border**: Dark border (oklch(0.25 0 0))

### Typography
- **Display Font**: Oswald (bold, uppercase, tight tracking)
- **Body Font**: Inter (regular/medium weights)
- **Base**: All headings use `font-display` with uppercase transformation

### Key Design Elements
- Zero border radius (`--radius: 0rem`) for sharp, geometric look
- Diagonal clip-path sections (`.diagonal-top`, `.diagonal-bottom`)
- High contrast dark theme (default)
- Sharp animations (fast fade-in-up effects)

## Code Style Guidelines

### TypeScript
- Strict mode enabled
- ESNext modules with bundler resolution
- Path aliases: `@/*` maps to `./client/src/*`, `@shared/*` maps to `./shared/*`

### Formatting (Prettier)
- Semi-colons: required
- Quotes: Double quotes
- Trailing commas: ES5 style
- Print width: 80 characters
- Tab width: 2 spaces (spaces, not tabs)
- Arrow function parentheses: avoid when possible
- End of line: LF

### Component Conventions
- Functional components with TypeScript
- Props interfaces defined inline or at top of file
- Use `cn()` utility for conditional Tailwind classes
- shadcn/ui components use `class-variance-authority` for variants

### CSS Conventions
- Tailwind v4 with `@import` syntax (not directives)
- CSS variables for theming (defined in `:root` and `.dark`)
- Custom animations in `@layer components`
- No arbitrary values; use design system tokens

## Testing

This project currently has **no automated tests configured**. Testing infrastructure is available via Vitest (installed as dev dependency) but not actively used.

To add tests:
1. Create test files with `.test.ts` or `.test.tsx` extension
2. Exclude from tsconfig.json (already configured)
3. Run with `vitest`

## Environment Variables

The following environment variables are expected (typically from `.env` file, not committed):

**Client-side (VITE_ prefix)**:
- `VITE_FRONTEND_FORGE_API_KEY` - API key for Google Maps proxy
- `VITE_FRONTEND_FORGE_API_URL` - Base URL for API services
- `VITE_OAUTH_PORTAL_URL` - OAuth portal base URL
- `VITE_APP_ID` - Application ID for OAuth
- `VITE_ANALYTICS_ENDPOINT` - Analytics script endpoint
- `VITE_ANALYTICS_WEBSITE_ID` - Analytics website identifier

**Server-side**:
- `NODE_ENV` - Set to `production` for production builds
- `PORT` - Server port (defaults to 3000)

## Key Dependencies Notes

### shadcn/ui
- Using "New York" style (not "Default")
- Non-RSC mode (regular React components)
- Components installed in `client/src/components/ui/`
- Uses Radix UI primitives under the hood

### Tailwind CSS v4
- New import-based configuration (`@import "tailwindcss"`)
- Theme configuration via `@theme inline` block
- CSS-first configuration (no tailwind.config.js)

### Wouter Router
- Lightweight alternative to React Router
- Uses `<Route>` and `<Switch>` components
- Patched via pnpm for specific behavior

## Security Considerations

- Static file serving restricted in production (no dotfiles)
- Client-side routing fallback handled by Express
- Environment variables with `VITE_` prefix are exposed to client
- No authentication system currently implemented (placeholder OAuth flow in const.ts)

## Deployment

### Production Build Process
1. `vite build` - Bundles client to `dist/public/`
2. `esbuild server/index.ts` - Compiles server to `dist/index.js`
3. `NODE_ENV=production node dist/index.js` - Starts production server

### Static Hosting
The built application can be served from any static host:
- `dist/public/` contains the SPA assets
- Ensure fallback to `index.html` for client-side routing

## Development Notes

### Manus Debug Collector
The Vite config includes a custom plugin that:
- Collects browser console logs, network requests, and session events
- Writes to `.manus-logs/` directory in development
- Auto-trims logs when exceeding 1MB per file
- Injected automatically in development mode only

### Google Maps Integration
The Map component (`client/src/components/Map.tsx`) uses:
- Frontend Forge proxy for Google Maps API
- Loads script dynamically via `loadMapScript()`
- Uses AdvancedMarkerElement for markers
- Comprehensive documentation in component comments

### Theme System
- Dark mode is default (`defaultTheme="dark"` in App.tsx)
- ThemeProvider supports optional theme switching (currently disabled)
- CSS variables update automatically via `document.documentElement` class toggling
