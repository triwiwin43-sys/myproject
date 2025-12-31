import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProductImage from './ProductImage';

const ProductImageCarousel = ({ images, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure images is always an array
  const imageArray = Array.isArray(images) ? images : (images ? [images] : []);
  
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imageArray.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  if (!imageArray || imageArray.length === 0) {
    return (
      <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500 text-sm sm:text-base">Tidak ada gambar tersedia</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative group">
        <ProductImage
          src={imageArray[currentIndex]}
          alt={`${productName} - Image ${currentIndex + 1}`}
          className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
        />
        
        {/* Navigation Arrows - Always visible on mobile, hover on desktop */}
        {imageArray.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity touch-manipulation"
            >
              <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity touch-manipulation"
            >
              <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {imageArray.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs sm:text-sm">
            {currentIndex + 1} / {imageArray.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {imageArray.length > 1 && (
        <div className="flex space-x-2 mt-3 sm:mt-4 overflow-x-auto pb-2 scrollbar-hide">
          {imageArray.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-colors touch-manipulation ${
                index === currentIndex 
                  ? 'border-blue-500' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <ProductImage
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageCarousel;
