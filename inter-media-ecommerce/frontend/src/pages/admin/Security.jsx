import { useState } from 'react';
import { FiShield, FiLock, FiEye, FiAlertTriangle, FiCheck } from 'react-icons/fi';
import toast from 'react-hot-toast';

const AdminSecurity = () => {
  const [settings, setSettings] = useState({
    twoFactorAuth: true,
    loginAttempts: 5,
    sessionTimeout: 30,
    passwordExpiry: 90,
    ipWhitelist: true,
    auditLog: true
  });

  const handleSave = () => {
    toast.success('Security settings updated');
  };

  const securityLogs = [
    { id: 1, type: 'login', user: 'admin@intermedia.com', ip: '192.168.1.1', status: 'success', time: '2024-12-24 10:30' },
    { id: 2, type: 'failed_login', user: 'unknown@test.com', ip: '192.168.1.100', status: 'blocked', time: '2024-12-24 09:15' },
    { id: 3, type: 'password_change', user: 'seller@intermedia.com', ip: '192.168.1.50', status: 'success', time: '2024-12-23 16:20' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Security Settings</h1>
          <p className="text-gray-600">Manage system security and access controls</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Security Settings */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-6 flex items-center">
              <FiShield className="w-5 h-5 mr-2 text-blue-600" />
              Security Configuration
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-500">Require 2FA for admin accounts</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.twoFactorAuth}
                  onChange={(e) => setSettings({...settings, twoFactorAuth: e.target.checked})}
                  className="toggle"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Login Attempts
                </label>
                <input
                  type="number"
                  value={settings.loginAttempts}
                  onChange={(e) => setSettings({...settings, loginAttempts: e.target.value})}
                  className="input w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Session Timeout (minutes)
                </label>
                <input
                  type="number"
                  value={settings.sessionTimeout}
                  onChange={(e) => setSettings({...settings, sessionTimeout: e.target.value})}
                  className="input w-full"
                />
              </div>

              <button onClick={handleSave} className="btn btn-primary w-full">
                Save Security Settings
              </button>
            </div>
          </div>

          {/* Security Logs */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-6 flex items-center">
              <FiEye className="w-5 h-5 mr-2 text-green-600" />
              Recent Security Events
            </h2>
            
            <div className="space-y-4">
              {securityLogs.map((log) => (
                <div key={log.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium capitalize">{log.type.replace('_', ' ')}</div>
                    <div className="text-sm text-gray-500">{log.user} - {log.ip}</div>
                  </div>
                  <div className="text-right">
                    <div className={`px-2 py-1 rounded text-xs ${log.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {log.status}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{log.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSecurity;
