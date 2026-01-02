import React, { useState } from 'react';
import { FiTool, FiPlus, FiEdit, FiTrash2, FiClock, FiCheck, FiX, FiSave, FiEye } from 'react-icons/fi';

const SellerServices = () => {
  const [activeTab, setActiveTab] = useState('requests');
  const [showAddService, setShowAddService] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [newService, setNewService] = useState({
    name: '',
    description: '',
    price: '',
    duration: '',
    category: 'repair'
  });
  
  const [serviceRequests, setServiceRequests] = useState([
    {
      id: 1,
      customer: 'John Doe',
      email: 'john@email.com',
      phone: '081234567890',
      service: 'Printer Repair',
      device: 'HP LaserJet Pro M404n',
      problem: 'Printer tidak bisa mencetak, lampu error menyala',
      date: '2024-01-15',
      status: 'pending',
      priority: 'high',
      estimatedCost: 150000
    },
    {
      id: 2,
      customer: 'Jane Smith',
      email: 'jane@email.com',
      phone: '081234567891',
      service: 'Software Installation',
      device: 'Laptop Dell Inspiron',
      problem: 'Perlu instalasi software akuntansi dan setup printer',
      date: '2024-01-14',
      status: 'in_progress',
      priority: 'medium',
      estimatedCost: 100000
    }
  ]);

  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Printer Repair',
      description: 'Complete printer repair and maintenance service',
      price: 150000,
      duration: '1-2 days',
      category: 'repair',
      status: 'active',
      completedJobs: 45
    },
    {
      id: 2,
      name: 'Software Installation',
      description: 'Professional software installation and configuration',
      price: 100000,
      duration: '2-4 hours',
      category: 'installation',
      status: 'active',
      completedJobs: 32
    },
    {
      id: 3,
      name: 'Computer Maintenance',
      description: 'Complete computer cleaning and optimization',
      price: 200000,
      duration: '1 day',
      category: 'maintenance',
      status: 'active',
      completedJobs: 28
    }
  ]);

  const serviceStats = [
    { label: 'Total Services', value: services.length, color: 'blue' },
    { label: 'Active Requests', value: serviceRequests.filter(r => r.status !== 'completed').length, color: 'yellow' },
    { label: 'Completed Jobs', value: services.reduce((acc, s) => acc + s.completedJobs, 0), color: 'green' },
    { label: 'Revenue', value: `Rp ${(services.reduce((acc, s) => acc + (s.price * s.completedJobs), 0) / 1000000).toFixed(1)}M`, color: 'purple' }
  ];

  const handleAddService = () => {
    if (newService.name && newService.description && newService.price) {
      const service = {
        id: services.length + 1,
        ...newService,
        price: parseInt(newService.price),
        status: 'active',
        completedJobs: 0
      };
      setServices([...services, service]);
      setNewService({ name: '', description: '', price: '', duration: '', category: 'repair' });
      setShowAddService(false);
    }
  };

  const handleEditService = (service) => {
    setEditingService(service);
    setNewService(service);
    setShowAddService(true);
  };

  const handleUpdateService = () => {
    if (editingService) {
      setServices(services.map(s => s.id === editingService.id ? { ...newService, price: parseInt(newService.price) } : s));
      setEditingService(null);
      setNewService({ name: '', description: '', price: '', duration: '', category: 'repair' });
      setShowAddService(false);
    }
  };

  const handleDeleteService = (serviceId) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      setServices(services.filter(s => s.id !== serviceId));
    }
  };

  const updateRequestStatus = (requestId, newStatus) => {
    setServiceRequests(serviceRequests.map(r => 
      r.id === requestId ? { ...r, status: newStatus } : r
    ));
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <FiClock className="w-4 h-4" />;
      case 'in_progress': return <FiTool className="w-4 h-4" />;
      case 'completed': return <FiCheck className="w-4 h-4" />;
      case 'cancelled': return <FiX className="w-4 h-4" />;
      default: return <FiClock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Service Management</h1>
          <p className="text-gray-600">Manage service requests and offerings</p>
        </div>
        <button 
          onClick={() => setShowAddService(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <FiPlus className="w-4 h-4 mr-2" />
          Add Service
        </button>
      </div>

      {/* Service Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {serviceStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Service Modal */}
      {showAddService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {editingService ? 'Edit Service' : 'Add New Service'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Name</label>
                <input
                  type="text"
                  value={newService.name}
                  onChange={(e) => setNewService({...newService, name: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter service name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={newService.description}
                  onChange={(e) => setNewService({...newService, description: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Enter service description"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (Rp)</label>
                  <input
                    type="number"
                    value={newService.price}
                    onChange={(e) => setNewService({...newService, price: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <input
                    type="text"
                    value={newService.duration}
                    onChange={(e) => setNewService({...newService, duration: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 1-2 days"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={newService.category}
                  onChange={(e) => setNewService({...newService, category: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="repair">Repair</option>
                  <option value="installation">Installation</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={editingService ? handleUpdateService : handleAddService}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center"
              >
                <FiSave className="w-4 h-4 mr-2" />
                {editingService ? 'Update' : 'Save'}
              </button>
              <button
                onClick={() => {
                  setShowAddService(false);
                  setEditingService(null);
                  setNewService({ name: '', description: '', price: '', duration: '', category: 'repair' });
                }}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('requests')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'requests'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Service Requests ({serviceRequests.length})
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'services'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            My Services ({services.length})
          </button>
        </nav>
      </div>

      {/* Service Requests Tab */}
      {activeTab === 'requests' && (
        <div className="space-y-4">
          {serviceRequests.map((request) => (
            <div key={request.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{request.service}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                      {getStatusIcon(request.status)}
                      <span className="ml-1">{request.status}</span>
                    </span>
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(request.priority)}`}>
                      {request.priority} priority
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600"><strong>Customer:</strong> {request.customer}</p>
                      <p className="text-sm text-gray-600"><strong>Email:</strong> {request.email}</p>
                      <p className="text-sm text-gray-600"><strong>Phone:</strong> {request.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600"><strong>Device:</strong> {request.device}</p>
                      <p className="text-sm text-gray-600"><strong>Date:</strong> {new Date(request.date).toLocaleDateString('id-ID')}</p>
                      <p className="text-sm text-gray-600"><strong>Est. Cost:</strong> Rp {request.estimatedCost.toLocaleString('id-ID')}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-4"><strong>Problem:</strong> {request.problem}</p>
                </div>
                <div className="flex space-x-2 ml-4">
                  {request.status === 'pending' && (
                    <button 
                      onClick={() => updateRequestStatus(request.id, 'in_progress')}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                    >
                      Accept
                    </button>
                  )}
                  {request.status === 'in_progress' && (
                    <button 
                      onClick={() => updateRequestStatus(request.id, 'completed')}
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                    >
                      Complete
                    </button>
                  )}
                  <button className="text-gray-600 hover:text-gray-800 p-1">
                    <FiEye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Services Tab */}
      {activeTab === 'services' && (
        <div className="grid gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      service.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {service.status}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      {service.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{service.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
                    <div><strong>Price:</strong> Rp {service.price.toLocaleString('id-ID')}</div>
                    <div><strong>Duration:</strong> {service.duration}</div>
                    <div><strong>Completed Jobs:</strong> {service.completedJobs}</div>
                    <div><strong>Revenue:</strong> Rp {(service.price * service.completedJobs).toLocaleString('id-ID')}</div>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button 
                    onClick={() => handleEditService(service)}
                    className="text-blue-600 hover:text-blue-800 p-1"
                  >
                    <FiEdit className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDeleteService(service.id)}
                    className="text-red-600 hover:text-red-800 p-1"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerServices;
