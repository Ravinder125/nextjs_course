This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



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
15. [Performance Optimization](#performance-optimization)
16. [Dynamic Routing](#dynamic-routing)
17. [React use Hook](#react-use-hook)

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

Use Next.js for projects that require SEO, high performance, or a mix of static and dynamic content—such as e-commerce, blogs, marketing sites, and scalable web apps.

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
    return <button className={styles.primary}>Click me</button>;
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
A `<Page>` component (Server Component) fetches data about a post and passes it as props to a `<LikeButton>` (Client Component) that handles client-side interactivity.

---

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
- LCP doesn't stop counting until the largest image or element is seen on-screen.

#### LCP Scoring

- **Good:** 0 to 2.5 seconds
- **Needs Improvement:** 2.6 to 4.0 seconds
- **Poor:** Greater than 4.0 seconds

---

## Dynamic Routing

Dynamic routing in Next.js allows you to create pages with variable path segments, making it easy to handle routes based on dynamic data (such as user IDs, blog slugs, etc.).

### How It Works

- **Dynamic Segments:**  
    To define a dynamic route, wrap the segment name in square brackets in your file or folder name:  
    - Example: `pages/blog/[slug].js` or `app/blog/[slug]/page.js`
- **Multiple Dynamic Segments:**  
    You can nest dynamic segments for more complex routes:  
    - Example: `pages/users/[userId]/posts/[postId].js`
- **Catch-All Routes:**  
    Use `[...param]` for catch-all routes (matches multiple segments):  
    - Example: `pages/docs/[...slug].js`

### Accessing Route Parameters

- **App Router:**  
    - **useParams hook (Client Components only):**  
        Use the `useParams` hook from `next/navigation` to access dynamic parameters in Client Components:
        ```js
        import { useParams } from 'next/navigation';

        export default function BlogPost() {
            const params = useParams();
            // params.slug
        }
        ```
        > **Note:** `useParams` cannot be used in Server Components.
    - **Props in Server Components:**  
        In Server Components (e.g., `app/blog/[slug]/page.js`), route parameters are available as props:
        ```js
        export default function BlogPost({ params }) {
            // params.slug
        }
        ```
- **Pages Router:**  
    - **useRouter hook:**  
        Access parameters via `useRouter`:
        ```js
        import { useRouter } from 'next/router';

        export default function BlogPost() {
            const router = useRouter();
            // router.query.slug
        }
        ```
    - **Props in Data Fetching Methods:**  
        Access parameters in `getServerSideProps` or `getStaticProps`:
        ```js
        export async function getStaticProps({ params }) {
            // params.slug
            return { props: { ... } };
        }
        ```

### Example Structure

```
app/
    blog/
        [slug]/
            page.js   # Handles /blog/my-first-post, /blog/another-post, etc.
```

### Use Cases

- Blog posts (`/blog/[slug]`)
- User profiles (`/users/[userId]`)
- Product pages (`/products/[productId]`)

### Notes

- Dynamic routes can be statically generated (SSG) or server-side rendered (SSR).
- Use `getStaticPaths` (Pages Router) or `generateStaticParams` (App Router) to pre-render dynamic routes at build time.

[Next.js Dynamic Routes Documentation](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)

---

## React `use` Hook

The React `use` hook (experimental) allows you to read the value of a promise or context directly in a component, simplifying data fetching and context usage. For dynamic routing, it enables you to access asynchronous data without explicitly using `async` functions or `await`.

**Example:**

```js
// app/blog/[slug]/page.js
import { use } from 'react';

async function getPost(slug) {
    const res = await fetch(`https://api.example.com/posts/${slug}`);
    if (!res.ok) throw new Error('Failed to fetch post');
    return res.json();
}

export default function BlogPost({ params }) {
    const post = use(getPost(params.slug));
    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </article>
    );
}
```

> **Note:** The `use` hook is experimental and only available in Server Components.

## What is `searchParams`?

In Next.js (App Router), `searchParams` is an optional prop available in Server Components that lets you read query string parameters directly from the URL. This is especially useful for building features like filtering, sorting, and pagination—common requirements in e-commerce applications.

For example, given a URL like `/products?category=shoes&sort=price_asc&page=2`, `searchParams` allows you to access the values of `category`, `sort`, and `page` within your component.

### Use Cases in E-commerce

- **Filtering:** Show products by category, brand, price range, etc.
- **Sorting:** Sort products by price, popularity, or rating.
- **Pagination:** Navigate between pages of product listings.
- **Search:** Display results based on user queries.

### Example Usage Table

| URL Example                                         | `searchParams` Value                                 | Description                       |
|-----------------------------------------------------|------------------------------------------------------|-----------------------------------|
| `/products?category=shoes`                          | `{ category: 'shoes' }`                              | Filter by category                |
| `/products?sort=price_desc`                         | `{ sort: 'price_desc' }`                             | Sort by price (descending)        |
| `/products?page=3`                                  | `{ page: '3' }`                                      | Show page 3 of results            |
| `/products?category=shirts&sort=rating&page=2`      | `{ category: 'shirts', sort: 'rating', page: '2' }`  | Filter, sort, and paginate        |
| `/products?search=running+shoes`                    | `{ search: 'running shoes' }`                        | Search for "running shoes"        |

**Example usage in a Server Component:**

```js


export default Products = async ({ searchParams }) => {
    const { category = "all", sort, page = 1 } = await searchParams;
    return (
        <>
            <div>category: {category}</div>
            <div>sort: {sort}</div>
            <div>page: {page}</div>
        </>
    )
}

```

> `searchParams` makes it easy to build dynamic, user-friendly interfaces that respond to changes in the URL.



## Catch-all Segments

Catch-all segments in Next.js let you match and handle routes with an arbitrary number of nested path segments, making it easy to build flexible, deeply nested URL structures without manually defining every possible route.

### Syntax

- Use `[...param]` for catch-all routes (matches zero or more segments).
- Use `[[...param]]` for optional catch-all routes (matches zero or more segments, including none).

### Example: Blog with Nested Categories

Suppose you want to support URLs like:

- `/blog`
- `/blog/technology`
- `/blog/technology/javascript`
- `/blog/technology/javascript/es6`

Instead of creating separate files for each level, use a catch-all segment:

```
app/
    blog/
        [...slug]/
            page.js
```

**Accessing the segments:**

```js
// app/blog/[...slug]/page.js

export default function BlogCategoryPage({ params }) {
    const { slug } = params; // slug is an array of segments or undefined
    return (
        <div>
            <h1>Blog Category</h1>
            <p>Segments: {slug ? slug.join(' / ') : 'Home'}</p>
        </div>
    );
}
```

**How it works:**

- `/blog` → `slug` is `undefined`
- `/blog/technology` → `slug` is `['technology']`
- `/blog/technology/javascript` → `slug` is `['technology', 'javascript']`

### Example: E-commerce Product Catalog

Support deeply nested categories:

- `/shop`
- `/shop/clothing`
- `/shop/clothing/men`
- `/shop/clothing/men/shirts`

**File structure:**

```
app/
    shop/
        [...slug]/
            page.js
```

**Component example:**

```js
// app/shop/[...slug]/page.js

export default function ShopCategoryPage({ params }) {
    const { slug } = params;
    return (
        <div>
            <h1>Shop Category</h1>
            <p>Path: /shop/{slug ? slug.join('/') : ''}</p>
        </div>
    );
}
```

### Notes

- Catch-all segments are arrays of strings representing each matched segment.
- Use them for blogs, docs, product catalogs, or any deeply nested content.
- For optional catch-all, use `[[...slug]]` to match `/blog` as well as `/blog/anything`.


## Loading 
### Loading in Server Components
- We can use the `loading.js` or `loading.jsx` file to show a loading state while the data is being fetched in Server Components.

**Example:**

Suppose you have a route at `app/products/page.js`. To show a loading indicator while the page is loading, add a `loading.js` file in the same folder:

```js
// app/products/loading.js

export default function Loading() {
    return <div>Loading products...</div>;
}
```

When users navigate to `/products`, Next.js will automatically display the `Loading` component while the data for `page.js` is being fetched.

