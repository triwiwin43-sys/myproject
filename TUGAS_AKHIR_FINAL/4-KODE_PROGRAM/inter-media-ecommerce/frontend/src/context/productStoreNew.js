import { create } from 'zustand';
import { PRODUCTS_DATA } from '../data/products';

const useProductStore = create((set, get) => ({
  products: [...PRODUCTS_DATA],
  categories: ['all', 'printers', 'computers', 'laptops', 'accessories', 'services', 'networking'],
  loading: false,
  error: null,

  // Get all products
  getProducts: () => {
    return get().products;
  },

  // Get product by ID
  getProductById: (id) => {
    return get().products.find(product => product.id === parseInt(id));
  },

  // Add new product
  addProduct: (productData) => {
    const newProduct = {
      ...productData,
      id: Math.max(...get().products.map(p => p.id)) + 1,
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    set(state => ({
      products: [...state.products, newProduct]
    }));
    
    return newProduct;
  },

  // Update product
  updateProduct: (id, updates) => {
    set(state => ({
      products: state.products.map(product =>
        product.id === parseInt(id) ? { ...product, ...updates } : product
      )
    }));
  },

  // Delete product
  deleteProduct: (id) => {
    set(state => ({
      products: state.products.filter(product => product.id !== parseInt(id))
    }));
  },

  // Update product stock
  updateStock: (id, newStock) => {
    set(state => ({
      products: state.products.map(product =>
        product.id === parseInt(id) ? { ...product, stock: newStock } : product
      )
    }));
  },

  // Get categories
  getCategories: () => {
    return get().categories;
  },

  // Search products
  searchProducts: (query) => {
    const products = get().products;
    if (!query) return products;
    
    return products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description?.toLowerCase().includes(query.toLowerCase()) ||
      product.brand?.toLowerCase().includes(query.toLowerCase())
    );
  },

  // Filter products by category
  filterByCategory: (category) => {
    const products = get().products;
    if (category === 'all') return products;
    
    return products.filter(product => product.category === category);
  }
}));

export default useProductStore;
