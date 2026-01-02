// Application Constants
export const APP_CONFIG = {
  name: import.meta.env.VITE_APP_NAME || 'Inter Medi-A E-Commerce',
  version: import.meta.env.VITE_APP_VERSION || '1.0.0',
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  
  // Features
  features: {
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    pwa: import.meta.env.VITE_ENABLE_PWA === 'true',
    chat: import.meta.env.VITE_ENABLE_CHAT === 'true',
    notifications: import.meta.env.VITE_ENABLE_NOTIFICATIONS === 'true',
    tracking: import.meta.env.VITE_ENABLE_TRACKING === 'true'
  },

  // File Upload
  upload: {
    maxSize: parseInt(import.meta.env.VITE_MAX_FILE_SIZE) || 5242880, // 5MB
    allowedTypes: import.meta.env.VITE_ALLOWED_FILE_TYPES?.split(',') || ['image/jpeg', 'image/png', 'image/webp']
  },

  // Payment
  payment: {
    midtrans: {
      clientKey: import.meta.env.VITE_MIDTRANS_CLIENT_KEY,
      environment: import.meta.env.VITE_MIDTRANS_ENVIRONMENT || 'sandbox'
    }
  }
};

// API Endpoints
export const API_ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    refresh: '/api/auth/refresh'
  },
  products: {
    list: '/api/products',
    detail: '/api/products/:id',
    create: '/api/products',
    update: '/api/products/:id',
    delete: '/api/products/:id'
  },
  orders: {
    list: '/api/orders',
    detail: '/api/orders/:id',
    create: '/api/orders',
    update: '/api/orders/:id'
  },
  users: {
    profile: '/api/users/profile',
    update: '/api/users/profile'
  }
};

// UI Constants
export const UI_CONFIG = {
  pagination: {
    defaultPageSize: 12,
    pageSizeOptions: [12, 24, 48]
  },
  
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  },

  colors: {
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8'
    }
  }
};

export default APP_CONFIG;
