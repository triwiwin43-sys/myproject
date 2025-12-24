// Admin Settings - Full Configuration
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
  FiSave, 
  FiSettings, 
  FiMail, 
  FiShield,
  FiDatabase,
  FiCreditCard,
  FiTruck,
  FiBell,
  FiGlobe,
  FiUsers,
  FiKey,
  FiUpload
} from 'react-icons/fi';
import toast from 'react-hot-toast';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  // General Settings
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'Inter Medi-A E-Commerce',
    siteDescription: 'Toko online printer, komputer dan peralatan kantor terpercaya',
    contactEmail: 'info@intermedia.com',
    contactPhone: '+6281234567890',
    address: 'Jl. Sudirman No. 123, Jakarta Pusat',
    currency: 'IDR',
    timezone: 'Asia/Jakarta',
    language: 'id'
  });

  // Payment Settings
  const [paymentSettings, setPaymentSettings] = useState({
    midtransServerKey: '****-****-****-****',
    midtransClientKey: '****-****-****-****',
    midtransEnvironment: 'sandbox',
    enableBankTransfer: true,
    enableCreditCard: true,
    enableEWallet: true,
    taxRate: 11,
    shippingTax: true
  });

  // Shipping Settings
  const [shippingSettings, setShippingSettings] = useState({
    rajaOngkirApiKey: '****-****-****-****',
    jneApiKey: '****-****-****-****',
    jtApiKey: '****-****-****-****',
    sicepatApiKey: '****-****-****-****',
    freeShippingThreshold: 500000,
    defaultShippingCost: 25000,
    maxWeight: 30000,
    originCity: 'Jakarta'
  });

  // Email Settings
  const [emailSettings, setEmailSettings] = useState({
    smtpHost: 'smtp.gmail.com',
    smtpPort: 587,
    smtpUser: 'noreply@intermedia.com',
    smtpPassword: '****-****-****-****',
    fromName: 'Inter Medi-A',
    fromEmail: 'noreply@intermedia.com',
    enableOrderConfirmation: true,
    enableShippingNotification: true,
    enableMarketingEmails: true
  });

  // Security Settings
  const [securitySettings, setSecuritySettings] = useState({
    jwtSecret: '****-****-****-****',
    jwtExpiration: '7d',
    maxLoginAttempts: 5,
    lockoutDuration: 30,
    enableTwoFactor: false,
    passwordMinLength: 8,
    requireSpecialChar: true,
    sessionTimeout: 24
  });

  // Notification Settings
  const [notificationSettings, setNotificationSettings] = useState({
    enableEmailNotifications: true,
    enableSMSNotifications: false,
    enablePushNotifications: true,
    notifyNewOrders: true,
    notifyLowStock: true,
    notifyPaymentReceived: true,
    notifyShippingUpdates: true,
    stockThreshold: 5
  });

  const handleSaveSettings = async (settingsType) => {
    try {
      // API call to save settings
      console.log(`Saving ${settingsType} settings`);
      toast.success('Pengaturan berhasil disimpan');
    } catch (error) {
      toast.error('Gagal menyimpan pengaturan');
    }
  };

  const tabs = [
    { id: 'general', name: 'General', icon: FiSettings },
    { id: 'payment', name: 'Payment', icon: FiCreditCard },
    { id: 'shipping', name: 'Shipping', icon: FiTruck },
    { id: 'email', name: 'Email', icon: FiMail },
    { id: 'security', name: 'Security', icon: FiShield },
    { id: 'notifications', name: 'Notifications', icon: FiBell },
    { id: 'backup', name: 'Backup', icon: FiDatabase }
  ];

  const GeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Site Name
            </label>
            <input
              type="text"
              value={generalSettings.siteName}
              onChange={(e) => setGeneralSettings(prev => ({ ...prev, siteName: e.target.value }))}
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Email
            </label>
            <input
              type="email"
              value={generalSettings.contactEmail}
              onChange={(e) => setGeneralSettings(prev => ({ ...prev, contactEmail: e.target.value }))}
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Phone
            </label>
            <input
              type="text"
              value={generalSettings.contactPhone}
              onChange={(e) => setGeneralSettings(prev => ({ ...prev, contactPhone: e.target.value }))}
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Currency
            </label>
            <select
              value={generalSettings.currency}
              onChange={(e) => setGeneralSettings(prev => ({ ...prev, currency: e.target.value }))}
              className="input"
            >
              <option value="IDR">Indonesian Rupiah (IDR)</option>
              <option value="USD">US Dollar (USD)</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Site Description
            </label>
            <textarea
              value={generalSettings.siteDescription}
              onChange={(e) => setGeneralSettings(prev => ({ ...prev, siteDescription: e.target.value }))}
              rows={3}
              className="input"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <textarea
              value={generalSettings.address}
              onChange={(e) => setGeneralSettings(prev => ({ ...prev, address: e.target.value }))}
              rows={2}
              className="input"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => handleSaveSettings('general')}
            className="btn btn-primary"
          >
            <FiSave className="w-4 h-4 mr-2" />
            Save General Settings
          </button>
        </div>
      </div>
    </div>
  );

  const PaymentSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Gateway Settings</h3>
        
        {/* Midtrans Configuration */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h4 className="font-medium text-gray-900 mb-4">Midtrans Configuration</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Server Key
              </label>
              <input
                type="password"
                value={paymentSettings.midtransServerKey}
                onChange={(e) => setPaymentSettings(prev => ({ ...prev, midtransServerKey: e.target.value }))}
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Client Key
              </label>
              <input
                type="password"
                value={paymentSettings.midtransClientKey}
                onChange={(e) => setPaymentSettings(prev => ({ ...prev, midtransClientKey: e.target.value }))}
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Environment
              </label>
              <select
                value={paymentSettings.midtransEnvironment}
                onChange={(e) => setPaymentSettings(prev => ({ ...prev, midtransEnvironment: e.target.value }))}
                className="input"
              >
                <option value="sandbox">Sandbox</option>
                <option value="production">Production</option>
              </select>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h4 className="font-medium text-gray-900 mb-4">Enabled Payment Methods</h4>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={paymentSettings.enableBankTransfer}
                onChange={(e) => setPaymentSettings(prev => ({ ...prev, enableBankTransfer: e.target.checked }))}
                className="rounded border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Bank Transfer</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={paymentSettings.enableCreditCard}
                onChange={(e) => setPaymentSettings(prev => ({ ...prev, enableCreditCard: e.target.checked }))}
                className="rounded border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Credit Card</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={paymentSettings.enableEWallet}
                onChange={(e) => setPaymentSettings(prev => ({ ...prev, enableEWallet: e.target.checked }))}
                className="rounded border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">E-Wallet (DANA, OVO, GoPay)</span>
            </label>
          </div>
        </div>

        {/* Tax Settings */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-medium text-gray-900 mb-4">Tax Settings</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tax Rate (%)
              </label>
              <input
                type="number"
                value={paymentSettings.taxRate}
                onChange={(e) => setPaymentSettings(prev => ({ ...prev, taxRate: parseFloat(e.target.value) }))}
                className="input"
                min="0"
                max="100"
                step="0.1"
              />
            </div>
            <div className="flex items-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={paymentSettings.shippingTax}
                  onChange={(e) => setPaymentSettings(prev => ({ ...prev, shippingTax: e.target.checked }))}
                  className="rounded border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">Apply tax to shipping</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => handleSaveSettings('payment')}
            className="btn btn-primary"
          >
            <FiSave className="w-4 h-4 mr-2" />
            Save Payment Settings
          </button>
        </div>
      </div>
    </div>
  );

  const SecuritySettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              JWT Secret Key
            </label>
            <input
              type="password"
              value={securitySettings.jwtSecret}
              onChange={(e) => setSecuritySettings(prev => ({ ...prev, jwtSecret: e.target.value }))}
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              JWT Expiration
            </label>
            <select
              value={securitySettings.jwtExpiration}
              onChange={(e) => setSecuritySettings(prev => ({ ...prev, jwtExpiration: e.target.value }))}
              className="input"
            >
              <option value="1h">1 Hour</option>
              <option value="24h">24 Hours</option>
              <option value="7d">7 Days</option>
              <option value="30d">30 Days</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Login Attempts
            </label>
            <input
              type="number"
              value={securitySettings.maxLoginAttempts}
              onChange={(e) => setSecuritySettings(prev => ({ ...prev, maxLoginAttempts: parseInt(e.target.value) }))}
              className="input"
              min="1"
              max="10"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lockout Duration (minutes)
            </label>
            <input
              type="number"
              value={securitySettings.lockoutDuration}
              onChange={(e) => setSecuritySettings(prev => ({ ...prev, lockoutDuration: parseInt(e.target.value) }))}
              className="input"
              min="5"
              max="1440"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password Min Length
            </label>
            <input
              type="number"
              value={securitySettings.passwordMinLength}
              onChange={(e) => setSecuritySettings(prev => ({ ...prev, passwordMinLength: parseInt(e.target.value) }))}
              className="input"
              min="6"
              max="20"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Session Timeout (hours)
            </label>
            <input
              type="number"
              value={securitySettings.sessionTimeout}
              onChange={(e) => setSecuritySettings(prev => ({ ...prev, sessionTimeout: parseInt(e.target.value) }))}
              className="input"
              min="1"
              max="168"
            />
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={securitySettings.enableTwoFactor}
              onChange={(e) => setSecuritySettings(prev => ({ ...prev, enableTwoFactor: e.target.checked }))}
              className="rounded border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">Enable Two-Factor Authentication</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={securitySettings.requireSpecialChar}
              onChange={(e) => setSecuritySettings(prev => ({ ...prev, requireSpecialChar: e.target.checked }))}
              className="rounded border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">Require Special Characters in Password</span>
          </label>
        </div>

        <div className="mt-6">
          <button
            onClick={() => handleSaveSettings('security')}
            className="btn btn-primary"
          >
            <FiSave className="w-4 h-4 mr-2" />
            Save Security Settings
          </button>
        </div>
      </div>
    </div>
  );

  const BackupSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Backup & Maintenance</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Database Backup</h4>
            <p className="text-sm text-gray-600 mb-4">
              Last backup: December 23, 2024 at 02:00 AM
            </p>
            <div className="space-y-3">
              <button className="btn btn-primary w-full">
                <FiDatabase className="w-4 h-4 mr-2" />
                Create Backup Now
              </button>
              <button className="btn btn-outline w-full">
                <FiDownload className="w-4 h-4 mr-2" />
                Download Latest Backup
              </button>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">System Maintenance</h4>
            <p className="text-sm text-gray-600 mb-4">
              Keep your system running smoothly
            </p>
            <div className="space-y-3">
              <button className="btn btn-outline w-full">
                <FiSettings className="w-4 h-4 mr-2" />
                Clear Cache
              </button>
              <button className="btn btn-outline w-full">
                <FiUpload className="w-4 h-4 mr-2" />
                Update System
              </button>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex">
            <FiShield className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-yellow-800">
                Backup Recommendations
              </h4>
              <div className="mt-2 text-sm text-yellow-700">
                <ul className="list-disc list-inside space-y-1">
                  <li>Schedule automatic daily backups at 2:00 AM</li>
                  <li>Keep at least 7 days of backup history</li>
                  <li>Store backups in secure cloud storage</li>
                  <li>Test backup restoration monthly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return <GeneralSettings />;
      case 'payment':
        return <PaymentSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'backup':
        return <BackupSettings />;
      default:
        return <GeneralSettings />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Pengaturan Sistem</h1>
        <p className="text-gray-600">Konfigurasi dan pengaturan aplikasi</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
