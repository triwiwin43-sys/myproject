import { useState } from 'react';
import { FiFileText, FiDownload, FiCalendar, FiTrendingUp, FiDollarSign, FiUsers, FiPackage } from 'react-icons/fi';
import toast from 'react-hot-toast';

const AdminReports = () => {
  const [dateRange, setDateRange] = useState('last30days');
  const [reportType, setReportType] = useState('sales');

  const generateReport = (type) => {
    toast.success(`${type} report generated successfully`);
  };

  const reportTypes = [
    { id: 'sales', name: 'Sales Report', icon: FiDollarSign, description: 'Revenue and sales analytics' },
    { id: 'users', name: 'User Report', icon: FiUsers, description: 'User registration and activity' },
    { id: 'products', name: 'Product Report', icon: FiPackage, description: 'Product performance and inventory' },
    { id: 'orders', name: 'Order Report', icon: FiFileText, description: 'Order status and fulfillment' }
  ];

  const quickStats = {
    totalRevenue: 125000000,
    totalOrders: 856,
    totalUsers: 1234,
    totalProducts: 29,
    avgOrderValue: 146000,
    conversionRate: 3.2
  };

  const recentReports = [
    { name: 'Monthly Sales Report - December 2024', type: 'Sales', generatedAt: '2024-12-24 10:30', size: '2.4 MB' },
    { name: 'User Activity Report - Q4 2024', type: 'Users', generatedAt: '2024-12-23 15:20', size: '1.8 MB' },
    { name: 'Product Performance Report - November 2024', type: 'Products', generatedAt: '2024-12-22 09:15', size: '3.1 MB' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Generate and download business reports</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <FiDollarSign className="w-6 h-6 text-green-600 mr-2" />
              <div>
                <p className="text-xs text-gray-600">Revenue</p>
                <p className="text-lg font-bold">Rp {(quickStats.totalRevenue / 1000000).toFixed(0)}M</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <FiFileText className="w-6 h-6 text-blue-600 mr-2" />
              <div>
                <p className="text-xs text-gray-600">Orders</p>
                <p className="text-lg font-bold">{quickStats.totalOrders}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <FiUsers className="w-6 h-6 text-purple-600 mr-2" />
              <div>
                <p className="text-xs text-gray-600">Users</p>
                <p className="text-lg font-bold">{quickStats.totalUsers}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <FiPackage className="w-6 h-6 text-orange-600 mr-2" />
              <div>
                <p className="text-xs text-gray-600">Products</p>
                <p className="text-lg font-bold">{quickStats.totalProducts}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <FiTrendingUp className="w-6 h-6 text-indigo-600 mr-2" />
              <div>
                <p className="text-xs text-gray-600">Avg Order</p>
                <p className="text-lg font-bold">Rp {(quickStats.avgOrderValue / 1000).toFixed(0)}K</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-2">
                <div className="w-3 h-3 bg-pink-600 rounded-full"></div>
              </div>
              <div>
                <p className="text-xs text-gray-600">Conversion</p>
                <p className="text-lg font-bold">{quickStats.conversionRate}%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Report Generator */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-6">Generate New Report</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Report Type
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {reportTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <label key={type.id} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="reportType"
                          value={type.id}
                          checked={reportType === type.id}
                          onChange={(e) => setReportType(e.target.value)}
                          className="mr-3"
                        />
                        <IconComponent className="w-5 h-5 text-gray-600 mr-3" />
                        <div>
                          <div className="font-medium">{type.name}</div>
                          <div className="text-sm text-gray-500">{type.description}</div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date Range
                </label>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="input"
                >
                  <option value="last7days">Last 7 Days</option>
                  <option value="last30days">Last 30 Days</option>
                  <option value="last3months">Last 3 Months</option>
                  <option value="last6months">Last 6 Months</option>
                  <option value="lastyear">Last Year</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>

              <button
                onClick={() => generateReport(reportTypes.find(t => t.id === reportType)?.name)}
                className="w-full btn btn-primary"
              >
                <FiFileText className="w-4 h-4 mr-2" />
                Generate Report
              </button>
            </div>
          </div>

          {/* Recent Reports */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-6">Recent Reports</h2>
            
            <div className="space-y-4">
              {recentReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <FiFileText className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">{report.name}</div>
                      <div className="text-sm text-gray-500">
                        {report.type} • {report.generatedAt} • {report.size}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toast.success('Report downloaded')}
                    className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg"
                  >
                    <FiDownload className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scheduled Reports */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-6">Scheduled Reports</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Report Name</th>
                  <th className="text-left py-2">Type</th>
                  <th className="text-left py-2">Frequency</th>
                  <th className="text-left py-2">Next Run</th>
                  <th className="text-left py-2">Recipients</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Monthly Sales Summary</td>
                  <td className="py-2">Sales</td>
                  <td className="py-2">Monthly</td>
                  <td className="py-2">2025-01-01 09:00</td>
                  <td className="py-2">admin@intermedia.com</td>
                  <td className="py-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Weekly User Activity</td>
                  <td className="py-2">Users</td>
                  <td className="py-2">Weekly</td>
                  <td className="py-2">2024-12-30 08:00</td>
                  <td className="py-2">admin@intermedia.com</td>
                  <td className="py-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReports;
