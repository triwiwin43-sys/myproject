// Service Management - Full CRUD
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { 
  FiPlus, 
  FiEdit, 
  FiTrash2, 
  FiEye, 
  FiSearch,
  FiTool,
  FiClock,
  FiCheckCircle,
  FiUser,
  FiCalendar,
  FiDollarSign
} from 'react-icons/fi';
import toast from 'react-hot-toast';

const ServiceManagement = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    status: 'all',
    type: 'all',
    technician: 'all'
  });

  // Mock data
  const mockServices = [
    {
      id: 'SRV-001',
      customerName: 'John Doe',
      customerPhone: '+6281234567890',
      productName: 'HP LaserJet Pro M404n',
      serviceType: 'repair',
      description: 'Printer tidak bisa mencetak, lampu error menyala',
      status: 'in_progress',
      technician: 'Tech Support A',
      technicianId: 1,
      scheduledDate: '2024-12-24',
      completedDate: null,
      estimatedCost: 250000,
      actualCost: null,
      notes: 'Sedang menunggu spare part toner cartridge',
      createdAt: '2024-12-23T10:30:00Z',
      updatedAt: '2024-12-23T14:20:00Z'
    },
    {
      id: 'SRV-002',
      customerName: 'Jane Smith',
      customerPhone: '+6281234567891',
      productName: 'ASUS VivoBook 14',
      serviceType: 'maintenance',
      description: 'Pembersihan rutin dan update software',
      status: 'completed',
      technician: 'Tech Support B',
      technicianId: 2,
      scheduledDate: '2024-12-22',
      completedDate: '2024-12-22',
      estimatedCost: 150000,
      actualCost: 150000,
      notes: 'Service selesai, laptop berjalan normal',
      createdAt: '2024-12-21T15:45:00Z',
      updatedAt: '2024-12-22T16:30:00Z'
    },
    {
      id: 'SRV-003',
      customerName: 'Bob Wilson',
      customerPhone: '+6281234567892',
      productName: 'Canon Pixma G2010',
      serviceType: 'installation',
      description: 'Instalasi printer baru dan setup network',
      status: 'pending',
      technician: null,
      technicianId: null,
      scheduledDate: '2024-12-25',
      completedDate: null,
      estimatedCost: 100000,
      actualCost: null,
      notes: 'Menunggu jadwal teknisi tersedia',
      createdAt: '2024-12-23T16:20:00Z',
      updatedAt: '2024-12-23T16:20:00Z'
    }
  ];

  const technicians = [
    { id: 1, name: 'Tech Support A' },
    { id: 2, name: 'Tech Support B' },
    { id: 3, name: 'Tech Support C' }
  ];

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    setLoading(true);
    setTimeout(() => {
      setServices(mockServices);
      setLoading(false);
    }, 1000);
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      assigned: 'bg-blue-100 text-blue-800',
      in_progress: 'bg-purple-100 text-purple-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getServiceTypeColor = (type) => {
    const colors = {
      repair: 'bg-red-100 text-red-800',
      maintenance: 'bg-blue-100 text-blue-800',
      installation: 'bg-green-100 text-green-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const handleUpdateServiceStatus = async (serviceId, newStatus) => {
    try {
      setServices(services.map(service => 
        service.id === serviceId 
          ? { 
              ...service, 
              status: newStatus,
              completedDate: newStatus === 'completed' ? new Date().toISOString().split('T')[0] : service.completedDate,
              updatedAt: new Date().toISOString()
            }
          : service
      ));
      toast.success('Status service berhasil diupdate');
    } catch (error) {
      toast.error('Gagal mengupdate status service');
    }
  };

  const handleAssignTechnician = async (serviceId, technicianId) => {
    try {
      const technician = technicians.find(t => t.id === parseInt(technicianId));
      setServices(services.map(service => 
        service.id === serviceId 
          ? { 
              ...service, 
              technicianId: parseInt(technicianId),
              technician: technician?.name || null,
              status: technicianId ? 'assigned' : 'pending',
              updatedAt: new Date().toISOString()
            }
          : service
      ));
      toast.success('Teknisi berhasil di-assign');
    } catch (error) {
      toast.error('Gagal assign teknisi');
    }
  };

  const handleDeleteService = async (serviceId) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus service request ini?')) {
      try {
        setServices(services.filter(service => service.id !== serviceId));
        toast.success('Service request berhasil dihapus');
      } catch (error) {
        toast.error('Gagal menghapus service request');
      }
    }
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = 
      service.id.toLowerCase().includes(filters.search.toLowerCase()) ||
      service.customerName.toLowerCase().includes(filters.search.toLowerCase()) ||
      service.productName.toLowerCase().includes(filters.search.toLowerCase());
    
    const matchesStatus = filters.status === 'all' || service.status === filters.status;
    const matchesType = filters.type === 'all' || service.serviceType === filters.type;
    const matchesTechnician = filters.technician === 'all' || service.technicianId === parseInt(filters.technician);
    
    return matchesSearch && matchesStatus && matchesType && matchesTechnician;
  });

  const ServiceList = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manajemen Layanan</h1>
          <p className="text-gray-600">Kelola semua service request dan maintenance</p>
        </div>
        <button
          onClick={() => navigate('/admin/services/create')}
          className="btn btn-primary"
        >
          <FiPlus className="w-4 h-4 mr-2" />
          Tambah Service
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center">
            <FiClock className="w-8 h-8 text-yellow-600" />
            <div className="ml-4">
              <div className="text-2xl font-bold text-gray-900">
                {services.filter(s => s.status === 'pending').length}
              </div>
              <div className="text-sm text-gray-600">Pending</div>
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
              <div className="text-sm text-gray-600">In Progress</div>
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
              <div className="text-sm text-gray-600">Completed</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center">
            <FiDollarSign className="w-8 h-8 text-purple-600" />
            <div className="ml-4">
              <div className="text-2xl font-bold text-gray-900">
                Rp {services.reduce((total, s) => total + (s.actualCost || s.estimatedCost), 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Revenue</div>
            </div>
          </div>
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
                placeholder="Cari service, customer..."
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
              <option value="pending">Pending</option>
              <option value="assigned">Assigned</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>

            {/* Type Filter */}
            <select
              value={filters.type}
              onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
              className="input w-full sm:w-auto"
            >
              <option value="all">Semua Tipe</option>
              <option value="repair">Repair</option>
              <option value="maintenance">Maintenance</option>
              <option value="installation">Installation</option>
            </select>

            {/* Technician Filter */}
            <select
              value={filters.technician}
              onChange={(e) => setFilters(prev => ({ ...prev, technician: e.target.value }))}
              className="input w-full sm:w-auto"
            >
              <option value="all">Semua Teknisi</option>
              {technicians.map(tech => (
                <option key={tech.id} value={tech.id}>
                  {tech.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Teknisi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jadwal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cost
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="9" className="px-6 py-12 text-center">
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      <span className="ml-2 text-gray-600">Memuat services...</span>
                    </div>
                  </td>
                </tr>
              ) : filteredServices.length === 0 ? (
                <tr>
                  <td colSpan="9" className="px-6 py-12 text-center text-gray-500">
                    Tidak ada service ditemukan
                  </td>
                </tr>
              ) : (
                filteredServices.map((service) => (
                  <tr key={service.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {service.id}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {service.customerName}
                      </div>
                      <div className="text-sm text-gray-500">
                        {service.customerPhone}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {service.productName}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getServiceTypeColor(service.serviceType)}`}>
                        {service.serviceType}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={service.status}
                        onChange={(e) => handleUpdateServiceStatus(service.id, e.target.value)}
                        className={`text-xs font-semibold rounded-full px-2 py-1 border-0 ${getStatusColor(service.status)}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="assigned">Assigned</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={service.technicianId || ''}
                        onChange={(e) => handleAssignTechnician(service.id, e.target.value)}
                        className="input text-sm"
                      >
                        <option value="">Pilih Teknisi</option>
                        {technicians.map(tech => (
                          <option key={tech.id} value={tech.id}>
                            {tech.name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {service.scheduledDate ? new Date(service.scheduledDate).toLocaleDateString('id-ID') : '-'}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Rp {(service.actualCost || service.estimatedCost).toLocaleString()}
                      </div>
                      {service.actualCost && service.actualCost !== service.estimatedCost && (
                        <div className="text-xs text-gray-500">
                          Est: Rp {service.estimatedCost.toLocaleString()}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => navigate(`/admin/services/view/${service.id}`)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Lihat Detail"
                        >
                          <FiEye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => navigate(`/admin/services/edit/${service.id}`)}
                          className="text-green-600 hover:text-green-900"
                          title="Edit"
                        >
                          <FiEdit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteService(service.id)}
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
    </div>
  );

  return (
    <Routes>
      <Route index element={<ServiceList />} />
    </Routes>
  );
};

export default ServiceManagement;
