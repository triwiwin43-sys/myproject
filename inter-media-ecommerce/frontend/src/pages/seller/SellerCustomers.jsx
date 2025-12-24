// Seller Customers Management
import React, { useState, useEffect } from 'react';
import SellerLayout from './SellerLayout';
import { 
  FiUsers, 
  FiSearch, 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiShoppingCart,
  FiDollarSign,
  FiEye
} from 'react-icons/fi';

const SellerCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const mockCustomers = [
    {
      id: 1,
      name: 'PT. Maju Jaya',
      email: 'purchasing@majujaya.com',
      phone: '+6281234567890',
      address: 'Jl. Sudirman No. 123, Jakarta',
      totalOrders: 15,
      totalSpent: 25000000,
      lastOrder: '2024-12-23',
      status: 'active'
    },
    {
      id: 2,
      name: 'CV. Berkah Tech',
      email: 'admin@berkahtech.com',
      phone: '+6281234567891',
      address: 'Jl. Gatot Subroto No. 456, Jakarta',
      totalOrders: 8,
      totalSpent: 12500000,
      lastOrder: '2024-12-20',
      status: 'active'
    },
    {
      id: 3,
      name: 'Toko Komputer Sejahtera',
      email: 'owner@sejahtera.com',
      phone: '+6281234567892',
      address: 'Jl. Thamrin No. 789, Jakarta',
      totalOrders: 22,
      totalSpent: 35000000,
      lastOrder: '2024-12-24',
      status: 'active'
    }
  ];

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    setLoading(true);
    setTimeout(() => {
      setCustomers(mockCustomers);
      setLoading(false);
    }, 1000);
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SellerLayout>
      <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pelanggan</h1>
          <p className="text-gray-600">Kelola data pelanggan Anda</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Cari pelanggan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10 w-full sm:w-64"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center">
            <FiUsers className="w-8 h-8 text-blue-600" />
            <div className="ml-4">
              <div className="text-2xl font-bold text-gray-900">{customers.length}</div>
              <div className="text-sm text-gray-600">Total Pelanggan</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center">
            <FiShoppingCart className="w-8 h-8 text-green-600" />
            <div className="ml-4">
              <div className="text-2xl font-bold text-gray-900">
                {customers.reduce((total, c) => total + c.totalOrders, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Pesanan</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center">
            <FiDollarSign className="w-8 h-8 text-purple-600" />
            <div className="ml-4">
              <div className="text-2xl font-bold text-gray-900">
                Rp {customers.reduce((total, c) => total + c.totalSpent, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Pendapatan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pelanggan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kontak
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pesanan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Belanja
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pesanan Terakhir
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center">
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      <span className="ml-2 text-gray-600">Memuat pelanggan...</span>
                    </div>
                  </td>
                </tr>
              ) : filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                    Tidak ada pelanggan ditemukan
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {customer.name}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center mt-1">
                          <FiMapPin className="w-4 h-4 mr-1" />
                          {customer.address}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 flex items-center">
                        <FiMail className="w-4 h-4 mr-2 text-gray-400" />
                        {customer.email}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <FiPhone className="w-4 h-4 mr-2 text-gray-400" />
                        {customer.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {customer.totalOrders} pesanan
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Rp {customer.totalSpent.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {new Date(customer.lastOrder).toLocaleDateString('id-ID')}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <button
                        className="text-blue-600 hover:text-blue-900"
                        title="Lihat Detail"
                      >
                        <FiEye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </SellerLayout>
  );
};

export default SellerCustomers;
