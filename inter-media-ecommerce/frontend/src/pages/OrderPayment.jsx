import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiUpload, FiCheck, FiCreditCard, FiClock } from 'react-icons/fi';
import useOrderStore from '../context/orderStore';
import toast from 'react-hot-toast';

const OrderPayment = () => {
  const { orderNumber } = useParams();
  const navigate = useNavigate();
  const { orders, confirmPayment } = useOrderStore();
  
  const [order, setOrder] = useState(null);
  const [paymentProof, setPaymentProof] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const foundOrder = orders.find(o => o.orderNumber === orderNumber);
    if (foundOrder) {
      setOrder(foundOrder);
    } else {
      toast.error('Pesanan tidak ditemukan');
      navigate('/orders');
    }
  }, [orderNumber, orders, navigate]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Ukuran file maksimal 5MB');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setPaymentProof({
          file: e.target.result,
          name: file.name,
          size: file.size,
          type: file.type
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirmPayment = async () => {
    if (!paymentProof) {
      toast.error('Mohon upload bukti pembayaran');
      return;
    }

    setUploading(true);
    
    try {
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      confirmPayment(order.id, paymentProof);
      toast.success('Bukti pembayaran berhasil dikirim! Menunggu verifikasi admin.');
      navigate('/orders');
      
    } catch (error) {
      toast.error('Gagal mengirim bukti pembayaran');
    } finally {
      setUploading(false);
    }
  };

  if (!order) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Memuat pesanan...</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Konfirmasi Pembayaran</h1>
          <p className="text-gray-600">Pesanan #{order.orderNumber}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Instructions */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center mb-4">
              <FiCreditCard className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold">Instruksi Pembayaran</h2>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">
                  {order.payment.method}
                </h3>
                <div className="text-sm text-blue-800 space-y-1">
                  <p><strong>Nomor Rekening:</strong> 1234567890</p>
                  <p><strong>Atas Nama:</strong> Inter Medi-A Store</p>
                  <p><strong>Bank:</strong> BCA</p>
                </div>
              </div>
              
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="font-medium text-yellow-900 mb-2">Total Pembayaran</h3>
                <p className="text-2xl font-bold text-yellow-900">
                  Rp {order.total.toLocaleString()}
                </p>
              </div>
              
              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>Langkah-langkah:</strong></p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>Transfer sesuai nominal yang tertera</li>
                  <li>Simpan bukti transfer</li>
                  <li>Upload bukti pembayaran di form sebelah</li>
                  <li>Tunggu verifikasi dari admin (1x24 jam)</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Upload Payment Proof */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center mb-4">
              <FiUpload className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold">Upload Bukti Pembayaran</h2>
            </div>
            
            <div className="space-y-4">
              {!paymentProof ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <FiUpload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">
                    Pilih file bukti pembayaran
                  </p>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="payment-proof"
                  />
                  <label
                    htmlFor="payment-proof"
                    className="btn btn-outline cursor-pointer"
                  >
                    Pilih File
                  </label>
                  <p className="text-xs text-gray-500 mt-2">
                    Format: JPG, PNG, PDF (Max 5MB)
                  </p>
                </div>
              ) : (
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      {paymentProof.name}
                    </span>
                    <button
                      onClick={() => setPaymentProof(null)}
                      className="text-red-600 hover:text-red-700 text-sm"
                    >
                      Hapus
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    {(paymentProof.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                  {paymentProof.type.startsWith('image/') && (
                    <img
                      src={paymentProof.file}
                      alt="Preview"
                      className="mt-2 max-w-full h-32 object-cover rounded"
                    />
                  )}
                </div>
              )}
              
              <button
                onClick={handleConfirmPayment}
                disabled={!paymentProof || uploading}
                className="w-full btn btn-primary"
              >
                {uploading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Mengirim...
                  </div>
                ) : (
                  <>
                    <FiCheck className="w-5 h-5 mr-2" />
                    Konfirmasi Pembayaran
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4">Ringkasan Pesanan</h3>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.productId} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-600">{item.quantity}x</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">Rp {item.price.toLocaleString()}</p>
                  </div>
                </div>
                <p className="font-medium">Rp {item.subtotal.toLocaleString()}</p>
              </div>
            ))}
            
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>Rp {order.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Ongkir</span>
                <span>Rp {order.shippingCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t pt-2">
                <span>Total</span>
                <span>Rp {order.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
