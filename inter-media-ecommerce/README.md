# Inter Medi-A E-Commerce Platform

🏪 **Complete full-stack e-commerce solution** for printer, computer parts, and office equipment sales with professional service management.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB Atlas account (connection string provided)

### Installation & Setup

1. **Clone and navigate to project:**
   ```bash
   cd inter-media-ecommerce
   ```

2. **One-command setup:**
   ```bash
   ./start.sh
   ```

3. **Or manual setup:**
   ```bash
   # Install all dependencies
   npm run install-all
   
   # Start development servers
   npm run dev
   ```

### Access Points
- 🌐 **Frontend**: http://localhost:5173
- 🔧 **Backend**: http://localhost:3001
- 📚 **API Health**: http://localhost:3001/api/health

## 🛠 Tech Stack

### Frontend
- **React 18** + Vite
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Zustand** for state management
- **Axios** for API calls
- **React Hot Toast** for notifications
- **React Hook Form** for form handling

### Backend
- **Node.js** + Express.js
- **MongoDB Atlas** (pre-configured)
- **JWT** authentication
- **Multer** for file uploads
- **Helmet** + security middleware
- **Express Validator** for validation

## 📁 Project Structure

```
inter-media-ecommerce/
├── backend/                 # Node.js API server
│   ├── src/
│   │   ├── config/         # Database config
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Auth, upload, error handling
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API endpoints
│   │   ├── utils/          # Helper functions
│   │   └── app.js          # Express app config
│   ├── uploads/            # File storage
│   ├── .env                # Environment variables
│   ├── package.json
│   └── server.js           # Server entry point
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route components
│   │   ├── context/        # Zustand stores
│   │   ├── hooks/          # Custom hooks
│   │   ├── router/         # Route configuration
│   │   └── main.jsx        # App entry point
│   ├── public/             # Static assets
│   ├── package.json
│   └── vite.config.js      # Vite configuration
├── package.json            # Root package.json
├── start.sh               # Quick start script
└── README.md              # This file
```

## 🎯 Features

### 🛒 E-Commerce Core
- **Product Management**: Full CRUD with images, variants, specifications
- **Category System**: Hierarchical categories with images
- **Shopping Cart**: Persistent cart with real-time updates
- **Order Management**: Complete order lifecycle tracking
- **Payment Integration**: Multiple payment methods support
- **Inventory Management**: Stock tracking and low stock alerts

### 👥 User Management
- **Multi-Role System**: Customer, Seller, Admin roles
- **JWT Authentication**: Secure token-based auth
- **Profile Management**: User profiles with addresses
- **Seller Onboarding**: Store setup and verification

### 🎨 UI/UX (Nike Store Style)
- **Modern Design**: Clean, premium aesthetic
- **Responsive Layout**: Mobile-first approach
- **Brand Colors**: Red (#C62828-#D32F2F) + Blue (#0D47A1)
- **Smooth Animations**: Hover effects and transitions
- **Loading States**: Skeleton screens and spinners

### 🔧 Technical Features
- **File Upload**: Image handling with Multer
- **Search & Filter**: Advanced product filtering
- **Pagination**: Efficient data loading
- **Error Handling**: Comprehensive error management
- **Security**: Helmet, CORS, rate limiting
- **Validation**: Input validation on both ends

## 🚀 API Endpoints

### Authentication
```
POST /api/auth/register     # User registration
POST /api/auth/login        # User login
GET  /api/auth/me          # Get current user
PUT  /api/auth/profile     # Update profile
POST /api/auth/addresses   # Add address
PUT  /api/auth/seller-info # Update seller info
```

### Products
```
GET    /api/products           # Get products (with filters)
GET    /api/products/featured  # Get featured products
GET    /api/products/:id       # Get single product
POST   /api/products           # Create product (Seller/Admin)
PUT    /api/products/:id       # Update product (Seller/Admin)
DELETE /api/products/:id       # Delete product (Seller/Admin)
GET    /api/products/seller/my-products # Get seller products
```

### Categories
```
GET    /api/categories     # Get all categories
GET    /api/categories/:id # Get single category
POST   /api/categories     # Create category (Admin)
PUT    /api/categories/:id # Update category (Admin)
DELETE /api/categories/:id # Delete category (Admin)
```

### Cart
```
GET    /api/cart           # Get user cart
POST   /api/cart/items     # Add item to cart
PUT    /api/cart/items/:id # Update cart item
DELETE /api/cart/items/:id # Remove cart item
DELETE /api/cart           # Clear cart
```

### Orders
```
GET    /api/orders         # Get user orders
POST   /api/orders         # Create order
GET    /api/orders/:id     # Get single order
PUT    /api/orders/:id/status # Update order status
PUT    /api/orders/:id/cancel # Cancel order
```

## 🔐 User Roles & Permissions

### Customer
- Browse and search products
- Manage cart and wishlist
- Place and track orders
- Write reviews and ratings
- Manage profile and addresses

### Seller
- Manage own products (CRUD)
- View and fulfill orders
- Access sales analytics
- Manage store information
- Handle customer inquiries

### Admin
- Manage all users and sellers
- Manage categories and featured products
- Monitor all orders and transactions
- Access system analytics
- Manage site content and settings

## 🎨 Design System

### Colors
- **Primary Red**: #C62828 - #D32F2F
- **Brand Blue**: #0D47A1
- **Grays**: #F5F5F5 - #212121
- **Success**: #4CAF50
- **Warning**: #FF9800
- **Error**: #F44336

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Semibold weights
- **Body**: Regular weight
- **UI Elements**: Medium weight

### Components
- **Buttons**: Rounded corners, hover effects
- **Cards**: Subtle shadows, hover animations
- **Forms**: Clean inputs with focus states
- **Navigation**: Sticky header with search

## 🔧 Development

### Environment Setup
1. Copy `.env.example` to `.env` in backend folder
2. Update MongoDB connection string if needed
3. Configure email settings for notifications

### Running Tests
```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test
```

### Building for Production
```bash
# Build frontend
npm run build

# Start production server
npm start
```

## 📦 Deployment

### Backend Deployment
- Set environment variables
- Ensure MongoDB connection
- Configure file upload storage
- Set up SSL certificates

### Frontend Deployment
- Build static files
- Configure CDN for assets
- Set up domain and SSL
- Configure API proxy

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- 📧 Email: support@intermedia.com
- 📞 Phone: +62 21 1234 5678
- 💬 Live Chat: Available on website

---

**Inter Medi-A** - Your trusted partner for premium office solutions. 🏢✨
