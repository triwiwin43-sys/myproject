// Product Management - Full CRUD
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { 
  FiPlus, 
  FiEdit, 
  FiTrash2, 
  FiEye, 
  FiSearch,
  FiFilter,
  FiDownload,
  FiUpload
} from 'react-icons/fi';
import ProductForm from '../../components/ProductForm';
import ImageUpload from '../../components/ImageUpload';
import toast from 'react-hot-toast';

const ProductManagement = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    status: 'all'
  });

  // Mock data - replace with API calls
  const mockProducts = [
    {
      id: 1,
      name: 'HP LaserJet Pro M404n',
      category: 'printers',
      price: 2500000,
      stock: 15,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=300&fit=crop'],
      createdAt: '2024-12-20',
      updatedAt: '2024-12-23'
    },
    {
      id: 2,
      name: 'ASUS VivoBook 14',
      category: 'laptops',
      price: 6500000,
      stock: 8,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop'],
      createdAt: '2024-12-18',
      updatedAt: '2024-12-22'
    },
    {
      id: 3,
      name: 'Logitech MX Master 3',
      category: 'accessories',
      price: 1200000,
      stock: 25,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop'],
      createdAt: '2024-12-15',
      updatedAt: '2024-12-21'
    }
  ];

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);
  };

  const handleCreateProduct = () => {
    navigate('/admin/products/create');
  };

  const handleEditProduct = (productId) => {
    navigate(`/admin/products/edit/${productId}`);
  };

  const handleDeleteProduct = async (productId) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
      try {
        // API call to delete product
        setProducts(products.filter(p => p.id !== productId));
        toast.success('Produk berhasil dihapus');
      } catch (error) {
        toast.error('Gagal menghapus produk');
      }
    }
  };

  const handleBulkDelete = async () => {
    if (selectedProducts.length === 0) {
      toast.error('Pilih produk yang ingin dihapus');
      return;
    }

    if (window.confirm(`Hapus ${selectedProducts.length} produk yang dipilih?`)) {
      try {
        setProducts(products.filter(p => !selectedProducts.includes(p.id)));
        setSelectedProducts([]);
        toast.success(`${selectedProducts.length} produk berhasil dihapus`);
      } catch (error) {
        toast.error('Gagal menghapus produk');
      }
    }
  };

  const handleSelectProduct = (productId) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleSelectAll = () => {
    if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(filteredProducts.map(p => p.id));
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesCategory = filters.category === 'all' || product.category === filters.category;
    const matchesStatus = filters.status === 'all' || product.status === filters.status;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const ProductList = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manajemen Produk</h1>
          <p className="text-gray-600">Kelola semua produk di toko Anda</p>
        </div>
        <button
          onClick={handleCreateProduct}
          className="btn btn-primary"
        >
          <FiPlus className="w-4 h-4 mr-2" />
          Tambah Produk
        </button>
      </div>

      {/* Filters & Actions */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari produk..."
                value={filters.search}
                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                className="input pl-10 w-full sm:w-64"
              />
            </div>

            {/* Category Filter */}
            <select
              value={filters.category}
              onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
              className="input w-full sm:w-auto"
            >
              <option value="all">Semua Kategori</option>
              <option value="printers">Printer</option>
              <option value="laptops">Laptop</option>
              <option value="computers">PC & Desktop</option>
              <option value="accessories">Aksesoris</option>
              <option value="services">Layanan</option>
            </select>

            {/* Status Filter */}
            <select
              value={filters.status}
              onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
              className="input w-full sm:w-auto"
            >
              <option value="all">Semua Status</option>
              <option value="active">Aktif</option>
              <option value="inactive">Tidak Aktif</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          <div className="flex space-x-2">
            {selectedProducts.length > 0 && (
              <button
                onClick={handleBulkDelete}
                className="btn btn-outline text-red-600 border-red-600 hover:bg-red-50"
              >
                <FiTrash2 className="w-4 h-4 mr-2" />
                Hapus ({selectedProducts.length})
              </button>
            )}
            <button className="btn btn-outline">
              <FiDownload className="w-4 h-4 mr-2" />
              Export
            </button>
            <button className="btn btn-outline">
              <FiUpload className="w-4 h-4 mr-2" />
              Import
            </button>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Produk
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kategori
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Harga
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stok
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center">
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      <span className="ml-2 text-gray-600">Memuat produk...</span>
                    </div>
                  </td>
                </tr>
              ) : filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center text-gray-500">
                    Tidak ada produk ditemukan
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => handleSelectProduct(product.id)}
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {product.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: {product.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 capitalize">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Rp {product.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        product.stock > 10 
                          ? 'bg-green-100 text-green-800'
                          : product.stock > 0
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.stock} unit
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        product.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {product.status === 'active' ? 'Aktif' : 'Tidak Aktif'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => navigate(`/admin/products/view/${product.id}`)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <FiEye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEditProduct(product.id)}
                          className="text-green-600 hover:text-green-900"
                        >
                          <FiEdit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filteredProducts.length > 0 && (
          <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Menampilkan <span className="font-medium">1</span> sampai{' '}
                <span className="font-medium">{filteredProducts.length}</span> dari{' '}
                <span className="font-medium">{filteredProducts.length}</span> produk
              </div>
              <div className="flex space-x-2">
                <button className="btn btn-outline btn-sm" disabled>
                  Previous
                </button>
                <button className="btn btn-outline btn-sm" disabled>
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <Routes>
      <Route index element={<ProductList />} />
      <Route path="create" element={
        <ProductForm 
          onSave={(productData) => {
            // API call to create product
            console.log('Creating product:', productData);
            toast.success('Produk berhasil ditambahkan');
            navigate('/admin/products');
          }}
          onCancel={() => navigate('/admin/products')}
        />
      } />
      <Route path="edit/:id" element={
        <ProductForm 
          product={products.find(p => p.id === parseInt(window.location.pathname.split('/').pop()))}
          onSave={(productData) => {
            // API call to update product
            console.log('Updating product:', productData);
            toast.success('Produk berhasil diupdate');
            navigate('/admin/products');
          }}
          onCancel={() => navigate('/admin/products')}
        />
      } />
    </Routes>
  );
};

export default ProductManagement;
