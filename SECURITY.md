# Security Policy

> **Note:** Disha is an educational and portfolio project. While it follows modern security best practices, it has not undergone an independent professional security audit. If you discover a vulnerability, please report it responsibly so it can be investigated and addressed.

---

## Supported Versions

The latest version of **Disha** receives security updates and fixes.

| Version | Supported |
|---------|-----------|
| Latest | ✅ Yes |
| Older Releases | ❌ No |

---

# Reporting a Security Vulnerability

If you discover a security vulnerability in Disha, please **do not create a public GitHub Issue**.

Instead, report it privately to the project maintainer.

Please include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested mitigation (if available)
- Screenshots or logs (if applicable)

Please allow reasonable time for the issue to be investigated before making it public.

---

# Security Practices

Disha follows several security best practices to protect user data.

## Authentication

- JWT-based authentication
- Passwords hashed using **bcryptjs**
- Protected API routes
- JWT expiration enabled
- Minimal JWT payload (`id` and `role` only)

---

## Password Security

- Passwords are never stored in plain text.
- Passwords are hashed before being saved to MongoDB.
- Password hashes are excluded from API responses using `select: false`.

---

## Environment Variables

Sensitive configuration is stored in environment variables.

Examples include:

- MongoDB connection URI
- JWT secret
- API credentials
- Third-party service keys

These values must **never** be committed to Git.

Only `.env.example` should be included in the repository.

---

## Database Security

- MongoDB Atlas
- Authentication required
- Environment-based credentials
- No database credentials hardcoded

---

## API Security

The backend includes:

- Helmet security headers
- Express Rate Limiting
- Centralized error handling
- JWT authentication middleware
- Protected routes
- CORS configuration
- Environment validation at startup

---

## Rate Limiting

Authentication endpoints are protected against brute-force attacks.

General API requests are also rate limited to reduce abuse.

---

## Secure Development Guidelines

Before pushing code, verify that the repository does **not** contain:

- `.env`
- API keys
- JWT secrets
- MongoDB credentials
- Private certificates
- SSH keys
- Service account JSON files
- Personal information
- Local machine paths

---

## Dependency Security

Before creating a release, run:

```bash
npm audit
```

Review and resolve high and critical vulnerabilities whenever possible.

---

## Responsible Disclosure

Please do **not** publicly disclose security vulnerabilities until they have been investigated and addressed.

Responsible disclosure helps protect users and maintain the integrity of the project.

---

# Best Practices for Contributors

When contributing:

- Never commit secrets.
- Never hardcode credentials.
- Validate user input.
- Keep dependencies updated.
- Follow the existing authentication architecture.
- Preserve security middleware.
- Test authentication flows before submitting changes.

---

# Security Checklist

Before opening a Pull Request, confirm:

- [ ] No secrets are committed.
- [ ] `.env` files are ignored.
- [ ] `.env.example` contains only placeholders.
- [ ] No passwords are logged.
- [ ] No JWT secrets are exposed.
- [ ] No MongoDB credentials are committed.
- [ ] No private files are included.
- [ ] Authentication still functions correctly.
- [ ] Rate limiting remains active.
- [ ] Helmet security headers remain enabled.
- [ ] The project builds successfully.
- [ ] Lint checks pass.

---

# Scope

This security policy applies to:

- Backend API
- Frontend application
- Authentication system
- MongoDB integration
- Deployment configuration
- Future project releases

---

Thank you for helping keep **Disha – Your Career Direction** secure.
