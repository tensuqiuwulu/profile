# Copilot Instructions for tensuqiuwulu Next.js Project

## Architecture Overview

This is a modern Next.js 15 project that uses:
- **Next.js App Router**: Uses the `/src/app` directory structure with React Server Components (RSC).
- **TypeScript**: Fully typed codebase with custom path aliases (`@/` points to `./src/`).
- **TailwindCSS v4**: Styling with the newer version that uses `@theme inline` and CSS variables.
- **Shadcn UI**: Uses the "new-york" style with emerald as base color (see `components.json`).
- **Turbopack**: Development uses Turbopack for faster builds (`--turbopack` flag in dev script).

## Key Developer Workflows

### Development Commands
```bash
# Start development server with turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

### Project Structure
- `/src/app`: Page components and routing following Next.js App Router conventions
- `/src/lib`: Utility functions
- `components.json`: Shadcn UI configuration

## Project-Specific Conventions

### CSS & Styling
- Uses TailwindCSS v4 with the newer syntax including `@theme inline` and custom variants
- Fonts: Uses Geist and Geist Mono from Google Fonts (defined in `layout.tsx`)
- CSS Variables: Custom theme variables defined in `globals.css`
- Utility function: Use the `cn()` function from `/src/lib/utils.ts` for merging Tailwind classes

### Component Patterns
- React Server Components (RSC) are enabled by default
- App Router routing using the file-based routing system
- Image optimization using Next.js Image component with priority attribute for above-the-fold images

### Imports & Aliases
The project uses the following path aliases (defined in `tsconfig.json`):
- `@/components`: UI components
- `@/lib`: Utility functions
- `@/components/ui`: Shadcn UI components
- `@/hooks`: React hooks

## External Dependencies

- **UI Framework**: Shadcn UI with class-variance-authority for component styling
- **Icons**: Lucide React for icons (`lucide-react`)
- **CSS Utilities**: 
  - `clsx` and `tailwind-merge` for class name management
  - `tw-animate-css` for animations

## Integration Points

- Font integration happens in `layout.tsx` with Google Fonts
- Default page structure is defined in `app/page.tsx`
- Utility functions in `src/lib/utils.ts` provide common functionality like class merging

## Best Practices

- Follow the established CSS variable naming convention (`--color-*`, `--radius-*`)
- Use the `cn()` utility function for composing CSS classes
- When adding new routes, follow the App Router conventions
- Use TypeScript's strict mode (enabled in tsconfig)
- Leverage Server Components when possible (default in app directory)
