// Seller Reports with Full Dashboard
import React, { useState } from 'react';
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
  FiDownload,
  FiTrendingUp,
  FiDollarSign
} from 'react-icons/fi';

const SellerReports = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dateRange, setDateRange] = useState('30days');
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
                <h1 className="text-2xl font-bold text-gray-900">Laporan & Analitik</h1>
                <p className="text-gray-600">Analisis performa penjualan Anda</p>
              </div>
              <div className="flex space-x-2">
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                >
                  <option value="7days">7 Hari Terakhir</option>
                  <option value="30days">30 Hari Terakhir</option>
                  <option value="90days">90 Hari Terakhir</option>
                  <option value="1year">1 Tahun Terakhir</option>
                </select>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                  <FiDownload className="w-4 h-4 mr-2" />
                  Export
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <FiDollarSign className="w-8 h-8 text-green-600" />
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">Rp 45.2M</div>
                    <div className="text-sm text-gray-600">Total Pendapatan</div>
                    <div className="text-xs text-green-600 flex items-center mt-1">
                      <FiTrendingUp className="w-3 h-3 mr-1" />
                      +12.5%
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <FiShoppingCart className="w-8 h-8 text-blue-600" />
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">1,234</div>
                    <div className="text-sm text-gray-600">Total Pesanan</div>
                    <div className="text-xs text-green-600 flex items-center mt-1">
                      <FiTrendingUp className="w-3 h-3 mr-1" />
                      +8.3%
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <FiPackage className="w-8 h-8 text-purple-600" />
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">156</div>
                    <div className="text-sm text-gray-600">Produk Terjual</div>
                    <div className="text-xs text-green-600 flex items-center mt-1">
                      <FiTrendingUp className="w-3 h-3 mr-1" />
                      +15.2%
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <FiUsers className="w-8 h-8 text-orange-600" />
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">89</div>
                    <div className="text-sm text-gray-600">Pelanggan Baru</div>
                    <div className="text-xs text-green-600 flex items-center mt-1">
                      <FiTrendingUp className="w-3 h-3 mr-1" />
                      +5.7%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Penjualan Bulanan</h3>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Chart akan ditampilkan di sini</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Produk Terlaris</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">HP LaserJet Pro M404n</span>
                    <span className="text-sm font-medium text-gray-900">45 unit</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Canon Pixma G2010</span>
                    <span className="text-sm font-medium text-gray-900">32 unit</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Tinta Canon GI-790</span>
                    <span className="text-sm font-medium text-gray-900">28 unit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellerReports;
