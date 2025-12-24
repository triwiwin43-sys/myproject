## SLIDE 8: METODOLOGI PENELITIAN
```
METODOLOGI PENELITIAN

📋 SDLC WATERFALL MODEL
Dipilih karena:
• Requirements jelas dan stabil
• Timeline terbatas (1 semester)  
• Dokumentasi lengkap diperlukan
• Stakeholder memiliki ekspektasi fixed

🔄 TAHAPAN PENELITIAN
1. ANALISIS KEBUTUHAN
   • Wawancara dengan management Inter Medi-A
   • Observasi proses bisnis existing
   • Survei customer preferences
   • Studi dokumentasi perusahaan

2. PERANCANGAN SISTEM
   • Arsitektur sistem dan database design
   • UI/UX wireframe dan mockup
   • API design dan integration planning

3. IMPLEMENTASI
   • Development menggunakan React.js + Node.js + MongoDB
   • Integration payment gateway dan shipping API

4. PENGUJIAN
   • Unit, Integration, System, UAT, Performance, Security Testing

5. EVALUASI
   • Business impact analysis dan user satisfaction measurement
```

## SLIDE 9: ANALISIS SISTEM BERJALAN
```
ANALISIS SISTEM BERJALAN

📊 RICH PICTURE PROSES BISNIS EXISTING
[Diagram showing current manual processes]

🔍 FISHBONE ANALYSIS - ROOT CAUSE
PEOPLE: Manual inventory, kurang training, customer service terbatas
PROCESS: Tidak ada tracking otomatis, checkout kompleks, payment manual  
TECHNOLOGY: Sistem tidak terintegrasi, database tidak real-time
MATERIAL: Stock tidak akurat, supplier terbatas, packaging kurang profesional
ENVIRONMENT: Kompetitor online banyak, customer expectation tinggi
MEASUREMENT: Tidak ada analytics, KPI tidak terukur, ROI tidak jelas

📈 BUSINESS MODEL CANVAS
• Key Partners: Canon, HP, Epson, JNE, J&T, Midtrans
• Value Propositions: One-stop solution, professional service, competitive price
• Customer Segments: Small business, corporate, individual, educational
• Revenue Streams: Product sales (70%), service (20%), warranty (10%)
```

## SLIDE 10: KEBUTUHAN SISTEM
```
ANALISIS KEBUTUHAN SISTEM

⚙️ KEBUTUHAN FUNGSIONAL
• User Management (registrasi, login, profile)
• Product Catalog (browse, search, filter, detail)
• Shopping Cart (add, update, remove items)
• Checkout Process (address, shipping, payment)
• Order Management (tracking, history, status)
• Payment Integration (multiple methods)
• Shipping Integration (cost calculation, tracking)
• Admin Dashboard (products, orders, reports)
• Service Request Management
• Notification System (email, SMS)

🔧 KEBUTUHAN NON-FUNGSIONAL  
• Performance: Response time < 3 detik
• Scalability: Support 500+ concurrent users
• Security: Data encryption, secure authentication
• Usability: Intuitive interface, mobile responsive
• Reliability: 99.5% uptime
• Compatibility: Cross-browser support
```

## SLIDE 11: ARSITEKTUR SISTEM
```
ARSITEKTUR SISTEM E-COMMERCE

🏗️ THREE-TIER ARCHITECTURE

PRESENTATION TIER (Frontend)
• React.js 18.2.0 - Component-based UI
• HTML5 - Semantic markup
• CSS3 + Tailwind CSS - Responsive styling
• Vite - Build tool & dev server

APPLICATION TIER (Backend)  
• Node.js 18.17.0 - JavaScript runtime
• Express.js 4.18.2 - Web framework
• JWT - Authentication & authorization
• RESTful API - Client-server communication

DATA TIER (Database)
• MongoDB 6.0 - NoSQL document database
• Mongoose - Object Document Mapper
• Cloud hosting - MongoDB Atlas

🔗 EXTERNAL INTEGRATIONS
• Midtrans - Payment gateway
• JNE/J&T/SiCepat - Shipping APIs
• Nodemailer - Email service
```

## SLIDE 12: DATABASE DESIGN
```
PERANCANGAN DATABASE

📊 ENTITY RELATIONSHIP DIAGRAM
[Show ERD with main entities and relationships]

🗃️ MAIN COLLECTIONS (MongoDB)
• Users: Customer data, addresses, loyalty points
• Products: Catalog, pricing, inventory, specifications  
• Categories: Product categorization hierarchy
• Orders: Transaction data, items, shipping info
• Payments: Payment records, status, methods
• ServiceRequests: Maintenance & repair requests
• Carts: Shopping cart temporary storage

📈 ESTIMASI KEBUTUHAN STORAGE
• Users: 10,000 records × 2KB = 20MB
• Products: 5,000 records × 5KB = 25MB
• Orders: 50,000 records × 3KB = 150MB
• Total Proyeksi 1 Tahun: ~1GB
• Rekomendasi: MongoDB Atlas M10 (10GB)
```

## SLIDE 13: UI/UX DESIGN
```
PERANCANGAN ANTARMUKA

🎨 DESIGN PRINCIPLES
• Mobile-First Responsive Design
• User-Centered Design Approach  
• Accessibility Compliance (WCAG 2.1)
• Modern & Clean Interface
• Intuitive Navigation

📱 KEY WIREFRAMES
1. HOMEPAGE
   • Hero banner, featured categories
   • Product grid, search functionality
   • Navigation menu, cart icon

2. PRODUCT DETAIL
   • Image gallery with zoom
   • Specifications, reviews, Q&A
   • Add to cart, buy now, wishlist

3. SHOPPING CART  
   • Item list with quantity controls
   • Price calculation, promo codes
   • Checkout button, save for later

4. CHECKOUT PROCESS
   • Address selection, shipping options
   • Payment method selection
   • Order summary and confirmation

5. ADMIN DASHBOARD
   • KPI cards, sales charts
   • Product management, order processing
   • Analytics and reporting
```

## SLIDE 14: TEKNOLOGI STACK
```
TEKNOLOGI & BAHASA PEMROGRAMAN

💻 FRONTEND TECHNOLOGIES
• JavaScript ES2020+ - Modern language features
• React.js 18.2.0 - Component-based UI library
• HTML5 - Semantic markup language
• CSS3 + Tailwind CSS 3.3.0 - Utility-first styling
• Vite 4.3.0 - Fast build tool

🖥️ BACKEND TECHNOLOGIES  
• Node.js 18.17.0 - JavaScript runtime environment
• Express.js 4.18.2 - Minimalist web framework
• MongoDB 6.0 - NoSQL document database
• Mongoose - Elegant MongoDB object modeling

🔐 SECURITY & AUTHENTICATION
• JWT (jsonwebtoken) - Stateless authentication
• bcryptjs - Password hashing with salt
• Helmet - Security headers middleware
• CORS - Cross-origin resource sharing
• Express-rate-limit - Rate limiting protection

🔗 THIRD-PARTY INTEGRATIONS
• Midtrans API - Payment gateway (bank transfer, e-wallet, credit card)
• JNE/J&T/SiCepat APIs - Shipping cost calculation & tracking
• Nodemailer - Email notification service
```
