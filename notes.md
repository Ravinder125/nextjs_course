# Next.js Overview

Next.js is a React framework created by Vercel in 2016 for building full-stack web applications. It extends React with features such as file-based routing, server-side rendering (SSR), static site generation (SSG), and built-in API routes.

**Summary:**  
React powers the UI, while Next.js adds structure and tools for scalable, production-ready apps.

---

## Key Features

- **File-based Routing:** Define routes by adding files to the `pages` or `app` directory.
- **Performance:** Supports SSG and SSR for fast loads and better SEO.
- **API Routes:** Create backend endpoints within your project.
- **SEO Optimization:** Server rendering improves search engine visibility.
- **Full-Stack Capabilities:** Integrate databases, authentication, file uploads, and more.
- **Built-in Optimizations:** Includes image optimization, custom fonts, metadata, and preloading.

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

Next.js is ideal for projects needing SEO, high performance, or a mix of static and dynamic content—such as e-commerce, blogs, marketing sites, and scalable web apps.

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
│   ├── layout.js        Root layout
│   ├── page.js          Homepage
│   ├── globals.css
│   ├── about/
│   │   ├── layout.js    About route layout
│   │   └── page.js      About page
│   ├── dashboard/
│   │   ├── layout.js    Dashboard layout
│   │   └── page.js      Dashboard page
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


What to name file under folder like about, services etc?

1. Only creating folder won't create a route for about.
2. We can name service, about etc page in about or in other folder 
3. Only page name is valid here.
4. extension like .js/jsx what to use? Actually we can use both here but file name cannot in Sentence case like "Page.js"/"page.jsx" but inside the file you can name same here the function to export default Senctenc case like "Page"/"page"
5. What is better for name 
    file name - page.jsx
    function name- Page
6. Same for layout file



What is Route Groups ?
In Next.js App Router, Route Groups are a way to organize your routes without affecting the URL structure. This helps separate pages logically (like admin, user, auth, etc.) without showing these groups in the final route path.

Route Groups don't affect the final URL path.

Syntax:

app/
    (admin)/
        dashboard/
            page.tsx -> /dashboard
    (user)/
        profile/
            page.tsx -> /profile        