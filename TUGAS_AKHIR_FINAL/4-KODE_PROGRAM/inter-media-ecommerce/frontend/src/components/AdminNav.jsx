import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, FiUsers, FiPackage, FiShoppingCart, FiSettings, 
  FiTool, FiShield, FiUserCheck, FiFileText, FiBarChart, FiStar 
} from 'react-icons/fi';

const AdminNav = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/admin/dashboard', label: 'Dasbor', icon: FiHome },
    { path: '/admin/users', label: 'Pengguna', icon: FiUsers },
    { path: '/admin/products', label: 'Produk', icon: FiPackage },
    { path: '/admin/orders', label: 'Pesanan', icon: FiShoppingCart },
    { path: '/admin/seller-approval', label: 'Persetujuan Penjual', icon: FiUserCheck },
    { path: '/admin/reviews', label: 'Ulasan', icon: FiStar },
    { path: '/admin/reports', label: 'Laporan', icon: FiFileText },
    { path: '/admin/analytics', label: 'Analitik', icon: FiBarChart },
    { path: '/admin/maintenance', label: 'Pemeliharaan', icon: FiTool },
    { path: '/admin/security', label: 'Keamanan', icon: FiShield },
    { path: '/admin/settings', label: 'Pengaturan', icon: FiSettings },
  ];

  return (
    <nav className="bg-white shadow-sm border-r border-gray-200 w-64 min-h-screen">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Panel Admin</h2>
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default AdminNav;
