import { useState } from 'react';
import { 
  FiCreditCard, 
  FiCheck, 
  FiX, 
  FiClock,
  FiUser,
  FiCalendar
} from 'react-icons/fi';
import usePaymentMethodStore from '../../context/paymentMethodStore';
import useAuthStore from '../../context/authStore';
import toast from 'react-hot-toast';

const AdminPaymentApproval = () => {
  const { user } = useAuthStore();
  const { 
    paymentMethods,
    getPendingPaymentMethods, 
    approvePaymentMethod, 
    rejectPaymentMethod 
  } = usePaymentMethodStore();
  
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectingMethod, setRejectingMethod] = useState(null);
  const [rejectionReason, setRejectionReason] = useState('');
  const [activeTab, setActiveTab] = useState('pending');

  const pendingMethods = getPendingPaymentMethods();
  const approvedMethods = paymentMethods.filter(m => m.status === 'approved');
  const rejectedMethods = paymentMethods.filter(m => m.status === 'rejected');

  const handleApprove = (methodId) => {
    if (confirm('Setujui payment method ini?')) {
      approvePaymentMethod(methodId, user?.email || 'admin@intermedia.com');
      toast.success('Payment method disetujui');
    }
  };

  const handleReject = () => {
    if (!rejectionReason.trim()) {
      toast.error('Alasan penolakan harus diisi');
      return;
    }
    
    rejectPaymentMethod(
      rejectingMethod.id, 
      user?.email || 'admin@intermedia.com', 
      rejectionReason
    );
    toast.success('Payment method ditolak');
    setShowRejectModal(false);
    setRejectingMethod(null);
    setRejectionReason('');
  };

  const openRejectModal = (method) => {
    setRejectingMethod(method);
    setShowRejectModal(true);
  };

  const getTabData = () => {
    switch (activeTab) {
      case 'pending': return pendingMethods;
      case 'approved': return approvedMethods;
      case 'rejected': return rejectedMethods;
      default: return pendingMethods;
    }
  };

  const PaymentMethodCard = ({ method, showActions = false }) => (
    <div className="bg-white border rounded-lg p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <FiCreditCard className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">
              {method.type === 'bank' ? method.bankName : method.provider}
            </h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              method.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
              method.status === 'approved' ? 'bg-green-100 text-green-800' :
              'bg-red-100 text-red-800'
            }`}>
              {method.status === 'pending' ? 'Menunggu' : 
               method.status === 'approved' ? 'Disetujui' : 'Ditolak'}
            </span>
          </div>
          
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="w-24">Nomor:</span>
              <span className="font-mono">{method.accountNumber}</span>
            </div>
            <div className="flex items-center">
              <span className="w-24">Pemegang:</span>
              <span>{method.accountHolder}</span>
            </div>
            <div className="flex items-center">
              <FiUser className="w-4 h-4 mr-2" />
              <span>Seller ID: {method.sellerId}</span>
            </div>
            <div className="flex items-center">
              <FiCalendar className="w-4 h-4 mr-2" />
              <span>Dibuat: {method.createdAt}</span>
            </div>
            
            {method.status === 'approved' && method.approvedAt && (
              <div className="flex items-center text-green-600">
                <FiCheck className="w-4 h-4 mr-2" />
                <span>Disetujui: {method.approvedAt} oleh {method.approvedBy}</span>
              </div>
            )}
            
            {method.status === 'rejected' && method.rejectedAt && (
              <div className="text-red-600">
                <div className="flex items-center">
                  <FiX className="w-4 h-4 mr-2" />
                  <span>Ditolak: {method.rejectedAt} oleh {method.rejectedBy}</span>
                </div>
                {method.rejectionReason && (
                  <p className="mt-1 text-sm">Alasan: {method.rejectionReason}</p>
                )}
              </div>
            )}
          </div>
        </div>
        
        {showActions && method.status === 'pending' && (
          <div className="flex space-x-2 ml-4">
            <button
              onClick={() => handleApprove(method.id)}
              className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center"
            >
              <FiCheck className="w-4 h-4 mr-1" />
              Setujui
            </button>
            <button
              onClick={() => openRejectModal(method)}
              className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center"
            >
              <FiX className="w-4 h-4 mr-1" />
              Tolak
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Payment Method Approval</h1>
          <p className="text-gray-600">Kelola persetujuan payment method dari seller</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'pending', name: 'Menunggu Approval', count: pendingMethods.length },
                { id: 'approved', name: 'Disetujui', count: approvedMethods.length },
                { id: 'rejected', name: 'Ditolak', count: rejectedMethods.length }
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
                  {tab.count > 0 && (
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                      activeTab === tab.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {getTabData().length === 0 ? (
            <div className="bg-white rounded-lg p-12 text-center">
              <FiClock className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">
                {activeTab === 'pending' ? 'Tidak ada payment method yang menunggu approval' :
                 activeTab === 'approved' ? 'Belum ada payment method yang disetujui' :
                 'Belum ada payment method yang ditolak'}
              </p>
            </div>
          ) : (
            getTabData().map((method) => (
              <PaymentMethodCard 
                key={method.id} 
                method={method} 
                showActions={activeTab === 'pending'} 
              />
            ))
          )}
        </div>

        {/* Reject Modal */}
        {showRejectModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold mb-4">Tolak Payment Method</h3>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  Payment method: {rejectingMethod?.type === 'bank' ? rejectingMethod?.bankName : rejectingMethod?.provider}
                </p>
                <p className="text-sm text-gray-600">
                  Nomor: {rejectingMethod?.accountNumber}
                </p>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alasan Penolakan *
                </label>
                <textarea
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  className="input resize-none"
                  rows={3}
                  placeholder="Jelaskan alasan penolakan..."
                  required
                />
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleReject}
                  className="btn btn-danger flex-1"
                >
                  Tolak
                </button>
                <button
                  onClick={() => {
                    setShowRejectModal(false);
                    setRejectingMethod(null);
                    setRejectionReason('');
                  }}
                  className="btn btn-secondary flex-1"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPaymentApproval;
