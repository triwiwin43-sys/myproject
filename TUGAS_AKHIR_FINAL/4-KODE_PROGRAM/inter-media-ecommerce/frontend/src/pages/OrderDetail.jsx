import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FiArrowLeft,
  FiPackage, 
  FiTruck, 
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiCheck,
  FiStar,
  FiMessageSquare,
  FiRefreshCw,
  FiDownload
} from 'react-icons/fi';
import ProductImage from '../components/ProductImage';
import useAuthStore from '../context/authStore';

const OrderDetail = () => {
  const { orderNumber } = useParams();
  const { user } = useAuthStore();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrderDetail();
  }, [orderNumber]);

  const fetchOrderDetail = async () => {
    setLoading(true);
    
    // Mock order detail - replace with API call
    const mockOrder = {
      id: 1,
      orderNumber: 'IM17351234560001',
      status: 'shipped',
      statusText: 'Dalam Perjalanan',
      orderDate: '2024-12-20T10:00:00Z',
      confirmedAt: '2024-12-20T10:30:00Z',
      shippedAt: '2024-12-21T09:15:00Z',
      estimatedDelivery: '2024-12-25',
      
      customer: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '081234567890'
      },
      
      items: [
        {
          id: 1,
          name: 'HP LaserJet Pro M404n',
          image: '/api/placeholder/100/100',
          price: 2500000,
          quantity: 1,
          category: 'Printer',
          subtotal: 2500000
        }
      ],
      
      shipping: {
        address: {
          recipientName: 'John Doe',
          phone: '081234567890',
          address: 'Jl. Merdeka No. 123, RT 01/RW 02',
          city: 'Jakarta Selatan',
          postalCode: '12345'
        },
        courier: {
          name: 'JNE',
          service: 'Regular',
          cost: 15000
        },
        trackingNumber: 'JNE123456789'
      },
      
      payment: {
        method: 'transfer',
        status: 'paid',
        paidAt: '2024-12-20T11:00:00Z'
      },
      
      pricing: {
        subtotal: 2500000,
        shippingCost: 15000,
        total: 2515000
      },
      
      seller: {
        name: 'Inter Medi-A Store',
        rating: 4.8,
        phone: '021-1234-5678'
      },
      
      trackingHistory: [
        {
          status: 'Pesanan berhasil dibuat',
          description: 'Pesanan Anda telah berhasil dibuat dan menunggu konfirmasi seller',
          location: 'Jakarta',
          timestamp: '2024-12-20T10:00:00Z',
          isCompleted: true
        },
        {
          status: 'Pesanan dikonfirmasi seller',
          description: 'Seller telah mengkonfirmasi pesanan Anda',
          location: 'Jakarta',
          timestamp: '2024-12-20T10:30:00Z',
          isCompleted: true
        },
        {
          status: 'Pesanan sedang dikemas',
          description: 'Pesanan Anda sedang dikemas dengan hati-hati',
          location: 'Jakarta',
          timestamp: '2024-12-20T14:30:00Z',
          isCompleted: true
        },
        {
          status: 'Paket berhasil di-pickup kurir',
          description: 'Paket telah diambil oleh kurir JNE',
          location: 'Jakarta',
          timestamp: '2024-12-21T09:15:00Z',
          isCompleted: true
        },
        {
          status: 'Paket tiba di hub JNE Jakarta',
          description: 'Paket telah tiba di sorting center JNE Jakarta',
          location: 'Jakarta',
          timestamp: '2024-12-21T15:20:00Z',
          isCompleted: true
        },
        {
          status: 'Paket dalam perjalanan ke kota tujuan',
          description: 'Paket sedang dalam perjalanan menuju Jakarta Selatan',
          location: 'Dalam Perjalanan',
          timestamp: '2024-12-22T08:00:00Z',
          isCompleted: true
        },
        {
          status: 'Paket tiba di hub JNE Jakarta Selatan',
          description: 'Paket telah tiba di hub terdekat dengan alamat Anda',
          location: 'Jakarta Selatan',
          timestamp: '2024-12-24T10:30:00Z',
          isCompleted: true
        },
        {
          status: 'Paket out for delivery',
          description: 'Paket sedang dalam perjalanan untuk dikirim ke alamat Anda',
          location: 'Jakarta Selatan',
          timestamp: null,
          isCompleted: false
        },
        {
          status: 'Paket berhasil diterima',
          description: 'Paket telah diterima oleh penerima',
          location: 'Jakarta Selatan',
          timestamp: null,
          isCompleted: false
        }
      ],
      
      customerNotes: 'Mohon dikemas dengan bubble wrap',
      canCancel: false,
      canRefund: true,
      canReview: false,
      canConfirmDelivery: false
    };
    
    setOrder(mockOrder);
    setLoading(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'confirmed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'processing': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'shipped': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'delivered': return 'bg-green-100 text-green-800 border-green-200';
      case 'completed': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="bg-white rounded-lg p-6 space-y-4">
              <div className="h-6 bg-gray-200 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <FiPackage className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Pesanan Tidak Ditemukan</h2>
            <p className="text-gray-600 mb-6">Pesanan dengan nomor {orderNumber} tidak ditemukan</p>
            <Link to="/orders" className="btn btn-primary">
              Kembali ke Pesanan
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <Link 
            to="/orders" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Pesanan
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Detail Pesanan</h1>
              <p className="text-gray-600">{order.orderNumber}</p>
            </div>
            <span className={`px-4 py-2 text-sm font-medium rounded-full border ${getStatusColor(order.status)}`}>
              {order.statusText}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tracking Timeline */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <FiTruck className="w-5 h-5 mr-2 text-blue-600" />
                Status Pengiriman
              </h2>
              
              <div className="space-y-4">
                {order.trackingHistory.map((track, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        track.isCompleted 
                          ? 'bg-green-100 text-green-600' 
                          : index === order.trackingHistory.findIndex(t => !t.isCompleted)
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-400'
                      }`}>
                        {track.isCompleted ? (
                          <FiCheck className="w-4 h-4" />
                        ) : (
                          <FiClock className="w-4 h-4" />
                        )}
                      </div>
                      {index < order.trackingHistory.length - 1 && (
                        <div className={`w-0.5 h-8 mx-auto mt-2 ${
                          track.isCompleted ? 'bg-green-200' : 'bg-gray-200'
                        }`}></div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${
                        track.isCompleted ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {track.status}
                      </p>
                      <p className={`text-sm ${
                        track.isCompleted ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {track.description}
                      </p>
                      <div className="flex items-center space-x-4 mt-1">
                        {track.timestamp && (
                          <span className="text-xs text-gray-500">
                            {formatDate(track.timestamp)}
                          </span>
                        )}
                        <span className="text-xs text-gray-500">
                          📍 {track.location}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {order.shipping.trackingNumber && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Nomor Resi:</strong> {order.shipping.trackingNumber} ({order.shipping.courier.name})
                  </p>
                  {order.estimatedDelivery && (
                    <p className="text-sm text-blue-700 mt-1">
                      <strong>Estimasi Tiba:</strong> {new Date(order.estimatedDelivery).toLocaleDateString('id-ID')}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Item Pesanan</h2>
              
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="w-16 h-16 flex-shrink-0">
                      <ProductImage
                        src={item.image}
                        alt={item.name}
                        category={item.category}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">Kategori: {item.category}</p>
                      <p className="text-sm text-gray-600">
                        {item.quantity}x @ Rp {item.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      Rp {item.subtotal.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Notes */}
            {order.customerNotes && (
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Catatan Customer</h2>
                <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
                  {order.customerNotes}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Ringkasan Pesanan</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">Rp {order.pricing.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ongkir ({order.shipping.courier.name})</span>
                  <span className="font-medium">Rp {order.pricing.shippingCost.toLocaleString()}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold text-lg text-blue-600">
                      Rp {order.pricing.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-600">
                  <strong>Pembayaran:</strong> {
                    order.payment.method === 'transfer' ? 'Transfer Bank' :
                    order.payment.method === 'cod' ? 'Bayar di Tempat' : 'E-Wallet'
                  }
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Status:</strong> 
                  <span className={`ml-1 ${order.payment.status === 'paid' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {order.payment.status === 'paid' ? 'Lunas' : 'Belum Bayar'}
                  </span>
                </p>
                {order.payment.paidAt && (
                  <p className="text-xs text-gray-500 mt-1">
                    Dibayar: {formatDate(order.payment.paidAt)}
                  </p>
                )}
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FiMapPin className="w-5 h-5 mr-2 text-blue-600" />
                Alamat Pengiriman
              </h2>
              
              <div className="space-y-2 text-sm">
                <p className="font-medium text-gray-900">{order.shipping.address.recipientName}</p>
                <p className="text-gray-600">{order.shipping.address.phone}</p>
                <p className="text-gray-600">{order.shipping.address.address}</p>
                <p className="text-gray-600">
                  {order.shipping.address.city} {order.shipping.address.postalCode}
                </p>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Informasi Seller</h2>
              
              <div className="space-y-2 text-sm">
                <p className="font-medium text-gray-900">{order.seller.name}</p>
                <div className="flex items-center">
                  <FiStar className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-gray-600">{order.seller.rating}/5.0</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FiPhone className="w-4 h-4 mr-2" />
                  {order.seller.phone}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Aksi</h2>
              
              <div className="space-y-3">
                {order.canConfirmDelivery && (
                  <button className="w-full btn btn-primary">
                    <FiCheck className="w-4 h-4 mr-2" />
                    Terima Pesanan
                  </button>
                )}
                
                {order.canReview && (
                  <button className="w-full btn btn-outline">
                    <FiStar className="w-4 h-4 mr-2" />
                    Beri Rating
                  </button>
                )}
                
                {order.canRefund && (
                  <button className="w-full btn btn-outline text-orange-600 border-orange-600 hover:bg-orange-50">
                    <FiRefreshCw className="w-4 h-4 mr-2" />
                    Request Refund
                  </button>
                )}
                
                <button className="w-full btn btn-outline">
                  <FiMessageSquare className="w-4 h-4 mr-2" />
                  Hubungi Seller
                </button>
                
                <button className="w-full btn btn-outline">
                  <FiDownload className="w-4 h-4 mr-2" />
                  Download Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
