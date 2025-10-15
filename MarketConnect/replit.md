# Marketplace Application

## Overview

This is a Facebook Marketplace-inspired local buying and selling platform built with React, Express, and TypeScript. The application enables users to browse, search, filter, and list items for sale in their local community. It features a clean, image-first design emphasizing product discovery with minimal friction.

The application follows a modern full-stack architecture with a React frontend using shadcn/ui components, an Express backend with TypeScript, and Drizzle ORM for database interactions. Currently, the backend uses in-memory storage with provisions for PostgreSQL database integration via Drizzle.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- React 18 with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management

**UI Component System**
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Class Variance Authority (CVA) for component variants
- Design system inspired by Facebook Marketplace with focus on visual clarity and familiar patterns

**State Management**
- React Query for server state and caching
- Local component state with React hooks
- No global state management library (Redux/Zustand) - state is colocated

**Key Design Patterns**
- Component composition with reusable UI primitives
- Controlled vs uncontrolled component patterns for forms
- Dialog/modal patterns for listing creation and product details
- Responsive design with mobile-first approach

### Backend Architecture

**Server Framework**
- Express.js with TypeScript
- ESM (ES Modules) for modern JavaScript
- Custom middleware for request logging and error handling

**Storage Strategy**
- **Current**: In-memory storage implementation (MemStorage class)
- **Designed for**: PostgreSQL via Drizzle ORM
- Repository pattern with IStorage interface for database abstraction
- Allows easy swapping between in-memory and database storage

**API Structure**
- RESTful API design (routes prefixed with `/api`)
- Routes registered in `server/routes.ts`
- Storage operations abstracted through IStorage interface
- Currently minimal backend implementation - designed for expansion

**Development vs Production**
- Development: Vite middleware for HMR and dev server
- Production: Static file serving from built assets
- Environment-aware configuration

### Database Design

**ORM & Schema**
- Drizzle ORM with PostgreSQL dialect
- Schema definitions in `shared/schema.ts` (shared between client/server)
- Drizzle-Zod integration for runtime validation

**Current Schema**
- Users table with username/password authentication structure
- UUID primary keys with PostgreSQL `gen_random_uuid()`
- Schema designed for extension (listings, categories, etc. to be added)

**Migration Strategy**
- Drizzle Kit for schema migrations
- `db:push` command for development schema synchronization
- Migration files stored in `/migrations` directory

### External Dependencies

**UI Component Libraries**
- Radix UI primitives (@radix-ui/*) - Accessible, unstyled component primitives
- Embla Carousel for image carousels
- Lucide React for icons
- React Hook Form with Zod resolvers for form validation

**Database & Backend**
- @neondatabase/serverless - Neon PostgreSQL serverless driver
- Drizzle ORM - Type-safe SQL query builder
- connect-pg-simple - PostgreSQL session store for Express (configured but not actively used)

**Development Tools**
- Replit-specific plugins for Vite (runtime error overlay, dev banner, cartographer)
- esbuild for server-side bundling in production

**Utility Libraries**
- date-fns for date manipulation
- clsx + tailwind-merge for className management
- nanoid for unique ID generation

**Design System**
- Custom CSS variables for theming (light/dark mode support)
- Inter font family from Google Fonts
- Facebook Marketplace color palette (primary blue: 216 80% 50%)
- Elevation system using rgba overlays for hover/active states

**Asset Management**
- Static assets stored in `attached_assets` directory
- Vite alias `@assets` for asset imports
- Stock images used for mock data (to be replaced with user uploads)