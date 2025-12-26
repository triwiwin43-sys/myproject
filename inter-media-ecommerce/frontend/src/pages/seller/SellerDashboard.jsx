import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiPackage, 
  FiShoppingCart, 
  FiUsers, 
  FiDollarSign, 
  FiTrendingUp, 
  FiStar,
  FiActivity,
  FiTool,
  FiCreditCard,
  FiSettings,
  FiArrowUpRight,
  FiPlus,
  FiEye,
  FiClock,
  FiCheckCircle
} from 'react-icons/fi';

const SellerDashboard = () => {
  const stats = [
    { icon: FiUsers, label: 'Total Customers', value: '1,234', change: '+12%', color: 'blue' },
    { icon: FiPackage, label: 'Total Products', value: '856', change: '+8%', color: 'green' },
    { icon: FiDollarSign, label: 'Revenue', value: 'Rp 125M', change: '+15%', color: 'yellow' },
    { icon: FiActivity, label: 'Active Orders', value: '89', change: '+5%', color: 'purple' }
  ];

  const quickActions = [
    { icon: FiActivity, title: 'Order Analytics', description: 'Monitor order trends', link: '/seller/reports', color: 'blue' },
    { icon: FiPlus, title: 'Add Product', description: 'Add new products', link: '/seller/products/add', color: 'green' },
    { icon: FiShoppingCart, title: 'Manage Orders', description: 'Process customer orders', link: '/seller/orders', color: 'yellow' },
    { icon: FiSettings, title: 'Store Settings', description: 'Configure your store', link: '/seller/settings', color: 'purple' }
  ];

  const recentActivities = [
    { type: 'order', message: 'New order #ORD-001 from John Doe', time: '2 minutes ago', icon: FiShoppingCart },
    { type: 'product', message: 'Product "HP LaserJet Pro" updated', time: '15 minutes ago', icon: FiPackage },
    { type: 'review', message: 'New 5-star review received', time: '1 hour ago', icon: FiStar },
    { type: 'customer', message: 'New customer Jane Smith registered', time: '2 hours ago', icon: FiUsers }
  ];

  const orderStats = [
    { label: 'Pending Orders', value: 12, icon: FiClock, color: 'yellow' },
    { label: 'Processing', value: 8, icon: FiActivity, color: 'blue' },
    { label: 'Shipped', value: 15, icon: FiTrendingUp, color: 'green' },
    { label: 'Completed', value: 45, icon: FiCheckCircle, color: 'purple' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      yellow: 'from-yellow-500 to-yellow-600',
      purple: 'from-purple-500 to-purple-600'
    };
    return colors[color] || colors.blue;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
        <p className="text-gray-600">Monitor dan kelola seluruh sistem toko Anda</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <div className="flex items-center text-sm">
                    <FiTrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-green-600 font-medium">{stat.change}</span>
                  </div>
                </div>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getColorClasses(stat.color)} flex items-center justify-center shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Order Status Overview */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Status Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {orderStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getColorClasses(stat.color)} flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Link
                key={index}
                to={action.link}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getColorClasses(action.color)} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <FiArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activities */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Recent Activities</h2>
          <Link 
            to="/seller/reports" 
            className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center group"
          >
            View All Activities
            <FiArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="space-y-4">
            {recentActivities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    <FiEye className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
