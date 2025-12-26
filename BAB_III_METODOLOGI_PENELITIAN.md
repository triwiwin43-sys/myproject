# BAB III
# METODOLOGI PENELITIAN

## 3.1 Tahapan Penelitian

Penelitian ini menggunakan pendekatan Software Development Life Cycle (SDLC) model Waterfall yang dilakukan secara sistematis dan berurutan. Setiap tahapan memiliki metode pengumpulan data, analisis, dan luaran yang spesifik untuk memastikan kualitas hasil penelitian.

### 3.1.1 Tahap 1: Analisis Kebutuhan (Requirements Analysis)

**Tujuan:** Mengidentifikasi dan menganalisis kebutuhan sistem e-commerce Inter Medi-A Computer Store secara komprehensif.

**Metode Pengumpulan Data:**

1. **Observasi Langsung**
   - **Lokasi:** Inter Medi-A Computer Store, Jakarta
   - **Durasi:** 5 hari kerja (40 jam)
   - **Fokus:** Mengamati proses bisnis yang sedang berjalan, alur transaksi, pengelolaan stok, dan interaksi dengan pelanggan
   - **Tools:** Checklist observasi, dokumentasi foto/video proses bisnis

2. **Wawancara Terstruktur**
   - **Responden:** 
     - Pemilik toko (1 orang) - 2 jam
     - Staff sales (2 orang) - masing-masing 1 jam
     - Staff IT (1 orang) - 1.5 jam
     - Pelanggan reguler (5 orang) - masing-masing 30 menit
   - **Instrumen:** Panduan wawancara dengan 25 pertanyaan terstruktur
   - **Fokus:** Identifikasi masalah, kebutuhan fungsional, ekspektasi sistem

3. **Analisis Dokumen**
   - **Dokumen:** Laporan penjualan, data stok, form pemesanan manual, nota penjualan
   - **Periode:** Data 6 bulan terakhir
   - **Fokus:** Pola transaksi, volume penjualan, jenis produk populer

**Analisis Data:**
- **Teknik:** Analisis deskriptif dan kategorisasi masalah menggunakan Fishbone Diagram
- **Tools:** Microsoft Excel untuk tabulasi data, Lucidchart untuk diagram
- **Output:** Matriks kebutuhan fungsional dan non-fungsional

**Luaran Tahap 1:**
- Dokumen Software Requirements Specification (SRS)
- Fishbone Diagram analisis masalah
- Business Model Canvas Inter Medi-A Computer Store
- Daftar kebutuhan fungsional (15 fitur utama)
- Daftar kebutuhan non-fungsional (performa, keamanan, usability)

### 3.1.2 Tahap 2: Perancangan Sistem (System Design)

**Tujuan:** Merancang arsitektur sistem, database, dan antarmuka pengguna berdasarkan hasil analisis kebutuhan.

**Metode Pengumpulan Data:**

1. **Studi Literatur Teknologi**
   - **Sumber:** Dokumentasi resmi React.js, Node.js, MongoDB
   - **Fokus:** Best practices, design patterns, security guidelines
   - **Durasi:** 1 minggu

2. **Benchmarking Kompetitor**
   - **Target:** 5 website e-commerce toko komputer (Tokopedia, Shopee, JD.ID)
   - **Aspek:** UI/UX design, fitur, user flow, performance
   - **Tools:** Google PageSpeed Insights, GTmetrix untuk analisis performa

**Analisis Data:**
- **Teknik:** Comparative analysis dan gap analysis
- **Tools:** Figma untuk UI/UX design, Draw.io untuk diagram sistem
- **Framework:** Unified Modeling Language (UML) untuk modeling

**Luaran Tahap 2:**
- Arsitektur sistem (3-tier architecture)
- Use Case Diagram dengan 12 use case utama
- Class Diagram dengan 8 class utama
- Entity Relationship Diagram (ERD)
- Spesifikasi database MongoDB (5 collections)
- Wireframe dan mockup UI/UX (15 halaman)
- API specification (20 endpoints)

