# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React Capacitor Boilerplate - A modern React application with TypeScript, Vite, TailwindCSS, and Shadcn/UI components.

## Common Commands

```bash
# Install dependencies
pnpm install

# Development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Run tests
pnpm run test

# Run tests in watch mode
pnpm run test:ui

# Type checking
pnpm run typecheck

# Linting
pnpm run lint
```

## Architecture

### Directory Structure
The project follows a Feature-Sliced Design inspired architecture:

- `src/app/` - Application layer with routing setup and providers
  - `AppProviders.tsx` - Wraps the app with all necessary providers
  - `routes.tsx` - Defines application routes using React Router

- `src/pages/` - Page components that correspond to routes
  - Each page is a self-contained component representing a route

- `src/widgets/` - Composed feature components
  - Complex UI components that combine multiple features
  - Business logic specific components

- `src/shared/` - Reusable resources
  - `ui/` - Shadcn/UI components and custom UI components
  - `libs/` - Utility functions and helpers
  - `styles/` - Global styles and Tailwind configuration

- `src/utilites/` - State management and app-wide utilities
  - Uses Zustand for state management
  - Custom hooks for shared logic

### State Management Pattern
Uses Zustand with React Context for scoped state management:

```typescript
// Store creation pattern
const useUIStateStore = create<UIStateStore>((set) => ({
  // state
  // actions
}))

// Context provider pattern for scoped state
const StoreContext = createContext<StoreApi<Store>>(null)
export const useStore = () => useContext(StoreContext)
```

### Component Patterns
- Components use TypeScript with proper interface definitions
- Shadcn/UI components are in `src/shared/ui/`
- Custom hooks follow `use` prefix convention
- Components are exported as default from their files

### Testing Strategy
- Tests are co-located with components (`.test.tsx` files)
- Uses Vitest with React Testing Library
- Test utilities in `src/shared/test-utils.tsx`
- Run single test: `pnpm test path/to/test.test.tsx`

## Key Technologies

- **React 19.1.0** - Latest React with new features like `use()` hook
- **TypeScript** - Strict mode enabled with comprehensive type checking
- **Vite** - Build tool with SWC for fast compilation
- **TailwindCSS** - Utility-first CSS with custom configuration
- **Shadcn/UI** - Component library built on Radix UI primitives
- **Zustand** - Lightweight state management
- **React Router** - Client-side routing
- **Vitest** - Testing framework with jsdom environment

## Configuration Details

### Path Aliases
The project uses `@/` alias for clean imports:
```typescript
import { Button } from '@/shared/ui/button'
```

### TypeScript Configuration
- Strict mode enabled
- Path aliases configured
- Separate configs for app and node environments

### TailwindCSS Setup
- CSS variables for theming (light/dark mode support)
- Custom color palette defined in `tailwind.config.js`
- PostCSS for processing

## Development Guidelines

### Adding New Components
1. Place in appropriate directory based on scope
2. Use TypeScript interfaces for props
3. Follow existing naming conventions
4. Include tests in same directory

### State Management
1. Use Zustand stores for global state
2. Keep state close to where it's used
3. Use React Context for component-scoped state
4. Follow the existing store patterns in `src/utilites/`

### UI Components
1. Prefer Shadcn/UI components from `@/shared/ui/`
2. Components support dark/light themes automatically
3. Use Tailwind classes for styling
4. Follow accessibility best practices (components use Radix UI)

### Testing
1. Write tests for new features
2. Use Testing Library queries appropriately
3. Mock external dependencies
4. Test user interactions, not implementation details

## Mobile Deployment
This is a Capacitor boilerplate designed for mobile deployment:
- Configure native platforms in `capacitor.config.ts`
- Build web assets before syncing to native platforms
- Use Capacitor plugins for native functionality