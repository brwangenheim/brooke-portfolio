# Copilot Instructions for AI Coding Agents

## Project Overview
This is a personal portfolio web application built with React and Vite. The codebase is organized for clarity and modularity, with a focus on component-driven development and modern frontend practices.

## Architecture & Structure
- **Entry Point:** `src/main.jsx` initializes the React app and mounts it to the DOM.
- **Root Component:** `src/App.jsx` composes all major page sections.
- **Components:** All main sections (Header, Hero, About, Projects, Contact, Footer) are in `src/components/`. Each is a functional React component.
- **Assets:** Static files (images, icons) are in `src/assets/`.
- **Styles:** CSS modules for scoped styles (e.g., `header.module.css`, `hero.module.css`) and global styles in `styles/style.css`.
- **Public Directory:** Contains static files served directly (e.g., `vite.svg`).

## Developer Workflows
- **Build:** Use Vite for fast development and production builds. Run `npm run dev` for local development, `npm run build` for production.
- **Preview:** Use `npm run preview` to serve the production build locally.
- **No Test Suite:** There are no test files or frameworks present. Do not generate test-related code unless requested.
- **Debugging:** Use browser dev tools and Vite's hot module replacement for rapid feedback.

## Patterns & Conventions
- **Component Naming:** Components are PascalCase and reside in `src/components/`. Each component is in its own file.
- **CSS Modules:** Use `.module.css` for component-scoped styles. Import as `styles` and reference classes via `styles.className`.
- **Global Styles:** Use `styles/style.css` for base styles and resets.
- **Props:** Pass props explicitly; avoid implicit context or global state unless adding new features.
- **No Redux/MobX:** State management is local to components. Do not introduce global state libraries unless requested.
- **No Routing:** The app is single-page with no client-side routing.

## External Dependencies
- **Vite:** Used for build and dev server. See `package.json` for dependencies.
- **React:** Main UI library.
- **No API Integration:** There are no backend calls or external APIs in use.

## Examples
- To add a new section, create a new component in `src/components/`, import it in `App.jsx`, and add it to the render tree.
- To style a component, create a `.module.css` file in `src/styles/` and import it in the component file.

## Key Files
- `src/App.jsx`: Main app layout and composition.
- `src/main.jsx`: React entry point.
- `src/components/`: All major UI sections.
- `src/styles/`: CSS modules and global styles.
- `package.json`: Scripts and dependencies.

---

**If any conventions or workflows are unclear or missing, please provide feedback so this guide can be improved.**
