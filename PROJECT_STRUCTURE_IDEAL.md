# 🏗️ STRUKTUR PROJECT IDEAL - INTER MEDIA E-COMMERCE

## 📁 ROOT PROJECT STRUCTURE

```
inter-media-ecommerce/
├── 📁 apps/                          # Monorepo apps
│   ├── 📁 web/                       # Frontend React App
│   ├── 📁 api/                       # Backend API
│   ├── 📁 admin/                     # Admin Dashboard (Optional)
│   └── 📁 mobile/                    # React Native App (Future)
├── 📁 packages/                      # Shared packages
│   ├── 📁 ui/                        # Shared UI components
│   ├── 📁 utils/                     # Shared utilities
│   ├── 📁 types/                     # TypeScript types
│   └── 📁 config/                    # Shared configs
├── 📁 docs/                          # Documentation
├── 📁 scripts/                       # Build/deploy scripts
├── 📁 .github/                       # GitHub workflows
├── 📄 package.json                   # Root package.json
├── 📄 turbo.json                     # Turborepo config
└── 📄 README.md
```

## 🎯 FRONTEND STRUCTURE (apps/web/)

```
apps/web/
├── 📁 public/
│   ├── 📄 manifest.json              # PWA manifest
│   ├── 📄 sw.js                      # Service worker
│   ├── 📁 icons/                     # App icons
│   └── 📁 images/                    # Static images
├── 📁 src/
│   ├── 📁 app/                       # App Router (Next.js style)
│   │   ├── 📁 (auth)/               # Auth routes group
│   │   ├── 📁 (shop)/               # Shop routes group
│   │   ├── 📁 admin/                # Admin routes
│   │   └── 📁 api/                  # API routes (if using Next.js)
│   ├── 📁 components/               # Reusable components
│   │   ├── 📁 ui/                   # Base UI components
│   │   │   ├── 📄 Button.jsx
│   │   │   ├── 📄 Input.jsx
│   │   │   ├── 📄 Modal.jsx
│   │   │   └── 📄 index.js
│   │   ├── 📁 forms/                # Form components
│   │   │   ├── 📄 LoginForm.jsx
│   │   │   ├── 📄 RegisterForm.jsx
│   │   │   └── 📄 CheckoutForm.jsx
│   │   ├── 📁 layout/               # Layout components
│   │   │   ├── 📄 Header.jsx
│   │   │   ├── 📄 Footer.jsx
│   │   │   ├── 📄 Sidebar.jsx
│   │   │   └── 📄 Layout.jsx
│   │   ├── 📁 product/              # Product components
│   │   │   ├── 📄 ProductCard.jsx
│   │   │   ├── 📄 ProductGrid.jsx
│   │   │   ├── 📄 ProductDetail.jsx
│   │   │   └── 📄 ProductFilter.jsx
│   │   ├── 📁 cart/                 # Cart components
│   │   │   ├── 📄 CartItem.jsx
│   │   │   ├── 📄 CartSummary.jsx
│   │   │   └── 📄 CartDrawer.jsx
│   │   └── 📁 admin/                # Admin components
│   │       ├── 📄 AdminNav.jsx
│   │       ├── 📄 DataTable.jsx
│   │       └── 📄 Dashboard.jsx
│   ├── 📁 pages/                    # Page components
│   │   ├── 📁 auth/
│   │   │   ├── 📄 Login.jsx
│   │   │   ├── 📄 Register.jsx
│   │   │   └── 📄 ForgotPassword.jsx
│   │   ├── 📁 shop/
│   │   │   ├── 📄 Home.jsx
│   │   │   ├── 📄 Products.jsx
│   │   │   ├── 📄 ProductDetail.jsx
│   │   │   ├── 📄 Cart.jsx
│   │   │   └── 📄 Checkout.jsx
│   │   ├── 📁 account/
│   │   │   ├── 📄 Profile.jsx
│   │   │   ├── 📄 Orders.jsx
│   │   │   └── 📄 Addresses.jsx
│   │   └── 📁 admin/
│   │       ├── 📄 Dashboard.jsx
│   │       ├── 📄 Products.jsx
│   │       ├── 📄 Orders.jsx
│   │       ├── 📄 Users.jsx
│   │       └── 📄 Analytics.jsx
│   ├── 📁 hooks/                    # Custom hooks
│   │   ├── 📄 useAuth.js
│   │   ├── 📄 useCart.js
│   │   ├── 📄 useProducts.js
│   │   ├── 📄 useResponsive.js
│   │   ├── 📄 usePWA.js
│   │   └── 📄 useLocalStorage.js
│   ├── 📁 store/                    # State management
│   │   ├── 📄 authStore.js          # Zustand stores
│   │   ├── 📄 cartStore.js
│   │   ├── 📄 productStore.js
│   │   ├── 📄 uiStore.js
│   │   └── 📄 index.js
│   ├── 📁 services/                 # API services
│   │   ├── 📄 api.js                # Axios instance
│   │   ├── 📄 authService.js
│   │   ├── 📄 productService.js
│   │   ├── 📄 orderService.js
│   │   └── 📄 uploadService.js
│   ├── 📁 utils/                    # Utility functions
│   │   ├── 📄 formatters.js         # Price, date formatters
│   │   ├── 📄 validators.js         # Form validation
│   │   ├── 📄 constants.js          # App constants
│   │   ├── 📄 helpers.js            # Helper functions
│   │   └── 📄 seo.js               # SEO utilities
│   ├── 📁 styles/                   # Styling
│   │   ├── 📄 globals.css           # Global styles
│   │   ├── 📄 components.css        # Component styles
│   │   ├── 📄 responsive.css        # Responsive utilities
│   │   └── 📄 themes.css           # Theme variables
│   ├── 📁 types/                    # TypeScript types
│   │   ├── 📄 auth.ts
│   │   ├── 📄 product.ts
│   │   ├── 📄 order.ts
│   │   └── 📄 api.ts
│   ├── 📁 config/                   # Configuration
│   │   ├── 📄 env.js               # Environment config
│   │   ├── 📄 routes.js            # Route constants
│   │   └── 📄 constants.js         # App constants
│   ├── 📁 assets/                   # Static assets
│   │   ├── 📁 images/
│   │   ├── 📁 icons/
│   │   └── 📁 fonts/
│   ├── 📄 main.jsx                  # App entry point
│   └── 📄 App.jsx                   # Root component
├── 📄 package.json
├── 📄 vite.config.js               # Vite configuration
├── 📄 tailwind.config.js           # Tailwind configuration
├── 📄 postcss.config.js            # PostCSS configuration
└── 📄 .env.example                 # Environment variables
```

