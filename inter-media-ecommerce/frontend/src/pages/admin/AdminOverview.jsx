// Admin Overview Dashboard
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiTrendingUp, 
  FiShoppingCart, 
  FiUsers, 
  FiPackage,
  FiDollarSign,
  FiEye,
  FiArrowUp,
  FiArrowDown,
  FiActivity,
  FiClock,
  FiCheckCircle,
  FiAlertCircle
} from 'react-icons/fi';

const AdminOverview = () => {
  const [stats, setStats] = useState({
    totalRevenue: 125000000,
    totalOrders: 1247,
    totalCustomers: 856,
    totalProducts: 342,
    revenueGrowth: 12.5,
    ordersGrowth: 8.3,
    customersGrowth: 15.2,
    productsGrowth: 5.7
  });

  const [recentOrders, setRecentOrders] = useState([
    {
      id: 'ORD-001',
      customer: 'John Doe',
      amount: 2525000,
      status: 'processing',
      date: '2024-12-23'
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      amount: 7750000,
      status: 'shipped',
      date: '2024-12-22'
    },
    {
      id: 'ORD-003',
      customer: 'Bob Wilson',
      amount: 2425000,
      status: 'pending',
      date: '2024-12-23'
    }
  ]);

  const [topProducts, setTopProducts] = useState([
    {
      id: 1,
      name: 'HP LaserJet Pro M404n',
      sales: 45,
      revenue: 112500000,
      image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'ASUS VivoBook 14',
      sales: 32,
      revenue: 208000000,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Logitech MX Master 3',
      sales: 28,
      revenue: 33600000,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=100&h=100&fit=crop'
    }
  ]);

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'warning',
      message: '5 produk dengan stok rendah',
      action: 'Lihat Produk',
      link: '/admin/products'
    },
    {
      id: 2,
      type: 'info',
      message: '12 pesanan menunggu konfirmasi',
      action: 'Lihat Pesanan',
      link: '/admin/orders'
    },
    {
      id: 3,
      type: 'success',
      message: 'Backup database berhasil',
      action: 'Lihat Log',
      link: '/admin/settings'
    }
  ]);

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-indigo-100 text-indigo-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'warning':
        return <FiAlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'info':
        return <FiClock className="w-5 h-5 text-blue-600" />;
      case 'success':
        return <FiCheckCircle className="w-5 h-5 text-green-600" />;
      default:
        return <FiActivity className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Ringkasan Dasbor</h1>
        <p className="text-gray-600">Selamat datang kembali! Berikut ringkasan bisnis Anda hari ini.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                Rp {stats.totalRevenue.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <FiDollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <FiArrowUp className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-600 ml-1">
              +{stats.revenueGrowth}% dari bulan lalu
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalOrders.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FiShoppingCart className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <FiArrowUp className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-600 ml-1">
              +{stats.ordersGrowth}% dari bulan lalu
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Customers</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalCustomers.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <FiUsers className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <FiArrowUp className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-600 ml-1">
              +{stats.customersGrowth}% dari bulan lalu
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Products</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalProducts.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <FiPackage className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <FiArrowUp className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-600 ml-1">
              +{stats.productsGrowth}% dari bulan lalu
            </span>
          </div>
        </div>
      </div>

      {/* Charts and Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Pesanan Terbaru</h3>
              <Link 
                to="/admin/orders" 
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Lihat Semua
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {order.id}
                    </div>
                    <div className="text-sm text-gray-500">
                      {order.customer}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      Rp {order.amount.toLocaleString()}
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Produk Terlaris</h3>
              <Link 
                to="/admin/products" 
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Lihat Semua
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div key={product.id} className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 truncate">
                      {product.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {product.sales} terjual
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    Rp {product.revenue.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Alerts and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alerts */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Notifikasi & Alert</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getAlertIcon(alert.type)}
                    <span className="text-sm text-gray-900">{alert.message}</span>
                  </div>
                  <Link
                    to={alert.link}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {alert.action}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              <Link
                to="/admin/products/create"
                className="block w-full text-left px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <FiPackage className="w-5 h-5 inline mr-3" />
                Tambah Produk Baru
              </Link>
              <Link
                to="/admin/orders"
                className="block w-full text-left px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
              >
                <FiShoppingCart className="w-5 h-5 inline mr-3" />
                Kelola Pesanan
              </Link>
              <Link
                to="/admin/users"
                className="block w-full text-left px-4 py-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <FiUsers className="w-5 h-5 inline mr-3" />
                Manajemen User
              </Link>
              <Link
                to="/admin/reports"
                className="block w-full text-left px-4 py-3 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <FiTrendingUp className="w-5 h-5 inline mr-3" />
                Lihat Laporan
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Sales Performance</h3>
        </div>
        <div className="p-6">
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <FiTrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Chart akan ditampilkan di sini</p>
              <p className="text-sm text-gray-400">Integrasi dengan Chart.js atau library lainnya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
