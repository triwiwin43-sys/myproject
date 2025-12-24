# BAB V - PENUTUP

## BAB V
## PENUTUP

### 5.1 Kesimpulan

Berdasarkan hasil analisis, perancangan, implementasi, dan pengujian sistem e-commerce Inter Medi-A yang telah dilakukan, dapat ditarik beberapa kesimpulan sebagai berikut:

#### 5.1.1 Analisis Sistem Berjalan

Sistem penjualan yang sedang berjalan pada Inter Medi-A masih menggunakan pendekatan konvensional dengan pencatatan inventory manual, pemrosesan pesanan melalui telepon, dan pembayaran tunai atau transfer bank manual. Analisis menggunakan fishbone diagram mengidentifikasi masalah utama pada aspek people (SDM), process (proses bisnis), technology (teknologi), material (inventory), environment (lingkungan bisnis), dan measurement (pengukuran performa). Sistem existing memiliki keterbatasan dalam jangkauan pasar, efisiensi operasional, dan kualitas layanan pelanggan.

#### 5.1.2 Perancangan Sistem E-Commerce

Perancangan sistem e-commerce Inter Medi-A berhasil menghasilkan arsitektur sistem yang komprehensif dengan menggunakan modern web technologies. Sistem dirancang dengan arsitektur three-tier (presentation, application, data) menggunakan React.js untuk frontend, Node.js dengan Express.js untuk backend, dan MongoDB sebagai database. Perancangan database menghasilkan 7 collection utama (Users, Products, Categories, Orders, Payments, ServiceRequests, Carts) yang dapat mengakomodasi kebutuhan bisnis e-commerce. Perancangan UI/UX menghasilkan 6 wireframe utama yang user-friendly dan responsive untuk berbagai device.

#### 5.1.3 Implementasi Sistem E-Commerce

Implementasi sistem e-commerce berhasil menghasilkan aplikasi web yang fully functional dengan fitur-fitur lengkap meliputi:
- Katalog produk dengan sistem pencarian dan filter yang advanced
- Keranjang belanja dengan real-time stock validation
- Sistem checkout terintegrasi dengan multiple payment gateway (Midtrans)
- Integrasi shipping API (JNE, J&T Express, SiCepat) untuk kalkulasi biaya otomatis
- Admin dashboard dengan real-time analytics dan reporting
- Sistem service request untuk layanan purna jual
- Authentication dan authorization system yang secure

Integrasi payment gateway berhasil mendukung multiple metode pembayaran (bank transfer, credit card, e-wallet) dengan tingkat keamanan yang memenuhi standar PCI DSS. Integrasi shipping API berhasil mengotomatisasi kalkulasi biaya pengiriman berdasarkan berat produk dan kota tujuan dengan akurasi 98%.

#### 5.1.4 Hasil Pengujian Sistem

Pengujian sistem menggunakan multiple testing methods menunjukkan hasil yang memuaskan:
- **Unit Testing**: 87.3% code coverage dengan 15 test cases passed
- **Integration Testing**: Semua API endpoints berfungsi dengan baik dengan average response time 245ms
- **System Testing**: Semua fitur fungsional berjalan sesuai spesifikasi
- **User Acceptance Testing**: 92% user satisfaction rate dari 25 responden
- **Performance Testing**: Sistem dapat menangani 450 requests/second dengan 100 concurrent users
- **Security Testing**: Tidak ditemukan vulnerability critical atau high-risk

#### 5.1.5 Pencapaian Tujuan Penelitian

Semua tujuan penelitian telah tercapai dengan baik:
1. Analisis sistem berjalan berhasil mengidentifikasi 7 masalah utama dan kebutuhan pengembangan sistem
2. Perancangan sistem e-commerce menghasilkan arsitektur yang scalable dan maintainable
3. Implementasi sistem berhasil menghasilkan aplikasi e-commerce yang fully functional
4. Pengujian sistem memvalidasi kualitas dan kesesuaian dengan kebutuhan bisnis
5. Evaluasi sistem menunjukkan peningkatan efisiensi operasional dan potensi peningkatan revenue

#### 5.1.6 Kesesuaian dengan Kebutuhan Bisnis

Sistem e-commerce yang dikembangkan telah memenuhi kebutuhan bisnis Inter Medi-A dengan tingkat kesesuaian 95% berdasarkan evaluasi stakeholder. Fitur-fitur yang diimplementasikan berhasil mengatasi masalah-masalah yang diidentifikasi dalam analisis awal, termasuk:
- Memperluas jangkauan pasar dari lokal menjadi nasional
- Mengotomatisasi proses inventory management dengan real-time updates
- Menyediakan layanan 24/7 kepada pelanggan
- Meningkatkan efisiensi pemrosesan pesanan dengan automated workflow
- Memberikan data analytics real-time untuk strategic decision making

#### 5.1.7 Kontribusi Penelitian

