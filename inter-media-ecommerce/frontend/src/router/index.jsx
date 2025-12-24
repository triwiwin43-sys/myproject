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
import Services from '../pages/Services';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Categories from '../pages/Categories';
import SellerDashboard from '../pages/seller/Dashboard';
import ManageProducts from '../pages/seller/ManageProducts';
import AddEditProduct from '../pages/seller/AddEditProduct';
import AdminDashboard from '../pages/admin/Dashboard';
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
          <ProtectedRoute>
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
          <ProtectedRoute>
            <Orders />
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
        path: 'admin/dashboard',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
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
