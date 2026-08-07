/**
 * Centralized Environment Configuration.
 * Accesses environment variables with fallback defaults.
 */

export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
};

export default config;
