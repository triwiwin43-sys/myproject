import { useState } from 'react';
import { FiStar, FiSearch, FiEye, FiTrash2, FiCheck, FiX, FiMessageSquare } from 'react-icons/fi';
import toast from 'react-hot-toast';
import BackButton from '../../components/BackButton';

const AdminReviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');

  const [reviews] = useState([
    {
      id: 1,
      customer: { name: 'John Doe', email: 'john@example.com' },
      seller: { name: 'Inter Medi-A Store', email: 'seller@intermedia.com' },
      product: { name: 'HP LaserJet Pro M404n', id: 1 },
      rating: 5,
      comment: 'Printer sangat bagus, kualitas cetak tajam dan cepat. Pelayanan seller juga memuaskan, pengiriman cepat.',
      status: 'approved',
      createdAt: '2024-12-24 10:30',
      moderatedAt: '2024-12-24 11:00',
      moderatedBy: 'admin@intermedia.com'
    },
    {
      id: 2,
      customer: { name: 'Jane Smith', email: 'jane@example.com' },
      seller: { name: 'Inter Medi-A Store', email: 'seller@intermedia.com' },
      product: { name: 'Canon Pixma G2010', id: 2 },
      rating: 2,
      comment: 'Produk tidak sesuai deskripsi, kualitas buruk dan seller tidak responsif. Sangat kecewa dengan pembelian ini.',
      status: 'pending',
      createdAt: '2024-12-24 09:15',
      moderatedAt: null,
      moderatedBy: null
    },
    {
      id: 3,
      customer: { name: 'Mike Johnson', email: 'mike@example.com' },
      seller: { name: 'Inter Medi-A Store', email: 'seller@intermedia.com' },
      product: { name: 'ASUS VivoBook 14', id: 3 },
      rating: 4,
      comment: 'Laptop bagus untuk harga segini, performa oke untuk kerja sehari-hari. Packaging rapi dan aman.',
      status: 'approved',
      createdAt: '2024-12-23 16:45',
      moderatedAt: '2024-12-23 17:00',
      moderatedBy: 'admin@intermedia.com'
    },
    {
      id: 4,
      customer: { name: 'Sarah Wilson', email: 'sarah@example.com' },
      seller: { name: 'Inter Medi-A Store', email: 'seller@intermedia.com' },
      product: { name: 'Logitech MX Master 3', id: 4 },
      rating: 1,
      comment: 'Mouse rusak setelah 2 hari pakai. Seller tidak mau ganti rugi. Jangan beli di sini!',
      status: 'rejected',
      createdAt: '2024-12-23 14:20',
      moderatedAt: '2024-12-23 15:30',
      moderatedBy: 'admin@intermedia.com'
    }
  ]);

  const handleApprove = (reviewId) => {
    if (confirm('Setujui ulasan ini?')) {
      toast.success('Review approved successfully');
    }
  };

  const handleReject = (reviewId) => {
    if (confirm('Tolak ulasan ini?')) {
      toast.success('Review rejected successfully');
    }
  };

  const handleDelete = (reviewId) => {
    if (confirm('Hapus ulasan ini secara permanen?')) {
      toast.success('Review deleted successfully');
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      pending: { color: 'yellow', text: 'Pending' },
      approved: { color: 'green', text: 'Approved' },
      rejected: { color: 'red', text: 'Rejected' }
    };
    
    const badge = badges[status];
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${badge.color}-100 text-${badge.color}-800`}>
        {badge.text}
      </span>
    );
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FiStar
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.comment.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || review.status === statusFilter;
    const matchesRating = ratingFilter === 'all' || review.rating.toString() === ratingFilter;
    return matchesSearch && matchesStatus && matchesRating;
  });

  const stats = {
    total: reviews.length,
    pending: reviews.filter(r => r.status === 'pending').length,
    approved: reviews.filter(r => r.status === 'approved').length,
    rejected: reviews.filter(r => r.status === 'rejected').length,
    avgRating: (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <BackButton to="/admin/dashboard" />
        </div>
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Review Management</h1>
          <p className="text-gray-600">Moderate customer reviews and comments</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <FiMessageSquare className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Total Reviews</p>
                <p className="text-xl font-bold">{stats.total}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-xl font-bold">{stats.pending}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              </div>
              <div>
                <p className="text-sm text-gray-600">Approved</p>
                <p className="text-xl font-bold">{stats.approved}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              </div>
              <div>
                <p className="text-sm text-gray-600">Rejected</p>
                <p className="text-xl font-bold">{stats.rejected}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <FiStar className="w-8 h-8 text-yellow-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Avg Rating</p>
                <p className="text-xl font-bold">{stats.avgRating}</p>
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
                  placeholder="Search reviews..."
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
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
              
              <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="input"
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex items-center">
                      {renderStars(review.rating)}
                    </div>
                    {getStatusBadge(review.status)}
                    <span className="text-sm text-gray-500">#{review.id}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Customer:</span>
                      <p className="text-gray-600">{review.customer.name}</p>
                      <p className="text-gray-500 text-xs">{review.customer.email}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Product:</span>
                      <p className="text-gray-600">{review.product.name}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Seller:</span>
                      <p className="text-gray-600">{review.seller.name}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="font-medium text-gray-700">Review:</span>
                    <p className="text-gray-600 mt-1">{review.comment}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>Posted: {review.createdAt}</span>
                    {review.moderatedAt && (
                      <span>Moderated: {review.moderatedAt} by {review.moderatedBy}</span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2 ml-4">
                  {review.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleApprove(review.id)}
                        className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                      >
                        <FiCheck className="w-4 h-4 mr-1 inline" />
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(review.id)}
                        className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                      >
                        <FiX className="w-4 h-4 mr-1 inline" />
                        Reject
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => handleDelete(review.id)}
                    className="p-2 text-red-600 hover:text-red-900"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminReviews;
