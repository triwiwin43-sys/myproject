// Order Management - Full CRUD
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { 
  FiEye, 
  FiEdit, 
  FiTrash2, 
  FiSearch,
  FiFilter,
  FiDownload,
  FiTruck,
  FiCheck,
  FiX,
  FiClock,
  FiPackage
} from 'react-icons/fi';
import toast from 'react-hot-toast';

const OrderManagement = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    status: 'all',
    paymentStatus: 'all',
    dateRange: 'all'
  });

  // Mock data
  const mockOrders = [
    {
      id: 'ORD-001',
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      items: [
        { name: 'HP LaserJet Pro M404n', quantity: 1, price: 2500000 }
      ],
      totalAmount: 2525000,
      shippingCost: 25000,
      status: 'processing',
      paymentStatus: 'paid',
      shippingAddress: 'Jl. Sudirman No. 123, Jakarta',
      trackingNumber: 'JNE123456789',
      createdAt: '2024-12-23T10:30:00Z',
      updatedAt: '2024-12-23T14:20:00Z'
    },
    {
      id: 'ORD-002',
      customerName: 'Jane Smith',
      customerEmail: 'jane@example.com',
      items: [
        { name: 'ASUS VivoBook 14', quantity: 1, price: 6500000 },
        { name: 'Logitech MX Master 3', quantity: 1, price: 1200000 }
      ],
      totalAmount: 7750000,
      shippingCost: 50000,
      status: 'shipped',
      paymentStatus: 'paid',
      shippingAddress: 'Jl. Thamrin No. 456, Jakarta',
      trackingNumber: 'JT987654321',
      createdAt: '2024-12-22T15:45:00Z',
      updatedAt: '2024-12-23T09:15:00Z'
    },
    {
      id: 'ORD-003',
      customerName: 'Bob Wilson',
      customerEmail: 'bob@example.com',
      items: [
        { name: 'Canon Pixma G2010', quantity: 2, price: 1200000 }
      ],
      totalAmount: 2425000,
      shippingCost: 25000,
      status: 'pending',
      paymentStatus: 'pending',
      shippingAddress: 'Jl. Gatot Subroto No. 789, Jakarta',
      trackingNumber: null,
      createdAt: '2024-12-23T16:20:00Z',
      updatedAt: '2024-12-23T16:20:00Z'
    }
  ];

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    setLoading(true);
    setTimeout(() => {
      setOrders(mockOrders);
      setLoading(false);
    }, 1000);
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-blue-100 text-blue-800',
      processing: 'bg-purple-100 text-purple-800',
      shipped: 'bg-indigo-100 text-indigo-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getPaymentStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      paid: 'bg-green-100 text-green-800',
      failed: 'bg-red-100 text-red-800',
      refunded: 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    try {
      setOrders(orders.map(order => 
        order.id === orderId 
          ? { ...order, status: newStatus, updatedAt: new Date().toISOString() }
          : order
      ));
      toast.success('Status pesanan berhasil diupdate');
    } catch (error) {
      toast.error('Gagal mengupdate status pesanan');
    }
  };

  const handleUpdatePaymentStatus = async (orderId, newStatus) => {
    try {
      setOrders(orders.map(order => 
        order.id === orderId 
          ? { ...order, paymentStatus: newStatus, updatedAt: new Date().toISOString() }
          : order
      ));
      toast.success('Status pembayaran berhasil diupdate');
    } catch (error) {
      toast.error('Gagal mengupdate status pembayaran');
    }
  };

  const handleDeleteOrder = async (orderId) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus pesanan ini?')) {
      try {
        setOrders(orders.filter(order => order.id !== orderId));
        toast.success('Pesanan berhasil dihapus');
      } catch (error) {
        toast.error('Gagal menghapus pesanan');
      }
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(filters.search.toLowerCase()) ||
      order.customerName.toLowerCase().includes(filters.search.toLowerCase()) ||
      order.customerEmail.toLowerCase().includes(filters.search.toLowerCase());
    
    const matchesStatus = filters.status === 'all' || order.status === filters.status;
    const matchesPaymentStatus = filters.paymentStatus === 'all' || order.paymentStatus === filters.paymentStatus;
    
    return matchesSearch && matchesStatus && matchesPaymentStatus;
  });

  const OrderList = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manajemen Pesanan</h1>
          <p className="text-gray-600">Kelola semua pesanan pelanggan</p>
        </div>
        <div className="flex space-x-2">
          <button className="btn btn-outline">
            <FiDownload className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari pesanan, customer..."
                value={filters.search}
                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                className="input pl-10 w-full sm:w-64"
              />
            </div>

            {/* Status Filter */}
            <select
              value={filters.status}
              onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
              className="input w-full sm:w-auto"
            >
              <option value="all">Semua Status</option>
              <option value="pending">Menunggu</option>
              <option value="confirmed">Dikonfirmasi</option>
              <option value="processing">Diproses</option>
              <option value="shipped">Dikirim</option>
              <option value="delivered">Sampai</option>
              <option value="cancelled">Dibatalkan</option>
            </select>

            {/* Payment Status Filter */}
            <select
              value={filters.paymentStatus}
              onChange={(e) => setFilters(prev => ({ ...prev, paymentStatus: e.target.value }))}
              className="input w-full sm:w-auto"
            >
              <option value="all">Semua Pembayaran</option>
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
              <option value="failed">Failed</option>
              <option value="refunded">Refunded</option>
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
                  Pembayaran
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="8" className="px-6 py-12 text-center">
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      <span className="ml-2 text-gray-600">Memuat pesanan...</span>
                    </div>
                  </td>
                </tr>
              ) : filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan="8" className="px-6 py-12 text-center text-gray-500">
                    Tidak ada pesanan ditemukan
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {order.id}
                      </div>
                      {order.trackingNumber && (
                        <div className="text-xs text-gray-500">
                          Tracking: {order.trackingNumber}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {order.customerName}
                      </div>
                      <div className="text-sm text-gray-500">
                        {order.customerEmail}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {order.items.length} item(s)
                      </div>
                      <div className="text-xs text-gray-500">
                        {order.items[0].name}
                        {order.items.length > 1 && ` +${order.items.length - 1} lainnya`}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Rp {order.totalAmount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={order.status}
                        onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                        className={`text-xs font-semibold rounded-full px-2 py-1 border-0 ${getStatusColor(order.status)}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="processing">Diproses</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={order.paymentStatus}
                        onChange={(e) => handleUpdatePaymentStatus(order.id, e.target.value)}
                        className={`text-xs font-semibold rounded-full px-2 py-1 border-0 ${getPaymentStatusColor(order.paymentStatus)}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="paid">Paid</option>
                        <option value="failed">Failed</option>
                        <option value="refunded">Refunded</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {new Date(order.createdAt).toLocaleDateString('id-ID')}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => navigate(`/admin/orders/view/${order.id}`)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Lihat Detail"
                        >
                          <FiEye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => navigate(`/admin/orders/edit/${order.id}`)}
                          className="text-green-600 hover:text-green-900"
                          title="Edit"
                        >
                          <FiEdit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteOrder(order.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Hapus"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center">
            <FiClock className="w-8 h-8 text-yellow-600" />
            <div className="ml-4">
              <div className="text-2xl font-bold text-gray-900">
                {orders.filter(o => o.status === 'pending').length}
              </div>
              <div className="text-sm text-gray-600">Pending Orders</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center">
            <FiPackage className="w-8 h-8 text-blue-600" />
            <div className="ml-4">
              <div className="text-2xl font-bold text-gray-900">
                {orders.filter(o => o.status === 'processing').length}
              </div>
              <div className="text-sm text-gray-600">Processing</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center">
            <FiTruck className="w-8 h-8 text-indigo-600" />
            <div className="ml-4">
              <div className="text-2xl font-bold text-gray-900">
                {orders.filter(o => o.status === 'shipped').length}
              </div>
              <div className="text-sm text-gray-600">Shipped</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center">
            <FiCheck className="w-8 h-8 text-green-600" />
            <div className="ml-4">
              <div className="text-2xl font-bold text-gray-900">
                {orders.filter(o => o.status === 'delivered').length}
              </div>
              <div className="text-sm text-gray-600">Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Routes>
      <Route index element={<OrderList />} />
    </Routes>
  );
};

export default OrderManagement;
