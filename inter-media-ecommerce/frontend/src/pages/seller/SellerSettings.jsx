import React, { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiLock, FiSave, FiCamera, FiUpload, FiEye, FiEyeOff, FiCheck, FiX } from 'react-icons/fi';

const SellerSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [logoPreview, setLogoPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [saveStatus, setSaveStatus] = useState({ type: '', message: '' });

  const [formData, setFormData] = useState({
    storeName: 'Inter Medi-A Store',
    ownerName: 'John Doe',
    email: 'john@intermedia.com',
    phone: '081234567890',
    address: 'Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta 10110',
    description: 'Toko komputer dan printer terpercaya sejak 2020. Menyediakan berbagai kebutuhan teknologi untuk rumah dan kantor.',
    website: 'https://intermedia-store.com',
    businessHours: '09:00 - 18:00',
    category: 'Electronics & Technology'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    customerMessages: true,
    promotionalEmails: false,
    weeklyReports: true,
    lowStockAlerts: true,
    paymentNotifications: true
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
  };

  const handleNotificationChange = (key) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key]
    });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setSaveStatus({ type: 'error', message: 'File size must be less than 5MB' });
        return;
      }

      if (!file.type.startsWith('image/')) {
        setSaveStatus({ type: 'error', message: 'Please select a valid image file' });
        return;
      }

      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target.result);
        setIsUploading(false);
        setSaveStatus({ type: 'success', message: 'Logo uploaded successfully!' });
        setTimeout(() => setSaveStatus({ type: '', message: '' }), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    // Simulate API call
    setSaveStatus({ type: 'loading', message: 'Saving profile...' });
    setTimeout(() => {
      setSaveStatus({ type: 'success', message: 'Profile updated successfully!' });
      setTimeout(() => setSaveStatus({ type: '', message: '' }), 3000);
    }, 1000);
  };

  const handleUpdatePassword = () => {
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setSaveStatus({ type: 'error', message: 'Please fill in all password fields' });
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setSaveStatus({ type: 'error', message: 'New passwords do not match' });
      return;
    }

    if (passwordData.newPassword.length < 8) {
      setSaveStatus({ type: 'error', message: 'Password must be at least 8 characters long' });
      return;
    }

    // Simulate API call
    setSaveStatus({ type: 'loading', message: 'Updating password...' });
    setTimeout(() => {
      setSaveStatus({ type: 'success', message: 'Password updated successfully!' });
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setTimeout(() => setSaveStatus({ type: '', message: '' }), 3000);
    }, 1000);
  };

  const handleSaveNotifications = () => {
    setSaveStatus({ type: 'loading', message: 'Saving preferences...' });
    setTimeout(() => {
      setSaveStatus({ type: 'success', message: 'Notification preferences updated!' });
      setTimeout(() => setSaveStatus({ type: '', message: '' }), 3000);
    }, 1000);
  };

  const tabs = [
    { id: 'profile', name: 'Store Profile', icon: FiUser },
    { id: 'security', name: 'Security', icon: FiLock },
    { id: 'notifications', name: 'Notifications', icon: FiMail },
  ];

  const togglePasswordVisibility = (field) => {
    setShowPassword({
      ...showPassword,
      [field]: !showPassword[field]
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Store Settings</h1>
        <p className="text-gray-600">Manage your store profile and account settings</p>
      </div>

      {/* Status Messages */}
      {saveStatus.message && (
        <div className={`p-4 rounded-lg flex items-center space-x-2 ${
          saveStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' :
          saveStatus.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' :
          'bg-blue-50 text-blue-700 border border-blue-200'
        }`}>
          {saveStatus.type === 'success' && <FiCheck className="w-5 h-5" />}
          {saveStatus.type === 'error' && <FiX className="w-5 h-5" />}
          <span>{saveStatus.message}</span>
        </div>
      )}

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="space-y-6">
            {/* Store Logo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Store Logo</label>
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                  {logoPreview ? (
                    <img src={logoPreview} alt="Store Logo" className="w-full h-full object-cover" />
                  ) : (
                    <FiCamera className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                <div>
                  <input
                    type="file"
                    id="logo-upload"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="logo-upload"
                    className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer flex items-center ${
                      isUploading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <FiUpload className="w-4 h-4 mr-2" />
                    {isUploading ? 'Uploading...' : 'Upload Logo'}
                  </label>
                  <p className="text-xs text-gray-500 mt-1">Max 5MB, JPG/PNG only</p>
                </div>
              </div>
            </div>

            {/* Store Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Store Name</label>
                <input
                  type="text"
                  name="storeName"
                  value={formData.storeName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Owner Name</label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Hours</label>
                <input
                  type="text"
                  name="businessHours"
                  value={formData.businessHours}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Store Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Store Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex justify-end">
              <button 
                onClick={handleSaveProfile}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center"
                disabled={saveStatus.type === 'loading'}
              >
                <FiSave className="w-4 h-4 mr-2" />
                {saveStatus.type === 'loading' ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <div className="relative">
                    <input
                      type={showPassword.current ? 'text' : 'password'}
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('current')}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword.current ? <FiEyeOff className="w-4 h-4 text-gray-400" /> : <FiEye className="w-4 h-4 text-gray-400" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <div className="relative">
                    <input
                      type={showPassword.new ? 'text' : 'password'}
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('new')}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword.new ? <FiEyeOff className="w-4 h-4 text-gray-400" /> : <FiEye className="w-4 h-4 text-gray-400" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                  <div className="relative">
                    <input
                      type={showPassword.confirm ? 'text' : 'password'}
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('confirm')}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword.confirm ? <FiEyeOff className="w-4 h-4 text-gray-400" /> : <FiEye className="w-4 h-4 text-gray-400" />}
                    </button>
                  </div>
                </div>
                <button 
                  onClick={handleUpdatePassword}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  disabled={saveStatus.type === 'loading'}
                >
                  {saveStatus.type === 'loading' ? 'Updating...' : 'Update Password'}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Password Requirements:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• At least 8 characters long</li>
                <li>• Include uppercase and lowercase letters</li>
                <li>• Include at least one number</li>
                <li>• Include at least one special character</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
              <div className="space-y-4">
                {Object.entries({
                  orderUpdates: 'Order Updates',
                  customerMessages: 'Customer Messages',
                  promotionalEmails: 'Promotional Emails',
                  weeklyReports: 'Weekly Reports',
                  lowStockAlerts: 'Low Stock Alerts',
                  paymentNotifications: 'Payment Notifications'
                }).map(([key, label]) => (
                  <div key={key} className="flex items-center justify-between py-2">
                    <div>
                      <h4 className="font-medium text-gray-900">{label}</h4>
                      <p className="text-sm text-gray-500">
                        {key === 'orderUpdates' && 'Get notified when orders are placed or updated'}
                        {key === 'customerMessages' && 'Receive notifications for customer inquiries'}
                        {key === 'promotionalEmails' && 'Marketing and promotional content'}
                        {key === 'weeklyReports' && 'Weekly sales and performance reports'}
                        {key === 'lowStockAlerts' && 'Alerts when product stock is running low'}
                        {key === 'paymentNotifications' && 'Payment confirmations and updates'}
                      </p>
                    </div>
                    <button
                      onClick={() => handleNotificationChange(key)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        notifications[key] ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications[key] ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button 
                onClick={handleSaveNotifications}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center"
                disabled={saveStatus.type === 'loading'}
              >
                <FiSave className="w-4 h-4 mr-2" />
                {saveStatus.type === 'loading' ? 'Saving...' : 'Save Preferences'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerSettings;
