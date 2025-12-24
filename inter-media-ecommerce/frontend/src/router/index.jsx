import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Profile from '../pages/Profile';
import Orders from '../pages/Orders';
import OrderDetail from '../pages/OrderDetail';
import Services from '../pages/Services';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Categories from '../pages/Categories';
import SellerDashboard from '../pages/seller/Dashboard';
import ManageProducts from '../pages/seller/ManageProducts';
import AddEditProduct from '../pages/seller/AddEditProduct';
import SellerOrders from '../pages/seller/SellerOrders';
import AdminDashboard from '../pages/admin/Dashboard';
import AdminLogs from '../pages/admin/AdminLogs';
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
        path: 'cart',
        element: <Cart />
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
        path: 'seller/dashboard',
        element: (
          <ProtectedRoute allowedRoles={['seller', 'admin']}>
            <SellerDashboard />
          </ProtectedRoute>
        )
      },
      {
        path: 'seller/products',
        element: (
          <ProtectedRoute allowedRoles={['seller', 'admin']}>
            <ManageProducts />
          </ProtectedRoute>
        )
      },
      {
        path: 'seller/products/add',
        element: (
          <ProtectedRoute allowedRoles={['seller', 'admin']}>
            <AddEditProduct />
          </ProtectedRoute>
        )
      },
      {
        path: 'seller/products/edit/:id',
        element: (
          <ProtectedRoute allowedRoles={['seller', 'admin']}>
            <AddEditProduct />
          </ProtectedRoute>
        )
      },
      {
        path: 'seller/orders',
        element: (
          <ProtectedRoute allowedRoles={['seller', 'admin']}>
            <SellerOrders />
          </ProtectedRoute>
        )
      },
      {
        path: 'admin/dashboard',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        )
      },
      {
        path: 'admin/logs',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminLogs />
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
  }
]);

export default router;
