require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./config/db");
const apiRoutes = require("./routes");
const { generalLimiter } = require("./middleware/rateLimiter");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");

// Fail-fast environment variable validation
const requiredEnvVars = ["MONGO_URI", "JWT_SECRET", "CLIENT_URL"];
const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key] || process.env[key].trim() === "");

if (missingEnvVars.length > 0) {
  const errorMessage = `FATAL: Required environment variable(s) missing: ${missingEnvVars.join(", ")}`;
  console.error(errorMessage);
  throw new Error(errorMessage);
}

const app = express();

// Trust reverse proxy (e.g. Render / Vercel / Nginx) for accurate client IP rate limiting
app.set("trust proxy", 1);

// Connect to MongoDB Atlas / Local Database
connectDB();

// Security HTTP Headers
app.use(helmet());

// CORS & Body Parsing Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// General Rate Limiter for all API routes
app.use("/api", generalLimiter);

// Root Hello Route
app.get("/", (req, res) => {
  res.send("Disha API Running");
});

// Central API Routes
app.use("/api", apiRoutes);

// Error Handling & 404 Middleware
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} [${process.env.NODE_ENV || "development"}]`);
});