### 3.1.3 Tahap 3: Implementasi (Implementation)

**Tujuan:** Mengimplementasikan sistem e-commerce berdasarkan desain yang telah dibuat menggunakan teknologi React.js, Node.js, dan MongoDB.

**Metode Pengumpulan Data:**

1. **Pengukuran Langsung Performance**
   - **Metrics:** Loading time, memory usage, CPU utilization
   - **Tools:** Chrome DevTools, Node.js profiler, MongoDB Compass
   - **Frekuensi:** Setiap sprint (1 minggu)

2. **Code Review dan Testing**
   - **Metode:** Peer review, automated testing
   - **Tools:** ESLint untuk code quality, Jest untuk unit testing
   - **Coverage:** Minimum 80% code coverage

**Analisis Data:**
- **Teknik:** Performance monitoring dan code quality analysis
- **Tools:** SonarQube untuk code analysis, Lighthouse untuk web performance
- **Metrics:** Cyclomatic complexity, maintainability index

**Luaran Tahap 3:**
- Source code frontend React.js (25 components)
- Source code backend Node.js (15 modules)
- Database schema MongoDB (5 collections)
- API documentation (20 endpoints)
- Unit test cases (100+ test cases)
- Performance optimization report

### 3.1.4 Tahap 4: Pengujian (Testing)

**Tujuan:** Memastikan sistem berfungsi sesuai spesifikasi dan memenuhi kebutuhan pengguna melalui pengujian yang komprehensif.

**Metode Pengumpulan Data:**

1. **Black Box Testing**
   - **Scope:** Semua fitur fungsional sistem
   - **Test Cases:** 50 skenario pengujian
   - **Responden:** 3 tester internal + 5 user eksternal
   - **Tools:** Test case management spreadsheet

2. **White Box Testing**
   - **Scope:** Code coverage, logic flow, security
   - **Tools:** Jest untuk unit testing, Postman untuk API testing
   - **Metrics:** Code coverage, cyclomatic complexity

3. **Performance Testing**
   - **Tools:** Apache JMeter untuk load testing
   - **Scenarios:** 100, 500, 1000 concurrent users
   - **Metrics:** Response time, throughput, error rate

4. **Usability Testing**
   - **Responden:** 10 pengguna (5 customer, 3 seller, 2 admin)
   - **Metode:** Task-based testing dengan think-aloud protocol
   - **Metrics:** Task completion rate, time on task, error rate

**Analisis Data:**
- **Teknik:** Statistical analysis untuk performance metrics
- **Tools:** SPSS untuk analisis statistik, Excel untuk visualisasi
- **Framework:** ISO 25010 untuk quality assessment

**Luaran Tahap 4:**
- Test report dengan 95% pass rate
- Performance benchmark report
- Usability testing report dengan SUS score > 80
- Bug tracking dan resolution log
- Security assessment report

### 3.1.5 Tahap 5: Deployment dan Evaluasi

**Tujuan:** Melakukan deployment sistem ke production environment dan evaluasi dampak implementasi terhadap bisnis.

**Metode Pengumpulan Data:**

1. **Monitoring Production**
   - **Platform:** Vercel Analytics, MongoDB Atlas monitoring
   - **Metrics:** Uptime, response time, user engagement
   - **Durasi:** 4 minggu monitoring

2. **Survei Kepuasan Pengguna**
   - **Responden:** 30 pengguna aktif (20 customer, 7 seller, 3 admin)
   - **Instrumen:** Kuesioner online dengan 20 pertanyaan (Likert scale 1-5)
   - **Aspek:** Kemudahan penggunaan, kepuasan fitur, intention to use

3. **Analisis Dampak Bisnis**
   - **Data:** Transaksi penjualan, waktu proses, error rate
   - **Periode:** Perbandingan 3 bulan sebelum vs 1 bulan setelah implementasi
   - **Sumber:** Database sistem dan laporan manual sebelumnya

**Analisis Data:**
- **Teknik:** Comparative analysis (before-after implementation)
- **Tools:** Google Analytics, custom dashboard untuk business metrics
- **Statistical Test:** Paired t-test untuk membandingkan performa

