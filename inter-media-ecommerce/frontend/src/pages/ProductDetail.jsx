import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  FiShoppingCart, 
  FiHeart, 
  FiStar, 
  FiTruck,
  FiShield,
  FiArrowLeft
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ProductImage from '../components/ProductImage';
import useCartStore from '../context/cartStore';
import useWishlistStore from '../context/wishlistStore';
import useAuthStore from '../context/authStore';
import toast from 'react-hot-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCartStore();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
  const { isAuthenticated, user } = useAuthStore();
  
  const [quantity, setQuantity] = useState(1);
  
  // Mock product data - replace with API call
  const product = {
    id: parseInt(id),
    name: 'HP LaserJet Pro M404n',
    description: 'Printer laser monokrom berkualitas tinggi untuk kebutuhan kantor dengan kecepatan cetak hingga 38 halaman per menit.',
    price: 2500000,
    originalPrice: 2800000,
    category: 'Printer',
    brand: 'HP',
    rating: 4.5,
    reviewCount: 28,
    stock: 15,
    images: ['/api/placeholder/400/400', '/api/placeholder/400/400'],
    seller: {
      name: 'Inter Medi-A Store',
      rating: 4.8,
      location: 'Jakarta'
    },
    features: [
      'Kecepatan cetak hingga 38 ppm',
      'Resolusi cetak 4800 x 600 dpi',
      'Konektivitas USB dan Ethernet',
      'Kapasitas kertas 250 lembar',
      'Garansi resmi 1 tahun'
    ],
    specifications: {
      'Print Speed': '38 ppm',
      'Print Resolution': '4800 x 600 dpi',
      'Paper Size': 'A4, Letter, Legal',
      'Connectivity': 'USB 2.0, Ethernet',
      'Memory': '256 MB'
    }
  };

  const inWishlist = isInWishlist(product.id);
  const isCustomer = user?.role === 'customer';

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast.error('Please login to add items to cart');
      return;
    }
    
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${quantity} item(s) added to cart`);
  };

  const handleWishlistToggle = () => {
    if (!isAuthenticated) {
      toast.error('Please login to use wishlist');
      return;
    }
    
    if (!isCustomer) {
      toast.error('Wishlist only available for customers');
      return;
    }
    
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/products"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div>
              <ProductImage
                src={product.images[0]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg mb-4"
              />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-blue-600">
                    Rp {product.price.toLocaleString('id-ID')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      Rp {product.originalPrice.toLocaleString('id-ID')}
                    </span>
                  )}
                </div>
                {product.originalPrice && (
                  <span className="text-sm text-green-600">
                    Save Rp {(product.originalPrice - product.price).toLocaleString('id-ID')}
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Quantity and Actions */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <label className="text-sm font-medium text-gray-700 mr-2">Qty:</label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="border rounded px-3 py-2"
                  >
                    {[...Array(Math.min(10, product.stock))].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="btn btn-primary flex-1"
                >
                  <FiShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </button>
                
                {isAuthenticated && isCustomer && (
                  <button
                    onClick={handleWishlistToggle}
                    className={`p-3 rounded-lg border ${inWishlist ? 'bg-red-50 text-red-600 border-red-200' : 'bg-gray-50 text-gray-600 border-gray-200'}`}
                  >
                    <FiHeart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
                  </button>
                )}
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <FiShield className="w-4 h-4 text-green-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stock Info */}
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <FiTruck className="w-4 h-4 mr-2" />
                {product.stock > 0 ? (
                  <span>{product.stock} items in stock</span>
                ) : (
                  <span className="text-red-600">Out of stock</span>
                )}
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="border-t p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b">
                  <span className="font-medium text-gray-700">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
