🌾 Crop2Cart — Direct Farmer → Consumer Marketplace

A full‑stack web app that lets farmers list produce and consumers buy directly — no middlemen. Built for transparency, fair prices, and local supply chains.

✨ Features

Farmer accounts: create listings, set price/unit, stock, harvest date, photos.

Consumer accounts: browse, search, filter by category (vegetables, fruits, grains, seeds), cart & checkout.

Real‑time availability: stock is reserved on add‑to‑cart; decremented on purchase.

Location & logistics: pickup or delivery (with distance & fee calculation).

UPI/Wallet/CoD checkout (pluggable gateway).

Ratings & reviews with purchase‑verified badges.

Order chat (optional) for farmer ↔ consumer coordination.

Admin: verify farmers, handle disputes, view metrics.

Multilingual‑ready (i18n) and accessible (WCAG‑aligned).

🏗 Architecture

MERN stack by default. You can replace any layer (see alternatives below).

Browser (React + Vite)
   │   REST/JSON + WebSocket
   ▼
Express API (Node.js)
   │   ODM
   ▼
MongoDB (Atlas/Local)

Auth: JWT (httpOnly cookies) + bcrypt

Image storage: Cloudinary or local /uploads

Realtime: Socket.IO for order chat & stock updates

Payments: Razorpay/Stripe/Mock gateway via webhooks

Alternatives: Next.js (SSR), Postgres + Prisma, Django/DRF, or Firebase.

📦 Monorepo Structure
crop2cart/
├─ apps/
│  ├─ web/                # React (Vite) app
│  └─ api/                # Express API
├─ packages/
│  └─ ui/                 # Shared UI components (optional)
├─ .env.example
├─ docker-compose.yml
├─ package.json           # workspaces
└─ README.md
⚙️ Tech Stack

Frontend: HTML,CSS, Javascript TanStack Query, Tailwind CSS, shadcn/ui, Axios

Backend: Node.js, Express, Mongoose, Zod (validation), Multer (uploads), Socket.IO

DB: MongoDB (Atlas or local)

Payments: Razorpay (IN) / Stripe (global) (switchable)

Auth: JWT (access/refresh) + httpOnly cookies

Testing: Vitest + Testing Library, Jest + Supertest

Tooling: ESLint, Prettier, Husky, Lint‑staged, pnpm

CI/CD: GitHub Actions, Docker
🧭 User Flows

Farmer registers → completes profile → creates product → sees orders & messages.

Consumer registers → searches products → adds to cart → pays (UPI/CoD) → tracks order.

Admin verifies farmers → reviews flags → exports reports.

🖥 Frontend (apps/web)

Pages: Home, Browse, Product, Cart, Checkout, Orders, Farmer Dashboard, Admin.

Styling: Tailwind + shadcn/ui; responsive; dark mode.

State/Data: TanStack Query + Axios; optimistic updates for cart.
Attribution

Built with ❤️ for fair farmer income and fresher food.
