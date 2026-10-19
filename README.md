<div align="center">

# Furniture Studio

### An elegant furniture inventory management dashboard

A modern React admin workspace for managing furniture products and collections — designed with a **Warm Luxury** visual identity, refined interactions, and a responsive **Light / Dark** experience.

**React 19** · **Vite 7** · **Tailwind CSS 4** · **TanStack Query 5** · **React Router 7**

</div>

---

## Overview

**Furniture Studio** is a front-end administration dashboard for a furniture store. It connects to a training REST API and provides an organized workspace for managing products and categories, with authenticated access and a cohesive, editorial-inspired interface.

The project combines practical inventory management with a design system inspired by premium furniture brands.

## Features

- **Authentication:** Login with email and password, JWT storage, protected dashboard routes, and current-user validation through `/auth/me`.
- **Products:** View all products, view a product by ID, create, edit, and delete products.
- **Categories:** View collections, view a category by ID, create, edit, and delete categories.
- **Data synchronization:** TanStack Query handles loading states, mutations, caching, and query invalidation after changes.
- **Responsive layout:** Persistent desktop sidebar, mobile navigation, and layouts adapted for smaller screens.
- **Light / Dark themes:** Switch between themes with the preference saved locally.
- **Refined interactions:** Focus states, tailored hover effects, page entrances, and scroll-triggered reveals with reduced-motion support.
- **Reusable components:** Shared forms, buttons, tables, page headers, and feedback states.

> **Scope:** This is a furniture-management dashboard, not the customer-facing storefront. It currently supports **login only**, with no registration flow.

## Design System

The interface follows a **Soft Elegant / Warm Luxury** direction, pairing muted warm neutrals with a vivid magenta accent.

| Design token | Color | Purpose |
| --- | --- | --- |
| Signature Magenta | `#C900C1` | Primary actions and highlights |
| Magenta Hover | `#AA00A5` | Light-theme interaction state |
| Dark Plum | `#2F252B` | Luxury sidebar and deep surfaces |
| Warm Taupe | `#B89E90` | Supporting brand accent |
| Warm Ivory | `#FAF8F6` | Light-theme background |
| Midnight Plum | `#171217` | Dark-theme background |

**Typography**
- **Manrope** — interface, navigation, forms, and data tables.
- **Cormorant Garamond** — selective editorial headings and brand accents.

**Motion**
- Purposeful hover feedback on buttons, navigation, and interactive surfaces.
- Smooth page entrances and scroll reveals for page content.
- Respect for `prefers-reduced-motion` to minimize nonessential movement.

Theme variables and most visual treatments are defined in `src/index.css`.

## Tech Stack

| Technology | Role |
| --- | --- |
| React 19 | Component-based user interface |
| Vite 7 | Development tooling and production bundling |
| Tailwind CSS 4 | Utility-first styling |
| React Router 7 | Client-side routing and navigation |
| TanStack Query 5 | Server-state queries, mutations, and cache management |
| Axios | REST API requests and authorization headers |
| CSS variables | Theme tokens and light/dark surfaces |
| IntersectionObserver | Lightweight scroll-reveal interactions |

## Project Structure

```text
src/
├── components/
│   ├── data-table/
│   ├── empty-state/
│   ├── page-header/
│   ├── sidebar/
│   ├── topbar/
│   └── ui/                    # Reusable interface components
├── Hooks/
│   ├── useProducts.js         # Products queries and mutations
│   ├── useCategory.js         # Categories queries and mutations
│   ├── use-login.js           # Login mutation
│   ├── use-me.js              # Current-user query
│   └── useScrollReveal.js     # Scroll-triggered reveal behavior
├── layouts/
│   └── dashboard-layout.jsx  # Protected dashboard shell
├── pages/
│   ├── LoginPage.jsx
│   ├── products/              # List, add, and edit pages
│   └── categories/            # List, add, and edit pages
├── services/
│   ├── api.js                 # Shared Axios client and interceptor
│   └── auth-api.js            # Login and current-user requests
├── utils/
│   └── token-storage.js       # JWT localStorage helpers
├── app.jsx                    # Routes
├── main.jsx                   # React / Query providers
└── index.css                  # Global styles and design tokens
```

## Application Routes

| Route | Page |
| --- | --- |
| `/login` | Sign in |
| `/products` | Product list |
| `/products/add` | Create product |
| `/products/:id/edit` | Edit product |
| `/categories` | Category list |
| `/categories/add` | Create category |
| `/categories/:id/edit` | Edit category |

The root route (`/`) redirects to `/products`. Dashboard routes are protected by the shared layout.

## API Integration

The project currently uses this **training backend**:

```text
https://test-backend.abdulrahman-hares.com/api
```

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/auth/login` | Authenticate and receive an access token |
| `GET` | `/auth/me` | Fetch the authenticated user |
| `GET` | `/products` | List products |
| `GET` | `/products/:id` | Read product details |
| `POST` | `/products` | Create product |
| `PATCH` | `/products/:id` | Update product |
| `DELETE` | `/products/:id` | Delete product |
| `GET` | `/categories` | List categories |
| `GET` | `/categories/:id` | Read category details |
| `POST` | `/categories` | Create category |
| `PATCH` | `/categories/:id` | Update category |
| `DELETE` | `/categories/:id` | Delete category |

Requests made through the shared Axios client automatically include the stored JWT as a Bearer token when one is available. The backend determines whether an operation is authorized and may reject category deletion when products are still assigned to that category.

## Getting Started

**Prerequisite:** Node.js and npm.

```bash
npm install
npm run dev
```

Available scripts:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production bundle |
| `npm run preview` | Preview the production bundle locally |

A valid account on the configured training backend is required to sign in. **Do not commit real credentials or access tokens to the repository.**

## Implementation Notes

- The API base URL is currently configured in `src/services/api.js`, with authentication request URLs in `src/services/auth-api.js`.
- The JWT is stored in browser `localStorage` using the `token` key. Theme preference is stored separately as `furniture-theme`.
- The dashboard checks for an available token and verifies the signed-in user via `GET /auth/me`.
- Data mutations invalidate related TanStack Query cache entries to refresh displayed data.
- Scroll-reveal effects use the dashboard's scroll container and account for content that arrives asynchronously.
- This is an educational/demo integration. Before using it in production, review session security, permissions, error handling, and deployment configuration.

## Project Status

The repository includes the implemented **Products and Categories CRUD** flows, authenticated dashboard access, and the **Warm Luxury** light/dark redesign. Automated end-to-end tests and a production deployment setup are not included in this version.

---

<div align="center">

**Furniture Studio** — *Curated with care.*

</div>
