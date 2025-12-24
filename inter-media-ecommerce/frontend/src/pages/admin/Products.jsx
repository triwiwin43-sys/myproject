import { useState } from 'react';
import { 
  FiPackage, 
  FiPlus, 
  FiEdit, 
  FiTrash2, 
  FiEye,
  FiSearch,
  FiFilter
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ProductImage from '../../components/ProductImage';
import toast from 'react-hot-toast';

const AdminProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const [products] = useState([
    // PRINTERS (5 products)
    { id: 1, name: 'HP LaserJet Pro M404n', category: 'printers', price: 2500000, stock: 15, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-20' },
    { id: 2, name: 'Canon Pixma G2010', category: 'printers', price: 1200000, stock: 8, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-18' },
    { id: 3, name: 'Epson EcoTank L3210', category: 'printers', price: 1800000, stock: 12, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-17' },
    { id: 4, name: 'Brother DCP-T520W', category: 'printers', price: 1650000, stock: 6, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-16' },
    { id: 5, name: 'HP DeskJet 2720', category: 'printers', price: 950000, stock: 20, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-15' },
    
    // COMPUTERS (3 products)
    { id: 6, name: 'PC Desktop Intel Core i5', category: 'computers', price: 8500000, stock: 12, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-22' },
    { id: 7, name: 'PC Gaming AMD Ryzen 5', category: 'computers', price: 12500000, stock: 8, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-21' },
    { id: 8, name: 'Mini PC Intel NUC', category: 'computers', price: 4500000, stock: 15, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-19' },
    
    // LAPTOPS (3 products)
    { id: 9, name: 'ASUS VivoBook 14', category: 'laptops', price: 6500000, stock: 5, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-10' },
    { id: 10, name: 'Lenovo ThinkPad E14', category: 'laptops', price: 8900000, stock: 7, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-12' },
    { id: 11, name: 'Acer Aspire 5', category: 'laptops', price: 5800000, stock: 10, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-11' },
    
    // ACCESSORIES (3 products)
    { id: 12, name: 'Logitech MX Master 3', category: 'accessories', price: 1200000, stock: 25, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-20' },
    { id: 13, name: 'Mechanical Keyboard RGB', category: 'accessories', price: 850000, stock: 18, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-19' },
    { id: 14, name: 'Webcam HD 1080p', category: 'accessories', price: 450000, stock: 30, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-18' },
    
    // SERVICES (3 products)
    { id: 15, name: 'Service Laptop Premium', category: 'services', price: 250000, stock: 999, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-15' },
    { id: 16, name: 'Instalasi Software & OS', category: 'services', price: 150000, stock: 999, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-14' },
    { id: 17, name: 'Maintenance PC Berkala', category: 'services', price: 200000, stock: 999, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-13' },
    
    // NETWORKING (3 products)
    { id: 18, name: 'TP-Link Archer C6 Router', category: 'networking', price: 450000, stock: 20, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-20' },
    { id: 19, name: 'Ubiquiti UniFi Access Point', category: 'networking', price: 1200000, stock: 12, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-19' },
    { id: 20, name: 'Netgear 24-Port Switch', category: 'networking', price: 2800000, stock: 8, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-18' },
    
    // MOBILE (3 products)
    { id: 21, name: 'Samsung Galaxy Tab A8', category: 'mobile', price: 3200000, stock: 15, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-17' },
    { id: 22, name: 'iPad 9th Generation', category: 'mobile', price: 5200000, stock: 8, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-16' },
    { id: 23, name: 'Power Bank Xiaomi 20000mAh', category: 'mobile', price: 280000, stock: 35, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-15' },
    
    // CAMERA (3 products)
    { id: 24, name: 'Canon EOS M50 Mark II', category: 'camera', price: 8500000, stock: 6, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-14' },
    { id: 25, name: 'GoPro Hero 11 Black', category: 'camera', price: 6800000, stock: 10, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-13' },
    { id: 26, name: 'Manfrotto Tripod Compact', category: 'camera', price: 850000, stock: 18, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-12' },
    
    // OFFICE (3 products)
    { id: 27, name: 'Paket ATK Lengkap Kantor', category: 'office', price: 350000, stock: 25, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-11' },
    { id: 28, name: 'Kursi Kantor Ergonomis', category: 'office', price: 1200000, stock: 12, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-10' },
    { id: 29, name: 'Microsoft Office 2021 Home', category: 'office', price: 1800000, stock: 50, status: 'active', seller: 'Inter Medi-A Store', image: '/api/placeholder/300/300', createdAt: '2024-12-09' }
  ]);

  const handleDelete = (productId) => {
    if (confirm('Hapus produk ini?')) {
      toast.success('Produk berhasil dihapus');
    }
  };

  const handleStatusChange = (productId, newStatus) => {
    toast.success(`Status produk diubah ke ${newStatus}`);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusBadge = (status) => {
    const badges = {
      active: { color: 'green', text: 'Aktif' },
      inactive: { color: 'red', text: 'Nonaktif' },
      draft: { color: 'yellow', text: 'Draft' }
    };
    
    const badge = badges[status];
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${badge.color}-100 text-${badge.color}-800`}>
        {badge.text}
      </span>
    );
  };

  const stats = {
    total: products.length,
    active: products.filter(p => p.status === 'active').length,
    lowStock: products.filter(p => p.stock < 10).length,
    outOfStock: products.filter(p => p.stock === 0).length
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
            <p className="text-gray-600">Kelola semua produk di platform</p>
          </div>
          <Link to="/admin/products/add" className="btn btn-primary">
            <FiPlus className="w-4 h-4 mr-2" />
            Tambah Produk
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <FiPackage className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Total Produk</p>
                <p className="text-xl font-bold">{stats.total}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              </div>
              <div>
                <p className="text-sm text-gray-600">Aktif</p>
                <p className="text-xl font-bold">{stats.active}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
              </div>
              <div>
                <p className="text-sm text-gray-600">Stok Rendah</p>
                <p className="text-xl font-bold">{stats.lowStock}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              </div>
              <div>
                <p className="text-sm text-gray-600">Habis</p>
                <p className="text-xl font-bold">{stats.outOfStock}</p>
              </div>
            </div>
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
                  placeholder="Cari produk..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="input"
              >
                <option value="all">Semua Kategori</option>
                <option value="computers">Komputer</option>
                <option value="laptops">Laptop</option>
                <option value="printers">Printer</option>
                <option value="accessories">Aksesoris</option>
                <option value="services">Layanan</option>
                <option value="networking">Networking</option>
                <option value="mobile">Mobile & Tablet</option>
                <option value="camera">Kamera</option>
                <option value="office">Perlengkapan Kantor</option>
              </select>
              
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="input"
              >
                <option value="all">Semua Status</option>
                <option value="active">Aktif</option>
                <option value="inactive">Nonaktif</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Produk
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kategori
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Harga
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stok
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Seller
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <ProductImage
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-lg mr-4"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{product.name}</div>
                          <div className="text-sm text-gray-500">ID: {product.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="capitalize text-sm text-gray-900">{product.category}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        Rp {product.price.toLocaleString('id-ID')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm font-medium ${product.stock < 10 ? 'text-red-600' : 'text-gray-900'}`}>
                        {product.stock}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(product.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.seller}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <Link
                          to={`/products/${product.id}`}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <FiEye className="w-4 h-4" />
                        </Link>
                        <Link
                          to={`/admin/products/edit/${product.id}`}
                          className="text-green-600 hover:text-green-900"
                        >
                          <FiEdit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
