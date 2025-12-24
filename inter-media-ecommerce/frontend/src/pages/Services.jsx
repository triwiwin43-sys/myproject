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
  FiTrendingUp
} from 'react-icons/fi';

const Services = () => {
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

                  <button className="w-full btn btn-primary">
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
    </div>
  );
};

export default Services;
