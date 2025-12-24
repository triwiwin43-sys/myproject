import { useState } from 'react';
import { 
  FiSettings, 
  FiSave, 
  FiImage, 
  FiEdit,
  FiPhone,
  FiMail,
  FiMapPin,
  FiGlobe
} from 'react-icons/fi';
import toast from 'react-hot-toast';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    // General Settings
    siteName: 'Inter Medi-A',
    siteDescription: 'Solusi terpercaya untuk kebutuhan perangkat komputer, printer, dan layanan IT profesional',
    
    // Contact Info
    phone: '0895-3339-61424',
    email: 'medyyes.krps@gmail.com',
    address: 'Jalan Klingkit Dalam Blok C No. 22, RT 010/RW 011, Rawa Buaya, Cengkareng, Jakarta Barat 11470',
    
    // Header Settings
    headerPromo: 'Free shipping on orders over Rp 500,000',
    
    // Footer Settings
    footerDescription: 'Inter Medi-A adalah solusi terpercaya untuk kebutuhan IT Anda. Kami menyediakan perangkat komputer, printer, dan layanan profesional.',
    footerCopyright: '© 2024 Inter Medi-A. All rights reserved.',
    footerDeveloper: 'Developed by Sapto Prawiro Utomo',
    
    // Home Page Settings
    heroTitle: 'Solusi IT Terpercaya untuk Bisnis Anda',
    heroSubtitle: 'Dapatkan perangkat komputer, printer, dan layanan IT profesional dengan kualitas terbaik dan harga kompetitif',
    heroImage: '/api/placeholder/800/400',
    
    // Featured Categories
    featuredCategories: [
      { name: 'Printer & Scanner', image: '/api/placeholder/300/200' },
      { name: 'Komputer & Laptop', image: '/api/placeholder/300/200' },
      { name: 'Aksesoris IT', image: '/api/placeholder/300/200' },
      { name: 'Layanan Service', image: '/api/placeholder/300/200' }
    ]
  });

  const handleInputChange = (section, field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Simulate API call
    toast.success('Pengaturan berhasil disimpan');
  };

  const tabs = [
    { id: 'general', name: 'General', icon: FiSettings },
    { id: 'contact', name: 'Contact Info', icon: FiPhone },
    { id: 'appearance', name: 'Appearance', icon: FiImage },
    { id: 'content', name: 'Content', icon: FiEdit }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
            <p className="text-gray-600">Kelola pengaturan sistem dan konten website</p>
          </div>
          <button onClick={handleSave} className="btn btn-primary">
            <FiSave className="w-4 h-4 mr-2" />
            Simpan Semua
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          {/* Tabs */}
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Website
                  </label>
                  <input
                    type="text"
                    value={settings.siteName}
                    onChange={(e) => handleInputChange('general', 'siteName', e.target.value)}
                    className="input"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deskripsi Website
                  </label>
                  <textarea
                    value={settings.siteDescription}
                    onChange={(e) => handleInputChange('general', 'siteDescription', e.target.value)}
                    rows={3}
                    className="input resize-none"
                  />
                </div>
              </div>
            )}

            {/* Contact Info */}
            {activeTab === 'contact' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FiPhone className="inline w-4 h-4 mr-1" />
                      Nomor Telepon
                    </label>
                    <input
                      type="text"
                      value={settings.phone}
                      onChange={(e) => handleInputChange('contact', 'phone', e.target.value)}
                      className="input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FiMail className="inline w-4 h-4 mr-1" />
                      Email
                    </label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => handleInputChange('contact', 'email', e.target.value)}
                      className="input"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FiMapPin className="inline w-4 h-4 mr-1" />
                    Alamat Lengkap
                  </label>
                  <textarea
                    value={settings.address}
                    onChange={(e) => handleInputChange('contact', 'address', e.target.value)}
                    rows={3}
                    className="input resize-none"
                  />
                </div>
              </div>
            )}

            {/* Appearance */}
            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Header Promo Text
                  </label>
                  <input
                    type="text"
                    value={settings.headerPromo}
                    onChange={(e) => handleInputChange('appearance', 'headerPromo', e.target.value)}
                    className="input"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Footer Description
                  </label>
                  <textarea
                    value={settings.footerDescription}
                    onChange={(e) => handleInputChange('appearance', 'footerDescription', e.target.value)}
                    rows={3}
                    className="input resize-none"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Footer Copyright
                    </label>
                    <input
                      type="text"
                      value={settings.footerCopyright}
                      onChange={(e) => handleInputChange('appearance', 'footerCopyright', e.target.value)}
                      className="input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Developer Credit
                    </label>
                    <input
                      type="text"
                      value={settings.footerDeveloper}
                      onChange={(e) => handleInputChange('appearance', 'footerDeveloper', e.target.value)}
                      className="input"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Content */}
            {activeTab === 'content' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Title (Homepage)
                  </label>
                  <input
                    type="text"
                    value={settings.heroTitle}
                    onChange={(e) => handleInputChange('content', 'heroTitle', e.target.value)}
                    className="input"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Subtitle (Homepage)
                  </label>
                  <textarea
                    value={settings.heroSubtitle}
                    onChange={(e) => handleInputChange('content', 'heroSubtitle', e.target.value)}
                    rows={2}
                    className="input resize-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Image URL
                  </label>
                  <input
                    type="url"
                    value={settings.heroImage}
                    onChange={(e) => handleInputChange('content', 'heroImage', e.target.value)}
                    className="input"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Featured Categories
                  </label>
                  <div className="space-y-4">
                    {settings.featuredCategories.map((category, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Category Name</label>
                          <input
                            type="text"
                            value={category.name}
                            onChange={(e) => {
                              const newCategories = [...settings.featuredCategories];
                              newCategories[index].name = e.target.value;
                              setSettings(prev => ({ ...prev, featuredCategories: newCategories }));
                            }}
                            className="input"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Image URL</label>
                          <input
                            type="url"
                            value={category.image}
                            onChange={(e) => {
                              const newCategories = [...settings.featuredCategories];
                              newCategories[index].image = e.target.value;
                              setSettings(prev => ({ ...prev, featuredCategories: newCategories }));
                            }}
                            className="input"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
