# TEKNOLOGI DAN BAHASA PEMROGRAMAN
# SISTEM E-COMMERCE INTER MEDI-A

## 1. FRONTEND TECHNOLOGIES

### 1.1 JavaScript (ES6+)
**Bahasa Utama**: JavaScript ES2020+
**Fungsi**: 
- Logika aplikasi frontend
- Interaksi user interface
- API calls dan data handling
- State management
- Event handling

**Contoh Implementasi**:
```javascript
// Modern JavaScript features yang digunakan
const fetchProducts = async (filters) => {
  try {
    const response = await fetch(`/api/products?${new URLSearchParams(filters)}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Arrow functions, destructuring, async/await
const { products, pagination } = await fetchProducts({ category: 'printer' });
```

### 1.2 React.js v18.2.0
**Library**: React dengan Hooks
**Fungsi**:
- Component-based UI development
- Virtual DOM untuk performa optimal
- State management dengan useState, useEffect
- Context API untuk global state
- Routing dengan React Router

**Struktur Komponen**:
```javascript
// Functional Components dengan Hooks
import React, { useState, useEffect } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAddToCart = async () => {
    setIsLoading(true);
    await onAddToCart(product);
    setIsLoading(false);
  };

  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rp {product.price.toLocaleString()}</p>
      <button onClick={handleAddToCart} disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
  );
};
```

### 1.3 HTML5
**Markup Language**: HTML5 Semantic
**Fungsi**:
- Struktur halaman web
- Semantic elements untuk SEO
- Form handling
- Accessibility features

**Implementasi**:
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inter Medi-A E-Commerce</title>
</head>
<body>
  <header role="banner">
    <nav aria-label="Main navigation">
      <!-- Navigation menu -->
    </nav>
  </header>
  <main role="main">
    <section aria-label="Product catalog">
      <!-- Product grid -->
    </section>
  </main>
  <footer role="contentinfo">
    <!-- Footer content -->
  </footer>
</body>
</html>
```

### 1.4 CSS3 & Tailwind CSS v3.3.0
**Styling**: CSS3 + Utility-first framework
**Fungsi**:
- Responsive design
- Modern layouts (Flexbox, Grid)
- Animations dan transitions
- Component styling
- Mobile-first approach

**Implementasi**:
```css
/* Custom CSS untuk komponen khusus */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Tailwind CSS classes */
.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200;
}
```

## 2. BACKEND TECHNOLOGIES

### 2.1 Node.js v18.17.0
**Runtime Environment**: JavaScript Server-side
**Fungsi**:
- Server-side JavaScript execution
- Non-blocking I/O operations
- Package management dengan npm
- API server development
- Real-time applications

**Server Configuration**:
```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Middleware setup
app.use(helmet()); // Security headers
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 2.2 Express.js v4.18.2
**Web Framework**: Minimalist web framework
**Fungsi**:
- RESTful API development
- Middleware handling
- Routing system
- HTTP request/response handling
- Error handling

**API Routes Implementation**:
```javascript
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');

// GET /api/products - Get all products with pagination
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 12, category, search, minPrice, maxPrice } = req.query;
    
    const filter = {};
    if (category) filter.category = category;
    if (search) filter.name = { $regex: search, $options: 'i' };
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const products = await Product.find(filter)
      .populate('category')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Product.countDocuments(filter);

    res.json({
      success: true,
      data: {
        products,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(total / limit),
          totalProducts: total,
          hasNext: page < Math.ceil(total / limit),
          hasPrev: page > 1
        }
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/products - Create new product (Admin only)
router.post('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    const product = new Product(req.body);
    await product.save();
    
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: product
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;
```

## 3. DATABASE TECHNOLOGY

### 3.1 MongoDB v6.0
**Database**: NoSQL Document Database
**Fungsi**:
- Document-oriented data storage
- Flexible schema design
- Horizontal scaling capability
- Rich query language
- Aggregation framework

**Database Models**:
```javascript
const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: 'Please enter a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /^(\+62|62|0)8[1-9][0-9]{6,9}$/.test(v);
      },
      message: 'Please enter a valid Indonesian phone number'
    }
  },
  addresses: [{
    label: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    province: { type: String, required: true },
    postalCode: { type: String, required: true },
    isDefault: { type: Boolean, default: false }
  }],
  role: {
    type: String,
    enum: ['customer', 'admin', 'technician'],
    default: 'customer'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  loyaltyPoints: {
    type: Number,
    default: 0,
    min: 0
  }
}, {
  timestamps: true
});

// Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  sku: {
    type: String,
    required: true,
    unique: true,
    uppercase: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  images: [{
    type: String,
    validate: {
      validator: function(v) {
        return /\.(jpg|jpeg|png|gif|webp)$/i.test(v);
      },
      message: 'Invalid image format'
    }
  }],
  description: {
    type: String,
    required: true
  },
  specifications: {
    brand: String,
    model: String,
    warranty: String,
    weight: Number,
    dimensions: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = {
  User: mongoose.model('User', userSchema),
  Product: mongoose.model('Product', productSchema)
};
```

## 4. AUTHENTICATION & SECURITY

### 4.1 JSON Web Tokens (JWT)
**Library**: jsonwebtoken v9.0.0
**Fungsi**:
- Stateless authentication
- Secure token generation
- User session management
- API endpoint protection

**Implementation**:
```javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

// Authentication Middleware
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ success: false, message: 'Access denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password');
    
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

// Password Hashing
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
};

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};
```

## 5. THIRD-PARTY INTEGRATIONS

### 5.1 Payment Gateway - Midtrans
**API**: Midtrans Snap API
**Fungsi**:
- Payment processing
- Multiple payment methods
- Transaction security
- Payment notifications

**Implementation**:
```javascript
const midtransClient = require('midtrans-client');

const snap = new midtransClient.Snap({
  isProduction: process.env.NODE_ENV === 'production',
  serverKey: process.env.MIDTRANS_SERVER_KEY
});

const createPayment = async (orderData) => {
  const parameter = {
    transaction_details: {
      order_id: orderData.orderNumber,
      gross_amount: orderData.totalAmount
    },
    credit_card: {
      secure: true
    },
    customer_details: {
      first_name: orderData.customer.name,
      email: orderData.customer.email,
      phone: orderData.customer.phone
    },
    item_details: orderData.items.map(item => ({
      id: item.product._id,
      price: item.price,
      quantity: item.quantity,
      name: item.productName
    }))
  };

  try {
    const transaction = await snap.createTransaction(parameter);
    return {
      token: transaction.token,
      redirect_url: transaction.redirect_url
    };
  } catch (error) {
    throw new Error('Payment creation failed: ' + error.message);
  }
};
```

### 5.2 Shipping API Integration
**APIs**: JNE, J&T Express, SiCepat
**Fungsi**:
- Shipping cost calculation
- Delivery time estimation
- Tracking integration
- Booking automation

**Implementation**:
```javascript
const axios = require('axios');

class ShippingService {
  constructor() {
    this.jneApiKey = process.env.JNE_API_KEY;
    this.jtApiKey = process.env.JT_API_KEY;
    this.sicepat_api_key = process.env.SICEPAT_API_KEY;
  }

  async calculateShippingCost(origin, destination, weight, courier) {
    const data = {
      origin: origin,
      destination: destination,
      weight: weight,
      courier: courier
    };

    try {
      const response = await axios.post(
        'https://api.rajaongkir.com/starter/cost',
        data,
        {
          headers: {
            'key': process.env.RAJAONGKIR_API_KEY,
            'content-type': 'application/x-www-form-urlencoded'
          }
        }
      );

      return response.data.rajaongkir.results[0].costs.map(cost => ({
        service: cost.service,
        description: cost.description,
        cost: cost.cost[0].value,
        etd: cost.cost[0].etd
      }));
    } catch (error) {
      throw new Error('Shipping calculation failed: ' + error.message);
    }
  }

