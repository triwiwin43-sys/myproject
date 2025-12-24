import { FiImage, FiPackage, FiMonitor, FiPrinter, FiTool } from 'react-icons/fi';

const ProductImage = ({ src, alt, className = "w-full h-full object-cover", category = "" }) => {
  const getDefaultIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'printer':
        return FiPrinter;
      case 'laptop':
      case 'pc':
        return FiMonitor;
      case 'service':
        return FiTool;
      default:
        return FiPackage;
    }
  };

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  };

  const IconComponent = getDefaultIcon(category);

  return (
    <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
      {src && src !== '/api/placeholder/300/300' && src !== '/api/placeholder/100/100' ? (
        <>
          <img
            src={src}
            alt={alt}
            className={className}
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center" style={{ display: 'none' }}>
            <IconComponent className="w-12 h-12 text-gray-400" />
          </div>
        </>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <IconComponent className="w-12 h-12 text-gray-400" />
        </div>
      )}
    </div>
  );
};

export default ProductImage;
