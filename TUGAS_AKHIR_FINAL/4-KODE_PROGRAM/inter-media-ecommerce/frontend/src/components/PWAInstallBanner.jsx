import { FiDownload, FiX } from 'react-icons/fi';
import { usePWA } from '../hooks/usePWA';
import { useState } from 'react';

const PWAInstallBanner = () => {
  const { isInstallable, installApp } = usePWA();
  const [isVisible, setIsVisible] = useState(true);

  if (!isInstallable || !isVisible) return null;

  const handleInstall = async () => {
    const success = await installApp();
    if (success) {
      setIsVisible(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-50 md:left-auto md:right-4 md:max-w-sm">
      <div className="flex items-center justify-between">
        <div className="flex-1 mr-3">
          <h3 className="font-semibold text-sm">Install Inter Medi-A</h3>
          <p className="text-xs opacity-90">Akses lebih cepat dari home screen</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleInstall}
            className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium flex items-center"
          >
            <FiDownload className="w-4 h-4 mr-1" />
            Install
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:bg-blue-700 p-1 rounded"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallBanner;
