import { Link } from 'react-router-dom';
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Tentang Kami', href: '/about' },
      { name: 'Layanan Kami', href: '/services' },
      { name: 'Karir', href: '/careers' },
      { name: 'Pers', href: '/press' },
      { name: 'Blog', href: '/blog' }
    ],
    support: [
      { name: 'Pusat Bantuan', href: '/help' },
      { name: 'Hubungi Kami', href: '/contact' },
      { name: 'Info Pengiriman', href: '/shipping' },
      { name: 'Pengembalian', href: '/returns' },
      { name: 'Garansi', href: '/warranty' }
    ],
    legal: [
      { name: 'Kebijakan Privasi', href: '/privacy' },
      { name: 'Syarat Layanan', href: '/terms' },
      { name: 'Kebijakan Cookie', href: '/cookies' },
      { name: 'Kebijakan Pengembalian Dana', href: '/refund' }
    ],
    categories: [
      { name: 'Printer', href: '/products?category=printers' },
      { name: 'Komputer', href: '/products?category=computers' },
      { name: 'Peralatan Kantor', href: '/products?category=office' },
      { name: 'Suku Cadang', href: '/products?category=parts' },
      { name: 'Layanan', href: '/services' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-700 py-12">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">🇮🇩 TETAP TERHUBUNG - UPDATE 10:00</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Berlangganan newsletter kami untuk produk terbaru, penawaran eksklusif, dan wawasan teknologi.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-700 to-blue-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">IM</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Inter Medi-A</h2>
                  <p className="text-gray-400 text-sm">Office Solutions</p>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Mitra terpercaya Anda untuk peralatan kantor premium, solusi komputer, 
                dan layanan profesional. Kami memberikan produk berkualitas dan layanan 
                luar biasa untuk bisnis di seluruh Indonesia.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FiMapPin className="w-5 h-5 text-primary-400" />
                  <div className="text-gray-300">
                    <div>🏪 ALAMAT TOKO TERBARU:</div>
                    <div>Jalan Klingkit Dalam Blok C No. 22</div>
                    <div>RT 010/RW 011, Rawa Buaya, Cengkareng</div>
                    <div>Jakarta Barat 11470</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">+62 21 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMail className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">info@intermedia.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors"
                >
                  <FiFacebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors"
                >
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors"
                >
                  <FiInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Perusahaan</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Dukungan</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Kategori</h3>
              <ul className="space-y-3">
                {footerLinks.categories.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-gray-400 text-sm">
                © {currentYear} Inter Medi-A. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Developed by Sapto Prawiro Utomo
              </p>
            </div>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
