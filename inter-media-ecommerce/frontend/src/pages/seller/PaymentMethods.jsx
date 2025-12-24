// Payment Methods with Full Dashboard
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
  FiDollarSign, 
  FiCheck, 
  FiEdit
} from 'react-icons/fi';

const PaymentMethods = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  const [paymentMethods] = useState([
    {
      id: 1,
      name: 'Transfer Bank BCA',
      type: 'bank_transfer',
      accountNumber: '1234567890',
      accountName: 'Inter Medi-A Store',
      isActive: true,
      fees: 0
    },
    {
      id: 2,
      name: 'Transfer Bank Mandiri',
      type: 'bank_transfer',
      accountNumber: '0987654321',
      accountName: 'Inter Medi-A Store',
      isActive: true,
      fees: 0
    },
    {
      id: 3,
      name: 'GoPay',
      type: 'e_wallet',
      accountNumber: '081234567890',
      accountName: 'Inter Medi-A Store',
      isActive: true,
      fees: 2.5
    },
    {
      id: 4,
      name: 'OVO',
      type: 'e_wallet',
      accountNumber: '081234567890',
      accountName: 'Inter Medi-A Store',
      isActive: false,
      fees: 2.5
    }
  ]);

  const getMethodIcon = (type) => {
    switch (type) {
      case 'bank_transfer': return <FiCreditCard className="w-5 h-5" />;
      case 'e_wallet': return <FiDollarSign className="w-5 h-5" />;
      default: return <FiCreditCard className="w-5 h-5" />;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'bank_transfer': return 'Transfer Bank';
      case 'e_wallet': return 'E-Wallet';
      default: return 'Lainnya';
    }
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
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Metode Pembayaran</h1>
                <p className="text-gray-600">Kelola metode pembayaran yang tersedia untuk pelanggan</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                <FiSettings className="w-4 h-4 mr-2" />
                Tambah Metode
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <FiCreditCard className="w-8 h-8 text-blue-600" />
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {paymentMethods.filter(m => m.isActive).length}
                    </div>
                    <div className="text-sm text-gray-600">Metode Aktif</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <FiDollarSign className="w-8 h-8 text-green-600" />
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {paymentMethods.filter(m => m.type === 'bank_transfer').length}
                    </div>
                    <div className="text-sm text-gray-600">Transfer Bank</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <FiSettings className="w-8 h-8 text-purple-600" />
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {paymentMethods.filter(m => m.type === 'e_wallet').length}
                    </div>
                    <div className="text-sm text-gray-600">E-Wallet</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods List */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Daftar Metode Pembayaran</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${method.isActive ? 'bg-green-100' : 'bg-gray-100'}`}>
                          {getMethodIcon(method.type)}
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">{method.name}</h4>
                          <p className="text-sm text-gray-500">{getTypeLabel(method.type)}</p>
                          <div className="mt-1 space-y-1">
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">No. Rekening/HP:</span> {method.accountNumber}
                            </p>
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Atas Nama:</span> {method.accountName}
                            </p>
                            {method.fees > 0 && (
                              <p className="text-sm text-gray-600">
                                <span className="font-medium">Biaya Admin:</span> {method.fees}%
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          {method.isActive ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <FiCheck className="w-3 h-3 mr-1" />
                              Aktif
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              <FiX className="w-3 h-3 mr-1" />
                              Nonaktif
                            </span>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            Edit
                          </button>
                          <button className={`text-sm font-medium ${
                            method.isActive ? 'text-red-600 hover:text-red-700' : 'text-green-600 hover:text-green-700'
                          }`}>
                            {method.isActive ? 'Nonaktifkan' : 'Aktifkan'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-lg font-medium text-blue-900 mb-2">Petunjuk Penggunaan</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Pastikan informasi rekening/nomor yang dimasukkan sudah benar</li>
                <li>• Metode pembayaran yang aktif akan ditampilkan kepada pelanggan saat checkout</li>
                <li>• Untuk e-wallet, pastikan nomor HP yang terdaftar sudah benar</li>
                <li>• Biaya admin akan otomatis ditambahkan ke total pembayaran pelanggan</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PaymentMethods;
