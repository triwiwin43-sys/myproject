import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  FiGrid, 
  FiList, 
  FiFilter, 
  FiSearch,
  FiStar,
  FiHeart,
  FiShoppingCart,
  FiEye
} from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import ProductImage from '../components/ProductImage';
import { LoadingGrid } from '../components/Loading';
import useProductStore from '../context/productStoreNew';
import useCartStore from '../context/cartStore';
import toast from 'react-hot-toast';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products: allProducts, getProducts } = useProductStore();
  const { addToCart } = useCartStore();
  
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || 'all',
    priceRange: 'all',
    sortBy: 'newest',
    condition: 'all',
    brand: 'all'
  });

  // Use shared product data
  const productsWithImages = allProducts;

  const brands = ['all', 'HP', 'Canon', 'ASUS', 'Acer', 'Lenovo', 'Inter Medi-A'];
  const priceRanges = [
    { value: 'all', label: 'Semua Harga' },
    { value: '0-500000', label: 'Di bawah Rp 500rb' },
    { value: '500000-2000000', label: 'Rp 500rb - 2jt' },
    { value: '2000000-5000000', label: 'Rp 2jt - 5jt' },
    { value: '5000000-10000000', label: 'Rp 5jt - 10jt' },
    { value: '10000000-999999999', label: 'Di atas Rp 10jt' }
  ];

  useEffect(() => {
    loadProducts();
  }, [filters]);

  const loadProducts = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    // Update URL params
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([k, v]) => {
      if (v && v !== 'all') params.set(k, v);
    });
    setSearchParams(params);
  };

  const filteredProducts = productsWithImages.filter(product => {
    // Search filter
    if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (filters.category !== 'all' && product.category !== filters.category) {
      return false;
    }
    
    // Price range filter
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (product.price < min || product.price > max) {
        return false;
      }
    }
    
    // Brand filter
    if (filters.brand !== 'all' && product.brand !== filters.brand) {
      return false;
    }
    
    // Condition filter
    if (filters.condition !== 'all' && product.condition !== filters.condition) {
      return false;
    }
    
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
        return b.reviewCount - a.reviewCount;
      case 'newest':
      default:
        return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Produk & Layanan</h1>
          <p className="text-gray-600">
            Temukan berbagai produk IT dan layanan berkualitas dari Inter Medi-A
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Produk</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cari Produk
                </label>
                <div className="relative">
                  <FiSearch className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    placeholder="Nama produk..."
                    className="input pl-10"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="input"
                >
                  <option value="all">Semua Kategori</option>
                  <option value="printers">Printer & Scanner</option>
                  <option value="computers">Komputer & PC</option>
                  <option value="laptops">Laptop & Notebook</option>
                  <option value="accessories">Aksesoris Komputer</option>
                  <option value="services">Layanan & Service</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rentang Harga
                </label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  className="input"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brand */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Merek
                </label>
                <select
                  value={filters.brand}
                  onChange={(e) => handleFilterChange('brand', e.target.value)}
                  className="input"
                >
                  {brands.map(brand => (
                    <option key={brand} value={brand}>
                      {brand === 'all' ? 'Semua Merek' : brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Condition */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kondisi
                </label>
                <select
                  value={filters.condition}
                  onChange={(e) => handleFilterChange('condition', e.target.value)}
                  className="input"
                >
                  <option value="all">Semua Kondisi</option>
                  <option value="new">Baru</option>
                  <option value="used">Bekas</option>
                  <option value="service">Layanan</option>
                </select>
              </div>

              <button
                onClick={() => {
                  setFilters({
                    search: '',
                    category: 'all',
                    priceRange: 'all',
                    sortBy: 'newest',
                    condition: 'all',
                    brand: 'all'
                  });
                  setSearchParams({});
                }}
                className="w-full btn btn-outline"
              >
                Reset Filter
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    Menampilkan {sortedProducts.length} produk
                  </span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <select
                    value={filters.sortBy}
                    onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                    className="input text-sm"
                  >
                    <option value="newest">Terbaru</option>
                    <option value="price-low">Harga Terendah</option>
                    <option value="price-high">Harga Tertinggi</option>
                    <option value="rating">Rating Tertinggi</option>
                    <option value="popular">Terpopuler</option>
                  </select>
                  
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                      }`}
                    >
                      <FiGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                      }`}
                    >
                      <FiList className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            {isLoading ? (
              <LoadingGrid />
            ) : sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <FiSearch className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Produk tidak ditemukan
                </h3>
                <p className="text-gray-600">
                  Coba ubah filter atau kata kunci pencarian
                </p>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => handleAddToCart(product)}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-32 h-32 bg-gray-200 rounded-lg flex-shrink-0">
                        <ProductImage
                          src={product.images[0]}
                          alt={product.name}
                          category={product.category}
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <Link
                              to={`/products/${product.id}`}
                              className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                            >
                              {product.name}
                            </Link>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                              {product.description}
                            </p>
                            
                            <div className="flex items-center mt-2 space-x-4">
                              <div className="flex items-center">
                                <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-gray-600 ml-1">
                                  {product.rating} ({product.reviewCount} ulasan)
                                </span>
                              </div>
                              <span className="text-sm text-gray-500">
                                {product.seller.name}
                              </span>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mt-2">
                              {product.features.slice(0, 3).map((feature, index) => (
                                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="text-right ml-4">
                            <div className="text-2xl font-bold text-gray-900">
                              Rp {product.price.toLocaleString()}
                            </div>
                            {product.originalPrice && (
                              <div className="text-sm text-gray-500 line-through">
                                Rp {product.originalPrice.toLocaleString()}
                              </div>
                            )}
                            
                            <div className="flex space-x-2 mt-4">
                              <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                <FiHeart className="w-5 h-5" />
                              </button>
                              <Link
                                to={`/products/${product.id}`}
                                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              >
                                <FiEye className="w-5 h-5" />
                              </Link>
                              <button
                                onClick={() => handleAddToCart(product)}
                                className="btn btn-primary btn-sm"
                              >
                                <FiShoppingCart className="w-4 h-4 mr-2" />
                                Keranjang
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
