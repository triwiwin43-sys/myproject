// Seller Orders Management with Full Dashboard
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
  FiTruck, 
  FiCheck, 
  FiClock, 
  FiEye, 
  FiEdit 
} from 'react-icons/fi';

const SellerOrders = () => {
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

  const [orders] = useState([
    {
      id: 'ORD-001',
      customerName: 'John Doe',
      products: ['HP LaserJet Pro M404n', 'Tinta Canon GI-790'],
      total: 2500000,
      status: 'pending',
      date: '2024-12-23',
      shippingAddress: 'Jl. Sudirman No. 123, Jakarta'
    },
    {
      id: 'ORD-002',
      customerName: 'Jane Smith',
      products: ['Canon Pixma G2010'],
      total: 1800000,
      status: 'processing',
      date: '2024-12-22',
      shippingAddress: 'Jl. Thamrin No. 456, Jakarta'
    },
    {
      id: 'ORD-003',
      customerName: 'Bob Wilson',
      products: ['Service Laptop Dell'],
      total: 500000,
      status: 'shipped',
      date: '2024-12-21',
      shippingAddress: 'Jl. Gatot Subroto No. 789, Jakarta'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-green-100 text-green-800';
      case 'delivered': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <FiClock className="w-4 h-4" />;
      case 'processing': return <FiPackage className="w-4 h-4" />;
      case 'shipped': return <FiTruck className="w-4 h-4" />;
      case 'delivered': return <FiCheck className="w-4 h-4" />;
      default: return <FiClock className="w-4 h-4" />;
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
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Pesanan</h1>
              <p className="text-gray-600">Kelola pesanan dari pelanggan</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <FiClock className="w-8 h-8 text-yellow-600" />
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {orders.filter(o => o.status === 'pending').length}
                    </div>
                    <div className="text-sm text-gray-600">Menunggu</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <FiPackage className="w-8 h-8 text-blue-600" />
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {orders.filter(o => o.status === 'processing').length}
                    </div>
                    <div className="text-sm text-gray-600">Diproses</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <FiTruck className="w-8 h-8 text-green-600" />
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {orders.filter(o => o.status === 'shipped').length}
                    </div>
                    <div className="text-sm text-gray-600">Dikirim</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <FiCheck className="w-8 h-8 text-purple-600" />
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {orders.filter(o => o.status === 'delivered').length}
                    </div>
                    <div className="text-sm text-gray-600">Selesai</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Daftar Pesanan</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID Pesanan
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Pelanggan
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Produk
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tanggal
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {order.customerName}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          <div className="max-w-xs">
                            {order.products.join(', ')}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Rp {order.total.toLocaleString('id-ID')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {getStatusIcon(order.status)}
                            <span className="ml-1 capitalize">{order.status}</span>
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(order.date).toLocaleDateString('id-ID')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <FiEye className="w-4 h-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-900">
                              <FiEdit className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellerOrders;
