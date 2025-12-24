import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import toast from 'react-hot-toast';

const API_URL = '/api';

// Mock users for testing
const MOCK_USERS = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@intermedia.com',
    password: 'admin123',
    role: 'admin',
    phone: '081234567890'
  },
  {
    id: 2,
    name: 'Seller Store',
    email: 'seller@intermedia.com',
    password: 'seller123',
    role: 'seller',
    phone: '081234567891',
    sellerInfo: {
      storeName: 'Inter Medi-A Store',
      storeDescription: 'Toko resmi Inter Medi-A'
    }
  },
  {
    id: 3,
    name: 'Customer User',
    email: 'customer@intermedia.com',
    password: 'customer123',
    role: 'customer',
    phone: '081234567892'
  }
];

// Configure axios defaults
axios.defaults.baseURL = API_URL;

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      // Set auth data
      setAuth: (user, token) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        set({ user, token, isAuthenticated: true });
      },

      // Clear auth data
      clearAuth: () => {
        delete axios.defaults.headers.common['Authorization'];
        set({ user: null, token: null, isAuthenticated: false });
      },

      // Login (Mock implementation)
      login: async (credentials) => {
        try {
          set({ isLoading: true });
          
          // Simulate API delay
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Find user in mock data
          const user = MOCK_USERS.find(u => 
            u.email === credentials.email && u.password === credentials.password
          );
          
          if (user) {
            const token = `mock-token-${user.id}`;
            const { password, ...userWithoutPassword } = user;
            
            get().setAuth(userWithoutPassword, token);
            toast.success(`Login berhasil! Selamat datang ${user.name}`);
            return { success: true, user: userWithoutPassword };
          } else {
            toast.error('Email atau password salah');
            return { success: false, message: 'Invalid credentials' };
          }
        } catch (error) {
          toast.error('Login gagal');
          return { success: false, message: 'Login failed' };
        } finally {
          set({ isLoading: false });
        }
      },

      // Register
      register: async (userData) => {
        try {
          set({ isLoading: true });
          const response = await axios.post('/auth/register', userData);
          
          if (response.data.success) {
            const { user, token } = response.data.data;
            get().setAuth(user, token);
            toast.success('Registration successful!');
            return { success: true, user };
          }
        } catch (error) {
          const message = error.response?.data?.message || 'Registration failed';
          toast.error(message);
          return { success: false, message };
        } finally {
          set({ isLoading: false });
        }
      },

      // Logout
      logout: () => {
        get().clearAuth();
        toast.success('Logged out successfully');
      },

      // Get current user
      getCurrentUser: async () => {
        try {
          const response = await axios.get('/auth/me');
          if (response.data.success) {
            set({ user: response.data.data.user });
            return response.data.data.user;
          }
        } catch (error) {
          get().clearAuth();
          return null;
        }
      },

      // Update profile
      updateProfile: async (profileData) => {
        try {
          set({ isLoading: true });
          const response = await axios.put('/auth/profile', profileData);
          
          if (response.data.success) {
            set({ user: response.data.data.user });
            toast.success('Profile updated successfully!');
            return { success: true };
          }
        } catch (error) {
          const message = error.response?.data?.message || 'Update failed';
          toast.error(message);
          return { success: false, message };
        } finally {
          set({ isLoading: false });
        }
      },

      // Add address
      addAddress: async (addressData) => {
        try {
          const response = await axios.post('/auth/addresses', addressData);
          
          if (response.data.success) {
            const updatedUser = { ...get().user, addresses: response.data.data.addresses };
            set({ user: updatedUser });
            toast.success('Address added successfully!');
            return { success: true };
          }
        } catch (error) {
          const message = error.response?.data?.message || 'Failed to add address';
          toast.error(message);
          return { success: false, message };
        }
      },

      // Update seller info
      updateSellerInfo: async (sellerData) => {
        try {
          const response = await axios.put('/auth/seller-info', sellerData);
          
          if (response.data.success) {
            const updatedUser = { ...get().user, sellerInfo: response.data.data.sellerInfo };
            set({ user: updatedUser });
            toast.success('Seller info updated successfully!');
            return { success: true };
          }
        } catch (error) {
          const message = error.response?.data?.message || 'Update failed';
          toast.error(message);
          return { success: false, message };
        }
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated
      }),
      onRehydrateStorage: () => (state) => {
        if (state?.token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;
        }
      }
    }
  )
);

export default useAuthStore;
