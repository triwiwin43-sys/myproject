import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiTruck, 
  FiShield, 
  FiHeadphones, 
  FiAward,
  FiStar,
  FiUsers,
  FiPackage
} from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import { LoadingGrid } from '../components/Loading';
import useProductStore from '../context/productStore';
import useAuthStore from '../context/authStore';

const Home = () => {
  const { featuredProducts, getFeaturedProducts, categories, getCategories } = useProductStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await Promise.all([
        getFeaturedProducts(),
        getCategories()
      ]);
      setIsLoading(false);
    };

    loadData();
  }, [getFeaturedProducts, getCategories]);

  const features = [
    {
      icon: FiTruck,
      title: 'Gratis Ongkir',
      description: 'Free delivery on orders over Rp 500,000'
    },
    {
      icon: FiShield,
      title: 'Secure Payment',
      description: 'Proses pembayaran 100% aman'
    },
    {
      icon: FiHeadphones,
      title: '24/7 Support',
      description: 'Dedicated customer support team'
    },
    {
      icon: FiAward,
      title: 'Quality Guarantee',
      description: 'Premium products with warranty'
    }
  ];

  const stats = [
    { icon: FiUsers, value: '10,000+', label: 'Happy Customers' },
    { icon: FiPackage, value: '50,000+', label: 'Products Delivered' },
    { icon: FiStar, value: '4.9/5', label: 'Customer Rating' },
    { icon: FiAward, value: '15+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-blue-900 text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Premium Office
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    Solutions
                  </span>
                </h1>
                <p className="text-xl text-primary-100 leading-relaxed">
                  Your trusted partner for printers, computers, office equipment, 
                  and professional services. Quality products, expert support.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="btn btn-lg bg-white text-primary-700 hover:bg-gray-100 font-semibold"
                >
                  Belanja Sekarang
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary-700"
                >
                  Our Services
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary-300" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-primary-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiPackage className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Modern Office Setup</h3>
                  <p className="text-primary-100">
                    Complete solutions for your modern office needs with premium equipment and professional services.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-blue-600/20 rounded-2xl transform rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of office solutions, from cutting-edge printers 
              to complete computer systems and professional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(0, 6).map((category) => (
              <Link
                key={category._id}
                to={`/products?category=${category._id}`}
                className="card card-hover group"
              >
                <div className="aspect-video relative overflow-hidden rounded-t-xl bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiPackage className="w-16 h-16 text-white/80" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/categories"
              className="btn btn-outline btn-lg"
            >
              Lihat Semua Kategori
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked premium products that deliver exceptional performance and value 
              for your business needs.
            </p>
          </div>

          {isLoading ? (
            <LoadingGrid count={8} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Link
              to="/products"
              className="btn btn-primary btn-lg"
            >
              Lihat Semua Produk
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Office?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Inter Medi-A for their 
            office equipment and service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="btn btn-lg bg-white text-primary-700 hover:bg-gray-100"
            >
              Start Shopping
            </Link>
            <Link
              to="/contact"
              className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary-700"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
