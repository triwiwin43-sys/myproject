import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FiShoppingCart, 
  FiHeart, 
  FiStar, 
  FiTruck,
  FiShield,
  FiArrowLeft
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ProductImageCarousel from '../components/ProductImageCarousel';
import useCartStore from '../context/cartStore';
import useWishlistStore from '../context/wishlistStore';
import useAuthStore from '../context/authStore';
import useProductStore from '../context/productStoreNew';
import toast from 'react-hot-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCartStore();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
  const { isAuthenticated, user } = useAuthStore();
  const { getProductById, products } = useProductStore();
  
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    // Validate ID
    if (!id || id === 'undefined' || isNaN(parseInt(id))) {
      navigate('/products');
      return;
    }

    // Load product data
    const loadProduct = () => {
      const foundProduct = getProductById(parseInt(id));
      
      console.log('ProductDetail - Loading product ID:', id);
      console.log('ProductDetail - Found product:', foundProduct);
      console.log('ProductDetail - Product images:', foundProduct?.images);
      
      if (!foundProduct) {
        setProduct(null);
      } else {
        // Add detailed specifications based on category
        const productWithSpecs = {
          ...foundProduct,
          specifications: getProductSpecifications(foundProduct)
        };
        console.log('ProductDetail - Final product with specs:', productWithSpecs);
        setProduct(productWithSpecs);
      }
      setLoading(false);
    };

    const getProductSpecifications = (product) => {
      switch (product.category) {
        case 'printers':
          return {
            'Print Speed': product.id === 1 ? '38 ppm' : '15 ppm',
            'Print Resolution': '4800 x 600 dpi',
            'Paper Size': 'A4, Letter, Legal',
            'Connectivity': 'USB 2.0, Ethernet',
            'Memory': '256 MB'
          };
        case 'computers':
          return {
            'Processor': product.features?.[0] || 'Intel Core i5',
            'RAM': product.features?.[1] || '8GB DDR4',
            'Storage': product.features?.[2] || '256GB SSD',
            'Graphics': product.features?.[3] || 'Integrated',
            'OS': 'Windows 11 Pro'
          };
        case 'laptops':
          return {
            'Processor': product.features?.[0] || 'Intel Core i5',
            'RAM': product.features?.[1] || '8GB DDR4',
            'Storage': product.features?.[2] || '256GB SSD',
            'Display': '14" Full HD IPS',
            'Weight': '1.4kg'
          };
        case 'accessories':
          return {
            'Connectivity': 'Bluetooth, USB-C',
            'Battery': '70 days',
            'DPI': '4000 DPI',
            'Buttons': '7 Buttons',
            'Weight': '141g'
          };
        default:
          return {
            'Brand': product.brand || 'N/A',
            'Condition': product.condition || 'New',
            'Warranty': '1 Year',
            'Stock': `${product.stock} units available`
          };
      }
    };

    setLoading(true);
    loadProduct();
    
    // Force update every 30 seconds to catch any data changes
    const interval = setInterval(() => {
      setLastUpdate(Date.now());
    }, 30000);
    
    return () => clearInterval(interval);
  }, [id, navigate, getProductById, products, lastUpdate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="btn btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <Link
          to="/products"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 sm:mb-6 touch-manipulation"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 p-4 sm:p-8">
            {/* Product Images */}
            <div className="order-1">
              <ProductImageCarousel
                images={product.images}
                productName={product.name}
              />
            </div>

            {/* Product Info */}
            <div className="order-2">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-xs sm:text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-600">
                    Rp {product.price.toLocaleString('id-ID')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg sm:text-xl text-gray-500 line-through">
                      Rp {product.originalPrice.toLocaleString('id-ID')}
                    </span>
                  )}
                </div>
                {product.originalPrice && (
                  <span className="text-sm text-green-600 block mt-1">
                    Save Rp {(product.originalPrice - product.price).toLocaleString('id-ID')}
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{product.description}</p>

              {/* Quantity and Actions */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Qty:</label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="border rounded px-3 py-2 text-sm min-w-[60px] touch-manipulation"
                  >
                    {[...Array(Math.min(10, product.stock))].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                    className="btn btn-primary flex-1 py-3 text-sm sm:text-base touch-manipulation"
                  >
                    <FiShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </button>
                  
                  {isAuthenticated && isCustomer && (
                    <button
                      onClick={handleWishlistToggle}
                      className={`p-3 rounded-lg border touch-manipulation ${inWishlist ? 'bg-red-50 text-red-600 border-red-200' : 'bg-gray-50 text-gray-600 border-gray-200'}`}
                    >
                      <FiHeart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
                    </button>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-xs sm:text-sm text-gray-600">
                      <FiShield className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stock Info */}
              <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-4">
                <FiTruck className="w-4 h-4 mr-2 flex-shrink-0" />
                {product.stock > 0 ? (
                  <span>{product.stock} items in stock</span>
                ) : (
                  <span className="text-red-600">Out of stock</span>
                )}
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="border-t p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Specifications</h2>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex flex-col sm:flex-row sm:justify-between py-2 sm:py-3 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium text-gray-700 text-sm sm:text-base mb-1 sm:mb-0">{key}:</span>
                  <span className="text-gray-600 text-sm sm:text-base sm:text-right">{value}</span>
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
