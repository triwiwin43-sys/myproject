import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiPackage, 
  FiTruck, 
  FiCheck, 
  FiX,
  FiStar,
  FiMessageSquare,
  FiRefreshCw,
  FiEye
} from 'react-icons/fi';
import ProductImage from '../components/ProductImage';
import useAuthStore from '../context/authStore';
import useOrderStore from '../context/orderStore';
import toast from 'react-hot-toast';

const Orders = () => {
  const { user } = useAuthStore();
  const { orders: allOrders, getOrdersByRole, receiveOrder } = useOrderStore();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [showTrackingModal, setShowTrackingModal] = useState(false);
  const [showRefundModal, setShowRefundModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [refundReason, setRefundReason] = useState('');

  // Get orders for current user
  // const orders = getOrdersByRole(user?.id, user?.role || 'customer');

  useEffect(() => {
    const mockOrders = [
      {
        id: 1,
        orderNumber: 'IM17351234560001',
        status: 'shipped',
        orderDate: '2024-12-20',
        items: [
          {
            id: 1,
            name: 'HP LaserJet Pro M404n',
            image: '/api/placeholder/100/100',
            price: 2500000,
            quantity: 1,
            category: 'Printer'
          }
        ],
        seller: {
          name: 'Inter Medi-A Store',
          rating: 4.8
        },
        shipping: {
          courier: { name: 'JNE', service: 'Regular' },
          trackingNumber: 'JNE123456789',
          address: {
            recipientName: 'John Doe',
            address: 'Jl. Merdeka No. 123, Jakarta Selatan'
          }
        },
        payment: {
          method: 'transfer',
          status: 'paid'
        },
        total: 2515000,
        canReview: false,
        canRefund: true,
        canCancel: false
      },
      {
        id: 2,
        orderNumber: 'IM17351234560002',
        status: 'delivered',
        orderDate: '2024-12-15',
        deliveredAt: '2024-12-18',
        items: [
          {
            id: 2,
            name: 'Canon Pixma G2010',
            image: '/api/placeholder/100/100',
            price: 1200000,
            quantity: 1,
            category: 'Printer'
          }
        ],
        seller: {
          name: 'Inter Medi-A Store',
          rating: 4.8
        },
        shipping: {
          courier: { name: 'TIKI', service: 'Regular' },
          trackingNumber: 'TIKI987654321',
          address: {
            recipientName: 'John Doe',
            address: 'Jl. Merdeka No. 123, Jakarta Selatan'
          }
        },
        payment: {
          method: 'cod',
          status: 'paid'
        },
        total: 1212000,
        canReview: true,
        canRefund: true,
        canCancel: false
      },
      {
        id: 3,
        orderNumber: 'IM17351234560003',
        status: 'pending',
        orderDate: '2024-12-22',
        items: [
          {
            id: 3,
            name: 'Service Laptop Premium',
            image: '/api/placeholder/100/100',
            price: 250000,
            quantity: 1,
            category: 'Service'
          }
        ],
        seller: {
          name: 'Inter Medi-A Store',
          rating: 4.8
        },
        payment: {
          method: 'transfer',
          status: 'pending'
        },
        total: 250000,
        canReview: false,
        canRefund: false,
        canCancel: true
      }
    ];
    
    setOrders(mockOrders);
    setLoading(false);
  }, []);

  // Handler functions
  const handleTrackOrder = (order) => {
    setSelectedOrder(order);
    setShowTrackingModal(true);
  };

  const handleRefundRequest = (order) => {
    setSelectedOrder(order);
    setShowRefundModal(true);
  };

  const handleSubmitRefund = () => {
    if (!refundReason.trim()) {
      toast.error('Mohon berikan alasan refund');
      return;
    }
    
    // Update order status
    setOrders(orders.map(order => 
      order.id === selectedOrder.id 
        ? { ...order, status: 'refund_requested', refundReason }
        : order
    ));
    
    toast.success('Permintaan refund berhasil dikirim');
    setShowRefundModal(false);
    setRefundReason('');
    setSelectedOrder(null);
  };

  const handleRateOrder = (order) => {
    setSelectedOrder(order);
    setShowRatingModal(true);
  };

  const handleSubmitRating = () => {
    if (rating === 0) {
      toast.error('Mohon berikan rating');
      return;
    }
    
    // Update order with rating
    setOrders(orders.map(order => 
      order.id === selectedOrder.id 
        ? { ...order, rating, review, canReview: false }
        : order
    ));
    
    toast.success('Rating berhasil diberikan');
    setShowRatingModal(false);
    setRating(0);
    setReview('');
    setSelectedOrder(null);
  };

  const handleReceiveOrder = (orderId) => {
    receiveOrder(orderId);
    toast.success('Pesanan berhasil diterima');
  };

  const handleCancelOrder = (orderId) => {
    if (window.confirm('Yakin ingin membatalkan pesanan ini?')) {
      setOrders(orders.map(order => 
        order.id === orderId 
          ? { ...order, status: 'cancelled', canCancel: false }
          : order
      ));
      toast.success('Pesanan berhasil dibatalkan');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-purple-100 text-purple-800';
      case 'shipped': return 'bg-indigo-100 text-indigo-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'refunded': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Menunggu Konfirmasi';
      case 'confirmed': return 'Dikonfirmasi';
      case 'processing': return 'Diproses';
      case 'shipped': return 'Dikirim';
      case 'delivered': return 'Sampai Tujuan';
      case 'completed': return 'Selesai';
      case 'cancelled': return 'Dibatalkan';
      case 'refunded': return 'Dikembalikan';
      default: return status;
    }
  };

  const filteredOrders = orders.filter(order => {
    if (activeTab === 'all') return true;
    if (activeTab === 'pending') return ['pending', 'confirmed', 'processing'].includes(order.status);
    if (activeTab === 'shipped') return ['shipped', 'delivered'].includes(order.status);
    if (activeTab === 'completed') return order.status === 'completed';
    if (activeTab === 'cancelled') return ['cancelled', 'refunded'].includes(order.status);
    return true;
  });

  const tabs = [
    { id: 'all', name: 'Semua', count: orders.length },
    { id: 'pending', name: 'Diproses', count: orders.filter(o => ['pending', 'confirmed', 'processing'].includes(o.status)).length },
    { id: 'shipped', name: 'Dikirim', count: orders.filter(o => ['shipped', 'delivered'].includes(o.status)).length },
    { id: 'completed', name: 'Selesai', count: orders.filter(o => o.status === 'completed').length },
    { id: 'cancelled', name: 'Dibatalkan', count: orders.filter(o => ['cancelled', 'refunded'].includes(o.status)).length }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 h-32"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Pesanan Saya</h1>
          <p className="text-gray-600">Kelola dan lacak pesanan Anda</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-0 px-4 py-3 text-sm font-medium text-center border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.name}
                {tab.count > 0 && (
                  <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
            <FiPackage className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Belum ada pesanan</h3>
            <p className="text-gray-600 mb-6">Mulai berbelanja untuk melihat pesanan di sini</p>
            <Link to="/products" className="btn btn-primary">
              Mulai Belanja
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm border">
                {/* Order Header */}
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {order.orderNumber}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Dipesan pada {new Date(order.orderDate).toLocaleDateString('id-ID')}
                      </p>
                    </div>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(order.status)}`}>
                      {getStatusText(order.status)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <FiPackage className="w-4 h-4 mr-1" />
                        {order.seller.name}
                      </div>
                      {order.shipping?.trackingNumber && (
                        <div className="flex items-center text-sm text-gray-600">
                          <FiTruck className="w-4 h-4 mr-1" />
                          {order.shipping.courier.name} - {order.shipping.trackingNumber}
                        </div>
                      )}
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      Rp {order.total.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4">
                        <div className="w-16 h-16 flex-shrink-0">
                          <ProductImage
                            src={item.image}
                            alt={item.name}
                            category={item.category}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {item.quantity}x - Rp {item.price.toLocaleString()}
                          </p>
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          Rp {(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Actions */}
                <div className="px-6 py-4 bg-gray-50 border-t flex items-center justify-between">
                  <div className="flex space-x-3">
                    <Link
                      to={`/orders/${order.orderNumber}`}
                      className="btn btn-outline btn-sm"
                    >
                      <FiEye className="w-4 h-4 mr-2" />
                      Detail
                    </Link>
                    
                    {order.shipping?.trackingNumber && (
                      <button
                        onClick={() => handleTrackOrder(order)}
                        className="btn btn-outline btn-sm"
                      >
                        <FiTruck className="w-4 h-4 mr-2" />
                        Lacak
                      </button>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    {order.canCancel && (
                      <button 
                        onClick={() => handleCancelOrder(order.id)}
                        className="btn btn-outline btn-sm text-red-600 border-red-600 hover:bg-red-50"
                      >
                        <FiX className="w-4 h-4 mr-2" />
                        Batalkan
                      </button>
                    )}
                    
                    {order.canRefund && (
                      <button 
                        onClick={() => handleRefundRequest(order)}
                        className="btn btn-outline btn-sm text-orange-600 border-orange-600 hover:bg-orange-50"
                      >
                        <FiRefreshCw className="w-4 h-4 mr-2" />
                        Refund
                      </button>
                    )}
                    
                    {order.canReview && (
                      <button 
                        onClick={() => handleRateOrder(order)}
                        className="btn btn-primary btn-sm"
                      >
                        <FiStar className="w-4 h-4 mr-2" />
                        Beri Rating
                      </button>
                    )}
                    
                    {order.status === 'delivered' && (
                      <button 
                        onClick={() => handleReceiveOrder(order.id)}
                        className="btn btn-primary btn-sm"
                      >
                        <FiCheck className="w-4 h-4 mr-2" />
                        Terima Pesanan
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tracking Modal */}
      {showTrackingModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-4">Lacak Pesanan</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Nomor Resi</p>
                <p className="font-medium">{selectedOrder.shipping?.trackingNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Kurir</p>
                <p className="font-medium">{selectedOrder.shipping?.courier.name} - {selectedOrder.shipping?.courier.service}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status Pengiriman</p>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>Paket telah dikirim dari gudang</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>Paket dalam perjalanan</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-3 h-3 bg-gray-300 rounded-full mr-3"></div>
                    <span>Paket akan segera tiba</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setShowTrackingModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Refund Modal */}
      {showRefundModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-4">Ajukan Refund</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Pesanan: {selectedOrder.orderNumber}</p>
                <p className="text-sm text-gray-600 mb-4">Total: Rp {selectedOrder.total?.toLocaleString()}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alasan Refund *
                </label>
                <textarea
                  value={refundReason}
                  onChange={(e) => setRefundReason(e.target.value)}
                  placeholder="Jelaskan alasan mengapa Anda ingin refund..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setShowRefundModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                onClick={handleSubmitRefund}
                className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
              >
                Ajukan Refund
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rating Modal */}
      {showRatingModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-4">Beri Rating & Ulasan</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Pesanan: {selectedOrder.orderNumber}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating *
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className={`text-2xl ${
                        star <= rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ulasan (Opsional)
                </label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Bagikan pengalaman Anda dengan produk ini..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setShowRatingModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                onClick={handleSubmitRating}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Kirim Rating
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
