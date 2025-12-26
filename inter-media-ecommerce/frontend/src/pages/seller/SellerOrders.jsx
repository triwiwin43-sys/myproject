import React, { useState } from 'react';
import { FiShoppingCart, FiPackage, FiTruck, FiCheck, FiClock, FiX, FiFilter, FiDownload, FiEye, FiEdit } from 'react-icons/fi';

const SellerOrders = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [dateRange, setDateRange] = useState('30days');

  const orders = [
    {
      id: '#ORD-001',
      customer: 'John Doe',
      email: 'john@email.com',
      product: 'HP LaserJet Pro M404n',
      quantity: 1,
      total: 2500000,
      status: 'pending',
      date: '2024-01-15',
      address: 'Jl. Sudirman No. 123, Jakarta',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: '#ORD-002',
      customer: 'Jane Smith',
      email: 'jane@email.com',
      product: 'Canon Pixma G2010',
      quantity: 2,
      total: 3600000,
      status: 'processing',
      date: '2024-01-14',
      address: 'Jl. Thamrin No. 456, Jakarta',
      paymentMethod: 'Credit Card'
    },
    {
      id: '#ORD-003',
      customer: 'Bob Wilson',
      email: 'bob@email.com',
      product: 'Tinta Canon GI-790',
      quantity: 5,
      total: 425000,
      status: 'shipped',
      date: '2024-01-13',
      address: 'Jl. Gatot Subroto No. 789, Jakarta',
      paymentMethod: 'E-Wallet'
    },
    {
      id: '#ORD-004',
      customer: 'Alice Brown',
      email: 'alice@email.com',
      product: 'Laptop Dell Inspiron',
      quantity: 1,
      total: 8500000,
      status: 'delivered',
      date: '2024-01-12',
      address: 'Jl. Kuningan No. 321, Jakarta',
      paymentMethod: 'Bank Transfer'
    }
  ];

  const orderStats = [
    { label: 'Total Orders', value: orders.length, icon: FiShoppingCart, color: 'blue' },
    { label: 'Pending', value: orders.filter(o => o.status === 'pending').length, icon: FiClock, color: 'yellow' },
    { label: 'Processing', value: orders.filter(o => o.status === 'processing').length, icon: FiPackage, color: 'orange' },
    { label: 'Shipped', value: orders.filter(o => o.status === 'shipped').length, icon: FiTruck, color: 'blue' },
    { label: 'Delivered', value: orders.filter(o => o.status === 'delivered').length, icon: FiCheck, color: 'green' }
  ];

  const filteredOrders = filterStatus === 'all' ? orders : orders.filter(order => order.status === filterStatus);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <FiClock className="w-4 h-4" />;
      case 'processing': return <FiPackage className="w-4 h-4" />;
      case 'shipped': return <FiTruck className="w-4 h-4" />;
      case 'delivered': return <FiCheck className="w-4 h-4" />;
      case 'cancelled': return <FiX className="w-4 h-4" />;
      default: return <FiPackage className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-orange-100 text-orange-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Pending';
      case 'processing': return 'Processing';
      case 'shipped': return 'Shipped';
      case 'delivered': return 'Delivered';
      case 'cancelled': return 'Cancelled';
      default: return status;
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      yellow: 'from-yellow-500 to-yellow-600',
      orange: 'from-orange-500 to-orange-600',
      purple: 'from-purple-500 to-purple-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
          <p className="text-gray-600">Manage customer orders and track status</p>
        </div>
        <div className="flex space-x-2">
          <select 
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
            <FiDownload className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Order Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {orderStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getColorClasses(stat.color)} flex items-center justify-center`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Order Chart Placeholder */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Trends</h3>
        <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <FiShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Order analytics chart will be displayed here</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center space-x-4">
          <FiFilter className="w-5 h-5 text-gray-400" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
          <span className="text-sm text-gray-500">
            Showing {filteredOrders.length} of {orders.length} orders
          </span>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Order Details</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{order.id}</div>
                      <div className="text-xs text-gray-500">{new Date(order.date).toLocaleDateString('id-ID')}</div>
                      <div className="text-xs text-gray-500">{order.paymentMethod}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                      <div className="text-xs text-gray-500">{order.email}</div>
                      <div className="text-xs text-gray-500 max-w-xs truncate">{order.address}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm text-gray-900">{order.product}</div>
                      <div className="text-xs text-gray-500">Qty: {order.quantity}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    Rp {order.total.toLocaleString('id-ID')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1.5">{getStatusText(order.status)}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 p-1" title="View Details">
                        <FiEye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-800 p-1" title="Update Status">
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
  );
};

export default SellerOrders;
