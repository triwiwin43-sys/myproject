import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { 
  FiPackage, 
  FiShoppingCart, 
  FiUsers,
  FiSettings,
  FiCreditCard,
  FiMenu,
  FiX,
  FiHome,
  FiActivity,
  FiTool,
  FiFileText,
  FiLogOut,
  FiStar
} from 'react-icons/fi';

const SellerLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const sidebarMenus = [
    { icon: FiHome, title: 'Dashboard', link: '/seller/dashboard', description: 'Overview toko Anda' },
    { icon: FiPackage, title: 'Product Management', link: '/seller/products', description: 'Kelola produk toko' },
    { icon: FiShoppingCart, title: 'Order Management', link: '/seller/orders', description: 'Kelola pesanan masuk' },
    { icon: FiUsers, title: 'Customer Management', link: '/seller/customers', description: 'Data pelanggan' },
    { icon: FiTool, title: 'Service Management', link: '/seller/services', description: 'Kelola layanan' },
    { icon: FiActivity, title: 'Reports & Analytics', link: '/seller/reports', description: 'Laporan penjualan' },
    { icon: FiStar, title: 'Review Management', link: '/seller/reviews', description: 'Kelola ulasan produk' },
    { icon: FiCreditCard, title: 'Payment Methods', link: '/seller/payment-methods', description: 'Metode pembayaran' },
    { icon: FiSettings, title: 'Settings', link: '/seller/settings', description: 'Pengaturan toko' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Desktop Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white shadow-lg transition-all duration-300 ease-in-out hidden lg:block`}>
        <div className="flex items-center justify-between h-16 px-4 border-b">
          {!sidebarCollapsed && <h2 className="text-lg font-semibold text-gray-900">Seller Panel</h2>}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <FiMenu className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="mt-6 px-2">
          <div className="space-y-2">
            {sidebarMenus.map((menu, index) => {
              const IconComponent = menu.icon;
              const isActive = location.pathname === menu.link || location.pathname.includes(menu.link);
              return (
                <Link
                  key={index}
                  to={menu.link}
                  className={`flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' 
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                  title={sidebarCollapsed ? menu.title : ''}
                >
                  <IconComponent className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  {!sidebarCollapsed && (
                    <div className="ml-3 opacity-100 transition-opacity duration-300">
                      <div className="font-medium">{menu.title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{menu.description}</div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-4 left-2 right-2">
          <button
            onClick={() => window.location.href = '/login'}
            className="w-full flex items-center px-3 py-3 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors"
          >
            <FiLogOut className="w-5 h-5 flex-shrink-0" />
            {!sidebarCollapsed && <span className="ml-3">Keluar</span>}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className="flex items-center justify-between h-16 px-6 border-b bg-gradient-to-r from-blue-600 to-blue-700">
          <h2 className="text-lg font-semibold text-white">Seller Panel</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-lg text-blue-100 hover:text-white hover:bg-blue-800 transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="mt-6 px-3">
          <div className="space-y-2">
            {sidebarMenus.map((menu, index) => {
              const IconComponent = menu.icon;
              const isActive = location.pathname === menu.link || location.pathname.includes(menu.link);
              return (
                <Link
                  key={index}
                  to={menu.link}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105 ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <IconComponent className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium">{menu.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{menu.description}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Mobile Logout */}
        <div className="absolute bottom-4 left-3 right-3">
          <button
            onClick={() => window.location.href = '/login'}
            className="w-full flex items-center px-4 py-3 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors"
          >
            <FiLogOut className="w-5 h-5 mr-3" />
            Keluar
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 transition-all duration-300">
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 mr-4 transition-colors"
                  >
                    <FiMenu className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerLayout;
