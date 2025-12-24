import { useState } from 'react';
import { 
  FiPackage, 
  FiSearch, 
  FiFilter,
  FiEye,
  FiEdit,
  FiTruck,
  FiCheck,
  FiX,
  FiClock,
  FiDollarSign
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AdminOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  const [orders] = useState([
    {
      id: 'IM17351234560001',
      customer: 'PT. Maju Jaya',
      customerEmail: 'admin@majujaya.com',
      items: [
        { name: 'HP LaserJet Pro M404n', quantity: 1, price: 2500000 },
        { name: 'Toner HP 58A', quantity: 2, price: 450000 }
      ],
      total: 3400000,
      status: 'pending',
      paymentStatus: 'waiting',
      shippingAddress: 'Jl. Sudirman No. 123, Jakarta Pusat',
      orderDate: '2024-12-24',
      seller: 'Inter Medi-A Store'
    },
    {
      id: 'IM17351234560002',
      customer: 'CV. Berkah Tech',
      customerEmail: 'order@berkahtech.com',
      items: [
        { name: 'Canon Pixma G2010', quantity: 1, price: 1800000 }
      ],
      total: 1800000,
      status: 'processing',
      paymentStatus: 'paid',
      shippingAddress: 'Jl. Gatot Subroto No. 456, Jakarta Selatan',
      orderDate: '2024-12-23',
      seller: 'Inter Medi-A Store'
    },
    {
      id: 'IM17351234560003',
      customer: 'Toko Komputer Sejahtera',
      customerEmail: 'info@sejahtera.com',
      items: [
        { name: 'Service Laptop Lenovo', quantity: 1, price: 350000 },
        { name: 'RAM DDR4 8GB', quantity: 1, price: 500000 }
      ],
      total: 850000,
      status: 'completed',
      paymentStatus: 'paid',
      shippingAddress: 'Jl. Raya Bogor No. 789, Depok',
      orderDate: '2024-12-22',
      seller: 'Inter Medi-A Store'
    }
  ]);

  const getStatusBadge = (status) => {
    const badges = {
      pending: { color: 'yellow', icon: FiClock, text: 'Pending' },
      processing: { color: 'blue', icon: FiPackage, text: 'Processing' },
      shipped: { color: 'purple', icon: FiTruck, text: 'Shipped' },
      completed: { color: 'green', icon: FiCheck, text: 'Completed' },
      cancelled: { color: 'red', icon: FiX, text: 'Cancelled' }
    };
    
    const badge = badges[status];
    const IconComponent = badge.icon;
    
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-${badge.color}-100 text-${badge.color}-800`}>
        <IconComponent className="w-3 h-3 mr-1" />
        {badge.text}
      </span>
    );
  };

  const getPaymentBadge = (status) => {
    const badges = {
      waiting: { color: 'yellow', text: 'Waiting Payment' },
      paid: { color: 'green', text: 'Paid' },
      failed: { color: 'red', text: 'Failed' }
    };
    
    const badge = badges[status];
    
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-${badge.color}-100 text-${badge.color}-800`}>
        {badge.text}
      </span>
    );
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    completed: orders.filter(o => o.status === 'completed').length,
    revenue: orders.reduce((sum, order) => sum + order.total, 0)
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
          <p className="text-gray-600">Monitor dan kelola semua pesanan</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <FiPackage className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Total Orders</p>
                <p className="text-xl font-bold">{stats.total}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <FiClock className="w-8 h-8 text-yellow-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-xl font-bold">{stats.pending}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <FiTruck className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Processing</p>
                <p className="text-xl font-bold">{stats.processing}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <FiCheck className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-xl font-bold">{stats.completed}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <FiDollarSign className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Revenue</p>
                <p className="text-lg font-bold">Rp {(stats.revenue / 1000000).toFixed(1)}M</p>
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
                  placeholder="Cari order ID atau nama customer..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="input"
              >
                <option value="all">Semua Status</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
              
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="input"
              >
                <option value="all">Semua Tanggal</option>
                <option value="today">Hari Ini</option>
                <option value="week">Minggu Ini</option>
                <option value="month">Bulan Ini</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Items
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{order.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                        <div className="text-sm text-gray-500">{order.customerEmail}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {order.items.map((item, index) => (
                          <div key={index}>
                            {item.name} x{item.quantity}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        Rp {order.total.toLocaleString('id-ID')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(order.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getPaymentBadge(order.paymentStatus)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.orderDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <Link
                          to={`/orders/${order.id}`}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <FiEye className="w-4 h-4" />
                        </Link>
                        <button className="text-green-600 hover:text-green-900">
                          <FiEdit className="w-4 h-4" />
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

export default AdminOrders;
