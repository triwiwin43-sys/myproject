// Seller Dashboard Content (without layout)
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiPackage, 
  FiShoppingCart, 
  FiDollarSign, 
  FiUsers,
  FiPlus,
  FiEdit,
  FiTrash2,
  FiEye,
  FiTrendingUp,
  FiSettings,
  FiCreditCard,
  FiTool
} from 'react-icons/fi';
import useAuthStore from '../../context/authStore';

const SellerDashboardContent = () => {
  const { user } = useAuthStore();
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    totalCustomers: 0,
    pendingOrders: 0,
    lowStock: 0
  });
  const [recentOrders, setRecentOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchSellerData();
  }, []);

  const fetchSellerData = async () => {
    setStats({
      totalProducts: 25,
      totalOrders: 142,
      totalRevenue: 15750000,
      totalCustomers: 89,
      pendingOrders: 8,
      lowStock: 3
    });
    
    setRecentOrders([
      { id: 1, customer: 'PT. Maju Jaya', total: 2500000, status: 'pending', date: '2024-12-24', items: 'HP LaserJet Pro + Toner' },
      { id: 2, customer: 'CV. Berkah Tech', total: 1800000, status: 'processing', date: '2024-12-23', items: 'Canon Pixma G2010' },
      { id: 3, customer: 'Toko Komputer Sejahtera', total: 850000, status: 'completed', date: '2024-12-22', items: 'Service Laptop + Spare Part' }
    ]);
    
    setProducts([
      { id: 1, name: 'HP LaserJet Pro M404n', price: 2500000, stock: 5, status: 'active', category: 'Printer' },
      { id: 2, name: 'Canon Pixma G2010', price: 1200000, stock: 2, status: 'active', category: 'Printer' },
      { id: 3, name: 'Service Laptop', price: 150000, stock: 999, status: 'active', category: 'Service' }
    ]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Seller</h1>
          <p className="text-gray-600">Selamat datang kembali, {user?.name || 'Seller'}</p>
        </div>
        <div className="flex space-x-3">
          <Link to="/seller/settings" className="btn btn-outline btn-sm">
            <FiSettings className="w-4 h-4 mr-2" />
            Pengaturan
          </Link>
          <Link to="/seller/products/add" className="btn btn-primary btn-sm">
            <FiPlus className="w-4 h-4 mr-2" />
            Tambah Produk
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Produk</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
              <p className="text-xs text-green-600 mt-1">
                <FiTrendingUp className="inline w-3 h-3 mr-1" />
                +2 bulan ini
              </p>
            </div>
            <FiPackage className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Pesanan</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
              <p className="text-xs text-yellow-600 mt-1">{stats.pendingOrders} menunggu</p>
            </div>
            <FiShoppingCart className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Pendapatan</p>
              <p className="text-2xl font-bold text-gray-900">Rp {stats.totalRevenue.toLocaleString()}</p>
              <p className="text-xs text-green-600 mt-1">
                <FiTrendingUp className="inline w-3 h-3 mr-1" />
                +12% bulan ini
              </p>
            </div>
            <FiDollarSign className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pelanggan</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalCustomers}</p>
              <p className="text-xs text-red-600 mt-1">{stats.lowStock} stok menipis</p>
            </div>
            <FiUsers className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Pesanan Terbaru</h2>
              <Link to="/seller/orders" className="text-blue-600 hover:text-blue-700 text-sm">Lihat Semua</Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentOrders.map(order => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{order.customer}</p>
                    <p className="text-sm text-gray-600">{order.items}</p>
                    <p className="text-xs text-gray-500">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">Rp {order.total.toLocaleString()}</p>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      order.status === 'completed' ? 'bg-green-100 text-green-800' : 
                      order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status === 'completed' ? 'Selesai' : 
                       order.status === 'processing' ? 'Diproses' : 'Menunggu'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Management */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Produk & Layanan</h2>
              <Link to="/seller/products" className="text-blue-600 hover:text-blue-700 text-sm">Kelola Produk</Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {products.map(product => (
                <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.category}</p>
                    <p className="text-xs text-gray-500">
                      Stok: {product.stock === 999 ? 'Unlimited' : product.stock}
                      {product.stock < 5 && product.stock !== 999 && (
                        <span className="text-red-600 ml-2">⚠️ Stok Menipis</span>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <p className="font-medium text-gray-900">Rp {product.price.toLocaleString()}</p>
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">
                        <FiEye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors">
                        <FiEdit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors">
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold mb-4">Aksi Cepat</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/seller/products/add" className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <FiPlus className="w-8 h-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-blue-900">Tambah Produk</span>
          </Link>
          <Link to="/seller/payment-methods" className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <FiCreditCard className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-green-900">Metode Pembayaran</span>
          </Link>
          <Link to="/seller/services" className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <FiTool className="w-8 h-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-purple-900">Layanan Service</span>
          </Link>
          <Link to="/seller/settings" className="flex flex-col items-center p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
            <FiSettings className="w-8 h-8 text-yellow-600 mb-2" />
            <span className="text-sm font-medium text-yellow-900">Pengaturan Toko</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboardContent;