**Luaran Tahap 5:**
- Production deployment report
- User satisfaction survey results (target: rata-rata 4.2/5.0)
- Business impact analysis report
- ROI calculation dan cost-benefit analysis
- Recommendations untuk improvement

### 3.1.6 Diagram Alir Tahapan Penelitian

```
                            MULAI
                              │
                              ▼
                    ┌─────────────────────┐
                    │   TAHAP 1: ANALISIS │
                    │    KEBUTUHAN        │
                    │                     │
                    │ • Observasi         │
                    │ • Wawancara         │
                    │ • Analisis Dokumen  │
                    └─────────────────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │  TAHAP 2: DESIGN    │
                    │     SISTEM          │
                    │                     │
                    │ • Studi Literatur   │
                    │ • Benchmarking      │
                    │ • UML Modeling      │
                    └─────────────────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │ TAHAP 3: IMPLEMENTASI│
                    │                     │
                    │ • Frontend React.js │
                    │ • Backend Node.js   │
                    │ • Database MongoDB  │
                    └─────────────────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │  TAHAP 4: TESTING   │
                    │                     │
                    │ • Black Box Test    │
                    │ • White Box Test    │
                    │ • Performance Test  │
                    │ • Usability Test    │
                    └─────────────────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │ TAHAP 5: DEPLOYMENT │
                    │   & EVALUASI        │
                    │                     │
                    │ • Production Deploy │
                    │ • User Survey       │
                    │ • Business Impact   │
                    └─────────────────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │    DOKUMENTASI      │
                    │   & PELAPORAN       │
                    │                     │
                    │ • Laporan Akhir     │
                    │ • Rekomendasi       │
                    │ • Future Work       │
                    └─────────────────────┘
                              │
                              ▼
                           SELESAI
```

**Gambar 3.1 Diagram Alir Tahapan Penelitian**

### 3.1.7 Timeline Penelitian

| Tahap | Aktivitas | Minggu 1-2 | Minggu 3-4 | Minggu 5-6 | Minggu 7-8 |
|-------|-----------|-------------|-------------|-------------|-------------|
| 1 | Analisis Kebutuhan | ████████ | | | |
| 2 | Perancangan Sistem | ████ | ████████ | | |
| 3 | Implementasi | | ████ | ████████ | ████ |
| 4 | Testing | | | ████ | ████████ |
| 5 | Deployment & Evaluasi | | | | ████████ |

## 3.2 Perbedaan dari Penelitian Sebelumnya

Berdasarkan review terhadap 5 penelitian terdahulu yang telah dianalisis pada BAB II, penelitian ini memiliki beberapa perbedaan signifikan yang menjadi kontribusi dan novelty:

### 3.2.1 Perbedaan dengan Sari & Wibowo (2023)

**Penelitian Sebelumnya:**
- Fokus pada implementasi React.js untuk UMKM secara general
- Menggunakan backend PHP dan MySQL
- Tidak membahas deployment ke cloud platform
- Evaluasi hanya dari sisi teknis (performa aplikasi)

**Penelitian Ini:**
- **Spesifik sektor toko komputer** dengan karakteristik produk IT yang kompleks
- **Full-stack JavaScript** menggunakan Node.js dan MongoDB untuk konsistensi teknologi
- **Cloud-native deployment** dengan Vercel dan MongoDB Atlas
- **Evaluasi holistik** mencakup teknis, bisnis, dan user experience

### 3.2.2 Perbedaan dengan Hidayat (2022)

**Penelitian Sebelumnya:**
- Fokus pada skalabilitas teknis Node.js dan MongoDB
- Tidak membahas frontend framework secara detail
- Evaluasi terbatas pada concurrent users dan database performance
- Tidak ada analisis dampak bisnis

**Penelitian Ini:**
- **Integrasi frontend-backend** yang komprehensif dengan React.js
- **UI/UX design** yang user-centered dengan metodologi design thinking
- **Business impact analysis** dengan metrics ROI dan customer satisfaction
- **Real-world implementation** dengan studi kasus bisnis aktual

