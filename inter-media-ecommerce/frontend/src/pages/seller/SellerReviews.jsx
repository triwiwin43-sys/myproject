import React from 'react';
import { FiStar, FiUser, FiMessageSquare } from 'react-icons/fi';

const SellerReviews = () => {
  const reviews = [
    {
      id: 1,
      customer: 'John Doe',
      product: 'HP LaserJet Pro M404n',
      rating: 5,
      comment: 'Printer sangat bagus, kualitas cetakan tajam dan cepat. Pengiriman juga cepat.',
      date: '2024-01-15',
      status: 'published'
    },
    {
      id: 2,
      customer: 'Jane Smith',
      product: 'Canon Pixma G2010',
      rating: 4,
      comment: 'Printer bagus untuk kebutuhan rumah. Tinta awet dan hasil cetak memuaskan.',
      date: '2024-01-14',
      status: 'published'
    },
    {
      id: 3,
      customer: 'Bob Wilson',
      product: 'Tinta Canon GI-790',
      rating: 5,
      comment: 'Tinta original, warna cetak tajam dan tidak mudah habis.',
      date: '2024-01-13',
      status: 'pending'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ulasan Produk</h1>
          <p className="text-gray-600">Kelola ulasan dari pelanggan</p>
        </div>
        <div className="flex space-x-2">
          <select className="border border-gray-300 rounded-lg px-3 py-2">
            <option value="all">Semua Status</option>
            <option value="published">Dipublikasi</option>
            <option value="pending">Menunggu</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <FiUser className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-medium text-gray-900">{review.customer}</h3>
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
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  review.status === 'published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {review.status === 'published' ? 'Dipublikasi' : 'Menunggu'}
                </span>
                {review.status === 'pending' && (
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    Setujui
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerReviews;
