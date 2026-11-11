# Lux Liquor - Official Next.js Website & Legal Portal

A lightweight, text-first **Next.js (App Router)** website for **Lux Liquor**, an on-demand alcohol delivery app in Zimbabwe (operating like DoorDash for licensed liquor retailers).

Fully compliant with:
- **Google Play Developer Policies** (Privacy policy & public web-based account deletion requirement)
- **Apple App Store Review Guidelines** (Account deletion, terms of service, age verification)
- **Zimbabwe Legal Framework** (Cyber and Data Protection Act [Chapter 12:07] & Liquor Act [Chapter 14:12])

---

## Routes & URLs

| Route | Purpose | App Store / Console Field |
| :--- | :--- | :--- |
| `/` | Home, service overview, 18+ drinking warning, how it works | Marketing URL |
| `/privacy` | Privacy Policy (Zimbabwe Data Protection Act compliant) | **Privacy Policy URL** |
| `/terms` | Terms of Use (18+ ID check, cancellation, courier protocols) | **Terms of Service URL** |
| `/delete-account` | Step-by-step in-app instructions + interactive web deletion request form | **Account Deletion URL** |

*Note: Legacy paths like `/privacy.html`, `/terms.html`, and `/delete-account.html` automatically 308-redirect to their respective clean URLs via `next.config.mjs`.*

---

## Deploy to Vercel

### Option 1: One-Click Git Deployment (Recommended)
1. Push this project to your GitHub, GitLab, or Bitbucket repository.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the repository.
4. Vercel will automatically detect **Next.js** and configure:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build` (or `npm run build`)
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
5. Click **Deploy**. Your site will be live instantly with global edge CDN, HTTPS, and automatic deployments on git push.

### Option 2: Deploy with Vercel CLI
```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Deploy to preview
vercel

# Deploy directly to production
vercel --prod
```

---

## Local Development

```bash
# Run local dev server
npm run dev

# Build production bundle
npm run build

# Start production server
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) to view the site locally.