### 3.2.3 Perbedaan dengan Wibowo & Sari (2021)

**Penelitian Sebelumnya:**
- Fokus utama pada responsive design dan mobile optimization
- Menggunakan teknologi konvensional (PHP, MySQL)
- Evaluasi terbatas pada conversion rate dan bounce rate
- Tidak membahas backend architecture

**Penelitian Ini:**
- **Modern tech stack** dengan React.js, Node.js, MongoDB
- **Comprehensive system architecture** dengan microservices approach
- **Advanced features** seperti real-time notifications dan analytics dashboard
- **SEO dan digital marketing strategy** yang terintegrasi

### 3.2.4 Perbedaan dengan Rahman & Suprianto (2020)

**Penelitian Sebelumnya:**
- Menggunakan metodologi Waterfall untuk toko komputer
- Teknologi konvensional tanpa cloud deployment
- Fokus pada pengurangan error dan efisiensi operasional
- Tidak membahas user experience secara mendalam

**Penelitian Ini:**
- **Enhanced Waterfall methodology** dengan agile practices dalam implementasi
- **Cloud-first approach** untuk scalability dan reliability
- **Comprehensive testing strategy** termasuk usability dan performance testing
- **Digital transformation framework** yang dapat direplikasi

### 3.2.5 Perbedaan dengan Pratama (2021)

**Penelitian Sebelumnya:**
- Fokus pada fitur real-time notification menggunakan Socket.IO
- Tidak membahas sistem secara holistik
- Evaluasi terbatas pada engagement dan abandoned cart rate
- Tidak ada strategi deployment dan maintenance

**Penelitian Ini:**
- **End-to-end e-commerce solution** dengan semua fitur essential
- **Production-ready deployment** dengan monitoring dan maintenance strategy
- **Business process optimization** tidak hanya fitur teknologi
- **Sustainability framework** untuk long-term success

### 3.2.6 Kontribusi Unik Penelitian Ini

1. **Technological Innovation:**
   - First comprehensive study mengintegrasikan React.js + Node.js + MongoDB untuk toko komputer di Indonesia
   - Cloud-native architecture dengan modern DevOps practices
   - Performance optimization dengan code splitting dan lazy loading

2. **Methodological Contribution:**
   - Enhanced SDLC Waterfall dengan continuous testing dan user feedback
   - Comprehensive evaluation framework (technical + business + UX)
   - Replicable digital transformation methodology untuk UMKM

3. **Business Impact Focus:**
   - Real ROI calculation dengan before-after comparison
   - Customer journey optimization berdasarkan actual user behavior
   - Sustainable business model dengan digital marketing integration

4. **Academic Rigor:**
   - Longitudinal study dengan 4 minggu production monitoring
   - Statistical validation menggunakan paired t-test
   - Comprehensive documentation untuk reproducibility

### 3.2.7 Positioning Matrix Penelitian

| Aspek | Penelitian Terdahulu | Penelitian Ini |
|-------|---------------------|-----------------|
| **Technology Stack** | PHP/MySQL, Basic React | React.js + Node.js + MongoDB |
| **Deployment** | Local/Traditional Hosting | Cloud-Native (Vercel + Atlas) |
| **Evaluation Scope** | Technical Performance | Technical + Business + UX |
| **Industry Focus** | General E-commerce | Specific IT/Computer Store |
| **Methodology** | Basic Waterfall/Prototype | Enhanced Waterfall + Agile |
| **Business Analysis** | Limited/None | Comprehensive ROI + Impact |
| **User Research** | Minimal | Extensive (Observation + Survey) |
| **Sustainability** | Not Addressed | Long-term Strategy Included |

Penelitian ini mengisi gap yang ada dengan memberikan solusi komprehensif, implementasi teknologi modern, dan evaluasi holistik yang dapat menjadi referensi untuk digitalisasi UMKM sektor IT di Indonesia.

## 3.5 Analisis Kebutuhan Sistem

