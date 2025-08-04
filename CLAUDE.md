# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Webflow project that uses a custom JavaScript loading mechanism to enhance the site's functionality. The project is hosted at: https://github.com/igniteagency/igniteagency-webflow-site

## Development Commands

- **Development server**: `bun run dev` - Starts local development server on localhost:3000 with live reloading
- **Production build**: `bun run build` - Creates minified production files in ./dist/prod
- **Package manager**: Use `bun` (preferred) or `npm`/`pnpm` as alternatives
- **Linting**: ESLint is configured but no dedicated lint script - use `npx eslint src/` to run manually
- **TypeScript**: No dedicated typecheck script - use `npx tsc --noEmit` to check types

## Key Files and Their Roles

1. `README.md`: Contains comprehensive setup instructions, development workflow, and production deployment guidelines
2. `bin/build.js`: Handles the build process using esbuild for both development and production environments
3. `src/entry.ts`: The critical entry point script that must be included in Webflow's head section. It manages the dynamic loading of all other scripts
4. `global.d.ts`: Contains global TypeScript definitions and utilities. Always refer this file before importing any library to check if it's already loaded globally
5. `src/constants.ts`: Defines project-wide constants including event names
6. `tsconfig.json`: TypeScript configuration for the project

## Architecture Overview

This is a **Webflow-integrated TypeScript project** that uses a custom script loading system to dynamically inject JavaScript into Webflow sites. The architecture supports both local development and CDN-based production deployment.

### Script Loading System

The core innovation is the dual-environment script loader:

1. The entry script (`entry.js`) is loaded first via jsDelivr CDN:
   ```html
   <script src="https://cdn.jsdelivr.net/gh/igniteagency/igniteagency-webflow-site/dist/prod/entry.js"></script>
   ```

2. Additional scripts are registered using `window.JS_SCRIPTS.add()`:
   ```html
   <script>
     window.JS_SCRIPTS.add('path/to/script');
   </script>
   ```

3. Scripts can be served from either:
   - Production (jsDelivr CDN)
   - Development (localhost:3000)

- **Environment switching**: Use `window.setScriptsENV('dev'|'prod')` in browser console to switch environments
- **Debug mode**: Use `window.DEBUG()` for debug logging, toggle with `window.setDebugMode(true/false)`
- **Script execution order**: Scripts load asynchronously, then emit `SCRIPTS_LOADED_EVENT` when ready

### Build System

- **esbuild-based**: Custom build script in `bin/build.js` handles bundling
- **File targeting**: Builds all `.ts` files in `src/`, `src/components/**`, and `src/pages/**`
- **Output locations**: `./dist/dev` (development) and `./dist/prod` (production)
- **Development**: Serves files locally with sourcemaps and no minification
- **Production**: Minified ES2017-compatible bundles deployed to jsDelivr CDN

### Code Organization

- **Global initialization**: `src/global.ts` initializes all components after Webflow loads
- **Page-specific code**: `src/pages/` contains scripts for specific page types
- **Reusable components**: `src/components/` contains UI component logic
- **Utilities**: `src/utils/` for helper functions and external script loading
- **Path aliases**: Uses `$utils/*`, `$components/*`, `$src/*` for clean imports

### Development Workflow

1. Scripts are first loaded via external CDN in Webflow `<head>`
2. For local development, run `bun run dev` and switch to dev mode in browser console
3. Use debugging system via `window.setDebugMode(true)` and `window.DEBUG()` function
4. Components wait for `SCRIPTS_LOADED_EVENT` before initialization
5. All interactions integrate with Webflow's design system and animations

### Script Execution Pattern

Use the event listener for dependent code:
```javascript
import { SCRIPTS_LOADED_EVENT } from './constants';
window.addEventListener(SCRIPTS_LOADED_EVENT, () => {
  // Execute after all scripts are loaded
});
```

### Key Dependencies

- **GSAP**: Animation library (loaded externally by Webflow CDN - keeps bundles lean and ensures global availability)
- **Lenis**: Smooth scrolling implementation
- **Swiper**: Carousel/slider functionality  
- **Matter.js**: Physics engine for interactive elements
- **Debounce**: Performance optimization for event handlers

**Important**: Always check `global.d.ts` before importing any library to see if it's already loaded globally.

### Production Deployment

- Merge to `main` branch triggers auto-versioning and CDN deployment
- jsDelivr serves files with 12-hour cache purge cycles
- Use commit message tags (`#major`, `#minor`) to control version bumping
- CDN URLs follow pattern: `https://cdn.jsdelivr.net/gh/igniteagency/igniteagency-webflow-site/dist/prod/`
- Repository must remain public for jsDelivr access
- Manual purging available at jsdelivr.com/tools/purge

## Important Notes & Best Practices

### Common Issues and Solutions

1. **Scripts not loading in dev mode:**
   - Verify localhost:3000 is running
   - Check console for connection errors
   - Verify script paths are correct

2. **Production updates not reflecting:**
   - Wait 10 minutes after new tag
   - Use jsDelivr purge tool
   - Verify merge to main was successful

### Development Best Practices

- Always test script loading in both dev and prod environments
- Test thoroughly before merging to main
- Debug mode and script environment preferences are stored in localStorage
- Performance is the feature - choose the most performant and simplest implementation

## TypeScript Configuration

- **Configuration**: Extends `@finsweet/tsconfig` for Webflow best practices
- **Global types**: Defined in `global.d.ts` including GSAP, Webflow, and custom window extensions
- **Path mapping**: Configured for clean imports across the codebase
- **Preferences**: `useExplicitAny: false`, `preferConstOverLet: true`, `preferEarlyReturn: true`, `useExplicitReturnType: true`
- **Import organization**: Third-party libraries → Components (`$components`) → Constants & utils (`$src`)

## Code Style Guidelines

### General Patterns
- **Max line length**: 100 characters
- **Selectors**: Extract DOM selectors to the top of each file for quick edits
- **Globals**: Shared libraries in global.ts are exposed via window.X; do not import them again
- **Functions**: Keep them small & single-purpose
- **Error handling**: Use console.debug for granular logs and graceful degradations

### Naming Conventions
- **UPPER_SNAKE**: for constants
- **camelCase**: for variables/functions
- **PascalCase**: for types

### Performance & Animation
- **Animations**: Leverage GSAP for all animations with clear ease and duration values
- **DOM Manipulation**: Cache elements and use typed assertions—querySelector defaults to HTMLElement via global.d.ts
- **Events**: Fire logic that depends on script loading with SCRIPTS_LOADED_EVENT from constants.ts

### Comment Guidelines
1. Comment **why**, not **what**—the code should be self-explanatory
2. Only document **non-obvious** logic or performance trade-offs
3. Reserve **JSDoc** for public APIs & complex types
4. Mark temporary solutions with `TODO:`

## Webflow Integration Rules

- Use the **webflow MCP** server for all site interactions
- **Always fetch the latest site data** prior to mutations
- Confirm **all content changes** with the user **before** publish
- Provide robust **error handling** around Webflow API calls
- **Cache** responses where sensible to reduce API chatter
- **Preview** every change before publishing to production
- Maintain a **backup** before bulk updates
- **Log** every modification for an audit trail

## Project Memories and Notes

- No need to run build, we can test without this step