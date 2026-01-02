import { useState } from 'react';
import { FiTool, FiDatabase, FiRefreshCw, FiTrash2, FiDownload } from 'react-icons/fi';
import toast from 'react-hot-toast';
import BackButton from '../../components/BackButton';

const AdminMaintenance = () => {
  const [isRunning, setIsRunning] = useState(false);

  const runMaintenance = async (type) => {
    setIsRunning(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRunning(false);
    toast.success(`${type} completed successfully`);
  };

  const systemStats = {
    dbSize: '2.4 GB',
    cacheSize: '156 MB',
    logSize: '89 MB',
    tempFiles: '23 MB',
    lastBackup: '2024-12-24 02:00',
    uptime: '15 days 4 hours'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <BackButton to="/admin/dashboard" />
        </div>
        
        <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Pemeliharaan Sistem</h1>
          <p className="text-gray-600">Kelola pemeliharaan dan optimasi sistem</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* System Stats */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-6">System Statistics</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Database Size:</span>
                <span className="font-medium">{systemStats.dbSize}</span>
              </div>
              <div className="flex justify-between">
                <span>Cache Size:</span>
                <span className="font-medium">{systemStats.cacheSize}</span>
              </div>
              <div className="flex justify-between">
                <span>Log Files:</span>
                <span className="font-medium">{systemStats.logSize}</span>
              </div>
              <div className="flex justify-between">
                <span>Temp Files:</span>
                <span className="font-medium">{systemStats.tempFiles}</span>
              </div>
              <div className="flex justify-between">
                <span>Last Backup:</span>
                <span className="font-medium">{systemStats.lastBackup}</span>
              </div>
              <div className="flex justify-between">
                <span>System Uptime:</span>
                <span className="font-medium">{systemStats.uptime}</span>
              </div>
            </div>
          </div>

          {/* Maintenance Actions */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-6">Maintenance Actions</h2>
            <div className="space-y-4">
              <button
                onClick={() => runMaintenance('Database Optimization')}
                disabled={isRunning}
                className="w-full btn btn-outline flex items-center justify-center"
              >
                <FiDatabase className="w-4 h-4 mr-2" />
                Optimize Database
              </button>
              
              <button
                onClick={() => runMaintenance('Cache Clear')}
                disabled={isRunning}
                className="w-full btn btn-outline flex items-center justify-center"
              >
                <FiRefreshCw className="w-4 h-4 mr-2" />
                Clear Cache
              </button>
              
              <button
                onClick={() => runMaintenance('Log Cleanup')}
                disabled={isRunning}
                className="w-full btn btn-outline flex items-center justify-center"
              >
                <FiTrash2 className="w-4 h-4 mr-2" />
                Clean Log Files
              </button>
              
              <button
                onClick={() => runMaintenance('System Backup')}
                disabled={isRunning}
                className="w-full btn btn-primary flex items-center justify-center"
              >
                <FiDownload className="w-4 h-4 mr-2" />
                Buat Cadangan
              </button>
            </div>
          </div>
        </div>

        {/* Maintenance Schedule */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-6">Scheduled Maintenance</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Task</th>
                  <th className="text-left py-2">Frequency</th>
                  <th className="text-left py-2">Last Run</th>
                  <th className="text-left py-2">Next Run</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Database Backup</td>
                  <td className="py-2">Daily</td>
                  <td className="py-2">2024-12-24 02:00</td>
                  <td className="py-2">2024-12-25 02:00</td>
                  <td className="py-2"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Log Rotation</td>
                  <td className="py-2">Weekly</td>
                  <td className="py-2">2024-12-22 03:00</td>
                  <td className="py-2">2024-12-29 03:00</td>
                  <td className="py-2"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMaintenance;
