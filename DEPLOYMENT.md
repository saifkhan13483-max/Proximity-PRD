# Proximity Credit Repair — Deployment Guide

This document covers every step needed to deploy the Proximity Credit Repair application to production. The architecture uses two separate hosting platforms:

- **Frontend** → [Vercel](https://vercel.com)
- **Backend API** → [Railway](https://railway.app)

---

## Architecture Overview

```
Browser
  └── Vercel (Frontend — React + Vite SPA)
        ├── /                 → Serves index.html (SPA catch-all)
        ├── /assets/*         → Hashed static assets (1-year immutable cache)
        └── /api/*            → Proxy rewrite → Railway Backend

Railway (Backend — Node.js + Express)
  └── Express REST API on port assigned by Railway
        ├── /api/auth/*       → Register, Login, Me
        ├── /api/contacts     → Contact form submissions
        ├── /api/users/plan   → Plan selection
        ├── /api/admin/*      → Admin routes (JWT + admin role required)
        └── /health           → Health check endpoint
```

All `/api/*` requests made to the Vercel domain are transparently forwarded to the Railway backend via `vercel.json` rewrites — no CORS issues in production.

---

## Environment Variables

### Backend (Railway)

| Variable | Required | Description |
|---|---|---|
| `JWT_SECRET` | **Yes** | Long random string for signing JWTs. The server will refuse to start without it. |
| `PORT` | No | Automatically assigned by Railway. Defaults to `3001` locally. |
| `ALLOWED_ORIGINS` | **Yes** | Comma-separated list of allowed CORS origins (e.g. `https://your-app.vercel.app,http://localhost:5000`). |

### Frontend (Vercel)

| Variable | Required | Description |
|---|---|---|
| `VITE_API_URL` | No | Backend base URL for the Vite dev proxy only. Not needed in production — handled by `vercel.json` rewrites. |
| `VITE_SITE_URL` | Recommended | Canonical site URL for SEO and Open Graph meta tags. |
| `VITE_ANALYTICS_ID` | No | Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`). Leave blank to disable. |

---

## Step 1 — Deploy the Backend to Railway

### 1.1 Create a New Railway Project

1. Go to [railway.app](https://railway.app) and sign in.
2. Click **New Project** → **Deploy from GitHub repo**.
3. Select your repository.
4. Under **Root Directory**, set it to `backend`.

### 1.2 Set Environment Variables

In Railway, go to your service → **Variables** tab, and add the following:

```
JWT_SECRET=<a long, random, secret string — at least 48 characters>
ALLOWED_ORIGINS=http://localhost:5000
```

> You will update `ALLOWED_ORIGINS` again after the frontend is deployed to Vercel.

### 1.3 Generate a Public Domain

1. In Railway, go to **Settings → Networking**.
2. Click **Generate Domain**.
3. Copy the public URL (e.g. `https://proximity-backend.up.railway.app`).

### 1.4 Verify the Backend is Running

Open your browser and visit:

```
https://your-backend.up.railway.app/health
```

You should see a response like:

```json
{ "status": "ok", "uptime": 12.3, "timestamp": "2026-04-12T00:00:00.000Z" }
```

If the server fails to start, check the Railway deployment logs for the `FATAL: JWT_SECRET` error — it means the environment variable was not set correctly.

---

## Step 2 — Configure the Frontend for Production

### 2.1 Update vercel.json

Open `vercel.json` in the project root and replace the Railway backend URL in the `/api/*` rewrite with your actual Railway domain:

```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://your-backend.up.railway.app/api/:path*"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/index.html",
      "headers": [
        { "key": "Cache-Control", "value": "no-cache, no-store, must-revalidate" }
      ]
    }
  ]
}
```

Commit and push this change to GitHub before deploying to Vercel.

---

## Step 3 — Deploy the Frontend to Vercel

### 3.1 Create a New Vercel Project

1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **Add New Project** → select your GitHub repository.
3. Vercel will auto-detect the configuration from `vercel.json`.

### 3.2 Configure the Build Settings

If Vercel does not auto-detect them, set the following manually:

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Root Directory | `frontend` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

### 3.3 Add Environment Variables

In Vercel, go to **Settings → Environment Variables** and add:

```
VITE_SITE_URL=https://your-app.vercel.app
```

Optionally add `VITE_ANALYTICS_ID` if you have a Google Analytics 4 property.

### 3.4 Deploy

Click **Deploy**. Vercel will build the frontend and publish it. Once complete, copy your live Vercel URL (e.g. `https://proximity-credit-repair.vercel.app`).

---

## Step 4 — Connect Frontend and Backend

Now that both are live, you need to allow the Vercel domain in the backend's CORS policy.

1. Go back to **Railway** → **Variables**.
2. Update `ALLOWED_ORIGINS` to include your Vercel URL:

```
ALLOWED_ORIGINS=https://your-app.vercel.app,http://localhost:5000
```

3. Railway will automatically redeploy the backend with the new variable.

---

## Step 5 — Verify the Full Stack

1. Visit your Vercel URL in the browser.
2. Navigate to **/register** and create a new account — this tests the full API proxy chain.
3. Log in and access the **/dashboard** — this verifies JWT authentication is working.
4. Log in with the default admin account (see below) and check **/admin**.

---

## Default Admin Account

The admin account is automatically seeded every time the backend starts:

| Field | Value |
|---|---|
| Email | `admin@proximity.com` |
| Password | `Admin@2026!` |

> **Change this password immediately after your first login in production.**

---

## Replit Development Environment

When working locally inside Replit, the two workflows below must be running:

| Workflow | Command | Port |
|---|---|---|
| Auth API | `node backend/server.js` | 3001 |
| Start application | `npm run dev --prefix frontend` | 5000 |

The Vite dev server proxies all `/api/*` requests to `http://localhost:3001` automatically, so no manual CORS configuration is needed during development.

Required secret in Replit:

| Secret | Description |
|---|---|
| `JWT_SECRET` | Must be set in Replit Secrets before the backend will start. |

---

## Important Production Warnings

### Ephemeral Storage on Railway

Railway's filesystem is reset on every deployment. This means `users.json` and `contacts.json` — which store all user accounts and contact form submissions — **will be wiped** on every redeploy.

- The admin account is automatically re-seeded on startup, so it will always exist.
- All other user accounts and contact data will be permanently lost after a redeploy.

**For production use, migrate to a persistent database** (e.g. Railway's PostgreSQL plugin) before handling real user data.

### JWT_SECRET Strength

- Use a minimum of 48 randomly generated characters.
- Never use a short, guessable, or default value.
- The backend will refuse to start entirely if this variable is missing.

### Framer Motion Version

Framer Motion is pinned to **v10** in `frontend/package.json`. Do not upgrade to v11+ — it has a dist structure incompatibility with Vite that will break the build.

---

## Quick Reference — Build Commands

```bash
# Install backend dependencies
cd backend && npm install

# Run backend locally
cd backend && node server.js

# Install frontend dependencies
cd frontend && npm install

# Run frontend dev server
cd frontend && npm run dev

# Build frontend for production
cd frontend && npm run build

# Preview production build locally
cd frontend && npm run preview
```

---

## API Health Check Endpoints

| URL | Description |
|---|---|
| `https://your-backend.up.railway.app/health` | Used by Railway for uptime monitoring |
| `https://your-backend.up.railway.app/api/health` | Alternate health check path |