## 🔧 BACKEND STRUCTURE (apps/api/)

```
apps/api/
├── 📁 src/
│   ├── 📁 config/                   # Configuration
│   │   ├── 📄 database.js          # Database connection
│   │   ├── 📄 jwt.js               # JWT configuration
│   │   ├── 📄 cloudinary.js        # File upload config
│   │   ├── 📄 email.js             # Email configuration
│   │   └── 📄 redis.js             # Redis configuration
│   ├── 📁 controllers/             # Route controllers
│   │   ├── 📄 authController.js
│   │   ├── 📄 userController.js
│   │   ├── 📄 productController.js
│   │   ├── 📄 orderController.js
│   │   ├── 📄 categoryController.js
│   │   ├── 📄 reviewController.js
│   │   ├── 📄 cartController.js
│   │   └── 📄 uploadController.js
│   ├── 📁 middleware/               # Express middleware
│   │   ├── 📄 auth.js              # Authentication
│   │   ├── 📄 validation.js        # Input validation
│   │   ├── 📄 upload.js            # File upload
│   │   ├── 📄 rateLimit.js         # Rate limiting
│   │   ├── 📄 cors.js              # CORS configuration
│   │   ├── 📄 security.js          # Security headers
│   │   └── 📄 errorHandler.js      # Error handling
│   ├── 📁 models/                  # Database models
│   │   ├── 📄 User.js
│   │   ├── 📄 Product.js
│   │   ├── 📄 Order.js
│   │   ├── 📄 Category.js
│   │   ├── 📄 Review.js
│   │   ├── 📄 Cart.js
│   │   └── 📄 Address.js
│   ├── 📁 routes/                  # API routes
│   │   ├── 📄 auth.js
│   │   ├── 📄 users.js
│   │   ├── 📄 products.js
│   │   ├── 📄 orders.js
│   │   ├── 📄 categories.js
│   │   ├── 📄 reviews.js
│   │   ├── 📄 cart.js
│   │   ├── 📄 upload.js
│   │   └── 📄 index.js
│   ├── 📁 services/                # Business logic
│   │   ├── 📄 authService.js
│   │   ├── 📄 emailService.js
│   │   ├── 📄 paymentService.js
│   │   ├── 📄 inventoryService.js
│   │   ├── 📄 notificationService.js
│   │   └── 📄 analyticsService.js
│   ├── 📁 utils/                   # Utility functions
│   │   ├── 📄 helpers.js
│   │   ├── 📄 validators.js
│   │   ├── 📄 formatters.js
│   │   ├── 📄 constants.js
│   │   └── 📄 logger.js
│   ├── 📁 jobs/                    # Background jobs
│   │   ├── 📄 emailJobs.js
│   │   ├── 📄 inventoryJobs.js
│   │   └── 📄 analyticsJobs.js
│   ├── 📁 tests/                   # Test files
│   │   ├── 📁 unit/
│   │   ├── 📁 integration/
│   │   └── 📁 fixtures/
│   └── 📄 app.js                   # Express app
├── 📁 uploads/                     # File uploads
├── 📁 logs/                        # Application logs
├── 📄 server.js                    # Server entry point
├── 📄 package.json
├── 📄 .env.example
└── 📄 Dockerfile                   # Docker configuration
```

