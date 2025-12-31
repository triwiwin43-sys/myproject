import { useState } from 'react';
import { FiUserCheck, FiCheck, FiX, FiEye, FiClock } from 'react-icons/fi';
import toast from 'react-hot-toast';
import BackButton from '../../components/BackButton';

const AdminSellerApproval = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const [sellers] = useState([
    {
      id: 1,
      name: 'Tech Store Jakarta',
      email: 'tech@store.com',
      phone: '081234567890',
      businessType: 'PT',
      taxId: '12.345.678.9-012.000',
      address: 'Jl. Teknologi No. 123, Jakarta',
      bankAccount: '1234567890',
      bankName: 'BCA',
      status: 'pending',
      appliedAt: '2024-12-23',
      documents: ['KTP', 'NPWP', 'Akta Perusahaan']
    },
    {
      id: 2,
      name: 'Komputer Sejahtera',
      email: 'info@sejahtera.com',
      phone: '081987654321',
      businessType: 'CV',
      taxId: '98.765.432.1-098.000',
      address: 'Jl. Merdeka No. 456, Bandung',
      bankAccount: '0987654321',
      bankName: 'Mandiri',
      status: 'pending',
      appliedAt: '2024-12-22',
      documents: ['KTP', 'NPWP', 'Surat Izin Usaha']
    },
    {
      id: 3,
      name: 'Digital Solutions',
      email: 'admin@digital.com',
      phone: '081555666777',
      businessType: 'Individual',
      taxId: '11.222.333.4-567.000',
      address: 'Jl. Digital No. 789, Surabaya',
      bankAccount: '1122334455',
      bankName: 'BNI',
      status: 'approved',
      appliedAt: '2024-12-20',
      approvedAt: '2024-12-21',
      documents: ['KTP', 'NPWP']
    }
  ]);

  const handleApprove = (sellerId) => {
    if (confirm('Approve this seller application?')) {
      toast.success('Seller approved successfully');
    }
  };

  const handleReject = (sellerId) => {
    if (confirm('Reject this seller application?')) {
      toast.success('Seller application rejected');
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      pending: { color: 'yellow', icon: FiClock, text: 'Pending' },
      approved: { color: 'green', icon: FiCheck, text: 'Approved' },
      rejected: { color: 'red', icon: FiX, text: 'Rejected' }
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

  const filteredSellers = sellers.filter(seller => {
    if (activeTab === 'all') return true;
    return seller.status === activeTab;
  });

  const stats = {
    pending: sellers.filter(s => s.status === 'pending').length,
    approved: sellers.filter(s => s.status === 'approved').length,
    rejected: sellers.filter(s => s.status === 'rejected').length
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <BackButton to="/admin/dashboard" />
        </div>
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Seller Approval</h1>
          <p className="text-gray-600">Review and approve seller applications</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
              <FiCheck className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Approved</p>
                <p className="text-xl font-bold">{stats.approved}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <FiX className="w-8 h-8 text-red-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Rejected</p>
                <p className="text-xl font-bold">{stats.rejected}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'pending', name: 'Pending', count: stats.pending },
                { id: 'approved', name: 'Approved', count: stats.approved },
                { id: 'rejected', name: 'Rejected', count: stats.rejected },
                { id: 'all', name: 'All', count: sellers.length }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.name}
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    activeTab === tab.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Seller Applications */}
        <div className="space-y-4">
          {filteredSellers.map((seller) => (
            <div key={seller.id} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{seller.name}</h3>
                    {getStatusBadge(seller.status)}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Email:</span>
                      <p className="text-gray-600">{seller.email}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Phone:</span>
                      <p className="text-gray-600">{seller.phone}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Business Type:</span>
                      <p className="text-gray-600">{seller.businessType}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Tax ID:</span>
                      <p className="text-gray-600">{seller.taxId}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Bank:</span>
                      <p className="text-gray-600">{seller.bankName} - {seller.bankAccount}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Applied:</span>
                      <p className="text-gray-600">{seller.appliedAt}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <span className="font-medium text-gray-700">Address:</span>
                    <p className="text-gray-600">{seller.address}</p>
                  </div>
                  
                  <div className="mt-4">
                    <span className="font-medium text-gray-700">Documents:</span>
                    <div className="flex space-x-2 mt-1">
                      {seller.documents.map((doc, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {seller.status === 'pending' && (
                  <div className="flex space-x-2 ml-4">
                    <button className="p-2 text-gray-600 hover:text-gray-900">
                      <FiEye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleApprove(seller.id)}
                      className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      <FiCheck className="w-4 h-4 mr-1 inline" />
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(seller.id)}
                      className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      <FiX className="w-4 h-4 mr-1 inline" />
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSellerApproval;
