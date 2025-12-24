import { create } from 'zustand';
import axios from 'axios';

const useProductStore = create((set, get) => ({
  products: [],
  featuredProducts: [],
  categories: [],
  currentProduct: null,
  isLoading: false,
  pagination: null,
  filters: {
    search: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    brand: '',
    sort: 'newest'
  },

  // Set filters
  setFilters: (newFilters) => {
    set({ filters: { ...get().filters, ...newFilters } });
  },

  // Get products
  getProducts: async (params = {}) => {
    try {
      set({ isLoading: true });
      const queryParams = new URLSearchParams({
        ...get().filters,
        ...params
      }).toString();
      
      const response = await axios.get(`/products?${queryParams}`);
      
      if (response.data.success) {
        set({ 
          products: response.data.data.products,
          pagination: response.data.data.pagination
        });
        return response.data.data;
      }
    } catch (error) {
      console.error('Failed to get products:', error);
      return null;
    } finally {
      set({ isLoading: false });
    }
  },

  // Get single product
  getProduct: async (id) => {
    try {
      set({ isLoading: true });
      const response = await axios.get(`/products/${id}`);
      
      if (response.data.success) {
        set({ currentProduct: response.data.data.product });
        return response.data.data.product;
      }
    } catch (error) {
      console.error('Failed to get product:', error);
      return null;
    } finally {
      set({ isLoading: false });
    }
  },

  // Get featured products
  getFeaturedProducts: async () => {
    try {
      const response = await axios.get('/products/featured');
      
      if (response.data.success) {
        set({ featuredProducts: response.data.data.products });
        return response.data.data.products;
      }
    } catch (error) {
      console.error('Failed to get featured products:', error);
      return [];
    }
  },

  // Get categories
  getCategories: async () => {
    try {
      const response = await axios.get('/categories');
      
      if (response.data.success) {
        set({ categories: response.data.data.categories });
        return response.data.data.categories;
      }
    } catch (error) {
      console.error('Failed to get categories:', error);
      return [];
    }
  },

  // Search products
  searchProducts: async (query) => {
    set({ filters: { ...get().filters, search: query } });
    return get().getProducts();
  },

  // Filter by category
  filterByCategory: async (categoryId) => {
    set({ filters: { ...get().filters, category: categoryId } });
    return get().getProducts();
  },

  // Clear filters
  clearFilters: () => {
    set({
      filters: {
        search: '',
        category: '',
        minPrice: '',
        maxPrice: '',
        brand: '',
        sort: 'newest'
      }
    });
  }
}));

export default useProductStore;
