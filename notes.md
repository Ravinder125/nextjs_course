# Next.js Overview

Next.js is a React framework by Vercel (2016) for building full-stack web applications. It extends React with features like file-based routing, server-side rendering (SSR), static site generation (SSG), and built-in API routes.

**Summary:**  
React powers the UI; Next.js adds structure and tools for scalable, production-ready apps.

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

## Layout File in Next.js

In the App Router, `layout.js` (or `layout.tsx`) wraps pages/components with shared UI (headers, footers, navigation), ensuring consistency across routes.

---

## Typical File Structure (App Router)

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

## Naming Files and Functions in App Router

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



## Using CSS Modules in Next.js

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



What is a "Subset" ?


A subset in fonts refers to a specific group of characters (glyphs) based on a language or script.
For example: 

Latin - includes basic English and Western European characters.
Cyrillic - includes characters for Russian, Bulgarian, etc.
Arabic - includes Arabic script.
Greek, Hebrew, etc.

