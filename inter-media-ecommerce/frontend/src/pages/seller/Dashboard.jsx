import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiPackage, 
  FiShoppingCart, 
  FiDollarSign, 
  FiUsers,
  FiPlus,
  FiEdit,
  FiTrash2,
  FiEye,
  FiTrendingUp,
  FiSettings,
  FiCreditCard,
  FiMenu,
  FiX,
  FiHome,
  FiActivity,
  FiTool,
  FiFileText,
  FiLogOut,
  FiStar,
  FiMessageSquare,
  FiHelpCircle
} from 'react-icons/fi';
import useAuthStore from '../../context/authStore';

const SellerDashboard = () => {
  const { user } = useAuthStore();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    totalCustomers: 0,
    pendingOrders: 0,
    lowStock: 0
  });
  const [recentOrders, setRecentOrders] = useState([]);
  const [products, setProducts] = useState([]);

  // Navigation menu items
  const navigation = [
    { name: 'Dashboard', href: '/seller/dashboard', icon: FiHome, current: location.pathname === '/seller/dashboard' },
    { name: 'Produk', href: '/seller/products', icon: FiPackage, current: location.pathname.includes('/seller/products') },
    { name: 'Pesanan', href: '/seller/orders', icon: FiShoppingCart, current: location.pathname.includes('/seller/orders') },
    { name: 'Pelanggan', href: '/seller/customers', icon: FiUsers, current: location.pathname.includes('/seller/customers') },
    { name: 'Layanan', href: '/seller/services', icon: FiTool, current: location.pathname.includes('/seller/services') },
    { name: 'Laporan', href: '/seller/reports', icon: FiActivity, current: location.pathname.includes('/seller/reports') },
    { name: 'Ulasan', href: '/seller/reviews', icon: FiStar, current: location.pathname.includes('/seller/reviews') },
    { name: 'Pesan', href: '/seller/messages', icon: FiMessageSquare, current: location.pathname.includes('/seller/messages') },
    { name: 'Metode Pembayaran', href: '/seller/payment-methods', icon: FiCreditCard, current: location.pathname.includes('/seller/payment-methods') },
    { name: 'Pengaturan', href: '/seller/settings', icon: FiSettings, current: location.pathname.includes('/seller/settings') },
  ];

  useEffect(() => {
    fetchSellerData();
  }, []);

  const fetchSellerData = async () => {
    setStats({
      totalProducts: 25,
      totalOrders: 142,
      totalRevenue: 15750000,
      totalCustomers: 89,
      pendingOrders: 8,
      lowStock: 3
    });
    
    setRecentOrders([
      { id: 1, customer: 'PT. Maju Jaya', total: 2500000, status: 'pending', date: '2024-12-24', items: 'HP LaserJet Pro + Toner' },
      { id: 2, customer: 'CV. Berkah Tech', total: 1800000, status: 'processing', date: '2024-12-23', items: 'Canon Pixma G2010' },
      { id: 3, customer: 'Toko Komputer Sejahtera', total: 850000, status: 'completed', date: '2024-12-22', items: 'Service Laptop + Spare Part' }
    ]);
    
    setProducts([
      { id: 1, name: 'HP LaserJet Pro M404n', price: 2500000, stock: 5, status: 'active', category: 'Printer' },
      { id: 2, name: 'Canon Pixma G2010', price: 1200000, stock: 2, status: 'active', category: 'Printer' },
      { id: 3, name: 'Service Laptop', price: 150000, stock: 999, status: 'active', category: 'Service' }
    ]);
  };

  const handleLogout = () => {
    localStorage.removeItem('sellerToken');
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 bg-white shadow-lg transform transition-all duration-300 ease-in-out lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 ${
        sidebarCollapsed ? 'lg:w-16' : 'lg:w-64'
      } w-64`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className={`flex items-center ${sidebarCollapsed ? 'lg:justify-center lg:px-0' : ''}`}>
            <FiFileText className="w-8 h-8 text-blue-600" />
            {!sidebarCollapsed && (
              <span className="ml-2 text-xl font-bold text-gray-900">Seller Panel</span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            {/* Desktop toggle button */}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hidden lg:block p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <FiMenu className="w-5 h-5" />
            </button>
            {/* Mobile close button */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* User Info */}
        {!sidebarCollapsed && (
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">
                  {user?.name?.charAt(0) || 'S'}
                </span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{user?.name || 'Seller'}</p>
                <p className="text-xs text-gray-500">Seller Account</p>
              </div>
            </div>
          </div>
        )}

        {/* Collapsed User Avatar */}
        {sidebarCollapsed && (
          <div className="hidden lg:flex justify-center py-4 border-b border-gray-200">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold">
                {user?.name?.charAt(0) || 'S'}
              </span>
            </div>
          </div>
        )}

        <nav className="mt-6 px-3">
          <div className="space-y-1">
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
                  } ${sidebarCollapsed ? 'lg:justify-center lg:px-2' : ''}`}
                  onClick={() => setSidebarOpen(false)}
                  title={sidebarCollapsed ? item.name : ''}
                >
                  <Icon className={`w-5 h-5 ${sidebarCollapsed ? '' : 'mr-3'}`} />
                  {!sidebarCollapsed && (
                    <span className="lg:block">{item.name}</span>
                  )}
                  <span className="lg:hidden">{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              to="/help"
              className={`group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors ${
                sidebarCollapsed ? 'lg:justify-center lg:px-2' : ''
              }`}
              title={sidebarCollapsed ? 'Bantuan' : ''}
            >
              <FiHelpCircle className={`w-5 h-5 ${sidebarCollapsed ? '' : 'mr-3'}`} />
              {!sidebarCollapsed && (
                <span className="lg:block">Bantuan</span>
              )}
              <span className="lg:hidden">Bantuan</span>
            </Link>
            <button
              onClick={handleLogout}
              className={`group flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors ${
                sidebarCollapsed ? 'lg:justify-center lg:px-2' : ''
              }`}
              title={sidebarCollapsed ? 'Keluar' : ''}
            >
              <FiLogOut className={`w-5 h-5 ${sidebarCollapsed ? '' : 'mr-3'}`} />
              {!sidebarCollapsed && (
                <span className="lg:block">Keluar</span>
              )}
              <span className="lg:hidden">Keluar</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
            >
              <FiMenu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900 lg:hidden">Dashboard Seller</h1>
            <div className="w-10 lg:hidden" /> {/* Spacer */}
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard Seller</h1>
                <p className="text-gray-600">Selamat datang kembali, {user?.name || 'Seller'}</p>
              </div>
              <div className="flex space-x-3">
                <Link to="/seller/settings" className="btn btn-outline btn-sm">
                  <FiSettings className="w-4 h-4 mr-2" />
                  Pengaturan
                </Link>
                <Link to="/seller/products/add" className="btn btn-primary btn-sm">
                  <FiPlus className="w-4 h-4 mr-2" />
                  Tambah Produk
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Produk</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
                  <p className="text-xs text-green-600 mt-1">
                    <FiTrendingUp className="inline w-3 h-3 mr-1" />
                    +2 bulan ini
                  </p>
                </div>
                <FiPackage className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Pesanan</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
                  <p className="text-xs text-yellow-600 mt-1">{stats.pendingOrders} menunggu</p>
                </div>
                <FiShoppingCart className="h-8 w-8 text-green-600" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Pendapatan</p>
                  <p className="text-2xl font-bold text-gray-900">Rp {stats.totalRevenue.toLocaleString()}</p>
                  <p className="text-xs text-green-600 mt-1">
                    <FiTrendingUp className="inline w-3 h-3 mr-1" />
                    +12% bulan ini
                  </p>
                </div>
                <FiDollarSign className="h-8 w-8 text-yellow-600" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pelanggan</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalCustomers}</p>
                  <p className="text-xs text-red-600 mt-1">{stats.lowStock} stok menipis</p>
                </div>
                <FiUsers className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Pesanan Terbaru</h2>
                  <Link to="/seller/orders" className="text-blue-600 hover:text-blue-700 text-sm">Lihat Semua</Link>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentOrders.map(order => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{order.customer}</p>
                        <p className="text-sm text-gray-600">{order.items}</p>
                        <p className="text-xs text-gray-500">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">Rp {order.total.toLocaleString()}</p>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          order.status === 'completed' ? 'bg-green-100 text-green-800' : 
                          order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status === 'completed' ? 'Selesai' : 
                           order.status === 'processing' ? 'Diproses' : 'Menunggu'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Management */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Produk & Layanan</h2>
                  <Link to="/seller/products" className="text-blue-600 hover:text-blue-700 text-sm">Kelola Produk</Link>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {products.map(product => (
                    <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.category}</p>
                        <p className="text-xs text-gray-500">
                          Stok: {product.stock === 999 ? 'Unlimited' : product.stock}
                          {product.stock < 5 && product.stock !== 999 && (
                            <span className="text-red-600 ml-2">⚠️ Stok Menipis</span>
                          )}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <p className="font-medium text-gray-900">Rp {product.price.toLocaleString()}</p>
                        </div>
                        <div className="flex space-x-1">
                          <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">
                            <FiEye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors">
                            <FiEdit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors">
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-4">Aksi Cepat</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/seller/products/add" className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <FiPlus className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium text-blue-900">Tambah Produk</span>
              </Link>
              <Link to="/seller/payment-methods" className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <FiCreditCard className="w-8 h-8 text-green-600 mb-2" />
                <span className="text-sm font-medium text-green-900">Metode Pembayaran</span>
              </Link>
              <Link to="/seller/services" className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <FiTool className="w-8 h-8 text-purple-600 mb-2" />
                <span className="text-sm font-medium text-purple-900">Layanan Service</span>
              </Link>
              <Link to="/seller/settings" className="flex flex-col items-center p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <FiSettings className="w-8 h-8 text-yellow-600 mb-2" />
                <span className="text-sm font-medium text-yellow-900">Pengaturan Toko</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellerDashboard;
