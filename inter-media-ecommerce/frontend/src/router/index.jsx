import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import OrderPayment from '../pages/OrderPayment';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Profile from '../pages/Profile';
import Orders from '../pages/Orders';
import OrderDetail from '../pages/OrderDetail';
import Services from '../pages/Services';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Categories from '../pages/Categories';
import Help from '../pages/Help';
import Shipping from '../pages/Shipping';
import Returns from '../pages/Returns';
import Warranty from '../pages/Warranty';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import Careers from '../pages/Careers';
import Press from '../pages/Press';
import Blog from '../pages/Blog';
import Cookies from '../pages/Cookies';
import Refund from '../pages/Refund';
import SellerLayout from '../pages/seller/SellerLayout';
import SellerDashboard from '../pages/seller/SellerDashboard';
import SellerDashboardContent from '../pages/seller/SellerDashboardContent';
import SellerCustomers from '../pages/seller/SellerCustomers';
import SellerServices from '../pages/seller/SellerServices';
import SellerReports from '../pages/seller/SellerReports';
import SellerSettings from '../pages/seller/SellerSettings';
import ManageProducts from '../pages/seller/ManageProducts';
import AddEditProduct from '../pages/seller/AddEditProduct';
import SellerOrders from '../pages/seller/SellerOrders';
import SellerReviews from '../pages/seller/SellerReviews';
import PaymentMethods from '../pages/seller/PaymentMethods';
import AdminDashboard from '../pages/admin/Dashboard';
import AdminLogs from '../pages/admin/AdminLogs';
import AdminPaymentApproval from '../pages/admin/PaymentApproval';
import AdminSettings from '../pages/admin/Settings';
import AdminOrders from '../pages/admin/Orders';
import AdminProducts from '../pages/admin/Products';
import AdminProductEdit from '../pages/admin/ProductEdit';
import AdminUsers from '../pages/admin/Users';
import AdminSecurity from '../pages/admin/Security';
import AdminMaintenance from '../pages/admin/Maintenance';
import AdminSellerApproval from '../pages/admin/SellerApproval';
import AdminReports from '../pages/admin/Reports';
import AdminAnalytics from '../pages/admin/Analytics';
import AdminReviews from '../pages/admin/Reviews';
import AdminServiceManagement from '../pages/admin/ServiceManagement';
import AdminTestPage from '../pages/admin/AdminTestPage';
import Wishlist from '../pages/Wishlist';
import ProtectedRoute from '../components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/:id',
        element: <ProductDetail />
      },
      {
        path: 'categories',
        element: <Categories />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'help',
        element: <Help />
      },
      {
        path: 'shipping',
        element: <Shipping />
      },
      {
        path: 'returns',
        element: <Returns />
      },
      {
        path: 'warranty',
        element: <Warranty />
      },
      {
        path: 'privacy',
        element: <Privacy />
      },
      {
        path: 'terms',
        element: <Terms />
      },
      {
        path: 'careers',
        element: <Careers />
      },
      {
        path: 'press',
        element: <Press />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'cookies',
        element: <Cookies />
      },
      {
        path: 'refund',
        element: <Refund />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'wishlist',
        element: (
          <ProtectedRoute allowedRoles={['customer']}>
            <Wishlist />
          </ProtectedRoute>
        )
      },
      {
        path: 'checkout',
        element: (
          <ProtectedRoute allowedRoles={['customer']}>
            <Checkout />
          </ProtectedRoute>
        )
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )
      },
      {
        path: 'orders',
        element: (
          <ProtectedRoute allowedRoles={['customer']}>
            <Orders />
          </ProtectedRoute>
        )
      },
      {
        path: 'orders/:orderNumber',
        element: (
          <ProtectedRoute allowedRoles={['customer']}>
            <OrderDetail />
          </ProtectedRoute>
        )
      },
      {
        path: 'orders/:orderNumber/payment',
        element: (
          <ProtectedRoute allowedRoles={['customer']}>
            <OrderPayment />
          </ProtectedRoute>
        )
      },
      {
      }
    ]
  },
  {
    path: '/seller',
    element: <SellerLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute allowedRoles={['seller', 'admin']}>
            <SellerDashboard />
          </ProtectedRoute>
        )
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute allowedRoles={['seller', 'admin']}>
            <SellerDashboard />
          </ProtectedRoute>
        )
      },
      {
        path: 'products',
        element: (
          <ProtectedRoute allowedRoles={['seller', 'admin']}>
            <ManageProducts />
          </ProtectedRoute>
        )
      },
      {
        path: 'products/add',
        element: (
          <ProtectedRoute allowedRoles={['seller', 'admin']}>
            <AddEditProduct />
          </ProtectedRoute>
        )
      },
      {
        path: 'products/edit/:id',
        element: (
          <ProtectedRoute allowedRoles={['seller', 'admin']}>
            <AddEditProduct />
          </ProtectedRoute>
        )
      },
      {
        path: 'orders',
        element: (
          <ProtectedRoute allowedRoles={['seller', 'admin']}>
            <SellerOrders />
          </ProtectedRoute>
        )
      },
      {
        path: 'customers',
        element: (
          <ProtectedRoute allowedRoles={['seller', 'admin']}>
            <SellerCustomers />
          </ProtectedRoute>
        )
      },
      {
        path: 'services',
        element: (
          <ProtectedRoute allowedRoles={['seller', 'admin']}>
            <SellerServices />
          </ProtectedRoute>
        )
      },
      {
        path: 'reviews',
        element: (
          <ProtectedRoute allowedRoles={['seller', 'admin']}>
            <SellerReviews />
          </ProtectedRoute>
        )
      },
      {
        path: 'reports',
        element: (
          <ProtectedRoute allowedRoles={['seller', 'admin']}>
            <SellerReports />
          </ProtectedRoute>
        )
      },
      {
        path: 'payment-methods',
        element: (
          <ProtectedRoute allowedRoles={['seller', 'admin']}>
            <PaymentMethods />
          </ProtectedRoute>
        )
      },
      {
        path: 'settings',
        element: (
          <ProtectedRoute allowedRoles={['seller', 'admin']}>
            <SellerSettings />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: '/admin',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        )
      },
      {
        path: 'products',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminProducts />
          </ProtectedRoute>
        )
      },
      {
        path: 'products/add',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminProductEdit />
          </ProtectedRoute>
        )
      },
      {
        path: 'products/edit/:id',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminProductEdit />
          </ProtectedRoute>
        )
      },
      {
        path: 'users',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminUsers />
          </ProtectedRoute>
        )
      },
      {
        path: 'services',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminServiceManagement />
          </ProtectedRoute>
        )
      },
      {
        path: 'maintenance',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminMaintenance />
          </ProtectedRoute>
        )
      },
      {
        path: 'security',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminSecurity />
          </ProtectedRoute>
        )
      },
      {
        path: 'seller-approval',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminSellerApproval />
          </ProtectedRoute>
        )
      },
      {
        path: 'reports',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminReports />
          </ProtectedRoute>
        )
      },
      {
        path: 'analytics',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminAnalytics />
          </ProtectedRoute>
        )
      },
      {
        path: 'reviews',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminReviews />
          </ProtectedRoute>
        )
      },
      {
        path: 'test',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminTestPage />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <AdminDashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/admin/dashboard',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <AdminDashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/admin/orders',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <AdminOrders />
      </ProtectedRoute>
    )
  },
  {
    path: '/admin/products',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <AdminProducts />
      </ProtectedRoute>
    )
  },
  {
    path: '/admin/users',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <AdminUsers />
      </ProtectedRoute>
    )
  },
  {
    path: '/admin/settings',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <AdminSettings />
      </ProtectedRoute>
    )
  }
]);

export default router;
