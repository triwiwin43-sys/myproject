// Reports & Analytics - Full Dashboard
import React, { useState, useEffect } from 'react';
import { 
  FiTrendingUp, 
  FiDownload, 
  FiCalendar,
  FiDollarSign,
  FiShoppingCart,
  FiUsers,
  FiPackage,
  FiBarChart3,
  FiPieChart
} from 'react-icons/fi';

const ReportsAnalytics = () => {
  const [dateRange, setDateRange] = useState('30days');
  const [reportType, setReportType] = useState('sales');
  
  // Mock analytics data
  const [analytics, setAnalytics] = useState({
    totalRevenue: 125000000,
    totalOrders: 1247,
    totalCustomers: 856,
    averageOrderValue: 100240,
    conversionRate: 3.8,
    topProducts: [
      { name: 'HP LaserJet Pro M404n', sales: 45, revenue: 112500000 },
      { name: 'ASUS VivoBook 14', sales: 32, revenue: 208000000 },
      { name: 'Logitech MX Master 3', sales: 28, revenue: 33600000 }
    ],
    salesByCategory: [
      { category: 'Printers', sales: 45, percentage: 35 },
      { category: 'Laptops', sales: 32, percentage: 25 },
      { category: 'Accessories', sales: 28, percentage: 22 },
      { category: 'Services', sales: 23, percentage: 18 }
    ],
    monthlyRevenue: [
      { month: 'Jan', revenue: 85000000 },
      { month: 'Feb', revenue: 92000000 },
      { month: 'Mar', revenue: 78000000 },
      { month: 'Apr', revenue: 105000000 },
      { month: 'May', revenue: 125000000 },
      { month: 'Jun', revenue: 118000000 }
    ]
  });

  const handleExportReport = (type) => {
    // Mock export functionality
    console.log(`Exporting ${type} report for ${dateRange}`);
    // In real implementation, this would generate and download the report
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Laporan & Analytics</h1>
          <p className="text-gray-600">Analisis performa bisnis dan insights</p>
        </div>
        <div className="flex space-x-2">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="input"
          >
            <option value="7days">7 Hari Terakhir</option>
            <option value="30days">30 Hari Terakhir</option>
            <option value="90days">90 Hari Terakhir</option>
            <option value="1year">1 Tahun Terakhir</option>
          </select>
          <button
            onClick={() => handleExportReport('comprehensive')}
            className="btn btn-outline"
          >
            <FiDownload className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                Rp {analytics.totalRevenue.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <FiDollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-green-600">+12.5% dari periode sebelumnya</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">
                {analytics.totalOrders.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FiShoppingCart className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-green-600">+8.3% dari periode sebelumnya</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
              <p className="text-2xl font-bold text-gray-900">
                Rp {analytics.averageOrderValue.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <FiTrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-green-600">+5.2% dari periode sebelumnya</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">
                {analytics.conversionRate}%
              </p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <FiBarChart3 className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-green-600">+0.3% dari periode sebelumnya</span>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
              <button
                onClick={() => handleExportReport('revenue')}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Export
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <FiTrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Revenue Chart</p>
                <p className="text-sm text-gray-400">Chart.js integration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sales by Category */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Sales by Category</h3>
              <button
                onClick={() => handleExportReport('category')}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Export
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {analytics.salesByCategory.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${
                      index === 0 ? 'bg-blue-500' :
                      index === 1 ? 'bg-green-500' :
                      index === 2 ? 'bg-yellow-500' : 'bg-purple-500'
                    }`}></div>
                    <span className="text-sm font-medium text-gray-900">{item.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{item.sales} sales</div>
                    <div className="text-xs text-gray-500">{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Products & Customer Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
              <button
                onClick={() => handleExportReport('products')}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Export
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {analytics.topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {product.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {product.sales} terjual
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      Rp {product.revenue.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Analytics */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Customer Analytics</h3>
              <button
                onClick={() => handleExportReport('customers')}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Export
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Total Customers</span>
                <span className="text-lg font-bold text-gray-900">{analytics.totalCustomers}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">New Customers (30d)</span>
                <span className="text-lg font-bold text-green-600">+127</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Repeat Customers</span>
                <span className="text-lg font-bold text-blue-600">342 (40%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Customer Lifetime Value</span>
                <span className="text-lg font-bold text-purple-600">Rp 2.4M</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Report Generation */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Generate Custom Reports</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Sales Reports</h4>
              <div className="space-y-2">
                <button
                  onClick={() => handleExportReport('daily-sales')}
                  className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Daily Sales Report
                </button>
                <button
                  onClick={() => handleExportReport('monthly-sales')}
                  className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Monthly Sales Report
                </button>
                <button
                  onClick={() => handleExportReport('yearly-sales')}
                  className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Yearly Sales Report
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Inventory Reports</h4>
              <div className="space-y-2">
                <button
                  onClick={() => handleExportReport('stock-levels')}
                  className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Current Stock Levels
                </button>
                <button
                  onClick={() => handleExportReport('low-stock')}
                  className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Low Stock Alert
                </button>
                <button
                  onClick={() => handleExportReport('inventory-movement')}
                  className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Inventory Movement
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Customer Reports</h4>
              <div className="space-y-2">
                <button
                  onClick={() => handleExportReport('customer-list')}
                  className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Customer List
                </button>
                <button
                  onClick={() => handleExportReport('customer-orders')}
                  className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Customer Order History
                </button>
                <button
                  onClick={() => handleExportReport('customer-analytics')}
                  className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Customer Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;