## 📦 SHARED PACKAGES (packages/)

```
packages/
├── 📁 ui/                          # Shared UI components
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   ├── 📁 styles/
│   │   └── 📄 index.js
│   └── 📄 package.json
├── 📁 utils/                       # Shared utilities
│   ├── 📁 src/
│   │   ├── 📄 formatters.js
│   │   ├── 📄 validators.js
│   │   └── 📄 constants.js
│   └── 📄 package.json
├── 📁 types/                       # Shared TypeScript types
│   ├── 📁 src/
│   │   ├── 📄 user.ts
│   │   ├── 📄 product.ts
│   │   └── 📄 order.ts
│   └── 📄 package.json
└── 📁 config/                      # Shared configurations
    ├── 📁 eslint/
    ├── 📁 tailwind/
    └── 📁 typescript/
```

## 🚀 DEPLOYMENT & DEVOPS

```
.github/
├── 📁 workflows/
│   ├── 📄 ci.yml                   # Continuous Integration
│   ├── 📄 deploy-frontend.yml      # Frontend deployment
│   ├── 📄 deploy-backend.yml       # Backend deployment
│   └── 📄 security-scan.yml       # Security scanning
└── 📁 ISSUE_TEMPLATE/              # Issue templates

scripts/
├── 📄 build.sh                     # Build script
├── 📄 deploy.sh                    # Deployment script
├── 📄 test.sh                      # Testing script
└── 📄 setup.sh                    # Initial setup

docker/
├── 📄 Dockerfile.frontend         # Frontend Docker
├── 📄 Dockerfile.backend          # Backend Docker
├── 📄 docker-compose.yml          # Local development
└── 📄 docker-compose.prod.yml     # Production
```
