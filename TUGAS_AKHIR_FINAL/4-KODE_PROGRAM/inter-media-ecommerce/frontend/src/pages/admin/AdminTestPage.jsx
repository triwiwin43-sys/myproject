import { Link } from 'react-router-dom';
import AdminNav from '../../components/AdminNav';

const AdminTestPage = () => {
  const adminRoutes = [
    { path: '/admin/dashboard', label: 'Dashboard' },
    { path: '/admin/maintenance', label: 'Maintenance' },
    { path: '/admin/security', label: 'Security' },
    { path: '/admin/seller-approval', label: 'Seller Approval' },
    { path: '/admin/reports', label: 'Reports' },
    { path: '/admin/analytics', label: 'Analytics' },
    { path: '/admin/reviews', label: 'Reviews' },
    { path: '/admin/users', label: 'Users' },
    { path: '/admin/products', label: 'Products' },
    { path: '/admin/orders', label: 'Orders' },
    { path: '/admin/settings', label: 'Settings' },
  ];

  return (
    <div className="flex">
      <AdminNav />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Admin Routes Test</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {adminRoutes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="block p-4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900">{route.label}</h3>
              <p className="text-sm text-gray-500 mt-1">{route.path}</p>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="font-medium text-green-800">✅ Status</h3>
          <p className="text-green-700 mt-1">
            All admin pages have been created and routes are configured. 
            Click any link above to test the pages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminTestPage;
