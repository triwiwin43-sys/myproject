import { useState, useEffect } from 'react';
import { 
  FiMonitor, 
  FiPrinter, 
  FiCamera, 
  FiHardDrive,
  FiSettings,
  FiTool,
  FiPackage,
  FiClock,
  FiCheckCircle,
  FiPhone,
  FiMail,
  FiTrendingUp,
  FiX,
  FiUser,
  FiCalendar
} from 'react-icons/fi';
import toast from 'react-hot-toast';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    description: '',
    preferredDate: ''
  });

  const [services] = useState([
    {
      id: 1,
      title: 'Service Laptop & Notebook',
      description: 'Perbaikan laptop, upgrade RAM/SSD, cleaning, install OS',
      icon: FiMonitor,
      price: 'Mulai Rp 150.000',
      duration: '1-3 hari',
      features: ['Diagnosa gratis', 'Garansi 30 hari', 'Spare part original', 'Teknisi berpengalaman']
    },
    {
      id: 2,
      title: 'Service Printer & Scanner',
      description: 'Perbaikan printer inkjet/laser, cleaning head, refill toner',
      icon: FiPrinter,
      price: 'Mulai Rp 100.000',
      duration: '1-2 hari',
      features: ['Head cleaning', 'Kalibrasi warna', 'Refill toner/tinta', 'Test print gratis']
    },
    {
      id: 3,
      title: 'Service PC & Komputer',
      description: 'Perbaikan PC desktop, upgrade hardware, optimasi performa',
      icon: FiMonitor,
      price: 'Mulai Rp 120.000',
      duration: '1-2 hari',
      features: ['Hardware upgrade', 'Cleaning internal', 'Install software', 'Optimasi sistem']
    },
    {
      id: 4,
      title: 'Service Mesin Fotocopy',
      description: 'Perbaikan mesin fotocopy, maintenance rutin, spare part',
      icon: FiCamera,
      price: 'Mulai Rp 200.000',
      duration: '2-5 hari',
      features: ['Maintenance rutin', 'Spare part original', 'Kalibrasi mesin', 'Training operator']
    },
    {
      id: 5,
      title: 'Recovery Data',
      description: 'Pemulihan data dari HDD/SSD rusak, flash drive corrupt',
      icon: FiHardDrive,
      price: 'Mulai Rp 300.000',
      duration: '3-7 hari',
      features: ['Analisa kerusakan', 'Recovery maksimal', 'Backup data', 'Konsultasi gratis']
    },
    {
      id: 6,
      title: 'Pengadaan Barang IT',
      description: 'Pengadaan komputer, printer, software, ATK untuk kantor',
      icon: FiPackage,
      price: 'Sesuai kebutuhan',
      duration: '3-14 hari',
      features: ['Konsultasi kebutuhan', 'Harga kompetitif', 'Garansi resmi', 'After sales support']
    }
  ]);

  const [additionalServices] = useState([
    'Install & Setup Software',
    'Maintenance Berkala',
    'Konsultasi IT',
    'Network Setup',
    'CCTV Installation',
    'Training Komputer'
  ]);

  const handleOrderService = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error('Mohon lengkapi data yang diperlukan');
      return;
    }

    // Simulate order submission
    toast.success(`Pesanan ${selectedService.title} berhasil dikirim! Kami akan menghubungi Anda segera.`);
    
    // Reset form and close modal
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      description: '',
      preferredDate: ''
    });
    setShowModal(false);
    setSelectedService(null);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Layanan Service IT</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inter Medi-A menyediakan layanan service profesional untuk perangkat IT, 
            printer, komputer, dan pengadaan barang dengan teknisi berpengalaman
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold text-blue-600">{service.price}</span>
                      <div className="flex items-center text-sm text-gray-500">
                        <FiClock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleOrderService(service)}
                    className="w-full btn btn-primary"
                  >
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Layanan Tambahan</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <FiTool className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Proses Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Konsultasi</h3>
              <p className="text-sm text-gray-600">Hubungi kami untuk konsultasi masalah perangkat Anda</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Diagnosa</h3>
              <p className="text-sm text-gray-600">Teknisi melakukan diagnosa dan estimasi biaya</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Perbaikan</h3>
              <p className="text-sm text-gray-600">Proses perbaikan dengan spare part berkualitas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Selesai</h3>
              <p className="text-sm text-gray-600">Perangkat siap digunakan dengan garansi</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Butuh Bantuan Service?</h2>
          <p className="text-blue-100 mb-6">
            Tim teknisi kami siap membantu mengatasi masalah perangkat IT Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+6281234567890" className="flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              <FiPhone className="w-5 h-5 mr-2" />
              0812-3456-7890
            </a>
            <a href="mailto:service@intermedia.com" className="flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              <FiMail className="w-5 h-5 mr-2" />
              service@intermedia.com
            </a>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Pesan {selectedService?.title}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmitOrder} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alamat
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={2}
                    className="input resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tanggal Diinginkan
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="input"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Deskripsi Masalah
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    className="input resize-none"
                    placeholder="Jelaskan masalah yang dialami..."
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Detail Layanan:</h4>
                  <p className="text-sm text-blue-800 mb-1">{selectedService?.title}</p>
                  <p className="text-sm text-blue-700 mb-2">{selectedService?.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-600">Harga: {selectedService?.price}</span>
                    <span className="text-blue-600">Durasi: {selectedService?.duration}</span>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 btn btn-secondary"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 btn btn-primary"
                  >
                    Kirim Pesanan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
