import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiPackage, 
  FiTruck, 
  FiCheck, 
  FiX,
  FiEdit,
  FiEye,
  FiClock,
  FiAlertCircle
} from 'react-icons/fi';
import ProductImage from '../../components/ProductImage';
import useAuthStore from '../../context/authStore';
import toast from 'react-hot-toast';

const SellerOrders = () => {
  const { user } = useAuthStore();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showTrackingModal, setShowTrackingModal] = useState(false);
  const [trackingData, setTrackingData] = useState({
    trackingNumber: '',
    courier: 'jne',
    notes: ''
  });

  // Mock orders data for seller
  useEffect(() => {
    const mockOrders = [
      {
        id: 1,
        orderNumber: 'IM17351234560001',
        status: 'confirmed',
        orderDate: '2024-12-20',
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
            category: 'Printer'
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
          courier: { name: 'JNE', service: 'Regular', cost: 15000 }
        },
        payment: {
          method: 'transfer',
          status: 'paid'
        },
        total: 2515000,
        customerNotes: 'Mohon dikemas dengan bubble wrap'
      },
      {
        id: 2,
        orderNumber: 'IM17351234560002',
        status: 'shipped',
        orderDate: '2024-12-15',
        shippedAt: '2024-12-16',
        customer: {
          name: 'Jane Smith',
          email: 'jane@example.com',
          phone: '081234567891'
        },
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
        shipping: {
          address: {
            recipientName: 'Jane Smith',
            phone: '081234567891',
            address: 'Jl. Sudirman No. 456, Lantai 10',
            city: 'Jakarta Pusat',
            postalCode: '10220'
          },
          courier: { name: 'TIKI', service: 'Regular', cost: 12000 },
          trackingNumber: 'TIKI987654321'
        },
        payment: {
          method: 'cod',
          status: 'paid'
        },
        total: 1212000
      },
      {
        id: 3,
        orderNumber: 'IM17351234560003',
        status: 'pending',
        orderDate: '2024-12-22',
        customer: {
          name: 'Bob Wilson',
          email: 'bob@example.com',
          phone: '081234567892'
        },
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
        payment: {
          method: 'transfer',
          status: 'pending'
        },
        total: 250000,
        customerNotes: 'Laptop tidak bisa nyala, mohon dicek'
      }
    ];
    
    setOrders(mockOrders);
    setLoading(false);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-purple-100 text-purple-800';
      case 'shipped': return 'bg-indigo-100 text-indigo-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
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
      default: return status;
    }
  };

  const handleConfirmOrder = async (orderId) => {
    try {
      setOrders(orders.map(order => 
        order.id === orderId 
          ? { ...order, status: 'confirmed', confirmedAt: new Date().toISOString() }
          : order
      ));
      toast.success('Pesanan berhasil dikonfirmasi');
    } catch (error) {
      toast.error('Gagal mengkonfirmasi pesanan');
    }
  };

  const handleProcessOrder = async (orderId) => {
    try {
      setOrders(orders.map(order => 
        order.id === orderId 
          ? { ...order, status: 'processing' }
          : order
      ));
      toast.success('Pesanan sedang diproses');
    } catch (error) {
      toast.error('Gagal memproses pesanan');
    }
  };

  const handleShipOrder = async () => {
    if (!trackingData.trackingNumber) {
      toast.error('Nomor resi harus diisi');
      return;
    }

    try {
      setOrders(orders.map(order => 
        order.id === selectedOrder.id 
          ? { 
              ...order, 
              status: 'shipped',
              shippedAt: new Date().toISOString(),
              shipping: {
                ...order.shipping,
                trackingNumber: trackingData.trackingNumber,
                courier: { ...order.shipping.courier, name: trackingData.courier.toUpperCase() }
              },
              sellerNotes: trackingData.notes
            }
          : order
      ));
      
      setShowTrackingModal(false);
      setTrackingData({ trackingNumber: '', courier: 'jne', notes: '' });
      setSelectedOrder(null);
      toast.success('Pesanan berhasil dikirim dengan nomor resi');
    } catch (error) {
      toast.error('Gagal mengirim pesanan');
    }
  };

  const filteredOrders = orders.filter(order => {
    if (activeTab === 'all') return true;
    if (activeTab === 'new') return order.status === 'pending';
    if (activeTab === 'processing') return ['confirmed', 'processing'].includes(order.status);
    if (activeTab === 'shipped') return ['shipped', 'delivered'].includes(order.status);
    if (activeTab === 'completed') return order.status === 'completed';
    return true;
  });

  const tabs = [
    { id: 'all', name: 'Semua', count: orders.length },
    { id: 'new', name: 'Baru', count: orders.filter(o => o.status === 'pending').length },
    { id: 'processing', name: 'Diproses', count: orders.filter(o => ['confirmed', 'processing'].includes(o.status)).length },
    { id: 'shipped', name: 'Dikirim', count: orders.filter(o => ['shipped', 'delivered'].includes(o.status)).length },
    { id: 'completed', name: 'Selesai', count: orders.filter(o => o.status === 'completed').length }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Kelola Pesanan</h1>
          <p className="text-gray-600">Kelola pesanan dari customer</p>
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
                  <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                    tab.id === 'new' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Orders List */}
        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 h-48 animate-pulse"></div>
            ))}
          </div>
        ) : filteredOrders.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
            <FiPackage className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Belum ada pesanan</h3>
            <p className="text-gray-600">Pesanan dari customer akan muncul di sini</p>
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
                    <div className="flex items-center space-x-3">
                      {order.status === 'pending' && (
                        <FiAlertCircle className="w-5 h-5 text-red-500" />
                      )}
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Customer Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Informasi Customer</h4>
                      <p className="text-sm text-gray-600">{order.customer.name}</p>
                      <p className="text-sm text-gray-600">{order.customer.email}</p>
                      <p className="text-sm text-gray-600">{order.customer.phone}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Alamat Pengiriman</h4>
                      <p className="text-sm text-gray-600">{order.shipping.address.recipientName}</p>
                      <p className="text-sm text-gray-600">{order.shipping.address.address}</p>
                      <p className="text-sm text-gray-600">{order.shipping.address.city} {order.shipping.address.postalCode}</p>
                    </div>
                  </div>

                  {order.customerNotes && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                      <h4 className="text-sm font-medium text-yellow-800 mb-1">Catatan Customer:</h4>
                      <p className="text-sm text-yellow-700">{order.customerNotes}</p>
                    </div>
                  )}
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
                  
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        Pembayaran: {order.payment.method === 'transfer' ? 'Transfer Bank' : 
                                   order.payment.method === 'cod' ? 'COD' : 'E-Wallet'}
                        <span className={`ml-2 px-2 py-1 text-xs rounded ${
                          order.payment.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.payment.status === 'paid' ? 'Lunas' : 'Belum Bayar'}
                        </span>
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        Total: Rp {order.total.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Actions */}
                <div className="px-6 py-4 bg-gray-50 border-t flex items-center justify-between">
                  <div className="flex space-x-3">
                    <Link
                      to={`/seller/orders/${order.orderNumber}`}
                      className="btn btn-outline btn-sm"
                    >
                      <FiEye className="w-4 h-4 mr-2" />
                      Detail
                    </Link>
                    
                    {order.shipping?.trackingNumber && (
                      <div className="flex items-center text-sm text-gray-600">
                        <FiTruck className="w-4 h-4 mr-1" />
                        Resi: {order.shipping.trackingNumber}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    {order.status === 'pending' && (
                      <>
                        <button 
                          onClick={() => handleConfirmOrder(order.id)}
                          className="btn btn-primary btn-sm"
                        >
                          <FiCheck className="w-4 h-4 mr-2" />
                          Konfirmasi
                        </button>
                        <button className="btn btn-outline btn-sm text-red-600 border-red-600 hover:bg-red-50">
                          <FiX className="w-4 h-4 mr-2" />
                          Tolak
                        </button>
                      </>
                    )}
                    
                    {order.status === 'confirmed' && (
                      <button 
                        onClick={() => handleProcessOrder(order.id)}
                        className="btn btn-primary btn-sm"
                      >
                        <FiClock className="w-4 h-4 mr-2" />
                        Proses
                      </button>
                    )}
                    
                    {order.status === 'processing' && (
                      <button 
                        onClick={() => {
                          setSelectedOrder(order);
                          setShowTrackingModal(true);
                        }}
                        className="btn btn-primary btn-sm"
                      >
                        <FiTruck className="w-4 h-4 mr-2" />
                        Input Resi
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tracking Modal */}
        {showTrackingModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold mb-4">Input Nomor Resi</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kurir
                  </label>
                  <select
                    value={trackingData.courier}
                    onChange={(e) => setTrackingData({...trackingData, courier: e.target.value})}
                    className="input"
                  >
                    <option value="jne">JNE</option>
                    <option value="tiki">TIKI</option>
                    <option value="pos">POS Indonesia</option>
                    <option value="jnt">J&T Express</option>
                    <option value="sicepat">SiCepat</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Resi *
                  </label>
                  <input
                    type="text"
                    value={trackingData.trackingNumber}
                    onChange={(e) => setTrackingData({...trackingData, trackingNumber: e.target.value})}
                    className="input"
                    placeholder="Masukkan nomor resi"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Catatan (Opsional)
                  </label>
                  <textarea
                    value={trackingData.notes}
                    onChange={(e) => setTrackingData({...trackingData, notes: e.target.value})}
                    className="input"
                    rows={3}
                    placeholder="Catatan tambahan untuk customer"
                  />
                </div>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowTrackingModal(false)}
                  className="flex-1 btn btn-outline"
                >
                  Batal
                </button>
                <button
                  onClick={handleShipOrder}
                  className="flex-1 btn btn-primary"
                >
                  Kirim Pesanan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerOrders;