### 3.5.1 Kebutuhan Fungsional

Kebutuhan fungsional merupakan fungsi utama yang harus ada pada sistem e-commerce Inter Medi-A Computer Store:

1. **Autentikasi Pengguna**
   - Sistem dapat melakukan registrasi dan login pengguna
   - Multi-role authentication (Admin, Seller, Customer)
   - Session management dan security

2. **Manajemen Produk**
   - CRUD (Create, Read, Update, Delete) produk
   - Upload dan manajemen gambar produk
   - Kategorisasi dan pencarian produk
   - Manajemen inventori real-time

3. **Sistem Transaksi**
   - Keranjang belanja dengan session storage
   - Checkout process dengan validasi
   - Multiple payment methods
   - Order tracking real-time

4. **Dashboard dan Analytics**
   - Seller dashboard dengan statistik penjualan
   - Admin panel untuk monitoring sistem
   - Laporan penjualan dengan export functionality
   - Real-time notifications

5. **Sistem Komunikasi**
   - Order status updates
   - Email notifications
   - Customer support features

### 3.5.2 Kebutuhan Non-Fungsional

Kebutuhan non-fungsional adalah syarat tambahan yang menjamin sistem berjalan dengan optimal:

1. **Performance**
   - Loading time < 3 detik
   - Support 1000+ concurrent users
   - Mobile performance score > 90/100

2. **Security**
   - JWT authentication
   - Data encryption
   - Input validation dan sanitization
   - HTTPS implementation

3. **Usability**
   - Responsive design (mobile-first)
   - Intuitive user interface
   - Accessibility compliance
   - Cross-browser compatibility

4. **Scalability**
   - Horizontal scaling capability
   - Cloud-based infrastructure
   - CDN integration
   - Database optimization

5. **Reliability**
   - 99.9% uptime
   - Automatic backup
   - Error handling dan logging
   - Disaster recovery plan

## 3.6 Rancangan Alur Penelitian

Tahapan penelitian ini dapat digambarkan dalam bentuk diagram alur penelitian seperti Gambar 3.1 berikut:

```
Mulai
   ↓
Identifikasi Masalah & Studi Kelayakan
   ↓
Pengumpulan Data (Observasi, Wawancara, Studi Pustaka)
   ↓
Analisis Sistem Berjalan & Requirements Analysis
   ↓
Perancangan Sistem (UML, ERD, UI/UX Design)
   ↓
Implementasi Frontend (React.js)
   ↓
Implementasi Backend (Node.js + MongoDB)
   ↓
Integration Testing & System Testing
   ↓
Deployment ke Production (Vercel + MongoDB Atlas)
   ↓
User Acceptance Testing & Performance Testing
   ↓
Documentation & Final Report
   ↓
Selesai
```

**Gambar 3.1 Alur Penelitian Sistem E-Commerce**

## 3.7 Rancangan Umum Sistem

Rancangan umum sistem e-commerce Inter Medi-A Computer Store meliputi tiga aktor utama dengan arsitektur modern:

### 3.7.1 Aktor Sistem
- **Admin** – mengelola data pengguna, seller verification, monitoring sistem, dan analytics
- **Seller** – mengelola produk, inventory, order processing, dan customer service
- **Customer** – browsing produk, shopping cart, checkout, order tracking

### 3.7.2 Arsitektur Sistem
- **Frontend:** React.js dengan Tailwind CSS (SPA - Single Page Application)
- **Backend:** Node.js + Express.js (RESTful API)
- **Database:** MongoDB Atlas (Cloud NoSQL Database)
- **Deployment:** Vercel (Frontend) + MongoDB Atlas (Database)
- **CDN:** Vercel Edge Network untuk global performance

## 3.8 Perangkat yang Digunakan

### 3.8.1 Perangkat Keras (Hardware)

1. **Development Machine:**
   - Processor: Intel Core i7 / AMD Ryzen 7
   - RAM: 16 GB DDR4
   - Storage: 512 GB SSD
   - GPU: Integrated Graphics

