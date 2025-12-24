// Seller Layout Wrapper
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
  FiStar,
  FiMessageSquare,
  FiHelpCircle
} from 'react-icons/fi';
import useAuthStore from '../../context/authStore';

const SellerLayout = () => {
  const { user } = useAuthStore();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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
            <h1 className="text-lg font-semibold text-gray-900 lg:hidden">Seller Panel</h1>
            <div className="w-10 lg:hidden" /> {/* Spacer */}
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SellerLayout;