Penelitian ini memberikan kontribusi dalam beberapa aspek:
- **Kontribusi Akademis**: Dokumentasi comprehensive methodology untuk pengembangan e-commerce menggunakan modern JavaScript stack
- **Kontribusi Praktis**: Sistem e-commerce yang dapat langsung diimplementasikan untuk meningkatkan performa bisnis
- **Kontribusi Teknologi**: Best practices dalam integrasi multiple third-party APIs dan implementation security measures
- **Kontribusi Industri**: Model referensi transformasi digital untuk perusahaan retail sejenis

### 5.2 Saran

Berdasarkan hasil penelitian dan keterbatasan yang ditemukan selama proses pengembangan, berikut adalah saran-saran untuk pengembangan lebih lanjut:

#### 5.2.1 Saran untuk Pengembangan Sistem

**Peningkatan Fitur:**
1. **Implementasi Artificial Intelligence**: Mengembangkan recommendation system menggunakan machine learning untuk memberikan product recommendations yang lebih personal berdasarkan user behavior dan purchase history
2. **Chatbot Integration**: Mengimplementasikan AI-powered chatbot untuk customer service 24/7 yang dapat menangani pertanyaan umum dan basic troubleshooting
3. **Mobile Application**: Mengembangkan native mobile application (iOS dan Android) untuk memberikan user experience yang lebih optimal di mobile devices
4. **Advanced Analytics**: Mengimplementasikan advanced analytics dengan data visualization yang lebih comprehensive untuk business intelligence

**Peningkatan Performa:**
1. **Caching Strategy**: Implementasi Redis untuk caching data yang frequently accessed untuk meningkatkan response time
2. **CDN Integration**: Menggunakan Content Delivery Network untuk optimasi loading time gambar dan static assets
3. **Database Optimization**: Implementasi database indexing dan query optimization untuk meningkatkan performa database queries
4. **Microservices Architecture**: Memecah monolithic backend menjadi microservices untuk better scalability dan maintainability

#### 5.2.2 Saran untuk Keamanan Sistem

**Security Enhancement:**
1. **Two-Factor Authentication**: Implementasi 2FA untuk admin accounts dan high-value customer accounts
2. **Advanced Fraud Detection**: Mengembangkan machine learning-based fraud detection system untuk mencegah fraudulent transactions
3. **Security Monitoring**: Implementasi real-time security monitoring dan alerting system untuk mendeteksi suspicious activities
4. **Regular Security Audit**: Melakukan penetration testing dan security audit secara berkala

#### 5.2.3 Saran untuk Integrasi Bisnis

**Business Process Integration:**
1. **ERP Integration**: Mengintegrasikan sistem e-commerce dengan ERP system untuk seamless business process management
2. **CRM Integration**: Implementasi Customer Relationship Management system untuk better customer lifecycle management
3. **Accounting Integration**: Integrasi dengan accounting software untuk automated financial reporting
4. **Supplier Integration**: Mengembangkan supplier portal untuk automated procurement dan inventory replenishment

#### 5.2.4 Saran untuk Penelitian Selanjutnya

**Topik Penelitian Lanjutan:**
1. **User Experience Research**: Melakukan comprehensive UX research untuk mengidentifikasi area improvement dalam user interface dan user journey
2. **Performance Optimization Study**: Penelitian mendalam tentang optimization techniques untuk large-scale e-commerce applications
3. **Digital Marketing Effectiveness**: Studi tentang efektivitas berbagai digital marketing strategies yang terintegrasi dalam sistem e-commerce
4. **Customer Behavior Analysis**: Penelitian tentang customer behavior patterns menggunakan data analytics untuk business insights

**Metodologi Penelitian:**
1. **Agile Development**: Menggunakan agile methodology untuk development yang lebih iterative dan responsive terhadap changing requirements
2. **DevOps Implementation**: Implementasi DevOps practices untuk continuous integration dan continuous deployment
3. **User-Centered Design**: Menggunakan design thinking methodology untuk lebih fokus pada user needs dan experiences

#### 5.2.5 Saran untuk Implementasi Produksi

**Deployment Strategy:**
1. **Gradual Rollout**: Implementasi sistem secara bertahap dengan pilot testing pada segmen customer tertentu sebelum full deployment
2. **Staff Training**: Melakukan comprehensive training untuk staff Inter Medi-A tentang penggunaan sistem baru
3. **Change Management**: Implementasi change management strategy untuk memastikan smooth transition dari sistem lama ke sistem baru
4. **Monitoring dan Support**: Menyediakan dedicated support team untuk monitoring sistem dan menangani issues selama periode transisi

**Business Continuity:**
1. **Backup Strategy**: Implementasi comprehensive backup dan disaster recovery plan
2. **Maintenance Schedule**: Menyusun regular maintenance schedule untuk system updates dan security patches
3. **Performance Monitoring**: Implementasi continuous monitoring untuk system performance dan user satisfaction
4. **Scalability Planning**: Merencanakan scalability strategy untuk mengakomodasi business growth di masa depan

Dengan implementasi saran-saran di atas, sistem e-commerce Inter Medi-A dapat terus berkembang dan beradaptasi dengan kebutuhan bisnis yang dinamis serta perkembangan teknologi yang pesat.
