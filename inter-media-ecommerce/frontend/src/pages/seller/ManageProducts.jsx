import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import ProductImage from '../../components/ProductImage';
import useAuthStore from '../../context/authStore';
import toast from 'react-hot-toast';

const ManageProducts = () => {
  const { user } = useAuthStore();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // Simulate API call - replace with actual API
      const mockProducts = [
        {
          id: 1,
          name: 'HP LaserJet Pro M404n',
          category: 'Printer',
          price: 2500000,
          stock: 15,
          status: 'active',
          image: '/api/placeholder/100/100',
          createdAt: '2024-12-20',
          views: 45,
          orders: 8
        },
        {
          id: 2,
          name: 'Canon Pixma G2010',
          category: 'Printer',
          price: 1200000,
          stock: 8,
          status: 'active',
          image: '/api/placeholder/100/100',
          createdAt: '2024-12-18',
          views: 32,
          orders: 5
        },
        {
          id: 3,
          name: 'Service Laptop Premium',
          category: 'Service',
          price: 250000,
          stock: 999,
          status: 'active',
          image: '/api/placeholder/100/100',
          createdAt: '2024-12-15',
          views: 78,
          orders: 12
        }
      ];
      setProducts(mockProducts);
    } catch (error) {
      toast.error('Gagal memuat produk');
    } finally {
      setLoading(false);
    }
  };

  const toggleProductStatus = async (productId, currentStatus) => {
    try {
      const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
      setProducts(products.map(p => 
        p.id === productId ? { ...p, status: newStatus } : p
      ));
      toast.success(`Produk ${newStatus === 'active' ? 'diaktifkan' : 'dinonaktifkan'}`);
    } catch (error) {
      toast.error('Gagal mengubah status produk');
    }
  };

  const deleteProduct = async (productId) => {
    if (window.confirm('Yakin ingin menghapus produk ini?')) {
      try {
        setProducts(products.filter(p => p.id !== productId));
        toast.success('Produk berhasil dihapus');
      } catch (error) {
        toast.error('Gagal menghapus produk');
      }
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || product.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const categories = ['all', 'Printer', 'Laptop', 'PC', 'Service', 'Aksesoris'];
  const statuses = ['all', 'active', 'inactive'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Kelola Produk</h1>
              <p className="text-gray-600">Kelola produk dan layanan yang Anda jual</p>
            </div>
            <Link to="/seller/products/add" className="btn btn-primary">
              <FiPlus className="w-5 h-5 mr-2" />
              Tambah Produk
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cari Produk
              </label>
              <div className="relative">
                <FiSearch className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Nama produk..."
                  className="input pl-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori
              </label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="input"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'Semua Kategori' : cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="input"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status === 'all' ? 'Semua Status' : 
                     status === 'active' ? 'Aktif' : 'Nonaktif'}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button className="btn btn-outline w-full">
                <FiFilter className="w-5 h-5 mr-2" />
                Reset Filter
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
                    Statistik
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      </div>
                    </td>
                  </tr>
                ) : filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                      Tidak ada produk ditemukan
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-12 w-12 bg-gray-200 rounded-lg mr-4">
                            <ProductImage
                              src={product.image}
                              alt={product.name}
                              category={product.category}
                              className="h-12 w-12 rounded-lg object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {product.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              Dibuat: {product.createdAt}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Rp {product.price.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {product.stock === 999 ? 'Unlimited' : product.stock}
                        {product.stock < 10 && product.stock !== 999 && (
                          <span className="text-red-600 text-xs ml-1">⚠️</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => toggleProductStatus(product.id, product.status)}
                          className="flex items-center"
                        >
                          {product.status === 'active' ? (
                            <>
                              <FiToggleRight className="w-6 h-6 text-green-600 mr-2" />
                              <span className="text-green-600 text-sm">Aktif</span>
                            </>
                          ) : (
                            <>
                              <FiToggleLeft className="w-6 h-6 text-gray-400 mr-2" />
                              <span className="text-gray-400 text-sm">Nonaktif</span>
                            </>
                          )}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div>👁️ {product.views} views</div>
                        <div>🛒 {product.orders} orders</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <Link
                            to={`/products/${product.id}`}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <FiEye className="w-4 h-4" />
                          </Link>
                          <Link
                            to={`/seller/products/edit/${product.id}`}
                            className="text-green-600 hover:text-green-900"
                          >
                            <FiEdit className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => deleteProduct(product.id)}
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
        </div>

        {/* Summary Stats */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-2xl font-bold text-blue-600">{products.length}</div>
            <div className="text-sm text-gray-600">Total Produk</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-2xl font-bold text-green-600">
              {products.filter(p => p.status === 'active').length}
            </div>
            <div className="text-sm text-gray-600">Produk Aktif</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-2xl font-bold text-yellow-600">
              {products.filter(p => p.stock < 10 && p.stock !== 999).length}
            </div>
            <div className="text-sm text-gray-600">Stok Menipis</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-2xl font-bold text-purple-600">
              {products.reduce((sum, p) => sum + p.orders, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Pesanan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
