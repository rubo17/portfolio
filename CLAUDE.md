# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website built with Astro 5, styled to resemble a VS Code interface. The site uses React components for interactive elements and Tailwind CSS for styling. It's deployed to GitHub Pages at `https://rubo17.github.io/portfolio/`.

## Development Commands

All commands run from the project root:

- `npm install` - Install dependencies
- `npm run dev` - Start dev server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages (builds and pushes to gh-pages branch)
- `npm run astro ...` - Run Astro CLI commands (e.g., `npm run astro check`)

## Architecture

### VS Code UI Theme

The site mimics VS Code's interface with these key architectural elements:

1. **Layout System** (`src/layouts/Layout.astro`)
   - Main layout wrapper with Header, Footer, and content area
   - Uses `client:load` directive for React components requiring interactivity
   - Fixed header/footer with scrollable content area

2. **Panel System** (side navigation)
   - `PanelSwitcher.jsx` - Main React component managing panel state
   - `SideBar.jsx` - Icon-based navigation (Explorer, Search, Source Control, Debug, Extensions)
   - Individual panel components in `src/components/side_menu/`
   - Active panel tracked via React state (0-4 index)

3. **Tab Navigation** (`MenuTabs.jsx`)
   - VS Code-style tabs at top of content area
   - Manages multiple open "files" (though currently shows single "About me" tab)
   - Supports tab closing with minimum one tab enforcement

### Content Structure

Portfolio sections in `src/components/about_me/`:
- `Hero.astro` - Landing section
- `AboutMe.astro` - Personal info
- `Exprerience.astro` - Work experience
- `Habilidades.astro` - Skills showcase
- `Proyectos.astro` - Projects display with `CardProyect.astro` components
- `Contacto.astro` - Contact information

All sections use the `LayoutContent.astro` wrapper for consistent section styling with accent-colored headers.

### Technology Icons

Icon components in `src/components/icons/` represent various technologies (React, Vue, Astro, etc.). Mix of `.astro` and `.jsx` files depending on interactivity needs.

## Styling

### Tailwind Configuration

Custom color palette defined in `tailwind.config.js`:
- `main: #181818` - Primary background (VS Code dark theme)
- `secondary: #1F1F1F` - Secondary background
- `primaryText: #C4C8D1` - Main text color
- `accent: #7FDBFF` - Accent color for highlights/active states
- `skillColor: #292939` - Skill badge background

Use these semantic color names instead of arbitrary hex values.

### Global Styles

`src/styles/global.css` contains global CSS. Layout includes custom scrollbar hiding for clean VS Code aesthetic.

## Configuration

### Astro Config (`astro.config.mjs`)

Site configured for GitHub Pages deployment:
- `site: "https://rubo17.github.io"`
- `base: "/portfolio/"` - Important: all internal links and assets must respect this base path
- Integrations: Tailwind CSS and React

Always account for the `/portfolio/` base path when working with:
- Asset paths (use `/portfolio/` prefix)
- Internal navigation links
- API endpoints or data fetching

## React Integration

React components use `.jsx` extension and require `client:load` directive in Astro files for hydration. Key interactive components:
- `PanelSwitcher` - Panel state management
- `MenuTabs` - Tab navigation
- `SideBar` - Icon navigation

Non-interactive presentational components use `.astro` files for better performance.

## Page Structure

Pages in `src/pages/`:
- `index.astro` - Main landing page (About me)
- `aiudo-formacion.astro` - Project page
- `longlife.astro` - Project page

Each page uses the main `Layout.astro` wrapper.
