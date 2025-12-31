import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiStar, FiEye } from 'react-icons/fi';
import ProductImage from './ProductImage';
import useCartStore from '../context/cartStore';
import useWishlistStore from '../context/wishlistStore';
import useAuthStore from '../context/authStore';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCartStore();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
  const { isAuthenticated, user } = useAuthStore();
  
  const isCustomer = user?.role === 'customer';
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      toast.error('Silakan masuk untuk menambahkan item ke keranjang');
      return;
    }
    
    addToCart(product);
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      toast.error('Silakan masuk untuk menggunakan wishlist');
      return;
    }
    
    if (!isCustomer) {
      toast.error('Wishlist hanya tersedia untuk pelanggan');
      return;
    }
    
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.success('Dihapus dari wishlist');
    } else {
      addToWishlist(product);
      toast.success('Ditambahkan ke wishlist');
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getMainImage = () => {
    return product.images?.[0] || 'https://via.placeholder.com/300x300/6B7280/FFFFFF?text=No+Image';
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="card card-hover group">
      <Link to={`/products/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-square">
          <ProductImage
            src={getMainImage()}
            alt={product.name}
            category={product.category}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {discountPercentage > 0 && (
              <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                -{discountPercentage}%
              </span>
            )}
            {product.isFeatured && (
              <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Featured
              </span>
            )}
            {product.stock < 5 && product.stock > 0 && (
              <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Low Stock
              </span>
            )}
            {product.stock === 0 && (
              <span className="bg-gray-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Stok Habis
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Wishlist Button - Only for customers */}
            {isAuthenticated && isCustomer && (
              <button
                onClick={handleWishlistToggle}
                className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-colors ${
                  inWishlist 
                    ? 'bg-red-500 text-white hover:bg-red-600' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <FiHeart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
              </button>
            )}
            <Link
              to={`/products/${product.id}`}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FiEye className="w-4 h-4 text-gray-600" />
            </Link>
          </div>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="w-full btn btn-primary btn-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiShoppingCart className="w-4 h-4 mr-2" />
              {product.stock === 0 ? 'Stok Habis' : 'Tambah ke Keranjang'}
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Brand */}
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
          
          {/* Name */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">
              ({product.reviewCount || 0})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-primary-700">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            
            {/* Stock indicator */}
            <div className="text-right">
              <p className="text-xs text-gray-500">
                {product.stock > 0 ? `${product.stock} tersisa` : 'Stok habis'}
              </p>
            </div>
          </div>

          {/* Seller Info */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              Sold by: <span className="font-medium">{product.seller?.name || 'Inter Medi-A Store'}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
