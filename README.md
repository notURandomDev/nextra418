# Nextra418

[中文](./README.zh-CN.md) | English

---

## ⚡️ Lean and Production-Ready Nextra 4 + i18n Template

**Nextra418** is a modern, production-ready documentation template built on [Nextra 4](https://nextra.site/) and Next.js App Router, featuring out-of-the-box i18n support and lightning-fast search.

It fills the gap left by the outdated official `nextra-docs-template` by providing a lightweight, unopinionated starting point for your documentation needs.

### ✨ Features

- **Latest Tech Stack**: Powered by **Next.js 16 (App Router)**, **Nextra 4**, and **React 19** with Server Components (RSC) support.
- **Out-of-the-box i18n**: Follows Nextra 4's recommended Dictionary approach for seamless multi-language UI management.
- **Lightning Fast Search**: Integrated with [Pagefind](https://pagefind.app/), a Rust-based static search engine delivering millisecond-level full-text search without a backend.
- **Unopinionated Styling**: No forced CSS frameworks. Bring your own styling solution.
- **Developer Experience**: Pre-configured TypeScript, MDX components, and Next.js App Router best practices.

### 🧭 Which Template to Choose?

There are several excellent Nextra templates available. **Nextra418** is designed for those who value **simplicity and core functionality**. Here's a comparison to help you find the right fit:

| Template | Focus | Best For |
| :--- | :--- | :--- |
| **Nextra418** (This) | **Minimalist & Core** | Developers who want a clean, modern (App Router) starting point without extra bloat. |
| [Official Template](https://github.com/shuding/nextra-docs-template) | Standard/Official | Users who prefer the traditional **Pages Router** setup. |
| [Docs Starter](https://github.com/phucbm/nextra-docs-starter) | Feature-Rich | Users who want pre-built pages (About, Contact) and **Tailwind v4**. |
| [Landing Template](https://github.com/gfazioli/next-app-nextra-template) | All-in-One | Projects needing a **Landing Page + Docs** with **Mantine UI**. |
| [Personal Website](https://github.com/namnguyenthanhwork/nextra-personal-website-template) | Portfolio/Blog | Individual developers building a **Blog + Docs** site with **shadcn/ui**. |
| [SWR Site Example](https://github.com/shuding/nextra/tree/main/examples/swr-site) | Reference | Learning complex i18n and edge cases from the official codebase. |

Choose **Nextra418** if you want a lightweight, production-ready foundation that you can fully control and extend yourself.

### 🚀 Quick Start

#### One-Click Deploy

The fastest way to get your documentation site online:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FnotURandomDev%2Fnextra418)

#### Local Development

Or set it up locally in three simple steps:

```bash
git clone git@github.com:notURandomDev/nextra418.git
cd nextra418
pnpm install
pnpm dev
```

Your documentation site will be running at `http://localhost:3000`.

### 📚 Documentation

Detailed documentation is available in the `content` directory. Once the local server is running, you can explore the guides to learn how to:

- Configure your site metadata (`app/_config/meta.config.tsx`)
- Write and structure content with `_meta.ts`
- Customize themes and layouts
