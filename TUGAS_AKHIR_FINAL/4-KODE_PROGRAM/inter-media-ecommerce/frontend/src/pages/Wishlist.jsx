import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import useWishlistStore from '../context/wishlistStore';
import useCartStore from '../context/cartStore';
import ProductImage from '../components/ProductImage';
import toast from 'react-hot-toast';

const Wishlist = () => {
  const { items, removeFromWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success('Produk ditambahkan ke keranjang');
  };

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
    toast.success('Produk dihapus dari wishlist');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold mb-8">Wishlist Saya</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <FiHeart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Wishlist Kosong</h2>
            <p className="text-gray-600 mb-6">Belum ada produk yang ditambahkan ke wishlist</p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Jelajahi Produk
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Wishlist Saya</h1>
          <span className="text-gray-600">{items.length} produk</span>
        </div>

        <div className="grid gap-4">
          {items.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-4">
                <ProductImage
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">
                      Rp {product.price?.toLocaleString('id-ID')}
                    </span>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        Rp {product.originalPrice.toLocaleString('id-ID')}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <FiShoppingCart className="w-4 h-4 mr-2" />
                    Tambah ke Keranjang
                  </button>
                  
                  <button
                    onClick={() => handleRemoveFromWishlist(product.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
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

export default Wishlist;
