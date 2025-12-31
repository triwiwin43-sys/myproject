import { useState, useEffect } from 'react';
import { 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiCamera,
  FiEdit,
  FiSave,
  FiX,
  FiPlus,
  FiTrash2,
  FiShield,
  FiShoppingBag,
  FiPackage,
  FiSettings,
  FiHeart
} from 'react-icons/fi';
import useAuthStore from '../context/authStore';
import toast from 'react-hot-toast';

const Profile = () => {
  const { user, updateProfile } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    avatar: '',
    bio: '',
    company: '',
    website: ''
  });
  const [addresses, setAddresses] = useState([]);
  const [sellerInfo, setSellerInfo] = useState({
    storeName: '',
    storeDescription: '',
    businessType: '',
    taxId: '',
    bankAccount: '',
    bankName: '',
    accountHolder: ''
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        avatar: user.avatar || '',
        bio: user.bio || '',
        company: user.company || '',
        website: user.website || ''
      });
      setAddresses(user.addresses || []);
      setSellerInfo(user.sellerInfo || {
        storeName: '',
        storeDescription: '',
        businessType: '',
        taxId: '',
        bankAccount: '',
        bankName: '',
        accountHolder: ''
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSellerInfoChange = (e) => {
    setSellerInfo({
      ...sellerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('File harus berupa gambar');
      return;
    }

    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast.error('Ukuran file maksimal 2MB');
      return;
    }

    setUploadingAvatar(true);

    try {
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData(prev => ({
          ...prev,
          avatar: e.target.result
        }));
      };
      reader.readAsDataURL(file);

      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Foto profil berhasil diupload');
    } catch (error) {
      toast.error('Gagal mengupload foto');
    } finally {
      setUploadingAvatar(false);
    }
  };

  const handleSaveProfile = async () => {
    try {
      await updateProfile(profileData);
      setIsEditing(false);
      toast.success('Profil berhasil diperbarui');
    } catch (error) {
      toast.error('Gagal memperbarui profil');
    }
  };

  const handleSaveSellerInfo = async () => {
    try {
      // API call to update seller info
      toast.success('Informasi seller berhasil diperbarui');
    } catch (error) {
      toast.error('Gagal memperbarui informasi seller');
    }
  };

  const addAddress = () => {
    const newAddress = {
      id: Date.now(),
      label: '',
      name: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      isDefault: addresses.length === 0
    };
    setAddresses([...addresses, newAddress]);
  };

  const updateAddress = (id, field, value) => {
    setAddresses(addresses.map(addr => 
      addr.id === id ? { ...addr, [field]: value } : addr
    ));
  };

  const removeAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  const setDefaultAddress = (id) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  const tabs = [
    { id: 'profile', name: 'Profil Pribadi', icon: FiUser },
    { id: 'addresses', name: 'Alamat', icon: FiMapPin },
    ...(user?.role === 'customer' ? [
      { id: 'wishlist', name: 'Wishlist', icon: FiHeart }
    ] : []),
    ...(user?.role === 'seller' || user?.role === 'admin' ? [
      { id: 'seller', name: 'Info Seller', icon: FiShoppingBag }
    ] : []),
    ...(user?.role === 'admin' ? [
      { id: 'admin', name: 'Pengaturan Admin', icon: FiSettings }
    ] : []),
    { id: 'security', name: 'Keamanan', icon: FiShield }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profil Saya</h1>
          <p className="text-gray-600">Kelola informasi profil dan pengaturan akun Anda</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              {/* Profile Summary */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden">
                    {profileData.avatar ? (
                      <img src={profileData.avatar} alt="Avatar" className="w-20 h-20 rounded-full object-cover" />
                    ) : (
                      <FiUser className="w-10 h-10 text-gray-400" />
                    )}
                  </div>
                  <label className="absolute bottom-0 right-0 p-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                      className="hidden"
                      disabled={uploadingAvatar}
                    />
                    {uploadingAvatar ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    ) : (
                      <FiCamera className="w-4 h-4" />
                    )}
                  </label>
                </div>
                <h3 className="font-semibold text-gray-900">{profileData.name || 'Nama Pengguna'}</h3>
                <p className="text-sm text-gray-600">{profileData.email}</p>
                {user?.role === 'seller' && (
                  <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    Seller
                  </span>
                )}
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <IconComponent className="w-5 h-5 mr-3" />
                      {tab.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Informasi Profil</h2>
                    <button
                      onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                      className="btn btn-primary btn-sm"
                    >
                      {isEditing ? (
                        <>
                          <FiSave className="w-4 h-4 mr-2" />
                          Simpan
                        </>
                      ) : (
                        <>
                          <FiEdit className="w-4 h-4 mr-2" />
                          Edit
                        </>
                      )}
                    </button>
                  </div>

                  {/* Profile Photo Section */}
                  <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Foto Profil</h3>
                    <div className="flex items-center space-x-6">
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                        {profileData.avatar ? (
                          <img src={profileData.avatar} alt="Avatar" className="w-24 h-24 rounded-full object-cover" />
                        ) : (
                          <FiUser className="w-12 h-12 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-3">
                          Upload foto profil Anda. File harus berformat JPG, PNG dengan ukuran maksimal 2MB.
                        </p>
                        <div className="flex space-x-3">
                          <label className="btn btn-outline btn-sm cursor-pointer">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleAvatarUpload}
                              className="hidden"
                              disabled={uploadingAvatar}
                            />
                            {uploadingAvatar ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                                Uploading...
                              </>
                            ) : (
                              <>
                                <FiCamera className="w-4 h-4 mr-2" />
                                Ganti Foto
                              </>
                            )}
                          </label>
                          {profileData.avatar && (
                            <button
                              onClick={() => setProfileData(prev => ({ ...prev, avatar: '' }))}
                              className="btn btn-outline btn-sm text-red-600 border-red-600 hover:bg-red-50"
                            >
                              <FiTrash2 className="w-4 h-4 mr-2" />
                              Hapus
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={profileData.name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="input"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="input"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="input"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Perusahaan
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={profileData.company}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="input"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={profileData.website}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="input"
                        placeholder="https://"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        name="bio"
                        value={profileData.bio}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        rows={4}
                        className="input resize-none"
                        placeholder="Ceritakan tentang diri Anda..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === 'addresses' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Alamat Saya</h2>
                    <button onClick={addAddress} className="btn btn-primary btn-sm">
                      <FiPlus className="w-4 h-4 mr-2" />
                      Tambah Alamat
                    </button>
                  </div>

                  <div className="space-y-4">
                    {addresses.map((address) => (
                      <div key={address.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <input
                              type="text"
                              value={address.label}
                              onChange={(e) => updateAddress(address.id, 'label', e.target.value)}
                              placeholder="Label alamat (Rumah, Kantor, dll)"
                              className="font-medium text-gray-900 bg-transparent border-none p-0 focus:ring-0"
                            />
                            {address.isDefault && (
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                                Utama
                              </span>
                            )}
                          </div>
                          <div className="flex space-x-2">
                            {!address.isDefault && (
                              <button
                                onClick={() => setDefaultAddress(address.id)}
                                className="text-blue-600 hover:text-blue-700 text-sm"
                              >
                                Jadikan Utama
                              </button>
                            )}
                            <button
                              onClick={() => removeAddress(address.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <FiTrash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            value={address.name}
                            onChange={(e) => updateAddress(address.id, 'name', e.target.value)}
                            placeholder="Nama penerima"
                            className="input"
                          />
                          <input
                            type="tel"
                            value={address.phone}
                            onChange={(e) => updateAddress(address.id, 'phone', e.target.value)}
                            placeholder="Nomor telepon"
                            className="input"
                          />
                          <div className="md:col-span-2">
                            <textarea
                              value={address.address}
                              onChange={(e) => updateAddress(address.id, 'address', e.target.value)}
                              placeholder="Alamat lengkap"
                              rows={2}
                              className="input resize-none"
                            />
                          </div>
                          <input
                            type="text"
                            value={address.city}
                            onChange={(e) => updateAddress(address.id, 'city', e.target.value)}
                            placeholder="Kota"
                            className="input"
                          />
                          <input
                            type="text"
                            value={address.postalCode}
                            onChange={(e) => updateAddress(address.id, 'postalCode', e.target.value)}
                            placeholder="Kode pos"
                            className="input"
                          />
                        </div>
                      </div>
                    ))}

                    {addresses.length === 0 && (
                      <div className="text-center py-8">
                        <FiMapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">Belum ada alamat tersimpan</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Seller Info Tab */}
              {activeTab === 'seller' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Informasi Seller</h2>
                    <button onClick={handleSaveSellerInfo} className="btn btn-primary btn-sm">
                      <FiSave className="w-4 h-4 mr-2" />
                      Simpan
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Toko
                        </label>
                        <input
                          type="text"
                          name="storeName"
                          value={sellerInfo.storeName}
                          onChange={handleSellerInfoChange}
                          className="input"
                          placeholder="Nama toko Anda"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Jenis Bisnis
                        </label>
                        <select
                          name="businessType"
                          value={sellerInfo.businessType}
                          onChange={handleSellerInfoChange}
                          className="input"
                        >
                          <option value="">Pilih jenis bisnis</option>
                          <option value="individual">Perorangan</option>
                          <option value="cv">CV</option>
                          <option value="pt">PT</option>
                          <option value="koperasi">Koperasi</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Deskripsi Toko
                        </label>
                        <textarea
                          name="storeDescription"
                          value={sellerInfo.storeDescription}
                          onChange={handleSellerInfoChange}
                          rows={4}
                          className="input resize-none"
                          placeholder="Ceritakan tentang toko Anda..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          NPWP/NIK
                        </label>
                        <input
                          type="text"
                          name="taxId"
                          value={sellerInfo.taxId}
                          onChange={handleSellerInfoChange}
                          className="input"
                          placeholder="Nomor NPWP atau NIK"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Bank
                        </label>
                        <input
                          type="text"
                          name="bankName"
                          value={sellerInfo.bankName}
                          onChange={handleSellerInfoChange}
                          className="input"
                          placeholder="Nama bank"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nomor Rekening
                        </label>
                        <input
                          type="text"
                          name="bankAccount"
                          value={sellerInfo.bankAccount}
                          onChange={handleSellerInfoChange}
                          className="input"
                          placeholder="Nomor rekening"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Pemegang Rekening
                        </label>
                        <input
                          type="text"
                          name="accountHolder"
                          value={sellerInfo.accountHolder}
                          onChange={handleSellerInfoChange}
                          className="input"
                          placeholder="Nama sesuai rekening"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Wishlist Tab */}
              {activeTab === 'wishlist' && user?.role === 'customer' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Wishlist Saya</h2>
                    <a
                      href="/wishlist"
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      Lihat Semua
                    </a>
                  </div>
                  
                  <div className="text-center py-8">
                    <FiHeart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">
                      Wishlist Anda akan ditampilkan di sini
                    </p>
                    <a
                      href="/wishlist"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      <FiHeart className="w-4 h-4 mr-2" />
                      Kelola Wishlist
                    </a>
                  </div>
                </div>
              )}

              {/* Admin Tab */}
              {activeTab === 'admin' && user?.role === 'admin' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Admin Settings</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium text-gray-900 mb-2">System Management</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Kelola pengaturan sistem dan konfigurasi
                        </p>
                        <div className="space-y-2">
                          <Link to="/admin/logs" className="w-full btn btn-outline btn-sm text-left">
                            System Logs & Activity
                          </Link>
                          <button className="w-full btn btn-outline btn-sm text-left">
                            Kelola User & Roles
                          </button>
                          <button className="w-full btn btn-outline btn-sm text-left">
                            System Configuration
                          </button>
                          <button className="w-full btn btn-outline btn-sm text-left">
                            Database Management
                          </button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium text-gray-900 mb-2">Content Management</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Kelola konten dan moderasi platform
                        </p>
                        <div className="space-y-2">
                          <button className="w-full btn btn-outline btn-sm text-left">
                            Moderasi Produk
                          </button>
                          <button className="w-full btn btn-outline btn-sm text-left">
                            Kelola Kategori
                          </button>
                          <button className="w-full btn btn-outline btn-sm text-left">
                            Review Management
                          </button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium text-gray-900 mb-2">Analytics & Reports</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Lihat laporan dan analitik sistem
                        </p>
                        <div className="space-y-2">
                          <button className="w-full btn btn-outline btn-sm text-left">
                            Sales Report
                          </button>
                          <button className="w-full btn btn-outline btn-sm text-left">
                            User Analytics
                          </button>
                          <button className="w-full btn btn-outline btn-sm text-left">
                            System Logs
                          </button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium text-gray-900 mb-2">Platform Settings</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Pengaturan global platform
                        </p>
                        <div className="space-y-2">
                          <button className="w-full btn btn-outline btn-sm text-left">
                            Payment Settings
                          </button>
                          <button className="w-full btn btn-outline btn-sm text-left">
                            Shipping Configuration
                          </button>
                          <button className="w-full btn btn-outline btn-sm text-left">
                            Email Templates
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h3 className="font-medium text-red-900 mb-2">Danger Zone</h3>
                        <p className="text-sm text-red-700 mb-4">
                          Aksi berbahaya yang memerlukan konfirmasi khusus
                        </p>
                        <div className="space-y-2">
                          <button className="btn btn-outline btn-sm text-red-600 border-red-600 hover:bg-red-50">
                            Backup Database
                          </button>
                          <button className="btn btn-outline btn-sm text-red-600 border-red-600 hover:bg-red-50">
                            Mode Pemeliharaan Sistem
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Keamanan Akun</h2>
                  
                  <div className="space-y-6">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium text-gray-900 mb-2">Ubah Password</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Pastikan akun Anda menggunakan password yang kuat
                      </p>
                      <button className="btn btn-outline btn-sm">
                        Ubah Password
                      </button>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium text-gray-900 mb-2">Autentikasi Dua Faktor</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Tambahkan lapisan keamanan ekstra untuk akun Anda
                      </p>
                      <button className="btn btn-outline btn-sm">
                        Aktifkan 2FA
                      </button>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium text-gray-900 mb-2">Sesi Aktif</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Kelola perangkat yang terhubung ke akun Anda
                      </p>
                      <button className="btn btn-outline btn-sm">
                        Lihat Sesi
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
