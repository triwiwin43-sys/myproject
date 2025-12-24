import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTruck, FiX, FiPackage, FiEye } from 'react-icons/fi';
import useAuthStore from '../context/authStore';

const QuickTrackingModal = ({ isOpen, onClose }) => {
  const { user, isAuthenticated } = useAuthStore();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      fetchUserOrders();
    }
  }, [isOpen, isAuthenticated]);

  const fetchUserOrders = async () => {
    setLoading(true);
    
    // Mock orders with detailed tracking
    const mockOrders = [
      {
        id: 1,
        orderNumber: 'IM17351234560001',
        status: 'shipped',
        statusText: 'Dalam Perjalanan',
        items: [{ name: 'HP LaserJet Pro M404n', quantity: 1 }],
        total: 2515000,
        courier: 'JNE',
        trackingNumber: 'JNE123456789',
        trackingHistory: [
          { status: 'Pesanan dikonfirmasi seller', time: '2024-12-20 10:00', location: 'Jakarta' },
          { status: 'Pesanan sedang dikemas', time: '2024-12-20 14:30', location: 'Jakarta' },
          { status: 'Paket berhasil di-pickup kurir', time: '2024-12-21 09:15', location: 'Jakarta' },
          { status: 'Paket tiba di hub JNE Jakarta', time: '2024-12-21 15:20', location: 'Jakarta' },
          { status: 'Paket dalam perjalanan ke kota tujuan', time: '2024-12-22 08:00', location: 'Dalam Perjalanan' }
        ],
        estimatedDelivery: '2024-12-25'
      },
      {
        id: 2,
        orderNumber: 'IM17351234560002',
        status: 'processing',
        statusText: 'Sedang Diproses',
        items: [{ name: 'Canon Pixma G2010', quantity: 1 }],
        total: 1212000,
        trackingHistory: [
          { status: 'Pesanan diterima', time: '2024-12-23 16:45', location: 'Jakarta' },
          { status: 'Pesanan dikonfirmasi seller', time: '2024-12-23 17:20', location: 'Jakarta' },
          { status: 'Sedang diproses dan dikemas', time: '2024-12-24 09:00', location: 'Jakarta' }
        ]
      }
    ];
    
    setOrders(mockOrders);
    setLoading(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-purple-100 text-purple-800';
      case 'shipped': return 'bg-indigo-100 text-indigo-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isOpen) return null;

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Lacak Pesanan</h3>
            <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600">
              <FiX className="w-5 h-5" />
            </button>
          </div>
          
          <div className="text-center py-8">
            <FiPackage className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">Login Diperlukan</h4>
            <p className="text-gray-600 mb-6">Silakan login untuk melihat status pesanan Anda</p>
            <Link
              to="/login"
              onClick={onClose}
              className="btn btn-primary"
            >
              Login Sekarang
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <FiTruck className="w-5 h-5 mr-2 text-blue-600" />
            Status Pesanan Saya
          </h3>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600">
            <FiX className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-96">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Memuat pesanan...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center py-8">
              <FiPackage className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h4 className="text-lg font-medium text-gray-900 mb-2">Belum Ada Pesanan</h4>
              <p className="text-gray-600 mb-6">Anda belum memiliki pesanan aktif</p>
              <Link
                to="/products"
                onClick={onClose}
                className="btn btn-primary"
              >
                Mulai Belanja
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{order.orderNumber}</h4>
                      <p className="text-sm text-gray-600">
                        {order.items[0].name}
                        {order.items.length > 1 && ` +${order.items.length - 1} item lainnya`}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                        {order.statusText}
                      </span>
                      <Link
                        to={`/orders/${order.orderNumber}`}
                        onClick={onClose}
                        className="p-1 text-blue-600 hover:bg-blue-100 rounded"
                      >
                        <FiEye className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Tracking History */}
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-gray-700">Update Terbaru:</h5>
                    {order.trackingHistory.slice(-3).reverse().map((track, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{track.status}</p>
                          <p className="text-xs text-gray-500">
                            {track.time} • {track.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {order.courier && order.trackingNumber && (
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-xs text-gray-600">
                        <strong>{order.courier}:</strong> {order.trackingNumber}
                        {order.estimatedDelivery && (
                          <span className="ml-2">
                            • Estimasi tiba: {new Date(order.estimatedDelivery).toLocaleDateString('id-ID')}
                          </span>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="p-6 border-t bg-gray-50">
          <Link
            to="/orders"
            onClick={onClose}
            className="w-full btn btn-primary text-center"
          >
            Lihat Semua Pesanan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickTrackingModal;
