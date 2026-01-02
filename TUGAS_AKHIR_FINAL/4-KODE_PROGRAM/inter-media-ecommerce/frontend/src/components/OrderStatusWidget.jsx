import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiPackage, 
  FiTruck, 
  FiCheck, 
  FiClock,
  FiAlertCircle,
  FiEye
} from 'react-icons/fi';
import useAuthStore from '../context/authStore';

const OrderStatusWidget = () => {
  const { user, isAuthenticated } = useAuthStore();
  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated && user?.role === 'customer') {
      fetchRecentOrders();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, user]);

  const fetchRecentOrders = async () => {
    // Mock data with detailed tracking - replace with API call
    const mockOrders = [
      {
        id: 1,
        orderNumber: 'IM17351234560001',
        status: 'shipped',
        statusText: 'Dalam Perjalanan',
        items: [{ name: 'HP LaserJet Pro M404n', quantity: 1 }],
        total: 2515000,
        trackingNumber: 'JNE123456789',
        courier: 'JNE',
        estimatedDelivery: '2024-12-25',
        lastUpdate: '2024-12-24 10:30',
        currentLocation: 'Hub JNE Bandung',
        trackingHistory: [
          { status: 'Pesanan dikonfirmasi seller', time: '2024-12-20 10:00', location: 'Jakarta' },
          { status: 'Pesanan sedang dikemas', time: '2024-12-20 14:30', location: 'Jakarta' },
          { status: 'Paket berhasil di-pickup kurir', time: '2024-12-21 09:15', location: 'Jakarta' },
          { status: 'Paket tiba di hub JNE Jakarta', time: '2024-12-21 15:20', location: 'Jakarta' },
          { status: 'Paket dalam perjalanan ke kota tujuan', time: '2024-12-22 08:00', location: 'Dalam Perjalanan' },
          { status: 'Paket tiba di hub JNE Bandung', time: '2024-12-24 10:30', location: 'Bandung' }
        ]
      },
      {
        id: 2,
        orderNumber: 'IM17351234560002',
        status: 'processing',
        statusText: 'Sedang Dikemas',
        items: [{ name: 'Canon Pixma G2010', quantity: 1 }],
        total: 1212000,
        lastUpdate: '2024-12-23 14:20',
        trackingHistory: [
          { status: 'Pesanan diterima', time: '2024-12-22 16:45', location: 'Jakarta' },
          { status: 'Pesanan dikonfirmasi seller', time: '2024-12-22 17:20', location: 'Jakarta' },
          { status: 'Sedang diproses dan dikemas', time: '2024-12-23 14:20', location: 'Jakarta' }
        ]
      },
      {
        id: 3,
        orderNumber: 'IM17351234560003',
        status: 'pending',
        statusText: 'Menunggu Konfirmasi Seller',
        items: [{ name: 'Service Laptop Premium', quantity: 1 }],
        total: 250000,
        lastUpdate: '2024-12-24 08:45',
        trackingHistory: [
          { status: 'Pesanan berhasil dibuat', time: '2024-12-24 08:45', location: 'Jakarta' }
        ]
      }
    ];
    
    setRecentOrders(mockOrders.slice(0, 3)); // Show only 3 recent orders
    setLoading(false);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <FiClock className="w-4 h-4 text-yellow-500" />;
      case 'confirmed': return <FiCheck className="w-4 h-4 text-blue-500" />;
      case 'processing': return <FiPackage className="w-4 h-4 text-purple-500" />;
      case 'shipped': return <FiTruck className="w-4 h-4 text-indigo-500" />;
      case 'delivered': return <FiCheck className="w-4 h-4 text-green-500" />;
      default: return <FiAlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'confirmed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'processing': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'shipped': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'delivered': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (!isAuthenticated || user?.role !== 'customer' || loading) {
    return null;
  }

  if (recentOrders.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center">
          <FiPackage className="w-5 h-5 mr-2 text-blue-600" />
          Status Pesanan Terbaru
        </h2>
        <Link 
          to="/orders" 
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          Lihat Semua
        </Link>
      </div>

      <div className="space-y-4">
        {recentOrders.map((order) => (
          <div key={order.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="font-medium text-gray-900">
                    {order.orderNumber}
                  </span>
                  <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span className="ml-1">{order.statusText}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-1">
                  {order.items[0].name}
                  {order.items.length > 1 && ` +${order.items.length - 1} item lainnya`}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>
                    {order.trackingHistory && order.trackingHistory.length > 0 
                      ? order.trackingHistory[order.trackingHistory.length - 1].status
                      : `Update terakhir: ${order.lastUpdate}`
                    }
                  </span>
                  {order.trackingNumber && (
                    <span className="font-medium">{order.courier}: {order.trackingNumber}</span>
                  )}
                </div>
                
                {order.currentLocation && (
                  <p className="text-xs text-blue-600 mt-1">
                    📍 Lokasi saat ini: {order.currentLocation}
                  </p>
                )}
                
                {order.estimatedDelivery && (
                  <p className="text-xs text-green-600 mt-1">
                    📦 Estimasi tiba: {new Date(order.estimatedDelivery).toLocaleDateString('id-ID')}
                  </p>
                )}
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    Rp {order.total.toLocaleString()}
                  </p>
                </div>
                <Link
                  to={`/orders/${order.orderNumber}`}
                  className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <FiEye className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            {/* Progress Bar for Shipped Orders */}
            {order.status === 'shipped' && (
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                  <span>Dikirim</span>
                  <span>Dalam Perjalanan</span>
                  <span>Sampai Tujuan</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Quick Actions */}
      <div className="mt-4 pt-4 border-t">
        <div className="flex space-x-3">
          <Link 
            to="/orders" 
            className="flex-1 btn btn-outline btn-sm text-center"
          >
            Semua Pesanan
          </Link>
          <Link 
            to="/products" 
            className="flex-1 btn btn-primary btn-sm text-center"
          >
            Belanja Lagi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusWidget;
