import axios from 'axios';
import { config } from '../config/env';

/**
 * Pre-configured Axios instance for backend API requests.
 */
const api = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

/**
 * Request Interceptor: Automatically attach Bearer token from localStorage
 */
api.interceptors.request.use(
  (reqConfig) => {
    const token = localStorage.getItem('disha_token');
    if (token) {
      reqConfig.headers.Authorization = `Bearer ${token}`;
    }
    return reqConfig;
  },
  (error) => Promise.reject(error)
);

/**
 * Response Interceptor: Handle 401 Unauthorized responses globally
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear token and user on 401 Unauthorized
      localStorage.removeItem('disha_token');
      localStorage.removeItem('disha_user');
    }
    return Promise.reject(error);
  }
);

/**
 * Check Backend System Health
 */
export const checkHealth = async () => {
  const response = await api.get('/health');
  return response.data;
};

/**
 * User Registration API
 */
export const registerApi = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

/**
 * User Login API
 */
export const loginApi = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

/**
 * Get User Profile API
 */
export const getProfileApi = async () => {
  const response = await api.get('/auth/profile');
  return response.data;
};

export default api;
