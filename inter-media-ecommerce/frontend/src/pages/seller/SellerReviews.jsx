import React, { useState } from 'react';
import { FiStar, FiUser, FiMessageSquare, FiEdit, FiTrash2, FiCheck, FiX, FiEye, FiFilter } from 'react-icons/fi';

const SellerReviews = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterRating, setFilterRating] = useState('all');
  const [editingReview, setEditingReview] = useState(null);
  const [replyText, setReplyText] = useState('');

  const [reviews, setReviews] = useState([
    {
      id: 1,
      customer: 'John Doe',
      customerEmail: 'john@email.com',
      product: 'HP LaserJet Pro M404n',
      productId: 1,
      rating: 5,
      comment: 'Printer sangat bagus, kualitas cetakan tajam dan cepat. Pengiriman juga cepat.',
      date: '2024-01-15',
      status: 'published',
      helpful: 12,
      reply: null,
      verified: true
    },
    {
      id: 2,
      customer: 'Jane Smith',
      customerEmail: 'jane@email.com',
      product: 'Canon Pixma G2010',
      productId: 2,
      rating: 4,
      comment: 'Printer bagus untuk kebutuhan rumah. Tinta awet dan hasil cetak memuaskan.',
      date: '2024-01-14',
      status: 'published',
      helpful: 8,
      reply: 'Terima kasih atas reviewnya! Kami senang produk kami memenuhi kebutuhan Anda.',
      verified: true
    },
    {
      id: 3,
      customer: 'Bob Wilson',
      customerEmail: 'bob@email.com',
      product: 'Tinta Canon GI-790',
      productId: 3,
      rating: 2,
      comment: 'Tinta cepat habis dan warna tidak sesuai ekspektasi. Kualitas kurang baik.',
      date: '2024-01-13',
      status: 'pending',
      helpful: 3,
      reply: null,
      verified: false
    },
    {
      id: 4,
      customer: 'Alice Brown',
      customerEmail: 'alice@email.com',
      product: 'Laptop Dell Inspiron',
      productId: 4,
      rating: 5,
      comment: 'Laptop sangat responsif dan sesuai dengan deskripsi. Pelayanan seller juga memuaskan.',
      date: '2024-01-12',
      status: 'published',
      helpful: 15,
      reply: null,
      verified: true
    }
  ]);

  const filteredReviews = reviews.filter(review => {
    const statusMatch = filterStatus === 'all' || review.status === filterStatus;
    const ratingMatch = filterRating === 'all' || review.rating.toString() === filterRating;
    return statusMatch && ratingMatch;
  });

  const reviewStats = [
    { label: 'Total Reviews', value: reviews.length, color: 'blue' },
    { label: 'Average Rating', value: (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1), color: 'yellow' },
    { label: 'Pending Reviews', value: reviews.filter(r => r.status === 'pending').length, color: 'orange' },
    { label: 'Response Rate', value: `${Math.round((reviews.filter(r => r.reply).length / reviews.length) * 100)}%`, color: 'green' }
  ];

  const ratingDistribution = [
    { stars: 5, count: reviews.filter(r => r.rating === 5).length },
    { stars: 4, count: reviews.filter(r => r.rating === 4).length },
    { stars: 3, count: reviews.filter(r => r.rating === 3).length },
    { stars: 2, count: reviews.filter(r => r.rating === 2).length },
    { stars: 1, count: reviews.filter(r => r.rating === 1).length }
  ];

  const handleStatusChange = (reviewId, newStatus) => {
    setReviews(reviews.map(review => 
      review.id === reviewId ? { ...review, status: newStatus } : review
    ));
  };

  const handleReply = (reviewId) => {
    if (replyText.trim()) {
      setReviews(reviews.map(review => 
        review.id === reviewId ? { ...review, reply: replyText } : review
      ));
      setReplyText('');
      setEditingReview(null);
    }
  };

  const handleDeleteReview = (reviewId) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      setReviews(reviews.filter(review => review.id !== reviewId));
    }
  };

  const renderStars = (rating, interactive = false, onRatingChange = null) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        className={`w-4 h-4 ${
          i < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
        onClick={interactive && onRatingChange ? () => onRatingChange(i + 1) : undefined}
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Review Management</h1>
          <p className="text-gray-600">Manage customer reviews and feedback</p>
        </div>
        <div className="flex space-x-2">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="pending">Pending</option>
          </select>
          <select
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
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

      {/* Review Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {reviewStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Rating Distribution */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Rating Distribution</h3>
        <div className="space-y-3">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 w-20">
                <span className="text-sm font-medium">{item.stars}</span>
                <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-yellow-400 h-2 rounded-full" 
                  style={{ width: `${reviews.length > 0 ? (item.count / reviews.length) * 100 : 0}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 w-12">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <FiUser className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-gray-900">{review.customer}</h4>
                    {review.verified && (
                      <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                        Verified Purchase
                      </span>
                    )}
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString('id-ID')}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{review.product}</p>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex space-x-1">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-gray-600">({review.rating}/5)</span>
                  </div>
                  <p className="text-gray-700 mb-3">{review.comment}</p>
                  
                  {/* Seller Reply */}
                  {review.reply && (
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mt-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <FiMessageSquare className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-900">Seller Response:</span>
                      </div>
                      <p className="text-sm text-blue-800">{review.reply}</p>
                    </div>
                  )}

                  {/* Reply Form */}
                  {editingReview === review.id && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write your response..."
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        rows={3}
                      />
                      <div className="flex space-x-2 mt-3">
                        <button
                          onClick={() => handleReply(review.id)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
                        >
                          Send Reply
                        </button>
                        <button
                          onClick={() => {
                            setEditingReview(null);
                            setReplyText('');
                          }}
                          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 text-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  review.status === 'published' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {review.status === 'published' ? 'Published' : 'Pending'}
                </span>
                <div className="flex space-x-1">
                  {!review.reply && (
                    <button
                      onClick={() => {
                        setEditingReview(review.id);
                        setReplyText('');
                      }}
                      className="text-blue-600 hover:text-blue-800 p-1"
                      title="Reply to Review"
                    >
                      <FiMessageSquare className="w-4 h-4" />
                    </button>
                  )}
                  {review.reply && (
                    <button
                      onClick={() => {
                        setEditingReview(review.id);
                        setReplyText(review.reply);
                      }}
                      className="text-green-600 hover:text-green-800 p-1"
                      title="Edit Reply"
                    >
                      <FiEdit className="w-4 h-4" />
                    </button>
                  )}
                  {review.status === 'pending' && (
                    <button
                      onClick={() => handleStatusChange(review.id, 'published')}
                      className="text-green-600 hover:text-green-800 p-1"
                      title="Approve Review"
                    >
                      <FiCheck className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteReview(review.id)}
                    className="text-red-600 hover:text-red-800 p-1"
                    title="Delete Review"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Review Stats */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>{review.helpful} people found this helpful</span>
                <span>•</span>
                <span>{review.customerEmail}</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div className="text-center py-12">
          <FiStar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews found</h3>
          <p className="text-gray-500">No reviews match your current filters.</p>
        </div>
      )}
    </div>
  );
};

export default SellerReviews;
