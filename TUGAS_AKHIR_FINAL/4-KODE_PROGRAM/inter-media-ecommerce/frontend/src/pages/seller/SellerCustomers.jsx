import React, { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiShoppingCart, FiEye, FiPackage, FiTrendingUp, FiCalendar } from 'react-icons/fi';

const SellerCustomers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  
  const customers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@email.com',
      phone: '081234567890',
      address: 'Jl. Sudirman No. 123, Jakarta',
      totalOrders: 5,
      totalSpent: 12500000,
      lastOrder: '2024-01-15',
      status: 'active',
      joinDate: '2023-06-15',
      viewedProducts: [
        { id: 1, name: 'HP LaserJet Pro M404n', views: 15, lastViewed: '2024-01-15' },
        { id: 2, name: 'Canon Pixma G2010', views: 8, lastViewed: '2024-01-14' },
        { id: 3, name: 'Tinta Canon GI-790', views: 12, lastViewed: '2024-01-13' }
      ],
      orderHistory: [
        { id: '#ORD-001', product: 'HP LaserJet Pro M404n', amount: 2500000, date: '2024-01-15', status: 'delivered' },
        { id: '#ORD-005', product: 'Canon Pixma G2010', amount: 1800000, date: '2024-01-10', status: 'delivered' }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@email.com',
      phone: '081234567891',
      address: 'Jl. Thamrin No. 456, Jakarta',
      totalOrders: 3,
      totalSpent: 7800000,
      lastOrder: '2024-01-14',
      status: 'active',
      joinDate: '2023-08-20',
      viewedProducts: [
        { id: 4, name: 'Laptop Dell Inspiron', views: 25, lastViewed: '2024-01-14' },
        { id: 1, name: 'HP LaserJet Pro M404n', views: 5, lastViewed: '2024-01-12' }
      ],
      orderHistory: [
        { id: '#ORD-002', product: 'Laptop Dell Inspiron', amount: 8500000, date: '2024-01-14', status: 'shipped' }
      ]
    },
    {
      id: 3,
      name: 'Bob Wilson',
      email: 'bob@email.com',
      phone: '081234567892',
      address: 'Jl. Gatot Subroto No. 789, Jakarta',
      totalOrders: 8,
      totalSpent: 18900000,
      lastOrder: '2024-01-13',
      status: 'active',
      joinDate: '2023-03-10',
      viewedProducts: [
        { id: 3, name: 'Tinta Canon GI-790', views: 30, lastViewed: '2024-01-13' },
        { id: 2, name: 'Canon Pixma G2010', views: 18, lastViewed: '2024-01-11' },
        { id: 5, name: 'Mouse Logitech', views: 10, lastViewed: '2024-01-09' }
      ],
      orderHistory: [
        { id: '#ORD-003', product: 'Tinta Canon GI-790', amount: 425000, date: '2024-01-13', status: 'delivered' },
        { id: '#ORD-006', product: 'Mouse Logitech', amount: 125000, date: '2024-01-08', status: 'delivered' }
      ]
    }
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const customerStats = [
    { label: 'Total Customers', value: customers.length, icon: FiUser, color: 'blue' },
    { label: 'Active Customers', value: customers.filter(c => c.status === 'active').length, icon: FiTrendingUp, color: 'green' },
    { label: 'Avg Orders', value: Math.round(customers.reduce((acc, c) => acc + c.totalOrders, 0) / customers.length), icon: FiShoppingCart, color: 'yellow' },
    { label: 'Total Revenue', value: `Rp ${(customers.reduce((acc, c) => acc + c.totalSpent, 0) / 1000000).toFixed(1)}M`, icon: FiPackage, color: 'purple' }
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
        <h1 className="text-2xl font-bold text-gray-900">Manajemen Pelanggan</h1>
          <p className="text-gray-600">Kelola pelanggan dan analisis perilaku mereka</p>
        </div>
        <div className="w-64">
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Customer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {customerStats.map((stat, index) => {
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

      {/* Customer List */}
      <div className="grid gap-6">
        {filteredCustomers.map((customer) => (
          <div key={customer.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <FiUser className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{customer.name}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      customer.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {customer.status}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <FiMail className="w-4 h-4 mr-3 text-gray-400" />
                      {customer.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FiPhone className="w-4 h-4 mr-3 text-gray-400" />
                      {customer.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FiMapPin className="w-4 h-4 mr-3 text-gray-400" />
                      {customer.address}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FiCalendar className="w-4 h-4 mr-3 text-gray-400" />
                      Joined: {new Date(customer.joinDate).toLocaleDateString('id-ID')}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{customer.totalOrders}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Orders</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">Rp {(customer.totalSpent / 1000000).toFixed(1)}M</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Spent</p>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-xs text-gray-500">Last Order: {new Date(customer.lastOrder).toLocaleDateString('id-ID')}</p>
                </div>
                <button 
                  onClick={() => setSelectedCustomer(selectedCustomer?.id === customer.id ? null : customer)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium flex items-center"
                >
                  <FiEye className="w-4 h-4 mr-2" />
                  {selectedCustomer?.id === customer.id ? 'Hide Details' : 'View Details'}
                </button>
              </div>
            </div>

            {/* Customer Details */}
            {selectedCustomer?.id === customer.id && (
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Viewed Products */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Most Viewed Products</h4>
                    <div className="space-y-3">
                      {customer.viewedProducts.map((product, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{product.name}</p>
                            <p className="text-xs text-gray-500">Last viewed: {new Date(product.lastViewed).toLocaleDateString('id-ID')}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-blue-600">{product.views} views</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order History */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h4>
                    <div className="space-y-3">
                      {customer.orderHistory.map((order, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{order.id}</p>
                            <p className="text-sm text-gray-600">{order.product}</p>
                            <p className="text-xs text-gray-500">{new Date(order.date).toLocaleDateString('id-ID')}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-gray-900">Rp {order.amount.toLocaleString('id-ID')}</p>
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              order.status === 'delivered' ? 'bg-green-100 text-green-700' : 
                              order.status === 'shipped' ? 'bg-blue-100 text-blue-700' : 
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerCustomers;
