import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiMapPin, 
  FiTruck, 
  FiCreditCard,
  FiShoppingBag,
  FiCheck,
  FiEdit
} from 'react-icons/fi';
import ProductImage from '../components/ProductImage';
import useCartStore from '../context/cartStore';
import useAuthStore from '../context/authStore';
import toast from 'react-hot-toast';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getCartTotal, clearCart } = useCartStore();
  const { user } = useAuthStore();
  
  const [loading, setLoading] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedCourier, setSelectedCourier] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('transfer');
  const [customerNotes, setCustomerNotes] = useState('');

  // Mock addresses
  const [addresses] = useState([
    {
      id: 1,
      label: 'Rumah',
      recipientName: 'John Doe',
      phone: '081234567890',
      address: 'Jl. Merdeka No. 123, RT 01/RW 02',
      city: 'Jakarta Selatan',
      postalCode: '12345',
      isDefault: true
    },
    {
      id: 2,
      label: 'Kantor',
      recipientName: 'John Doe',
      phone: '081234567890',
      address: 'Jl. Sudirman No. 456, Lantai 10',
      city: 'Jakarta Pusat',
      postalCode: '10220',
      isDefault: false
    }
  ]);

  // Mock courier options
  const [couriers] = useState([
    { id: 'jne-reg', name: 'JNE', service: 'Regular', cost: 15000, estimation: '2-3 hari' },
    { id: 'jne-yes', name: 'JNE', service: 'YES', cost: 25000, estimation: '1-2 hari' },
    { id: 'tiki-reg', name: 'TIKI', service: 'Regular', cost: 12000, estimation: '2-4 hari' },
    { id: 'pos-reg', name: 'POS Indonesia', service: 'Regular', cost: 10000, estimation: '3-5 hari' }
  ]);

  useEffect(() => {
    if (items.length === 0) {
      navigate('/cart');
      return;
    }
    
    // Set default address
    const defaultAddr = addresses.find(addr => addr.isDefault);
    if (defaultAddr) {
      setSelectedAddress(defaultAddr);
    }
  }, [items, addresses, navigate]);

  const subtotal = getCartTotal();
  const shippingCost = selectedCourier?.cost || 0;
  const total = subtotal + shippingCost;

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      toast.error('Pilih alamat pengiriman');
      return;
    }
    
    if (!selectedCourier) {
      toast.error('Pilih kurir pengiriman');
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const orderData = {
        items: items.map(item => ({
          productId: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          subtotal: item.price * item.quantity,
          image: item.image,
          category: item.category
        })),
        shipping: {
          address: selectedAddress,
          courier: selectedCourier
        },
        payment: {
          method: paymentMethod
        },
        subtotal,
        shippingCost,
        total,
        customerNotes
      };
      
      // Generate mock order number
      const orderNumber = `IM${Date.now()}${Math.floor(Math.random() * 1000)}`;
      
      // Clear cart
      clearCart();
      
      toast.success('Pesanan berhasil dibuat!');
      navigate(`/orders/${orderNumber}`);
      
    } catch (error) {
      toast.error('Gagal membuat pesanan');
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600">Lengkapi informasi untuk menyelesaikan pesanan</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-4">
                <FiMapPin className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-lg font-semibold">Alamat Pengiriman</h2>
              </div>
              
              <div className="space-y-3">
                {addresses.map((address) => (
                  <div
                    key={address.id}
                    onClick={() => setSelectedAddress(address)}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedAddress?.id === address.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="font-medium text-gray-900">{address.label}</span>
                          {address.isDefault && (
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                              Utama
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-900 font-medium">{address.recipientName}</p>
                        <p className="text-sm text-gray-600">{address.phone}</p>
                        <p className="text-sm text-gray-600">{address.address}</p>
                        <p className="text-sm text-gray-600">{address.city} {address.postalCode}</p>
                      </div>
                      {selectedAddress?.id === address.id && (
                        <FiCheck className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Method */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-4">
                <FiTruck className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-lg font-semibold">Metode Pengiriman</h2>
              </div>
              
              <div className="space-y-3">
                {couriers.map((courier) => (
                  <div
                    key={courier.id}
                    onClick={() => setSelectedCourier(courier)}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedCourier?.id === courier.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">
                          {courier.name} - {courier.service}
                        </p>
                        <p className="text-sm text-gray-600">Estimasi: {courier.estimation}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">Rp {courier.cost.toLocaleString()}</p>
                        {selectedCourier?.id === courier.id && (
                          <FiCheck className="w-5 h-5 text-blue-600 ml-auto" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-4">
                <FiCreditCard className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-lg font-semibold">Metode Pembayaran</h2>
              </div>
              
              <div className="space-y-3">
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="transfer"
                    checked={paymentMethod === 'transfer'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <div>
                    <p className="font-medium">Transfer Bank</p>
                    <p className="text-sm text-gray-600">BCA, Mandiri, BNI, BRI</p>
                  </div>
                </label>
                
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <div>
                    <p className="font-medium">Bayar di Tempat (COD)</p>
                    <p className="text-sm text-gray-600">Bayar saat barang sampai</p>
                  </div>
                </label>
                
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="ewallet"
                    checked={paymentMethod === 'ewallet'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <div>
                    <p className="font-medium">E-Wallet</p>
                    <p className="text-sm text-gray-600">GoPay, OVO, DANA, ShopeePay</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Customer Notes */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold mb-4">Catatan untuk Seller</h2>
              <textarea
                value={customerNotes}
                onChange={(e) => setCustomerNotes(e.target.value)}
                placeholder="Tambahkan catatan khusus untuk pesanan ini..."
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
              <h2 className="text-lg font-semibold mb-4">Ringkasan Pesanan</h2>
              
              {/* Items */}
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className="w-12 h-12 flex-shrink-0">
                      <ProductImage
                        src={item.image}
                        alt={item.name}
                        category={item.category}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.quantity}x</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      Rp {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">Rp {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Ongkir</span>
                  <span className="font-medium">
                    {shippingCost > 0 ? `Rp ${shippingCost.toLocaleString()}` : 'Pilih kurir'}
                  </span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-semibold text-blue-600">
                      Rp {total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handlePlaceOrder}
                disabled={loading || !selectedAddress || !selectedCourier}
                className="w-full btn btn-primary mt-6"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Memproses...
                  </div>
                ) : (
                  <>
                    <FiShoppingBag className="w-5 h-5 mr-2" />
                    Buat Pesanan
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
