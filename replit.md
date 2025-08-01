# Bharath Shetty Portfolio Website

## Overview

This is a full-stack personal portfolio website for Bharath Shetty, a Senior Instructional Designer & eLearning Developer. The application features a modern, dark futuristic design with neon accents, glassmorphism effects, and smooth animations. Built with React, TypeScript, and Express, it showcases professional experience, services, and provides a contact form for potential clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI components with shadcn/ui
- **Animations**: Framer Motion for smooth transitions and scroll animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Neon serverless connection
- **ORM**: Drizzle ORM for type-safe database operations
- **Email**: Nodemailer for contact form notifications
- **Session Storage**: PostgreSQL-backed sessions with connect-pg-simple

### Design System
- **Theme**: Dark mode with neon green (#00ff87) and orange (#ffb84d) accents
- **Typography**: Custom font stack with gradient text effects
- **Effects**: Glassmorphism cards, neon glow hover effects, and smooth animations
- **Layout**: Responsive grid system with mobile-first approach

## Key Components

### Core Pages
- **Hero Section**: Full-screen landing with animated background and CTAs
- **About Me**: Professional bio with tool showcase grid
- **Services**: Six service cards with hover effects (Instructional Design, eLearning Development, etc.)
- **Experience**: Timeline-based professional history
- **Portfolio**: Project showcase with filtering and modal views
- **Contact**: Form with email notifications and social media links

### UI Components
- **Navigation**: Sticky header with smooth scroll navigation
- **Theme Provider**: Dark/light mode switching capability
- **Toast Notifications**: User feedback for form submissions
- **Responsive Design**: Mobile-optimized navigation and layouts

### Database Schema
- **Users Table**: Basic user management (id, username, password)
- **Contacts Table**: Contact form submissions (id, name, email, subject, message, createdAt)

## Data Flow

### Contact Form Flow
1. User fills out contact form on frontend
2. Form data validated using Zod schemas
3. Data sent to `/api/contact` endpoint via POST request
4. Server validates and stores contact in database
5. Email notification sent to Bharath's email
6. Success/error response sent back to frontend
7. Toast notification shown to user

### Content Management
- Static content managed through React components
- Dynamic content (contact messages) stored in PostgreSQL
- Admin access to view all contact submissions via `/api/contacts`

## External Dependencies

### Frontend Libraries
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Animations**: Framer Motion, Embla Carousel
- **Forms**: React Hook Form with Hookform Resolvers
- **HTTP Client**: TanStack Query for API calls
- **Utilities**: clsx, class-variance-authority, date-fns

### Backend Libraries
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless, connect-pg-simple
- **Email**: Nodemailer for SMTP email sending
- **Validation**: Zod schemas with drizzle-zod integration
- **Development**: tsx for TypeScript execution, esbuild for production

### Development Tools
- **Build System**: Vite with React plugin
- **TypeScript**: Full type safety across frontend and backend
- **Database Migrations**: Drizzle Kit for schema management
- **Replit Integration**: Vite plugins for Replit development environment

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static files in `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Setup**: Drizzle migrations applied to PostgreSQL instance

### Environment Configuration
- **Development**: Uses tsx for hot reloading and Vite dev server
- **Production**: Serves static files from Express with compiled backend
- **Database**: Neon PostgreSQL with connection pooling
- **Email**: SMTP configuration for contact form notifications

### Key Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment mode (development/production)
- `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`: Email configuration

### Performance Optimizations
- Static asset optimization through Vite
- Database connection pooling with Neon
- Responsive image loading and lazy loading
- CSS-in-JS with Tailwind for minimal bundle size
- Tree-shaking and code splitting for optimal loading