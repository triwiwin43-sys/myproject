import { Link } from 'react-router-dom';
import { 
  FiUsers, 
  FiPackage, 
  FiDollarSign, 
  FiActivity,
  FiSettings,
  FiShield,
  FiTrendingUp,
  FiAlertTriangle,
  FiCreditCard,
  FiShoppingCart,
  FiBarChart,
  FiFileText,
  FiUserCheck,
  FiTool,
  FiMenu,
  FiX,
  FiMessageSquare
} from 'react-icons/fi';
import { useState } from 'react';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  const stats = [
    { icon: FiUsers, label: 'Total Pengguna', value: '1,234', change: '+12%', color: 'blue' },
    { icon: FiPackage, label: 'Total Pesanan', value: '856', change: '+8%', color: 'green' },
    { icon: FiDollarSign, label: 'Pendapatan', value: 'Rp 125M', change: '+15%', color: 'yellow' },
    { icon: FiActivity, label: 'Active Sessions', value: '89', change: '+5%', color: 'purple' }
  ];

  const quickActions = [
    { icon: FiActivity, title: 'System Logs', description: 'Monitor all activities', link: '/admin/logs', color: 'blue' },
    { icon: FiCreditCard, title: 'Payment Approval', description: 'Approve payment methods', link: '/admin/payment-approval', color: 'green' },
    { icon: FiPackage, title: 'Product Management', description: 'Manage all products', link: '/admin/products', color: 'yellow' },
    { icon: FiSettings, title: 'System Settings', description: 'Configure platform', link: '/admin/settings', color: 'purple' }
  ];

  const sidebarMenus = [
    { icon: FiShoppingCart, title: 'Order Management', link: '/admin/orders', description: 'Manage all orders' },
    { icon: FiUsers, title: 'User Management', link: '/admin/users', description: 'Manage users & roles' },
    { icon: FiMessageSquare, title: 'Review Management', link: '/admin/reviews', description: 'Moderate customer reviews' },
    { icon: FiBarChart, title: 'Analytics', link: '/admin/analytics', description: 'View reports & analytics' },
    { icon: FiFileText, title: 'Reports', link: '/admin/reports', description: 'Generate reports' },
    { icon: FiUserCheck, title: 'Seller Approval', link: '/admin/seller-approval', description: 'Approve new sellers' },
    { icon: FiTool, title: 'Maintenance', link: '/admin/maintenance', description: 'System maintenance' },
    { icon: FiShield, title: 'Security', link: '/admin/security', description: 'Security settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white shadow-lg transition-all duration-300 ease-in-out hidden lg:block`}>
        <div className="flex items-center justify-between h-16 px-4 border-b">
          {!sidebarCollapsed && <h2 className="text-lg font-semibold text-gray-900">Admin Menu</h2>}
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
              return (
                <Link
                  key={index}
                  to={menu.link}
                  className="flex items-center px-3 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 group"
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
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className="flex items-center justify-between h-16 px-6 border-b bg-gradient-to-r from-blue-600 to-blue-700">
          <h2 className="text-lg font-semibold text-white">Admin Menu</h2>
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
              return (
                <Link
                  key={index}
                  to={menu.link}
                  className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 transform hover:scale-105"
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
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Dasbor Admin</h1>
                    <p className="text-gray-600">Monitor dan kelola seluruh sistem platform</p>
                  </div>
                </div>
              </div>
            </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-green-600 mt-1 flex items-center">
                      <FiTrendingUp className="w-3 h-3 mr-1" />
                      {stat.change} dari bulan lalu
                    </p>
                  </div>
                  <IconComponent className={`h-8 w-8 text-${stat.color}-600`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Aksi Cepat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Link
                  key={index}
                  to={action.link}
                  className={`p-4 bg-${action.color}-50 rounded-lg hover:bg-${action.color}-100 transition-colors group`}
                >
                  <div className="flex flex-col items-center text-center">
                    <IconComponent className={`w-8 h-8 text-${action.color}-600 mb-3 group-hover:scale-110 transition-transform`} />
                    <h3 className="font-medium text-gray-900 mb-1">{action.title}</h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent System Activity</h2>
            <Link to="/admin/logs" className="text-blue-600 hover:text-blue-700 text-sm">
              Lihat Semua Log
            </Link>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <FiUsers className="w-5 h-5 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">New seller registered</p>
                <p className="text-xs text-gray-600">seller@intermedia.com - 2 minutes ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <FiPackage className="w-5 h-5 text-green-600" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Order completed</p>
                <p className="text-xs text-gray-600">IM17351234560001 - 5 minutes ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
              <FiDollarSign className="w-5 h-5 text-yellow-600" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Payment received</p>
                <p className="text-xs text-gray-600">Rp 2,515,000 - 10 minutes ago</p>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
