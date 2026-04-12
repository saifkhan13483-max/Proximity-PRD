# Proximity Credit Repair

A high-end, full-stack marketing and client portal website for **Proximity Credit Repair**. Built with React 18 + Vite + TypeScript on the frontend and Express.js + Node.js on the backend. Features a gold-and-dark luxury design system, JWT-based authentication, a protected client dashboard, and a full admin panel.

---

## Live Architecture

```
Browser
  └── Vercel (Frontend)
        ├── /                → React SPA (index.html)
        ├── /assets/*        → Hashed static assets (1-year immutable cache)
        └── /api/*           → Proxy rewrite → Railway (Backend)

Railway (Backend)
  └── Node.js / Express
        ├── /api/auth/*      → Register, Login, Me
        ├── /api/contacts    → Contact form submissions
        ├── /api/admin/*     → Admin dashboard routes (auth required)
        ├── /api/users/plan  → Plan selection
        └── /health          → Health check (Railway)
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite 5, TypeScript |
| Styling | Tailwind CSS v3, Framer Motion v10 |
| Routing | React Router v6 |
| State | Zustand, TanStack Query |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Backend | Node.js, Express.js |
| Auth | JWT (jsonwebtoken), bcryptjs |
| Storage | JSON files (users.json, contacts.json) |
| Frontend Host | Vercel |
| Backend Host | Railway |

---

## Project Structure

```
proximity/
├── frontend/                  # React + Vite SPA
│   ├── src/
│   │   ├── components/        # layout/, ui/, sections/, auth/
│   │   ├── pages/             # All route-level page components
│   │   ├── services/          # API calls (authService, adminService, etc.)
│   │   ├── store/             # Zustand stores (authStore, uiStore)
│   │   ├── data/              # Static content (plans, FAQs, testimonials)
│   │   ├── hooks/             # useCountUp, useMediaQuery, useScrollPosition
│   │   ├── lib/               # Utilities, animations, validators
│   │   ├── config/            # Site metadata, navigation, theme
│   │   └── types/             # TypeScript types
│   ├── public/                # robots.txt, sitemap.xml, og-image.png
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── .env.example
│   └── package.json
├── backend/                   # Express REST API
│   ├── server.js              # Main entry point
│   ├── users.json             # User data (ephemeral on Railway — see note)
│   ├── contacts.json          # Contact submissions (ephemeral on Railway)
│   ├── railway.toml           # Railway deployment config
│   ├── Procfile               # Fallback process definition
│   ├── .env.example
│   └── package.json
├── vercel.json                # Vercel deployment config
└── README.md
```

---

## Pages

| Route | Page | Access |
|---|---|---|
| `/` | Home | Public |
| `/about` | About | Public |
| `/services` | Services | Public |
| `/how-it-works` | How It Works | Public |
| `/testimonials` | Testimonials | Public |
| `/pricing` | Pricing | Public |
| `/faq` | FAQ | Public |
| `/contact` | Contact | Public |
| `/login` | Login | Public |
| `/register` | Register | Public |
| `/dashboard` | Client Dashboard | Authenticated |
| `/admin` | Admin Dashboard | Admin only |
| `/admin/users` | Manage Users | Admin only |
| `/admin/contacts` | Manage Contacts | Admin only |

---

## Running Locally

### Prerequisites
- Node.js 18+
- npm

### 1. Clone the repo

```bash
git clone https://github.com/your-username/proximity-credit-repair.git
cd proximity-credit-repair
```

### 2. Start the backend

```bash
cd backend
cp .env.example .env        # fill in JWT_SECRET
npm install
node server.js              # Runs on http://localhost:3001
```

### 3. Start the frontend

```bash
cd frontend
cp .env.example .env        # set VITE_API_URL=http://localhost:3001
npm install
npm run dev                 # Runs on http://localhost:5000
```

The Vite dev server proxies all `/api/*` requests to the backend automatically.

---

## Environment Variables

### Backend (Railway)

Create `backend/.env` based on `backend/.env.example`:

| Variable | Required | Description |
|---|---|---|
| `JWT_SECRET` | **Yes** | Long random string for signing JWTs. Server refuses to start without it. |
| `PORT` | No | Assigned automatically by Railway. Defaults to `3001` locally. |
| `ALLOWED_ORIGINS` | **Yes** | Comma-separated list of allowed CORS origins (e.g. `https://your-app.vercel.app,http://localhost:5000`) |

### Frontend (Vercel)

Create `frontend/.env` based on `frontend/.env.example`:

| Variable | Required | Description |
|---|---|---|
| `VITE_API_URL` | No | Backend base URL for Vite dev proxy. Defaults to `http://localhost:3001`. Not needed in Vercel production (handled by `vercel.json` rewrites). |
| `VITE_SITE_URL` | Recommended | Canonical site URL for SEO / Open Graph meta tags. |
| `VITE_ANALYTICS_ID` | No | Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`). Leave blank to disable. |

---

## Deployment

### Backend → Railway

1. Go to [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo**
2. Select your repository and set **Root Directory** to `backend`
3. Under **Variables**, add:
   - `JWT_SECRET` — a strong random secret
   - `ALLOWED_ORIGINS` — your Vercel frontend URL + `http://localhost:5000`
4. Railway uses `backend/railway.toml` automatically — no extra config needed
5. Under **Settings → Networking**, click **Generate Domain** to get your public URL
6. Verify: `https://your-app.up.railway.app/health` should return `{"status":"ok",...}`

### Frontend → Vercel

1. Open `vercel.json` at the project root and replace `https://your-railway-backend.up.railway.app` with your actual Railway URL
2. Commit and push the change
3. Go to [vercel.com](https://vercel.com) → **Add New Project** → select your repo
4. Vercel auto-detects `vercel.json` settings (root: `frontend`, build: `npm run build`, output: `dist`)
5. Under **Environment Variables**, add `VITE_SITE_URL` and optionally `VITE_ANALYTICS_ID`
6. Click **Deploy**

### Connect them

After both are deployed, go back to Railway → **Variables** and update `ALLOWED_ORIGINS` to include your live Vercel URL.

---

## API Reference

### Auth

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/auth/register` | No | Create a new user account |
| POST | `/api/auth/login` | No | Login and receive a JWT |
| GET | `/api/auth/me` | Bearer token | Get the current user's profile |

### Contact

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/contacts` | No | Submit the contact form |

### User

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/users/plan` | Bearer token | Select / upgrade a plan |

### Admin

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/admin/stats` | Admin | Dashboard stats |
| GET | `/api/admin/users` | Admin | List all non-admin users |
| PATCH | `/api/admin/users/:id` | Admin | Update user plan or credit score |
| DELETE | `/api/admin/users/:id` | Admin | Delete a user |
| GET | `/api/admin/contacts` | Admin | List all contact submissions |
| PATCH | `/api/admin/contacts/:id` | Admin | Update contact status |
| DELETE | `/api/admin/contacts/:id` | Admin | Delete a contact submission |

### Health

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/health` | No | Railway health check |
| GET | `/api/health` | No | Health check (alternate path) |

---

## Default Admin Account

The admin account is automatically seeded on every backend startup:

| Field | Value |
|---|---|
| Email | `admin@proximity.com` |
| Password | `Admin@2026!` |

> **Change this password immediately after your first login in production.**

---

## Important Notes

- **Ephemeral storage:** Railway's filesystem resets on every deploy. `users.json` and `contacts.json` will be wiped. The admin account is re-seeded automatically on startup, but all other user and contact data will be lost. Migrate to Railway's PostgreSQL plugin for durable production storage.
- **JWT_SECRET:** The backend will refuse to start if `JWT_SECRET` is not set. Never use a weak or default secret in production.
- **Framer Motion:** Pinned to v10 — v11+ has a dist structure incompatibility with Vite.
