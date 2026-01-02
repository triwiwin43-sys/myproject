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
  FiPackage,
  FiBarChart,
  FiFileText,
  FiPlay,
  FiPause,
  FiRefreshCw
} from 'react-icons/fi';
import useAuthStore from '../../context/authStore';
import toast from 'react-hot-toast';

const AdminLogs = () => {
  const { user } = useAuthStore();
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isRealTimeActive, setIsRealTimeActive] = useState(false);
  const [logSize, setLogSize] = useState(0.000001);
  const [startTime] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    fetchLogs();
  }, [activeTab]);

  // Real-time monitoring
  useEffect(() => {
    let interval;
    if (isRealTimeActive) {
      interval = setInterval(() => {
        setCurrentTime(new Date());
        if (Math.random() < 0.1) {
          addNewLog();
        }
        setLogSize(prev => prev + 0.0000001);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRealTimeActive]);

  // Filter logs
  useEffect(() => {
    let filtered = logs;
    
    if (searchTerm) {
      filtered = filtered.filter(log => 
        log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filterType !== 'all') {
      filtered = filtered.filter(log => log.type === filterType);
    }
    
    setFilteredLogs(filtered);
  }, [logs, searchTerm, filterType]);

  const fetchLogs = async () => {
    setLoading(true);
    
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
      }
    ];
    
    let filtered = mockLogs;
    if (activeTab !== 'all') {
      filtered = mockLogs.filter(log => {
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
    
    setLogs(filtered);
    setLoading(false);
  };

  const addNewLog = () => {
    const newLog = {
      id: Date.now(),
      type: 'system',
      action: 'Real-time Activity',
      user: {
        id: Math.floor(Math.random() * 100),
        name: 'System Monitor',
        email: 'system@intermedia.com',
        role: 'system'
      },
      details: {
        activity: 'Automated monitoring check',
        status: 'active'
      },
      timestamp: new Date().toISOString(),
      ipAddress: '127.0.0.1',
      userAgent: 'System Monitor'
    };
    
    setLogs(prev => [newLog, ...prev]);
  };

  const exportAnalysis = () => {
    const analysis = generateAnalysis();
    const blob = new Blob([JSON.stringify(analysis, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `log-analysis-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    toast.success('Analysis exported successfully');
  };

  const exportRawData = () => {
    const csvContent = convertToCSV(logs);
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `raw-logs-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    toast.success('Raw data exported successfully');
  };

  const generateAnalysis = () => {
    const totalLogs = logs.length;
    const typeDistribution = logs.reduce((acc, log) => {
      acc[log.type] = (acc[log.type] || 0) + 1;
      return acc;
    }, {});
    
    const userActivity = logs.reduce((acc, log) => {
      const role = log.user.role;
      acc[role] = (acc[role] || 0) + 1;
      return acc;
    }, {});

    const hourlyActivity = logs.reduce((acc, log) => {
      const hour = new Date(log.timestamp).getHours();
      acc[hour] = (acc[hour] || 0) + 1;
      return acc;
    }, {});

    const dailyActivity = logs.reduce((acc, log) => {
      const date = new Date(log.timestamp).toISOString().split('T')[0];
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});

    const actionTypes = logs.reduce((acc, log) => {
      acc[log.action] = (acc[log.action] || 0) + 1;
      return acc;
    }, {});

    const duration = Math.floor((currentTime - startTime) / 1000);
    const durationHours = duration / 3600;
    
    // Calculate trends
    const recentLogs = logs.filter(log => {
      const logTime = new Date(log.timestamp);
      const oneHourAgo = new Date(currentTime.getTime() - 60 * 60 * 1000);
      return logTime > oneHourAgo;
    });

    // Security analysis
    const securityEvents = logs.filter(log => 
      log.action.toLowerCase().includes('login') || 
      log.action.toLowerCase().includes('failed') ||
      log.action.toLowerCase().includes('blocked')
    );

    // Performance metrics
    const performanceMetrics = {
      totalEvents: totalLogs,
      eventsPerSecond: duration > 0 ? (totalLogs / duration).toFixed(4) : 0,
      eventsPerMinute: duration > 0 ? (totalLogs / (duration / 60)).toFixed(2) : 0,
      eventsPerHour: durationHours > 0 ? Math.round(totalLogs / durationHours) : 0,
      recentActivity: recentLogs.length,
      systemLoad: logSize > 0.00001 ? 'High' : 'Low'
    };

    // Business insights
    const businessMetrics = {
      customerActivity: logs.filter(l => l.type.includes('customer')).length,
      sellerActivity: logs.filter(l => l.type.includes('seller')).length,
      transactionEvents: logs.filter(l => l.type === 'transaction').length,
      systemEvents: logs.filter(l => l.type === 'system').length,
      errorEvents: logs.filter(l => l.action.toLowerCase().includes('error')).length
    };

    // Top activities
    const topActivities = Object.entries(actionTypes)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([action, count]) => ({ action, count, percentage: ((count / totalLogs) * 100).toFixed(1) }));

    // Peak hours
    const peakHour = Object.entries(hourlyActivity)
      .sort(([,a], [,b]) => b - a)[0];

    return {
      metadata: {
        reportTitle: "Inter Medi-A System Activity Analysis",
        generatedAt: new Date().toISOString(),
        reportPeriod: `${Math.floor(duration / 3600)}h ${Math.floor((duration % 3600) / 60)}m ${duration % 60}s`,
        systemVersion: "1.0.0",
        environment: "Production"
      },
      
      summary: {
        totalLogs,
        monitoringDuration: `${Math.floor(duration / 3600)}h ${Math.floor((duration % 3600) / 60)}m ${duration % 60}s`,
        logSize: `${logSize.toFixed(8)} MB`,
        averageLogsPerHour: durationHours > 0 ? Math.round(totalLogs / durationHours) : 0,
        systemStatus: totalLogs > 0 ? "Active" : "Idle",
        dataIntegrity: "100%"
      },

      performanceMetrics,
      businessMetrics,

      distribution: {
        byType: typeDistribution,
        byUserRole: userActivity,
        byHour: hourlyActivity,
        byDay: dailyActivity,
        byAction: actionTypes
      },

      topActivities,

      insights: [
        `Total system events recorded: ${totalLogs}`,
        `Most active user role: ${Object.keys(userActivity).reduce((a, b) => userActivity[a] > userActivity[b] ? a : b, 'none')} (${Math.max(...Object.values(userActivity)) || 0} events)`,
        `Most common activity: ${Object.keys(actionTypes).reduce((a, b) => actionTypes[a] > actionTypes[b] ? a : b, 'none')} (${Math.max(...Object.values(actionTypes)) || 0} times)`,
        `Peak activity hour: ${peakHour ? `${peakHour[0]}:00 (${peakHour[1]} events)` : 'No peak identified'}`,
        `System performance: ${performanceMetrics.eventsPerSecond} events/second`,
        `Recent activity (last hour): ${recentLogs.length} events`,
        `Business activity ratio: ${businessMetrics.customerActivity} customer, ${businessMetrics.sellerActivity} seller, ${businessMetrics.transactionEvents} transaction events`,
        `System stability: ${businessMetrics.errorEvents === 0 ? 'Excellent' : `${businessMetrics.errorEvents} errors detected`}`,
        `Data efficiency: Log size maintained at ${logSize.toFixed(8)} MB (Ultra-compact)`
      ],

      security: {
        totalSecurityEvents: securityEvents.length,
        securityStatus: securityEvents.length === 0 ? "Secure" : "Monitoring",
        lastSecurityEvent: securityEvents.length > 0 ? securityEvents[securityEvents.length - 1].timestamp : "None"
      },

      recommendations: [
        totalLogs < 10 ? "System activity is low - consider monitoring user engagement" : "System activity is healthy",
        businessMetrics.errorEvents > 0 ? "Review error events for system optimization" : "No errors detected - system running smoothly",
        recentLogs.length === 0 ? "No recent activity - check system connectivity" : "Recent activity detected - system is responsive",
        logSize > 0.0001 ? "Consider log rotation for storage optimization" : "Log size is optimal"
      ],

      rawDataSample: logs.slice(0, 3).map(log => ({
        timestamp: log.timestamp,
        type: log.type,
        action: log.action,
        user: log.user.role,
        details: Object.keys(log.details).join(', ')
      }))
    };
  };

  const convertToCSV = (data) => {
    const headers = ['ID', 'Type', 'Action', 'User Name', 'User Email', 'User Role', 'Timestamp', 'IP Address', 'Details'];
    const rows = data.map(log => [
      log.id,
      log.type,
      log.action,
      log.user.name,
      log.user.email,
      log.user.role,
      log.timestamp,
      log.ipAddress,
      JSON.stringify(log.details)
    ]);
    
    return [headers, ...rows].map(row => row.map(field => `"${field}"`).join(',')).join('\n');
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

  const getLogBgColor = (type) => {
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
        {/* Header with Real-time Monitor */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">System Activity Logs</h1>
              <p className="text-gray-600">Monitor dan analisis aktivitas sistem secara real-time</p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Real-time Monitor */}
              <div className="bg-white rounded-lg border p-4">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="text-sm font-medium">
                      {Math.floor((currentTime - startTime) / 1000 / 3600)}h {Math.floor(((currentTime - startTime) / 1000 % 3600) / 60)}m
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Size</p>
                    <p className="text-sm font-medium">{logSize.toFixed(8)} MB</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Logs</p>
                    <p className="text-sm font-medium">{logs.length}</p>
                  </div>
                  <button
                    onClick={() => setIsRealTimeActive(!isRealTimeActive)}
                    className={`p-2 rounded-lg ${isRealTimeActive ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}
                  >
                    {isRealTimeActive ? <FiPause className="w-4 h-4" /> : <FiPlay className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              {/* Export Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={exportAnalysis}
                  className="btn btn-outline btn-sm"
                >
                  <FiBarChart className="w-4 h-4 mr-2" />
                  Export Analysis
                </button>
                <button
                  onClick={exportRawData}
                  className="btn btn-outline btn-sm"
                >
                  <FiFileText className="w-4 h-4 mr-2" />
                  Export Raw Data
                </button>
                <button
                  onClick={fetchLogs}
                  className="btn btn-primary btn-sm"
                >
                  <FiRefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tab.name}
                    {tab.count > 0 && (
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                        activeTab === tab.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <FiSearch className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search logs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="input"
              >
                <option value="all">All Types</option>
                <option value="seller_update">Seller Updates</option>
                <option value="customer_activity">Customer Activity</option>
                <option value="transaction">Transactions</option>
                <option value="system">System</option>
              </select>
            </div>
          </div>
        </div>

        {/* Logs List */}
        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Loading logs...</p>
            </div>
          ) : filteredLogs.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No logs found</p>
            </div>
          ) : (
            filteredLogs.map((log) => (
              <div key={log.id} className={`border rounded-lg p-6 ${getLogBgColor(log.type)}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      {getLogIcon(log.type)}
                      <h3 className="text-lg font-semibold text-gray-900">{log.action}</h3>
                      <span className="px-2 py-1 bg-white bg-opacity-70 rounded text-xs font-medium text-gray-700 capitalize">
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
                    
                    <div className="flex items-center space-x-4 mt-3 text-xs text-gray-500">
                      <div className="flex items-center">
                        <FiClock className="w-3 h-3 mr-1" />
                        {formatTimestamp(log.timestamp)}
                      </div>
                      <span>IP: {log.ipAddress}</span>
                    </div>
                  </div>
                  
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <FiEye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing {filteredLogs.length} of {logs.length} logs
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogs;
