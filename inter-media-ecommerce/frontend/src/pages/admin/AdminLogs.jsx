import { useState, useEffect } from 'react';
import { 
  FiActivity,
  FiUsers,
  FiShoppingCart,
  FiDollarSign,
  FiSettings,
  FiSearch,
  FiFilter,
  FiDownload,
  FiEye,
  FiClock,
  FiUser,
  FiPackage
} from 'react-icons/fi';
import useAuthStore from '../../context/authStore';

const AdminLogs = () => {
  const { user } = useAuthStore();
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('today');

  useEffect(() => {
    fetchLogs();
  }, [activeTab, dateFilter]);

  const fetchLogs = async () => {
    setLoading(true);
    
    // Mock logs data - replace with API call
    const mockLogs = [
      {
        id: 1,
        type: 'seller_update',
        action: 'Profile Updated',
        user: {
          id: 2,
          name: 'Seller Store',
          email: 'seller@intermedia.com',
          role: 'seller'
        },
        details: {
          field: 'storeName',
          oldValue: 'Old Store Name',
          newValue: 'Inter Medi-A Store',
          changes: ['storeName', 'storeDescription', 'bankAccount']
        },
        timestamp: '2024-12-24T10:30:00Z',
        ipAddress: '192.168.1.100',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      {
        id: 2,
        type: 'customer_activity',
        action: 'Order Placed',
        user: {
          id: 3,
          name: 'John Doe',
          email: 'john@example.com',
          role: 'customer'
        },
        details: {
          orderNumber: 'IM17351234560001',
          amount: 2515000,
          items: 1,
          paymentMethod: 'transfer'
        },
        timestamp: '2024-12-24T09:15:00Z',
        ipAddress: '192.168.1.101',
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)'
      },
      {
        id: 3,
        type: 'transaction',
        action: 'Payment Confirmed',
        user: {
          id: 3,
          name: 'John Doe',
          email: 'john@example.com',
          role: 'customer'
        },
        details: {
          orderNumber: 'IM17351234560001',
          amount: 2515000,
          paymentMethod: 'transfer',
          status: 'paid'
        },
        timestamp: '2024-12-24T09:45:00Z',
        ipAddress: '192.168.1.101',
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)'
      },
      {
        id: 4,
        type: 'seller_activity',
        action: 'Product Added',
        user: {
          id: 2,
          name: 'Seller Store',
          email: 'seller@intermedia.com',
          role: 'seller'
        },
        details: {
          productId: 'P001',
          productName: 'Canon Pixma G2010',
          category: 'Printer',
          price: 1200000
        },
        timestamp: '2024-12-24T08:20:00Z',
        ipAddress: '192.168.1.100',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      {
        id: 5,
        type: 'system',
        action: 'Admin Login',
        user: {
          id: 1,
          name: 'Admin User',
          email: 'admin@intermedia.com',
          role: 'admin'
        },
        details: {
          loginMethod: 'password',
          success: true
        },
        timestamp: '2024-12-24T07:00:00Z',
        ipAddress: '192.168.1.50',
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'
      },
      {
        id: 6,
        type: 'customer_activity',
        action: 'Profile Updated',
        user: {
          id: 3,
          name: 'John Doe',
          email: 'john@example.com',
          role: 'customer'
        },
        details: {
          changes: ['phone', 'address'],
          oldPhone: '081234567890',
          newPhone: '081234567891'
        },
        timestamp: '2024-12-23T16:30:00Z',
        ipAddress: '192.168.1.101',
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)'
      }
    ];
    
    // Filter logs based on active tab
    let filteredLogs = mockLogs;
    if (activeTab !== 'all') {
      filteredLogs = mockLogs.filter(log => {
        switch (activeTab) {
          case 'seller':
            return log.type.includes('seller');
          case 'customer':
            return log.type.includes('customer');
          case 'transaction':
            return log.type === 'transaction';
          case 'system':
            return log.type === 'system';
          default:
            return true;
        }
      });
    }
    
    setLogs(filteredLogs);
    setLoading(false);
  };

  const getLogIcon = (type) => {
    switch (type) {
      case 'seller_update':
      case 'seller_activity':
        return <FiPackage className="w-4 h-4 text-blue-600" />;
      case 'customer_activity':
        return <FiUser className="w-4 h-4 text-green-600" />;
      case 'transaction':
        return <FiDollarSign className="w-4 h-4 text-yellow-600" />;
      case 'system':
        return <FiSettings className="w-4 h-4 text-purple-600" />;
      default:
        return <FiActivity className="w-4 h-4 text-gray-600" />;
    }
  };

  const getLogColor = (type) => {
    switch (type) {
      case 'seller_update':
      case 'seller_activity':
        return 'bg-blue-50 border-blue-200';
      case 'customer_activity':
        return 'bg-green-50 border-green-200';
      case 'transaction':
        return 'bg-yellow-50 border-yellow-200';
      case 'system':
        return 'bg-purple-50 border-purple-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const filteredLogs = logs.filter(log => 
    searchTerm === '' || 
    log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const tabs = [
    { id: 'all', name: 'Semua Log', icon: FiActivity, count: logs.length },
    { id: 'seller', name: 'Seller Logs', icon: FiPackage, count: logs.filter(l => l.type.includes('seller')).length },
    { id: 'customer', name: 'Customer Logs', icon: FiUsers, count: logs.filter(l => l.type.includes('customer')).length },
    { id: 'transaction', name: 'Transaction Logs', icon: FiDollarSign, count: logs.filter(l => l.type === 'transaction').length },
    { id: 'system', name: 'System Logs', icon: FiSettings, count: logs.filter(l => l.type === 'system').length }
  ];

  if (user?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
            <p className="text-gray-600">You don't have permission to view this page</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">System Logs</h1>
              <p className="text-gray-600">Monitor semua aktivitas pengguna dan sistem</p>
            </div>
            <div className="flex space-x-3">
              <button className="btn btn-outline btn-sm">
                <FiDownload className="w-4 h-4 mr-2" />
                Export Logs
              </button>
              <button className="btn btn-primary btn-sm">
                <FiEye className="w-4 h-4 mr-2" />
                Real-time Monitor
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Logs
              </label>
              <div className="relative">
                <FiSearch className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Cari berdasarkan aksi, user, atau email..."
                  className="input pl-10"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Filter
              </label>
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="input"
              >
                <option value="today">Hari Ini</option>
                <option value="week">7 Hari Terakhir</option>
                <option value="month">30 Hari Terakhir</option>
                <option value="all">Semua Waktu</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <button className="btn btn-outline w-full">
                <FiFilter className="w-4 h-4 mr-2" />
                Advanced Filter
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-0 px-4 py-3 text-sm font-medium text-center border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <IconComponent className="w-4 h-4" />
                    <span>{tab.name}</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tab.count}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Logs List */}
        {loading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 h-24 animate-pulse"></div>
            ))}
          </div>
        ) : filteredLogs.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
            <FiActivity className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Logs Found</h3>
            <p className="text-gray-600">Tidak ada log yang sesuai dengan filter</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredLogs.map((log) => (
              <div key={log.id} className={`bg-white rounded-lg shadow-sm border p-6 ${getLogColor(log.type)}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0 mt-1">
                      {getLogIcon(log.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-sm font-medium text-gray-900">
                          {log.action}
                        </h3>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {log.type.replace('_', ' ')}
                        </span>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">{log.user.name}</span>
                        <span className="text-gray-400 mx-2">•</span>
                        <span>{log.user.email}</span>
                        <span className="text-gray-400 mx-2">•</span>
                        <span className="capitalize">{log.user.role}</span>
                      </div>
                      
                      {/* Log Details */}
                      <div className="bg-white bg-opacity-50 rounded p-3 text-xs">
                        {log.type === 'seller_update' && (
                          <div>
                            <p><strong>Field Changed:</strong> {log.details.field}</p>
                            <p><strong>Old Value:</strong> {log.details.oldValue}</p>
                            <p><strong>New Value:</strong> {log.details.newValue}</p>
                            <p><strong>All Changes:</strong> {log.details.changes.join(', ')}</p>
                          </div>
                        )}
                        
                        {log.type === 'customer_activity' && log.details.orderNumber && (
                          <div>
                            <p><strong>Order:</strong> {log.details.orderNumber}</p>
                            <p><strong>Amount:</strong> Rp {log.details.amount?.toLocaleString()}</p>
                            <p><strong>Items:</strong> {log.details.items}</p>
                            <p><strong>Payment:</strong> {log.details.paymentMethod}</p>
                          </div>
                        )}
                        
                        {log.type === 'customer_activity' && log.details.changes && (
                          <div>
                            <p><strong>Changes:</strong> {log.details.changes.join(', ')}</p>
                            {log.details.oldPhone && (
                              <p><strong>Phone:</strong> {log.details.oldPhone} → {log.details.newPhone}</p>
                            )}
                          </div>
                        )}
                        
                        {log.type === 'transaction' && (
                          <div>
                            <p><strong>Order:</strong> {log.details.orderNumber}</p>
                            <p><strong>Amount:</strong> Rp {log.details.amount.toLocaleString()}</p>
                            <p><strong>Method:</strong> {log.details.paymentMethod}</p>
                            <p><strong>Status:</strong> {log.details.status}</p>
                          </div>
                        )}
                        
                        {log.type === 'seller_activity' && log.details.productName && (
                          <div>
                            <p><strong>Product:</strong> {log.details.productName}</p>
                            <p><strong>Category:</strong> {log.details.category}</p>
                            <p><strong>Price:</strong> Rp {log.details.price.toLocaleString()}</p>
                          </div>
                        )}
                        
                        {log.type === 'system' && (
                          <div>
                            <p><strong>Method:</strong> {log.details.loginMethod}</p>
                            <p><strong>Success:</strong> {log.details.success ? 'Yes' : 'No'}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 mt-3 text-xs text-gray-500">
                        <div className="flex items-center">
                          <FiClock className="w-3 h-3 mr-1" />
                          {formatTimestamp(log.timestamp)}
                        </div>
                        <span>IP: {log.ipAddress}</span>
                        <span>Device: {log.userAgent.split(' ')[0]}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <FiEye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing {filteredLogs.length} of {logs.length} logs
          </p>
          <div className="flex space-x-2">
            <button className="btn btn-outline btn-sm">Previous</button>
            <button className="btn btn-outline btn-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogs;
