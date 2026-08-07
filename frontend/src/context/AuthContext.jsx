import { createContext, useContext, useState, useEffect } from 'react';
import { loginApi, registerApi, getProfileApi } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('disha_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('disha_token') || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Restore & verify session on initial mount
  useEffect(() => {
    const restoreSession = async () => {
      if (token) {
        try {
          const res = await getProfileApi();
          if (res && res.data && res.data.user) {
            setUser(res.data.user);
            localStorage.setItem('disha_user', JSON.stringify(res.data.user));
          }
        } catch (err) {
          console.error('Session restoration failed:', err);
          logout();
        }
      }
      setLoading(false);
    };

    restoreSession();
  }, [token]);

  // Login handler
  const login = async (email, password) => {
    setError(null);
    try {
      const res = await loginApi({ email, password });
      const { user: userData, token: authToken } = res.data;
      setUser(userData);
      setToken(authToken);
      localStorage.setItem('disha_token', authToken);
      localStorage.setItem('disha_user', JSON.stringify(userData));
      return userData;
    } catch (err) {
      const msg = err.response?.data?.message || 'Login failed. Please try again.';
      setError(msg);
      throw new Error(msg);
    }
  };

  // Register handler
  const register = async (fullName, email, password) => {
    setError(null);
    try {
      const res = await registerApi({ fullName, email, password });
      const { user: userData, token: authToken } = res.data;
      setUser(userData);
      setToken(authToken);
      localStorage.setItem('disha_token', authToken);
      localStorage.setItem('disha_user', JSON.stringify(userData));
      return userData;
    } catch (err) {
      const msg = err.response?.data?.message || 'Registration failed. Please try again.';
      setError(msg);
      throw new Error(msg);
    }
  };

  // Logout handler
  const logout = () => {
    setUser(null);
    setToken(null);
    setError(null);
    localStorage.removeItem('disha_token');
    localStorage.removeItem('disha_user');
  };

  const value = {
    user,
    token,
    isAuthenticated: !!token && !!user,
    loading,
    error,
    login,
    register,
    logout,
    clearError: () => setError(null),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
