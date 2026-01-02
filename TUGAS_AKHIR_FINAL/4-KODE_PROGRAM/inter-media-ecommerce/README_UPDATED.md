# Inter Medi-A E-Commerce Platform

🏪 **Platform e-commerce lengkap** untuk penjualan printer, suku cadang komputer, dan peralatan kantor dengan manajemen layanan profesional.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm atau yarn
- MongoDB Atlas account (connection string disediakan)

### Installation & Setup

1. **Clone dan navigasi ke project:**
   ```bash
   cd inter-media-ecommerce
   ```

2. **Setup satu perintah:**
   ```bash
   ./start.sh
   ```

3. **Atau setup manual:**
   ```bash
   # Install semua dependencies
   npm run install-all
   
   # Start development servers
   npm run dev
   ```

### Access Points
- 🌐 **Frontend**: http://localhost:5173
- 🔧 **Backend**: http://localhost:5000
- 📚 **API Health**: http://localhost:5000/api/health

## 🛠 Tech Stack

### Frontend
- **React 18** + Vite
- **Tailwind CSS** untuk styling
- **React Router** untuk navigasi
- **Zustand** untuk state management
- **Axios** untuk API calls
- **React Hot Toast** untuk notifikasi
- **React Hook Form** untuk form handling

### Backend
- **Node.js** + Express.js
- **MongoDB Atlas** (pre-configured)
- **JWT** authentication
- **Socket.IO** untuk real-time features
- **Helmet** + security middleware

## 📁 Project Structure

```
inter-media-ecommerce/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Komponen UI yang dapat digunakan kembali
│   │   ├── pages/           # Komponen route
│   │   ├── context/         # State management
│   │   ├── utils/           # Utility functions
│   │   ├── config/          # Konfigurasi aplikasi
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
├── backend/                 # Node.js API server
│   ├── src/
│   │   ├── routes/         # API endpoints
│   │   ├── config/         # Database config
│   │   └── ...
│   ├── package.json
│   └── server.js
├── package.json            # Root package.json
└── start.sh               # Quick start script
```

## ✅ Fitur Lengkap

### 🛍️ Customer Features:
- ✅ **Registrasi & Login** - Sistem autentikasi lengkap
- ✅ **Katalog Produk** - Browse dengan filter dan pencarian
- ✅ **Keranjang Belanja** - Add to cart dan wishlist
- ✅ **Checkout** - Proses pemesanan lengkap
- ✅ **Profil Pengguna** - Manajemen akun dan alamat
- ✅ **Riwayat Pesanan** - Tracking dan status pesanan
- ✅ **Layanan Service** - Request layanan IT

### 🏪 Seller Features:
- ✅ **Dashboard Penjual** - Overview penjualan
- ✅ **Manajemen Produk** - CRUD produk lengkap
- ✅ **Manajemen Pesanan** - Update status pesanan
- ✅ **Laporan Penjualan** - Analytics dan insights
- ✅ **Profil Toko** - Pengaturan toko
- ✅ **Metode Pembayaran** - Konfigurasi payment

### 👨‍💼 Admin Features:
- ✅ **Dashboard Admin** - Overview sistem
- ✅ **Manajemen Pengguna** - CRUD users
- ✅ **Manajemen Produk** - Moderasi produk
- ✅ **Manajemen Pesanan** - Monitor semua pesanan
- ✅ **Persetujuan Penjual** - Approve seller baru
- ✅ **Laporan & Analytics** - Business intelligence
- ✅ **Pengaturan Sistem** - Konfigurasi platform
- ✅ **Keamanan** - Security monitoring
- ✅ **Pemeliharaan** - System maintenance

## 🌐 Bahasa Indonesia

Seluruh aplikasi menggunakan **bahasa Indonesia** yang konsisten:
- ✅ UI/UX dalam bahasa Indonesia
- ✅ Pesan error dan notifikasi
- ✅ Form validation messages
- ✅ Status dan label
- ✅ Dokumentasi pengguna

## 🔧 Environment Setup

### Development
```bash
cp .env.development .env
npm run dev
```

### Production
```bash
cp .env.production .env
npm run build
```

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Tablet optimization
- ✅ Desktop enhancement
- ✅ Touch-friendly interface

## 🔒 Security Features

- ✅ JWT Authentication
- ✅ Role-based access control
- ✅ Input validation & sanitization
- ✅ CORS protection
- ✅ Rate limiting
- ✅ Secure headers

## 🚀 Performance Optimizations

- ✅ Code splitting
- ✅ Lazy loading
- ✅ Image optimization
- ✅ Bundle optimization
- ✅ Caching strategies

## 📊 Analytics & Monitoring

- ✅ User behavior tracking
- ✅ Performance monitoring
- ✅ Error logging
- ✅ Business metrics

## 🧪 Testing

```bash
# Run tests
npm test

# Run with coverage
npm run test:coverage
```

## 📦 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Sapto Prawiro Utomo**
- Email: medyyes.krps@gmail.com
- Phone: 0895-3339-61424

## 🏢 Company

**Inter Medi-A**
- Address: Jalan Klingkit Dalam Blok C No. 22, RT 010/RW 011, Rawa Buaya, Cengkareng, Jakarta Barat 11470
- Phone: +62 21 1234 5678
- Email: info@intermedia.com

---

© 2024 Inter Medi-A. All rights reserved.
