# 🚀 Disha — Your Career Direction

> An AI-powered career navigation platform that helps students discover career paths, identify skill gaps, follow structured learning roadmaps, and track their learning journey.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/Frontend-React-61DAFB)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Status](https://img.shields.io/badge/Status-Active-success)

---

# 📖 About

Choosing the right career path can be overwhelming for students due to the abundance of information, unclear roadmaps, and lack of personalized guidance.

**Disha** addresses this challenge by providing a centralized platform where students can:

- Discover suitable career paths
- Identify skill gaps
- Receive personalized career recommendations
- Follow structured learning roadmaps
- Access curated learning resources
- Track learning progress
- Maintain learning streaks

---

# ✨ Features

## Authentication

- Secure User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Session Persistence
- Password Hashing (bcrypt)
- Logout

---

## Career Guidance

- Career Assessment Quiz
- Career Recommendation Engine
- Skill Gap Analysis
- Personalized Dashboard

---

## Learning Roadmaps

- Step-by-step Roadmaps
- Learning Milestones
- Resource Recommendations
- Progress Tracking
- Weekly Streaks

---

## Dashboard

- Career Match
- Match Score
- Skill Gap Summary
- Progress Percentage
- Current Learning Phase
- Weekly Streak

---

# 🛠 Tech Stack

## Frontend

- React (Vite)
- Tailwind CSS
- React Router DOM
- Axios

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Authentication

- JWT
- bcryptjs

## Security

- Helmet
- Express Rate Limit
- CORS
- Environment Variables

## Deployment

Frontend

- Vercel

Backend

- Render

Database

- MongoDB Atlas

---

# 📂 Project Structure

```text
disha/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── constants/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── validators/
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── config/
│   │   ├── constants/
│   │   ├── context/
│   │   ├── features/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── package.json
│   └── .env.example
│
├── README.md
├── CONTRIBUTING.md
├── SECURITY.md
└── LICENSE
```

---

# 🏗 Architecture

```text
React Frontend
       │
       ▼
Axios API Client
       │
       ▼
Express.js API
       │
       ▼
Authentication Middleware
       │
       ▼
Controllers
       │
       ▼
Services
       │
       ▼
MongoDB Atlas
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/<your-username>/disha.git
```

```bash
cd disha
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret
CLIENT_URL=http://localhost:5173
```

Run

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

Create `.env`

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Run

```bash
npm run dev
```

---

# 🔐 Security

Disha follows several security best practices:

- JWT Authentication
- bcrypt Password Hashing
- Helmet Security Headers
- Express Rate Limiting
- Environment Variable Validation
- Protected Routes
- MongoDB Atlas Authentication
- Secure API Architecture

For more information, see [SECURITY.md](SECURITY.md).

---

# 📊 Current Development Status

| Phase | Status |
|--------|--------|
| Phase A – Engineering Foundation | ✅ Complete |
| Phase B – Authentication | ✅ Complete |
| Phase B.5 – Security Hardening | ✅ Complete |
| Phase C – Career Domain Models | 🚧 In Progress |
| Phase D – Career Assessment Quiz | ⏳ Planned |
| Phase E – Recommendation Engine | ⏳ Planned |
| Phase F – Skill Gap Analysis | ⏳ Planned |
| Phase G – Roadmap System | ⏳ Planned |
| Phase H – Dashboard Enhancements | ⏳ Planned |
| Phase I – Progress Tracking | ⏳ Planned |
| Phase J – Deployment & Production Polish | ⏳ Planned |

---

# 🧪 Available Scripts

## Backend

```bash
npm run dev
npm start
```

## Frontend

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

---

# 🤝 Contributing

Contributions are welcome.

Please read:

- CONTRIBUTING.md
- SECURITY.md

before submitting issues or pull requests.

---

# 📄 License

This project is licensed under the MIT License.

See the LICENSE file for details.

---

# 👨💻 Author

**Arman Gaurav**

---

## ⭐ Support

If you find this project helpful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future development.
