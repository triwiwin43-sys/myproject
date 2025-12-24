// Manage Products with Full Dashboard
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiPackage, 
  FiShoppingCart, 
  FiUsers, 
  FiTool, 
  FiActivity, 
  FiStar, 
  FiCreditCard, 
  FiSettings, 
  FiMenu, 
  FiX, 
  FiBell, 
  FiUser,
  FiLogOut,
  FiPlus, 
  FiEdit, 
  FiTrash2, 
  FiEye,
  FiSearch,
  FiFilter,
  FiMoreVertical,
  FiDollarSign
} from 'react-icons/fi';

const ManageProducts = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const location = useLocation();

  // Navigation menu items
  const navigation = [
    { name: 'Dashboard', href: '/seller/dashboard', icon: FiHome, current: location.pathname === '/seller/dashboard' },
    { name: 'Produk', href: '/seller/products', icon: FiPackage, current: location.pathname.includes('/seller/products') },
    { name: 'Pesanan', href: '/seller/orders', icon: FiShoppingCart, current: location.pathname.includes('/seller/orders') },
    { name: 'Pelanggan', href: '/seller/customers', icon: FiUsers, current: location.pathname.includes('/seller/customers') },
    { name: 'Layanan', href: '/seller/services', icon: FiTool, current: location.pathname.includes('/seller/services') },
    { name: 'Laporan', href: '/seller/reports', icon: FiActivity, current: location.pathname.includes('/seller/reports') },
    { name: 'Ulasan', href: '/seller/reviews', icon: FiStar, current: location.pathname.includes('/seller/reviews') },
    { name: 'Metode Pembayaran', href: '/seller/payment-methods', icon: FiCreditCard, current: location.pathname.includes('/seller/payment-methods') },
    { name: 'Pengaturan', href: '/seller/settings', icon: FiSettings, current: location.pathname.includes('/seller/settings') },
  ];

  const handleLogout = () => {
    localStorage.removeItem('sellerToken');
    window.location.href = '/login';
  };

  const [products] = useState([
    {
      id: 1,
      name: 'HP LaserJet Pro M404n',
      category: 'Printer',
      price: 2500000,
      stock: 15,
      status: 'active',
      image: '/api/placeholder/100/100'
    },
    {
      id: 2,
      name: 'Canon Pixma G2010',
      category: 'Printer',
      price: 1800000,
      stock: 8,
      status: 'active',
      image: '/api/placeholder/100/100'
    },
    {
      id: 3,
      name: 'Tinta Canon GI-790',
      category: 'Tinta',
      price: 85000,
      stock: 50,
      status: 'active',
      image: '/api/placeholder/100/100'
    }
  ]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || product.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const categories = ['all', 'Printer', 'Tinta', 'Komputer', 'Aksesoris'];
  const statuses = ['all', 'active', 'inactive'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 bg-blue-600">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white">Inter Medi-A</h1>
            </div>
          </div>
          <button
            className="lg:hidden text-white hover:text-gray-200"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-8 px-4">
          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    item.current
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`mr-3 h-5 w-5 ${item.current ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Logout button */}
        <div className="absolute bottom-0 w-full p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors"
          >
            <FiLogOut className="mr-3 h-5 w-5" />
            Keluar
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top navigation */}
        <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <button
              className="lg:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <FiMenu className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <FiBell className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <FiUser className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Seller</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Kelola Produk</h1>
                <p className="text-gray-600">Kelola produk yang Anda jual</p>
              </div>
              <Link
                to="/seller/products/add"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
              >
                <FiPlus className="w-4 h-4 mr-2" />
                Tambah Produk
              </Link>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Cari produk..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2"
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
                  className="border border-gray-300 rounded-lg px-3 py-2"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>
                      {status === 'all' ? 'Semua Status' : status === 'active' ? 'Aktif' : 'Nonaktif'}
                    </option>
                  ))}
                </select>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center justify-center">
                  <FiFilter className="w-4 h-4 mr-2" />
                  Filter
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                  <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-blue-600">
                        Rp {product.price.toLocaleString('id-ID')}
                      </span>
                      <span className="text-sm text-gray-500">
                        Stok: {product.stock}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        product.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.status === 'active' ? 'Aktif' : 'Nonaktif'}
                      </span>
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <FiEye className="w-4 h-4" />
                        </button>
                        <Link
                          to={`/seller/products/edit/${product.id}`}
                          className="text-green-600 hover:text-green-800"
                        >
                          <FiEdit className="w-4 h-4" />
                        </Link>
                        <button className="text-red-600 hover:text-red-800">
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ManageProducts;
