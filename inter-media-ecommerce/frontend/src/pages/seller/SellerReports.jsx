import React, { useState } from 'react';
import { 
  FiDownload,
  FiTrendingUp,
  FiDollarSign,
  FiShoppingCart,
  FiPackage,
  FiUsers,
  FiCalendar,
  FiBarChart3,
  FiPieChart
} from 'react-icons/fi';

const SellerReports = () => {
  const [dateRange, setDateRange] = useState('30days');
  const [reportType, setReportType] = useState('overview');

  const salesData = {
    '7days': { revenue: 2400000, orders: 12, customers: 8, products: 15 },
    '30days': { revenue: 45200000, orders: 234, customers: 89, products: 156 },
    '90days': { revenue: 125000000, orders: 856, customers: 234, products: 445 },
    '1year': { revenue: 580000000, orders: 3420, customers: 1234, products: 2100 }
  };

  const currentData = salesData[dateRange];

  const topProducts = [
    { name: 'HP LaserJet Pro M404n', sales: 45, revenue: 112500000, growth: '+15%' },
    { name: 'Canon Pixma G2010', sales: 32, revenue: 57600000, growth: '+8%' },
    { name: 'Tinta Canon GI-790', sales: 128, revenue: 10880000, growth: '+22%' },
    { name: 'Laptop Dell Inspiron', sales: 18, revenue: 153000000, growth: '+5%' },
    { name: 'Mouse Logitech MX Master', sales: 67, revenue: 8375000, growth: '+12%' }
  ];

  const monthlyData = [
    { month: 'Jan', revenue: 45000000, orders: 180 },
    { month: 'Feb', revenue: 52000000, orders: 210 },
    { month: 'Mar', revenue: 48000000, orders: 195 },
    { month: 'Apr', revenue: 61000000, orders: 245 },
    { month: 'May', revenue: 58000000, orders: 230 },
    { month: 'Jun', revenue: 67000000, orders: 270 }
  ];

  const categoryData = [
    { category: 'Printers', percentage: 35, revenue: 195000000 },
    { category: 'Laptops', percentage: 28, revenue: 152000000 },
    { category: 'Accessories', percentage: 20, revenue: 108000000 },
    { category: 'Ink & Toner', percentage: 12, revenue: 65000000 },
    { category: 'Others', percentage: 5, revenue: 27000000 }
  ];

  const handleExport = (type) => {
    // Create CSV data based on report type
    let csvData = '';
    let filename = '';

    switch (type) {
      case 'sales':
        csvData = 'Month,Revenue,Orders\n' + 
          monthlyData.map(item => `${item.month},${item.revenue},${item.orders}`).join('\n');
        filename = `sales-report-${dateRange}.csv`;
        break;
      case 'products':
        csvData = 'Product,Sales,Revenue,Growth\n' + 
          topProducts.map(item => `${item.name},${item.sales},${item.revenue},${item.growth}`).join('\n');
        filename = `products-report-${dateRange}.csv`;
        break;
      case 'categories':
        csvData = 'Category,Percentage,Revenue\n' + 
          categoryData.map(item => `${item.category},${item.percentage}%,${item.revenue}`).join('\n');
        filename = `categories-report-${dateRange}.csv`;
        break;
      default:
        csvData = 'Metric,Value\n' + 
          `Revenue,${currentData.revenue}\n` +
          `Orders,${currentData.orders}\n` +
          `Customers,${currentData.customers}\n` +
          `Products Sold,${currentData.products}`;
        filename = `overview-report-${dateRange}.csv`;
    }

    // Create and download file
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const stats = [
    { 
      icon: FiDollarSign, 
      label: 'Total Revenue', 
      value: `Rp ${(currentData.revenue / 1000000).toFixed(1)}M`, 
      change: '+12.5%', 
      color: 'from-green-500 to-green-600' 
    },
    { 
      icon: FiShoppingCart, 
      label: 'Total Orders', 
      value: currentData.orders.toLocaleString(), 
      change: '+8.3%', 
      color: 'from-blue-500 to-blue-600' 
    },
    { 
      icon: FiUsers, 
      label: 'New Customers', 
      value: currentData.customers.toLocaleString(), 
      change: '+15.2%', 
      color: 'from-purple-500 to-purple-600' 
    },
    { 
      icon: FiPackage, 
      label: 'Products Sold', 
      value: currentData.products.toLocaleString(), 
      change: '+5.7%', 
      color: 'from-orange-500 to-orange-600' 
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Analyze your store performance and trends</p>
        </div>
        <div className="flex space-x-2">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="1year">Last Year</option>
          </select>
          <button 
            onClick={() => handleExport('overview')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            <FiDownload className="w-4 h-4 mr-2" />
            Export Overview
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <div className="flex items-center text-sm">
                    <FiTrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-green-600 font-medium">{stat.change}</span>
                  </div>
                </div>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Report Type Selector */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setReportType('overview')}
            className={`px-4 py-2 rounded-lg font-medium text-sm ${
              reportType === 'overview' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setReportType('sales')}
            className={`px-4 py-2 rounded-lg font-medium text-sm ${
              reportType === 'sales' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Sales Trends
          </button>
          <button
            onClick={() => setReportType('products')}
            className={`px-4 py-2 rounded-lg font-medium text-sm ${
              reportType === 'products' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Top Products
          </button>
          <button
            onClick={() => setReportType('categories')}
            className={`px-4 py-2 rounded-lg font-medium text-sm ${
              reportType === 'categories' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Categories
          </button>
        </div>
      </div>

      {/* Charts Section */}
      {reportType === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Monthly Revenue</h3>
              <FiBarChart3 className="w-5 h-5 text-gray-400" />
            </div>
            <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Revenue chart will be displayed here</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Order Distribution</h3>
              <FiPieChart className="w-5 h-5 text-gray-400" />
            </div>
            <div className="h-64 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Order distribution chart will be displayed here</p>
            </div>
          </div>
        </div>
      )}

      {reportType === 'sales' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Sales Performance</h3>
            <button 
              onClick={() => handleExport('sales')}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center text-sm"
            >
              <FiDownload className="w-4 h-4 mr-2" />
              Export Sales Data
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Month</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Revenue</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Orders</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Avg Order Value</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">{item.month}</td>
                    <td className="py-3 px-4 font-semibold">Rp {(item.revenue / 1000000).toFixed(1)}M</td>
                    <td className="py-3 px-4">{item.orders}</td>
                    <td className="py-3 px-4">Rp {(item.revenue / item.orders / 1000).toFixed(0)}K</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {reportType === 'products' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Top Performing Products</h3>
            <button 
              onClick={() => handleExport('products')}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center text-sm"
            >
              <FiDownload className="w-4 h-4 mr-2" />
              Export Product Data
            </button>
          </div>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{product.name}</h4>
                  <p className="text-sm text-gray-600">{product.sales} units sold</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">Rp {(product.revenue / 1000000).toFixed(1)}M</p>
                  <p className="text-sm text-green-600">{product.growth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {reportType === 'categories' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Sales by Category</h3>
            <button 
              onClick={() => handleExport('categories')}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center text-sm"
            >
              <FiDownload className="w-4 h-4 mr-2" />
              Export Category Data
            </button>
          </div>
          <div className="space-y-4">
            {categoryData.map((category, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{category.category}</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="font-semibold text-gray-900">{category.percentage}%</p>
                  <p className="text-sm text-gray-600">Rp {(category.revenue / 1000000).toFixed(1)}M</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerReports;
