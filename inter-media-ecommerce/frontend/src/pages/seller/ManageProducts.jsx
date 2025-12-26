import { useState } from 'react';
import { Link } from 'react-router-dom';
import useProductStore from '../../context/productStore';
import { 
  FiPlus, 
  FiEdit, 
  FiTrash2, 
  FiEye,
  FiSearch,
  FiFilter,
  FiMoreVertical,
  FiToggleLeft,
  FiToggleRight
} from 'react-icons/fi';

const ManageProducts = () => {
  const { products, deleteProduct, updateProduct } = useProductStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || product.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const categories = ['all', ...new Set(products.map(p => p.category))];
  const statuses = ['all', 'active', 'inactive'];

  const handleToggleStatus = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      updateProduct(productId, {
        ...product,
        status: product.status === 'active' ? 'inactive' : 'active'
      });
    }
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(productId);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
          <p className="text-gray-600">Manage your store products</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{products.length}</p>
            <p className="text-xs text-gray-500">Total Products</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">{products.filter(p => p.status === 'active').length}</p>
            <p className="text-xs text-gray-500">Active</p>
          </div>
          <Link
            to="/seller/products/add"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            <FiPlus className="w-4 h-4 mr-2" />
            Add Product
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'Semua Kategori' : category}
              </option>
            ))}
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'Semua Status' : status === 'active' ? 'Aktif' : 'Nonaktif'}
              </option>
            ))}
          </select>
          <button className="bg-gray-50 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-100 flex items-center justify-center border border-gray-200">
            <FiFilter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-w-1 aspect-h-1 bg-gray-100 relative">
              <img
                src={product.images?.[0] || '/api/placeholder/300/300'}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => handleToggleStatus(product.id)}
                  className={`p-1 rounded-full ${product.status === 'active' ? 'text-green-600' : 'text-gray-400'}`}
                >
                  {product.status === 'active' ? <FiToggleRight className="w-5 h-5" /> : <FiToggleLeft className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{product.category}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold text-blue-600">
                  Rp {product.price?.toLocaleString('id-ID') || '0'}
                </span>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  product.stock > 10 ? 'bg-green-100 text-green-700' : 
                  product.stock > 0 ? 'bg-yellow-100 text-yellow-700' : 
                  'bg-red-100 text-red-700'
                }`}>
                  Stock: {product.stock || 0}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  product.status === 'active' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {product.status === 'active' ? 'Active' : 'Inactive'}
                </span>
                <div className="flex space-x-2">
                  <button 
                    className="text-blue-600 hover:text-blue-800 p-1"
                    title="View Details"
                  >
                    <FiEye className="w-4 h-4" />
                  </button>
                  <Link
                    to={`/seller/products/edit/${product.id}`}
                    className="text-green-600 hover:text-green-800 p-1"
                    title="Edit Product"
                  >
                    <FiEdit className="w-4 h-4" />
                  </Link>
                  <button 
                    onClick={() => handleDeleteProduct(product.id)}
                    className="text-red-600 hover:text-red-800 p-1"
                    title="Delete Product"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <FiPackage className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-500 mb-4">Get started by adding your first product.</p>
          <Link
            to="/seller/products/add"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 inline-flex items-center"
          >
            <FiPlus className="w-4 h-4 mr-2" />
            Add Product
          </Link>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
