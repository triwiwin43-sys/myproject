import { useState } from 'react';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock,
  FiMessageSquare,
  FiSend,
  FiUser,
  FiMessageCircle
} from 'react-icons/fi';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Pesan berhasil dikirim! Kami akan segera menghubungi Anda.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Gagal mengirim pesan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Telepon',
      details: ['+62 812-3456-7890', '+62 21-1234-5678'],
      description: 'Hubungi kami untuk konsultasi'
    },
    {
      icon: FiMail,
      title: 'Email',
      details: ['info@intermedia.com', 'service@intermedia.com'],
      description: 'Kirim email untuk pertanyaan'
    },
    {
      icon: FiMapPin,
      title: 'Alamat',
      details: ['Jl. Teknologi No. 123', 'Jakarta Selatan 12345'],
      description: 'Kunjungi toko kami'
    },
    {
      icon: FiClock,
      title: 'Jam Buka',
      details: ['Senin - Jumat: 08:00 - 17:00', 'Sabtu: 08:00 - 15:00'],
      description: 'Minggu tutup'
    }
  ];

  const services = [
    'Konsultasi IT Gratis',
    'Service Perangkat',
    'Pengadaan Barang',
    'Maintenance Berkala',
    'Training & Support',
    'Emergency Service'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siap membantu kebutuhan IT Anda. Hubungi tim profesional kami 
            untuk konsultasi, service, atau pengadaan perangkat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="flex items-center mb-6">
                <FiMessageSquare className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Kirim Pesan</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input pl-10"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input pl-10"
                        placeholder="nama@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <div className="relative">
                      <FiPhone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input pl-10"
                        placeholder="08123456789"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input"
                    >
                      <option value="">Pilih subjek</option>
                      <option value="konsultasi">Konsultasi IT</option>
                      <option value="service">Service Perangkat</option>
                      <option value="pengadaan">Pengadaan Barang</option>
                      <option value="komplain">Komplain</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <div className="relative">
                    <FiMessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input pl-10 resize-none"
                      placeholder="Jelaskan kebutuhan atau pertanyaan Anda..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary"
                >
                  {isSubmitting ? (
                    'Mengirim...'
                  ) : (
                    <>
                      <FiSend className="w-5 h-5 mr-2" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700">{detail}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services We Offer */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Layanan yang Kami Tawarkan
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FiMessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">Lokasi Toko</h2>
            <p className="text-gray-600 mt-2">
              Kunjungi toko kami untuk melihat langsung produk dan konsultasi
            </p>
          </div>
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <FiMapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Peta Lokasi Toko</p>
              <p className="text-sm text-gray-400">Jl. Teknologi No. 123, Jakarta Selatan</p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-lg p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Layanan Darurat 24/7</h3>
          <p className="text-red-100 mb-4">
            Untuk kebutuhan service darurat di luar jam operasional
          </p>
          <a 
            href="tel:+628123456789" 
            className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors"
          >
            <FiPhone className="w-5 h-5 mr-2" />
            0812-3456-7890
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