2. **Testing Devices:**
   - Desktop PC (Windows/Linux)
   - Laptop (macOS/Windows)
   - Mobile devices (Android/iOS)

### 3.8.2 Perangkat Lunak (Software)

1. **Development Environment:**
   - Sistem Operasi: Windows 11 / macOS / Linux
   - Code Editor: Visual Studio Code
   - Version Control: Git + GitHub
   - API Testing: Postman

2. **Frontend Development:**
   - Runtime: Node.js 18+
   - Framework: React.js 18
   - Build Tool: Vite
   - CSS Framework: Tailwind CSS
   - State Management: Zustand

3. **Backend Development:**
   - Runtime: Node.js + Express.js
   - Database: MongoDB + Mongoose ODM
   - Authentication: JWT (JSON Web Token)
   - File Upload: Multer

4. **Design & Documentation:**
   - UI/UX Design: Figma
   - Diagram: Draw.io / Lucidchart
   - Database Design: MongoDB Compass
   - Documentation: Markdown

5. **Deployment & Monitoring:**
   - Frontend Hosting: Vercel
   - Database: MongoDB Atlas
   - Domain: Custom domain with SSL
   - Monitoring: Vercel Analytics

## 3.9 Pengujian Sistem

Pengujian dilakukan menggunakan kombinasi **Black Box Testing** dan **White Box Testing** untuk memastikan kualitas sistem yang optimal.

### 3.9.1 Black Box Testing
Pengujian berdasarkan fungsi sistem tanpa melihat kode program, fokus pada input-output dan user experience.

### 3.9.2 White Box Testing
Pengujian berdasarkan struktur internal kode, fokus pada logic flow dan code coverage.

**Tabel 3.2 Rencana Pengujian Sistem**

| No. | Fitur | Metode Testing | Expected Result |
|-----|-------|----------------|-----------------|
| 1 | User Authentication | Black Box | Login/Register berhasil dengan validasi |
| 2 | Product Management | Black Box + White Box | CRUD produk berfungsi dengan benar |
| 3 | Shopping Cart | Black Box | Add/remove items, calculate total |
| 4 | Checkout Process | Black Box | Order creation dan payment flow |
| 5 | Order Management | Black Box | Status update dan tracking |
| 6 | Dashboard Analytics | White Box | Data accuracy dan performance |
| 7 | Mobile Responsiveness | Black Box | UI/UX optimal di semua device |
| 8 | Performance Testing | White Box | Loading time < 3s, concurrent users |
| 9 | Security Testing | White Box | Authentication, authorization, data protection |
| 10 | Cross-browser Testing | Black Box | Compatibility Chrome, Firefox, Safari, Edge |

## 3.10 

Berikut jadwal kegiatan penelitian Tugas Akhir yang dilakukan penulis:

**Tabel 3.3 Jadwal Kegiatan Penelitian**

| No. | Kegiatan | Minggu 1-2 | Minggu 3-4 | Minggu 5-6 |
|-----|----------|------------|------------|------------|
| 1 | Analisis & Perancangan | ✓ | | |
| 2 | Implementasi Frontend | | ✓ | |
| 3 | Implementasi Backend | | ✓ | |
| 4 | Testing & Debugging | | | ✓ |
| 5 | Deployment & Documentation | | | ✓ |
| 6 | Final Report | | | ✓ |

## 3.11 Kesimpulan Metodologi

Metode SDLC Waterfall dipilih karena memberikan struktur yang jelas dan dokumentasi yang lengkap untuk pengembangan sistem e-commerce yang kompleks. Dengan tahapan yang sistematis mulai dari analisis kebutuhan, perancangan sistem, implementasi menggunakan teknologi modern (React.js, Node.js, MongoDB), hingga testing dan deployment, diharapkan sistem e-commerce berbasis web yang dikembangkan untuk Inter Medi-A Computer Store dapat berfungsi dengan optimal, memiliki performa tinggi, skalabilitas yang baik, dan memberikan user experience yang excellent sesuai dengan kebutuhan bisnis digital modern.
