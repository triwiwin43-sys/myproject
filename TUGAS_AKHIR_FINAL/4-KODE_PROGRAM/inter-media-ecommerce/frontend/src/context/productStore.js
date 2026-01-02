import { create } from 'zustand';
import { PRODUCTS_DATA } from '../data/products';

const useProductStore = create((set, get) => ({
  products: PRODUCTS_DATA,
  featuredProducts: PRODUCTS_DATA.slice(0, 4),
  categories: ['printers', 'computers', 'laptops', 'accessories', 'services'],
  currentProduct: null,
  isLoading: false,
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

  // Get products with filters
  getProducts: (params = {}) => {
    const { products, filters } = get();
    let filteredProducts = [...products];

    // Apply search filter
    if (filters.search) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Apply category filter
    if (filters.category) {
      filteredProducts = filteredProducts.filter(product => product.category === filters.category);
    }

    // Apply price filters
    if (filters.minPrice) {
      filteredProducts = filteredProducts.filter(product => product.price >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      filteredProducts = filteredProducts.filter(product => product.price <= parseInt(filters.maxPrice));
    }

    // Apply brand filter
    if (filters.brand) {
      filteredProducts = filteredProducts.filter(product => product.brand === filters.brand);
    }

    // Apply sorting
    switch (filters.sort) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filteredProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
      default:
        filteredProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
    }

    return filteredProducts;
  },

  // Get single product
  getProduct: (id) => {
    const product = get().products.find(p => p.id === parseInt(id));
    set({ currentProduct: product });
    return product;
  },

  // Get product by ID
  getProductById: (id) => {
    return get().products.find(p => p.id === parseInt(id));
  },

  // Add product
  addProduct: (productData) => {
    const newProduct = {
      ...productData,
      id: Math.max(...get().products.map(p => p.id)) + 1,
      createdAt: new Date().toISOString().split('T')[0],
      rating: 0,
      reviewCount: 0,
      seller: { name: 'Inter Medi-A Store', rating: 4.8, location: 'Jakarta' }
    };
    set({ products: [...get().products, newProduct] });
    return newProduct;
  },

  // Update product
  updateProduct: (id, updates) => {
    const products = get().products.map(product =>
      product.id === id ? { ...product, ...updates } : product
    );
    set({ products });
    return products.find(p => p.id === id);
  },

  // Delete product
  deleteProduct: (id) => {
    const products = get().products.filter(product => product.id !== id);
    set({ products });
    return true;
  },

  // Get featured products
  getFeaturedProducts: () => {
    return get().products.slice(0, 4);
  },

  // Get categories
  getCategories: () => {
    return get().categories;
  },

  // Search products
  searchProducts: (query) => {
    set({ filters: { ...get().filters, search: query } });
    return get().getProducts();
  },

  // Filter by category
  filterByCategory: (categoryId) => {
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