  async trackShipment(trackingNumber, courier) {
    // Implementation for tracking shipment
    const trackingUrl = this.getTrackingUrl(courier, trackingNumber);
    
    try {
      const response = await axios.get(trackingUrl);
      return this.parseTrackingData(response.data, courier);
    } catch (error) {
      throw new Error('Tracking failed: ' + error.message);
    }
  }
}
```

## 6. DEVELOPMENT TOOLS & UTILITIES

### 6.1 Package Management
**Tool**: npm (Node Package Manager)
**Fungsi**:
- Dependency management
- Script automation
- Version control
- Package installation

**package.json Configuration**:
```json
{
  "name": "inter-media-ecommerce",
  "version": "1.0.0",
  "description": "E-commerce platform for Inter Medi-A",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "build": "npm run build:frontend && npm run build:backend",
    "build:frontend": "cd frontend && npm run build",
    "build:backend": "echo 'Backend build complete'",
    "install-all": "npm install && cd frontend && npm install"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.3",
    "jsonwebtoken": "^9.0.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "helmet": "^6.1.5",
    "dotenv": "^16.0.3",
    "multer": "^1.4.5",
    "nodemailer": "^6.9.1",
    "express-rate-limit": "^6.7.0",
    "express-validator": "^6.15.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22",
    "jest": "^29.5.0",
    "supertest": "^6.3.3"
  }
}
```

### 6.2 Environment Configuration
**Tool**: dotenv
**Fungsi**:
- Environment variables management
- Configuration security
- Development/production separation

**.env Configuration**:
```bash
# Server Configuration
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:5173

# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/intermedia

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# Payment Gateway
MIDTRANS_SERVER_KEY=your_midtrans_server_key
MIDTRANS_CLIENT_KEY=your_midtrans_client_key

# Shipping APIs
RAJAONGKIR_API_KEY=your_rajaongkir_api_key
JNE_API_KEY=your_jne_api_key
JT_API_KEY=your_jt_api_key
SICEPAT_API_KEY=your_sicepat_api_key

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# File Upload
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=5242880
```

## 7. TESTING TECHNOLOGIES

### 7.1 Jest Testing Framework
**Framework**: Jest v29.5.0
**Fungsi**:
- Unit testing
- Integration testing
- Test coverage reporting
- Mocking capabilities

**Test Implementation**:
```javascript
const request = require('supertest');
const app = require('../server');
const User = require('../models/User');

describe('Authentication Endpoints', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe('POST /api/auth/register', () => {
    it('should register a new user with valid data', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        phone: '+6281234567890'
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.user.email).toBe(userData.email);
      expect(response.body.data.token).toBeDefined();
    });

    it('should return error for invalid email', async () => {
      const userData = {
        name: 'John Doe',
        email: 'invalid-email',
        password: 'password123'
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData)
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });
});
```

## 8. BUILD & DEPLOYMENT

### 8.1 Vite Build Tool
**Tool**: Vite v4.3.0 (Frontend)
**Fungsi**:
- Fast development server
- Hot module replacement
- Optimized production builds
- Modern JavaScript bundling

**vite.config.js**:
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
});
```

## RINGKASAN TEKNOLOGI

| **Kategori** | **Teknologi** | **Versi** | **Fungsi Utama** |
|--------------|---------------|-----------|------------------|
| **Frontend** | React.js | 18.2.0 | UI Components & State Management |
| | JavaScript | ES2020+ | Client-side Logic |
| | HTML5 | - | Markup & Structure |
| | CSS3/Tailwind | 3.3.0 | Styling & Responsive Design |
| **Backend** | Node.js | 18.17.0 | Server Runtime |
| | Express.js | 4.18.2 | Web Framework & API |
| **Database** | MongoDB | 6.0 | NoSQL Document Database |
| **Authentication** | JWT | 9.0.0 | Token-based Auth |
| | bcryptjs | 2.4.3 | Password Hashing |
| **Payment** | Midtrans API | - | Payment Gateway |
| **Shipping** | Multiple APIs | - | Logistics Integration |
| **Testing** | Jest | 29.5.0 | Testing Framework |
| **Build** | Vite | 4.3.0 | Frontend Build Tool |
| **Package** | npm | - | Package Management |

Semua teknologi ini dipilih berdasarkan kebutuhan sistem e-commerce yang modern, scalable, dan maintainable dengan fokus pada performa, keamanan, dan user experience yang optimal.
