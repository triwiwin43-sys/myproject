import { lazy } from 'react';

// Lazy load components for code splitting
export const Home = lazy(() => import('../pages/Home'));
export const Products = lazy(() => import('../pages/Products'));
export const ProductDetail = lazy(() => import('../pages/ProductDetail'));
export const Cart = lazy(() => import('../pages/Cart'));
export const Checkout = lazy(() => import('../pages/Checkout'));
export const Login = lazy(() => import('../pages/Login'));
export const Register = lazy(() => import('../pages/Register'));

// Admin pages
export const AdminDashboard = lazy(() => import('../pages/admin/Dashboard'));
export const AdminProducts = lazy(() => import('../pages/admin/Products'));
export const AdminOrders = lazy(() => import('../pages/admin/Orders'));

// Seller pages
export const SellerDashboard = lazy(() => import('../pages/seller/SellerDashboard'));
export const ManageProducts = lazy(() => import('../pages/seller/ManageProducts'));
export const SellerOrders = lazy(() => import('../pages/seller/SellerOrders'));
export const SellerCustomers = lazy(() => import('../pages/seller/SellerCustomers'));
export const SellerServices = lazy(() => import('../pages/seller/SellerServices'));
export const SellerReports = lazy(() => import('../pages/seller/SellerReports'));
export const SellerReviews = lazy(() => import('../pages/seller/SellerReviews'));
export const PaymentMethods = lazy(() => import('../pages/seller/PaymentMethods'));
export const SellerSettings = lazy(() => import('../pages/seller/SellerSettings'));
