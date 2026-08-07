# Disha — Your Career Direction

> **Phase A (Engineering Foundation): Complete & Approved**  
> Disha is a modern, full-stack career navigation platform engineered to help students and professionals discover, plan, and execute their career journeys.

---

## Tech Stack

### Frontend
- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS (v3.4)
- **Routing:** React Router DOM (v7)
- **HTTP Client:** Axios (v1.18)

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js (v5)
- **Configuration:** Dotenv & CORS
- **Database (Phase C):** MongoDB Atlas & Mongoose
- **Authentication (Phase B):** JWT & BcryptJS

### Infrastructure & Deployment
- **Frontend Hosting:** Vercel
- **Backend Hosting:** Render

---

## System Architecture & Directory Structure

```
disha/
├── backend/
│   ├── src/
│   │   ├── config/          # Environment & Database configurations (db.js)
│   │   ├── constants/       # Global HTTP & application constants
│   │   ├── controllers/     # Route request handling controllers
│   │   ├── middleware/      # Express middleware (errorMiddleware, notFoundMiddleware)
│   │   ├── models/          # Database schema models (Mongoose)
│   │   ├── routes/          # Central API route registration (healthRoutes, index.js)
│   │   ├── services/        # Core business logic & external services
│   │   ├── utils/           # Utility helpers (response.js)
│   │   ├── validators/      # Request payload validation schemas
│   │   └── server.js        # Express app entrypoint & middleware chain
│   ├── .env.example         # Environment template for backend
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── assets/          # Static media & vectors
│   │   ├── components/      # Shared reusable UI components
│   │   ├── config/          # Centralized environment accessor (env.js)
│   │   ├── constants/       # Application constants & navigation items
│   │   ├── context/         # React Context providers (Auth, Theme, etc.)
│   │   ├── features/        # Modular domain feature logic
│   │   ├── hooks/           # Custom React hooks
│   │   ├── layouts/         # Page layout frames (RootLayout.jsx)
│   │   ├── lib/             # Third-party client initializers
│   │   ├── pages/           # Route views (HomePage.jsx, NotFoundPage.jsx)
│   │   ├── routes/          # Declarative AppRoutes tree (AppRoutes.jsx)
│   │   ├── services/        # Axios API client & endpoints (api.js)
│   │   ├── styles/          # Additional global CSS / theme definitions
│   │   ├── utils/           # Helper functions
│   │   ├── App.jsx          # Top-level application component
│   │   ├── main.jsx         # React DOM root & BrowserRouter mount
│   │   └── index.css        # Tailwind CSS directives
│   ├── .env.example         # Environment template for frontend
│   ├── tailwind.config.js   # Tailwind design tokens & content scopes
│   ├── vite.config.js       # Vite bundler configuration
│   └── package.json
│
└── README.md
```

---

## Local Development Setup

### 1. Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### 2. Environment Configuration

Copy the sample environment configuration files:

#### Backend:
```bash
cp backend/.env.example backend/.env
```
Key variables:
- `PORT`: Port number (default: `5000`)
- `NODE_ENV`: Environment mode (`development` | `production`)
- `CLIENT_URL`: Allowed CORS origin (`http://localhost:5173`)

#### Frontend:
```bash
cp frontend/.env.example frontend/.env
```
Key variables:
- `VITE_API_BASE_URL`: Base backend URL (`http://localhost:5000/api`)

### 3. Installation & Running

#### Start Backend:
```bash
cd backend
npm install
npm run dev
```
The Express backend will start at `http://localhost:5000`. Query health status at `http://localhost:5000/api/health`.

#### Start Frontend:
```bash
cd frontend
npm install
npm run dev
```
The Vite dev server will start at `http://localhost:5173`.

---

## Roadmap & Phase Status

- [x] **Phase A — Engineering Foundation** (Complete)
  - Modular directory architecture
  - Express server, CORS, JSON body parsing & dynamic PORT configuration
  - Dedicated 404 & Global Error handling middleware
  - Centralized routing architecture & `/api/health` endpoint
  - React 19 + React Router DOM v7 layout & page hierarchy
  - Tailwind CSS primary design system integration
  - Pre-configured Axios API client module
  - Environment templates (`.env.example`) & comprehensive documentation
- [ ] **Phase B — Authentication System** (Next)
  - User model & schema validation
  - Password hashing via BcryptJS
  - JWT token generation & authentication middleware
  - Frontend AuthContext, Login, and Registration views
- [ ] **Phase C — Database Integration** (MongoDB Atlas)
- [ ] **Phase D — Core Features** (Career Discovery, Roadmap Builder, Skill Assessment)

---

## License
[ISC License](LICENSE)
