import { useState } from 'react';
import { FiBarChart, FiTrendingUp, FiUsers, FiShoppingCart, FiDollarSign, FiPackage, FiEye, FiCalendar } from 'react-icons/fi';
import BackButton from '../../components/BackButton';

const AdminAnalytics = () => {
  const [timeRange, setTimeRange] = useState('30days');

  const analytics = {
    overview: {
      totalRevenue: 125000000,
      totalOrders: 856,
      totalUsers: 1234,
      conversionRate: 3.2,
      avgOrderValue: 146000,
      returnCustomers: 68
    },
    salesTrend: [
      { month: 'Jul', revenue: 8500000, orders: 65 },
      { month: 'Aug', revenue: 12200000, orders: 89 },
      { month: 'Sep', revenue: 15800000, orders: 112 },
      { month: 'Oct', revenue: 18900000, orders: 134 },
      { month: 'Nov', revenue: 22100000, orders: 156 },
      { month: 'Dec', revenue: 25400000, orders: 178 }
    ],
    topProducts: [
      { name: 'HP LaserJet Pro M404n', sales: 45, revenue: 112500000 },
      { name: 'Canon Pixma G2010', sales: 38, revenue: 45600000 },
      { name: 'ASUS VivoBook 14', sales: 28, revenue: 182000000 },
      { name: 'Logitech MX Master 3', sales: 67, revenue: 80400000 },
      { name: 'PC Desktop Intel Core i5', sales: 15, revenue: 127500000 }
    ],
    userActivity: {
      newUsers: 89,
      activeUsers: 456,
      returningUsers: 234,
      bounceRate: 24.5
    },
    trafficSources: [
      { source: 'Direct', visitors: 2340, percentage: 45 },
      { source: 'Google Search', visitors: 1560, percentage: 30 },
      { source: 'Social Media', visitors: 780, percentage: 15 },
      { source: 'Referral', visitors: 520, percentage: 10 }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <BackButton to="/admin/dashboard" />
        </div>
        
        <div className="flex items-center justify-between mb-8">
          <div>
        <h1 className="text-2xl font-bold text-gray-900">Dasbor Analitik</h1>
            <p className="text-gray-600">Wawasan bisnis dan metrik performa</p>
          </div>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="input"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="1year">Last Year</option>
          </select>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">Rp {(analytics.overview.totalRevenue / 1000000).toFixed(1)}M</p>
                <p className="text-xs text-green-600 mt-1 flex items-center">
                  <FiTrendingUp className="w-3 h-3 mr-1" />
                  +15.3% from last month
                </p>
              </div>
              <FiDollarSign className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.overview.totalOrders}</p>
                <p className="text-xs text-green-600 mt-1 flex items-center">
                  <FiTrendingUp className="w-3 h-3 mr-1" />
                  +8.2% from last month
                </p>
              </div>
              <FiShoppingCart className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.overview.totalUsers}</p>
                <p className="text-xs text-green-600 mt-1 flex items-center">
                  <FiTrendingUp className="w-3 h-3 mr-1" />
                  +12.1% from last month
                </p>
              </div>
              <FiUsers className="h-8 w-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.overview.conversionRate}%</p>
                <p className="text-xs text-green-600 mt-1 flex items-center">
                  <FiTrendingUp className="w-3 h-3 mr-1" />
                  +0.8% from last month
                </p>
              </div>
              <FiBarChart className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Sales Trend */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-6">Sales Trend</h2>
            <div className="space-y-4">
              {analytics.salesTrend.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 text-sm font-medium text-gray-600">{item.month}</div>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(item.revenue / 25400000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">Rp {(item.revenue / 1000000).toFixed(1)}M</div>
                    <div className="text-xs text-gray-500">{item.orders} orders</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-6">Top Products</h2>
            <div className="space-y-4">
              {analytics.topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-500">{product.sales} sales</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">Rp {(product.revenue / 1000000).toFixed(1)}M</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* User Activity */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-6">User Activity</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{analytics.userActivity.newUsers}</div>
                <div className="text-sm text-gray-600">New Users</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{analytics.userActivity.activeUsers}</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{analytics.userActivity.returningUsers}</div>
                <div className="text-sm text-gray-600">Returning Users</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{analytics.userActivity.bounceRate}%</div>
                <div className="text-sm text-gray-600">Bounce Rate</div>
              </div>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-6">Traffic Sources</h2>
            <div className="space-y-4">
              {analytics.trafficSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-900">{source.source}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">{source.visitors.toLocaleString()}</span>
                    <span className="text-sm font-medium text-gray-900">{source.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
