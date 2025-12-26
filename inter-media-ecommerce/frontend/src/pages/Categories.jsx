import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiMonitor, 
  FiPrinter, 
  FiHardDrive, 
  FiPhone,
  FiHeadphones,
  FiCamera,
  FiRadio,
  FiTool,
  FiPackage,
  FiGrid,
  FiList,
  FiSearch
} from 'react-icons/fi';
import useProductStore from '../context/productStoreNew';

const Categories = () => {
  const { products } = useProductStore();
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Calculate product counts dynamically
  const getProductCount = (categoryId) => {
    return products.filter(product => product.category === categoryId).length;
  };

  const categories = [
    {
      id: 'computers',
      name: 'Komputer & PC',
      icon: FiMonitor,
      description: 'Desktop PC, All-in-One, Mini PC',
      productCount: getProductCount('computers'),
      image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=300&h=200&fit=crop',
      subcategories: ['Desktop PC', 'All-in-One', 'Mini PC', 'Workstation']
    },
    {
      id: 'laptops',
      name: 'Laptop & Notebook',
      icon: FiMonitor,
      description: 'Laptop gaming, bisnis, ultrabook',
      productCount: getProductCount('laptops'),
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      subcategories: ['Gaming Laptop', 'Business Laptop', 'Ultrabook', 'Chromebook']
    },
    {
      id: 'printers',
      name: 'Printer & Scanner',
      icon: FiPrinter,
      description: 'Printer inkjet, laser, multifungsi',
      productCount: getProductCount('printers'),
      image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=200&fit=crop',
      subcategories: ['Inkjet Printer', 'Laser Printer', 'Multifungsi', 'Scanner', 'Plotter']
    },
    {
      id: 'accessories',
      name: 'Aksesoris Komputer',
      icon: FiHeadphones,
      description: 'Mouse, keyboard, headset, webcam',
      productCount: getProductCount('accessories'),
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop',
      subcategories: ['Mouse', 'Keyboard', 'Headset', 'Webcam', 'Speaker']
    },
    {
      id: 'services',
      name: 'Layanan & Service',
      icon: FiTool,
      description: 'Service laptop, instalasi, maintenance',
      productCount: getProductCount('services'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop',
      subcategories: ['Service Laptop', 'Instalasi OS', 'Maintenance', 'Repair']
    }
  ];

  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || category.id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryTypes = [
    { id: 'all', name: 'Semua Kategori' },
    { id: 'hardware', name: 'Hardware' },
    { id: 'software', name: 'Software' },
    { id: 'services', name: 'Layanan' },
    { id: 'accessories', name: 'Aksesoris' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kategori Produk</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jelajahi berbagai kategori produk IT dan layanan yang kami sediakan
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <FiSearch className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari kategori..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input pl-10"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input"
              >
                {categoryTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
              
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                  }`}
                >
                  <FiGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                  }`}
                >
                  <FiList className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.id}
                  to={`/products?category=${category.id}`}
                  className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.productCount} produk
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                    
                    <div className="space-y-1">
                      {category.subcategories.slice(0, 3).map((sub, index) => (
                        <div key={index} className="text-xs text-gray-500">
                          • {sub}
                        </div>
                      ))}
                      {category.subcategories.length > 3 && (
                        <div className="text-xs text-blue-600">
                          +{category.subcategories.length - 3} lainnya
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.id}
                  to={`/products?category=${category.id}`}
                  className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-sm text-gray-600">{category.description}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {category.subcategories.map((sub, index) => (
                              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-semibold text-gray-900">
                          {category.productCount}
                        </span>
                        <p className="text-sm text-gray-500">produk</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <FiPackage className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Kategori tidak ditemukan</h3>
            <p className="text-gray-600">Coba gunakan kata kunci yang berbeda</p>
          </div>
        )}

        {/* Popular Categories */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Kategori Populer
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.slice(0, 5).map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.id}
                  to={`/products?category=${category.id}`}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {category.productCount} produk
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
