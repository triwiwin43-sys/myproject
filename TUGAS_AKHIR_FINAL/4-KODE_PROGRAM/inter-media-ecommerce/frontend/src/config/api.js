// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const apiConfig = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
};

export const endpoints = {
  // Auth
  login: '/auth/login',
  register: '/auth/register',
  
  // Products
  products: '/products',
  categories: '/categories',
  
  // Orders
  orders: '/orders',
  
  // Upload
  upload: '/upload',
  
  // Health
  health: '/health'
};

export default apiConfig;
