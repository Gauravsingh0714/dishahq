# Contributing to Disha

First of all, thank you for your interest in contributing to **Disha – Your Career Direction**.

Disha is an AI-powered career navigation platform designed to help students discover career paths, identify skill gaps, follow structured learning roadmaps, and track their learning journey.

We welcome contributions that improve the project's quality, usability, performance, and maintainability.

---

# Development Philosophy

Before contributing, please follow these principles:

- Write clean and readable code.
- Keep components small and reusable.
- Follow the existing project architecture.
- Prioritize maintainability over clever solutions.
- Avoid unnecessary dependencies.
- Preserve backward compatibility whenever possible.

---

# Project Structure

```
backend/
    config/
    controllers/
    middleware/
    models/
    routes/
    services/
    utils/

frontend/
    components/
    pages/
    layouts/
    hooks/
    context/
    services/
    routes/
    utils/
```

Please follow the existing folder organization.

---

# Getting Started

## 1. Fork the repository

Click the **Fork** button on GitHub.

---

## 2. Clone your fork

```bash
git clone https://github.com/<your-username>/disha.git
```

---

## 3. Install dependencies

Backend

```bash
cd backend
npm install
```

Frontend

```bash
cd frontend
npm install
```

---

## 4. Configure Environment Variables

Create local `.env` files.

Backend

```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret
CLIENT_URL=http://localhost:5173
```

Frontend

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

**Never commit your `.env` files.**

Only update `.env.example` when new environment variables are introduced.

---

# Running the Project

Backend

```bash
npm run dev
```

Frontend

```bash
npm run dev
```

---

# Coding Standards

Please follow these guidelines:

- Use meaningful variable names.
- Keep functions focused on a single responsibility.
- Remove unused imports.
- Avoid duplicated logic.
- Use async/await instead of nested promises.
- Write reusable components whenever possible.
- Keep files organized according to the project architecture.

---

# Backend Guidelines

- Controllers should only handle requests and responses.
- Business logic belongs in Services.
- Database logic belongs in Models.
- Middleware should remain reusable.
- Do not place business logic inside routes.

---

# Frontend Guidelines

- Keep pages lightweight.
- Move reusable UI into Components.
- Use Hooks for reusable logic.
- Use Context only for global state.
- Avoid deeply nested components.

---

# Branch Naming

Examples:

```
feature/authentication
feature/career-roadmap
feature/quiz-system

fix/login-validation
fix/navbar

refactor/dashboard

docs/readme
```

---

# Commit Message Convention

Use descriptive commit messages.

Examples:

```
feat(auth): implement JWT authentication

feat(careers): add career roadmap API

fix(login): resolve validation issue

refactor(api): simplify service layer

docs: update README
```

---

# Pull Request Guidelines

Before opening a Pull Request:

- Ensure the project builds successfully.
- Ensure there are no lint errors.
- Test your changes locally.
- Keep Pull Requests focused on a single feature or fix.
- Provide a clear description of the changes.

---

# Reporting Issues

When reporting an issue, include:

- Description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment (OS, Browser, Node.js version)

---

# Security

Please **do not** report security vulnerabilities through public GitHub issues.

If you discover a security issue, contact the project maintainer privately.

Never commit:

- `.env`
- API keys
- JWT secrets
- MongoDB credentials
- Private certificates
- Personal data

---

# Code of Conduct

Be respectful and constructive.

Harassment, discrimination, abusive language, or personal attacks will not be tolerated.

We aim to maintain a welcoming and inclusive environment for everyone.

---

# License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for helping improve **Disha – Your Career Direction**.
