# Next.js Notes

A concise guide to Next.js, the React framework for building full-stack web applications.

---

## Table of Contents

1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Companies Using Next.js](#companies-using-nextjs)
4. [When to Use Next.js](#when-to-use-nextjs)
5. [Prerequisites](#prerequisites)
6. [Getting Started](#getting-started)
7. [Common Commands](#common-commands)
8. [Project Structure](#project-structure)
9. [Naming Conventions](#naming-conventions)
10. [Route Groups](#route-groups)
11. [Layout Best Practices](#layout-best-practices)
12. [CSS Modules](#css-modules)
13. [Font Subsets](#font-subsets)
14. [Server and Client Components](#server-and-client-components)

---

## Overview

Next.js is a React framework by Vercel (2016) for building scalable, production-ready web applications. It extends React with features like file-based routing, server-side rendering (SSR), static site generation (SSG), and built-in API routes.

---

## Key Features

- **File-based Routing:** Define routes by adding files to the `pages` or `app` directory.
- **Performance:** Supports SSG and SSR for fast loads and better SEO.
- **API Routes:** Create backend endpoints within your project.
- **SEO Optimization:** Server rendering improves search engine visibility.
- **Full-Stack Capabilities:** Integrate databases, authentication, file uploads, and more.
- **Built-in Optimizations:** Image optimization, custom fonts, metadata, and preloading.

---

## Companies Using Next.js

- Netflix, Hulu, HBO
- Twitch
- TikTok
- OpenAI, Replit, Claude
- TED, Audible
- Nike

---

## When to Use Next.js

Ideal for projects needing SEO, high performance, or a mix of static and dynamic content—such as e-commerce, blogs, marketing sites, and scalable web apps.

---

## Prerequisites

- **Node.js:** 18.18 or higher
- **OS:** macOS, Windows, or Linux

---

## Getting Started

Create a new Next.js app:

```bash
npx create-next-app@latest
```

---

## Common Commands

- `next dev` – Start the development server
- `next build` – Build for production
- `next start` – Run the production server
- `next lint` – Run ESLint checks

---

## Project Structure

Example folder structure for a Next.js project using the App Router:

```
my-next-app/
├── app/
│   ├── layout.js        # Root layout
│   ├── page.js          # Homepage
│   ├── globals.css
│   ├── about/
│   │   ├── layout.js    # About route layout
│   │   └── page.js      # About page
│   ├── dashboard/
│   │   ├── layout.js    # Dashboard layout
│   │   └── page.js      # Dashboard page
│   └── api/
│       └── hello/
│           └── route.js
├── public/
│   └── images/
├── node_modules/
├── package.json
├── next.config.js
└── README.md
```

- `app/`: Main directory for routes and layouts
- `layout.js`: Shared layout for all routes
- `page.js`: Default root page
- `about/`, `dashboard/`: Nested routes with their own layouts/pages
- `api/`: API route handlers
- `public/`: Static assets
- `next.config.js`: Next.js configuration
- `package.json`: Project dependencies and scripts

---

## Naming Conventions

- Creating a folder (e.g., `about/`) alone does **not** create a route. You must add a `page.js` or `page.jsx` file inside the folder.
- Only `page` is a valid file name for route pages (e.g., `about/page.js`).
- File extensions can be `.js`, `.jsx`, `.ts`, or `.tsx`.
- File names must be lowercase (`page.js`, not `Page.js`).
- The exported function inside the file can use PascalCase (`export default function Page() {}`).
- **Recommended:**  
    - File name: `page.jsx`  
    - Function name: `Page`
- The same applies to layout files:  
    - File name: `layout.jsx`  
    - Function name: `Layout`

---

## Route Groups

Route Groups in the Next.js App Router help organize routes without affecting the URL structure. Use them to separate pages logically (e.g., admin, user, auth) without exposing these groups in the final route path.

**Syntax Example:**

```
app/
    (admin)/
        dashboard/
            page.tsx   # /dashboard
    (user)/
        profile/
            page.tsx   # /profile
```

- Route Groups (folders in parentheses) do **not** appear in the URL.

---

## Layout Best Practices

- Only the **root** layout (`app/layout.tsx`) should include `<html>` and `<body>` tags and import global CSS (e.g., `globals.css`).
- **Nested** or **group** layouts (e.g., `about/layout.tsx`, `(users)/layout.tsx`) should **not** include `<html>` or `<body>`. They are for shared UI (like navigation) for specific routes or groups.
- Import global CSS **once** in the root layout, not in nested/group layouts.

---

## CSS Modules

Next.js supports [CSS Modules](https://nextjs.org/docs/pages/building-your-application/styling/css-modules) for component-scoped styles. CSS Modules help avoid style conflicts by generating unique class names.

**How to use:**

1. Create a CSS file with the `.module.css` extension (e.g., `Button.module.css`).
2. Import the module in your component.
3. Apply styles using the imported object.

**Example:**

```css
/* Service.module.css */
.primary {
    background: #0070f3;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
}
```

```jsx
// Service.jsx
import styles from './Service.module.css';

export default function Service() {
    return <service className={styles.primary}>Click me</service>;
}
```

**Notes:**
- CSS Modules work in both the `pages` and `app` directories.
- Use regular `.css` files for global styles (imported in `app/layout.js` or `pages/_app.js`).
- Only files named `*.module.css` are treated as CSS Modules.
- Class names are locally scoped by default.

---

## Font Subsets

A **subset** in fonts refers to a specific group of characters (glyphs) based on a language or script.

- **Latin:** Basic English and Western European characters.
- **Cyrillic:** Characters for Russian, Bulgarian, etc.
- **Arabic:** Arabic script.
- **Greek, Hebrew, etc.:** Other language-specific subsets.

---

## Server and Client Components

By default, layouts and pages are **Server Components**, which let you fetch data and render parts of your UI on the server, optionally cache the result, and stream it to the client. When you need interactivity or browser APIs, use **Client Components** to layer in functionality.

**Summary:**
- All files in the `app` folder are Server Components by default.
- Server and Client components allow you to run logic in each environment depending on your use case.

**Use Client Components when you need:**
- State and event handlers (e.g., `onClick`, `onChange`)
- Lifecycle logic (e.g., `useEffect`)
- Browser-only APIs (e.g., `localStorage`, `window`)
- Custom hooks

**Use Server Components when you need:**
- Fetch data from databases or APIs close to the source
- Use API keys, tokens, and other secrets without exposing them to the client
- Reduce the amount of JavaScript sent to the browser
- Improve First Contentful Paint (FCP) and stream content progressively

**Notes:**
1. Inside a Server Component, you can use both Server or Client Components.
2. Inside a Client Component, all child components are Client Components by default.
3. Server Components are rendered on the server and sent to the browser.
4. Client Components are rendered on both the server and the client (like traditional React components).

**Example:**  
A `<Page>` component (Server Component) fetches data about a post and passes it as props to a `<LikeButton>` (Client Component) that handles client-side interactivity


## Performance Optimization

### First Contentful Paint (FCP)

**First Contentful Paint (FCP)** measures the time from when a user navigates to a page until any part of the page's content is rendered on the screen. "Content" includes text, images (including background images), `<svg>` elements, or non-white `<canvas>` elements.

- **Why it matters:** FCP is a key user-centric metric for measuring perceived load speed.
- [Learn more about FCP](https://web.dev/articles/fcp)

---

### Largest Contentful Paint (LCP)

**Largest Contentful Paint (LCP)** measures how long it takes for the largest visible element (such as a large text block, image, or video) to load and become visible within the viewport.

- **Why it matters:** LCP focuses on the main content of the page, reflecting when the page appears fully loaded to users.
- **Note:** LCP is different from FCP. While FCP measures when the first element is rendered, LCP measures when the largest element is visible.

-**Note:** LCP doesn't stop counting until the largest image or element is seen on-screen.

#### LCP Scoring

- **Good:** 0 to 2.5 seconds
- **Needs Improvement:** 2.6 to 4.0 seconds
- **Poor:** Greater than 4.0 seconds

---
