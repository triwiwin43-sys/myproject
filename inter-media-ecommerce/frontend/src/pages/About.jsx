import { 
  FiAward, 
  FiUsers, 
  FiTruck, 
  FiShield,
  FiTarget,
  FiHeart,
  FiStar,
  FiMapPin
} from 'react-icons/fi';

const About = () => {
  const stats = [
    { icon: FiUsers, label: 'Pelanggan Puas', value: '500+' },
    { icon: FiAward, label: 'Tahun Pengalaman', value: '10+' },
    { icon: FiTruck, label: 'Produk Terjual', value: '2000+' },
    { icon: FiShield, label: 'Garansi Resmi', value: '100%' }
  ];

  const team = [
    {
      name: 'Budi Santoso',
      position: 'Founder & CEO',
      experience: '15+ tahun di bidang IT',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Sari Dewi',
      position: 'Technical Manager',
      experience: '12+ tahun service hardware',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Ahmad Rizki',
      position: 'Sales Manager',
      experience: '8+ tahun penjualan IT',
      image: '/api/placeholder/150/150'
    }
  ];

  const values = [
    {
      icon: FiTarget,
      title: 'Profesional',
      description: 'Memberikan layanan terbaik dengan standar profesional tinggi'
    },
    {
      icon: FiHeart,
      title: 'Terpercaya',
      description: 'Membangun kepercayaan melalui kualitas produk dan layanan'
    },
    {
      icon: FiStar,
      title: 'Inovatif',
      description: 'Selalu mengikuti perkembangan teknologi terkini'
    },
    {
      icon: FiShield,
      title: 'Berkualitas',
      description: 'Menjamin kualitas produk dan layanan dengan garansi resmi'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Inter Medi-A</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Solusi terpercaya untuk kebutuhan perangkat komputer, printer, 
              dan layanan IT profesional sejak 2014
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cerita Kami</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Inter Medi-A didirikan pada tahun 2014 dengan visi menjadi penyedia 
                  solusi IT terpercaya di Indonesia. Berawal dari toko kecil yang melayani 
                  penjualan komputer dan printer, kini kami telah berkembang menjadi 
                  perusahaan yang melayani berbagai kebutuhan IT.
                </p>
                <p>
                  Dengan pengalaman lebih dari 10 tahun, kami telah melayani ribuan 
                  pelanggan dari berbagai kalangan, mulai dari perorangan, UMKM, 
                  hingga perusahaan besar. Kepercayaan pelanggan adalah aset 
                  terbesar kami.
                </p>
                <p>
                  Kami berkomitmen untuk terus memberikan produk berkualitas, 
                  layanan profesional, dan harga yang kompetitif. Tim teknisi 
                  berpengalaman kami siap membantu mengatasi berbagai masalah 
                  perangkat IT Anda.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiShield className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Garansi resmi untuk semua produk</span>
                </li>
                <li className="flex items-start">
                  <FiUsers className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Teknisi berpengalaman dan bersertifikat</span>
                </li>
                <li className="flex items-start">
                  <FiTruck className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Layanan antar dan pickup gratis</span>
                </li>
                <li className="flex items-start">
                  <FiStar className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Harga kompetitif dan transparan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai yang menjadi fondasi dalam setiap layanan yang kami berikan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesional berpengalaman yang siap memberikan layanan terbaik
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FiUsers className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                <p className="text-sm text-gray-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Lokasi Kami</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiMapPin className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Alamat Toko</h3>
                    <p className="text-gray-600">
                      Jalan Klingkit Dalam Blok C No. 22<br />
                      RT 010/RW 011, Rawa Buaya, Cengkareng<br />
                      Jakarta Barat 11470
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiUsers className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Jam Operasional</h3>
                    <p className="text-gray-600">
                      Senin - Jumat: 08:00 - 17:00<br />
                      Sabtu: 08:00 - 15:00<br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8123456789!2d106.7234567!3d-6.1654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8abcdef1234%3A0x1234567890abcdef!2sJl.%20Klingkit%20Dalam%2C%20Rawa%20Buaya%2C%20Kec.%20Cengkareng%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Inter Medi-A Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Creator Section */}
      <div className="py-12 bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Aplikasi E-Commerce</h3>
            <p className="text-gray-600">
              Dikembangkan oleh <span className="font-medium text-blue-600">Sapto Prawiro Utomo</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              © 2024 Inter Medi-A. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
