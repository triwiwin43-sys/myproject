// Seller Services Management
import React, { useState, useEffect } from 'react';
import SellerLayout from './SellerLayout';
import { 
  FiTool, 
  FiPlus, 
  FiSearch, 
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiEdit,
  FiEye
} from 'react-icons/fi';

const SellerServices = () => {
  const [services] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      serviceType: 'Maintenance Printer',
      device: 'HP LaserJet Pro M404n',
      issue: 'Printer tidak bisa mencetak, lampu error menyala',
      status: 'pending',
      date: '2024-12-23',
      technician: null,
      estimatedCost: 150000
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      serviceType: 'Repair Laptop',
      device: 'Dell Inspiron 15',
      issue: 'Laptop mati total, tidak bisa dinyalakan',
      status: 'in_progress',
      date: '2024-12-22',
      technician: 'Ahmad Teknisi',
      estimatedCost: 500000
    },
    {
      id: 3,
      customerName: 'Bob Wilson',
      serviceType: 'Installation Software',
      device: 'PC Desktop',
      issue: 'Install ulang Windows dan software office',
      status: 'completed',
      date: '2024-12-21',
      technician: 'Budi Teknisi',
      estimatedCost: 200000
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <FiClock className="w-4 h-4" />;
      case 'in_progress': return <FiTool className="w-4 h-4" />;
      case 'completed': return <FiCheckCircle className="w-4 h-4" />;
      case 'cancelled': return <FiXCircle className="w-4 h-4" />;
      default: return <FiClock className="w-4 h-4" />;
    }
  };

  return (
    <SellerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Layanan Service</h1>
            <p className="text-gray-600">Kelola permintaan service dan maintenance</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
            <FiPlus className="w-4 h-4 mr-2" />
            Tambah Service
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <FiClock className="w-8 h-8 text-yellow-600" />
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {services.filter(s => s.status === 'pending').length}
                </div>
                <div className="text-sm text-gray-600">Menunggu</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <FiTool className="w-8 h-8 text-blue-600" />
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {services.filter(s => s.status === 'in_progress').length}
                </div>
                <div className="text-sm text-gray-600">Dikerjakan</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <FiCheckCircle className="w-8 h-8 text-green-600" />
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {services.filter(s => s.status === 'completed').length}
                </div>
                <div className="text-sm text-gray-600">Selesai</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <FiDollarSign className="w-8 h-8 text-purple-600" />
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  Rp {services.reduce((sum, s) => sum + s.estimatedCost, 0).toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-gray-600">Total Estimasi</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Table */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Daftar Service</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pelanggan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Jenis Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Perangkat
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Teknisi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estimasi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {services.map((service) => (
                  <tr key={service.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FiUser className="w-5 h-5 text-gray-400 mr-2" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{service.customerName}</div>
                          <div className="text-sm text-gray-500">{new Date(service.date).toLocaleDateString('id-ID')}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {service.serviceType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {service.device}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {service.technician || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Rp {service.estimatedCost.toLocaleString('id-ID')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                        {getStatusIcon(service.status)}
                        <span className="ml-1 capitalize">{service.status.replace('_', ' ')}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <FiEye className="w-4 h-4" />
                        </button>
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
    </SellerLayout>
  );
};

export default SellerServices;
