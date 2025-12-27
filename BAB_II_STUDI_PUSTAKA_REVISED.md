# BAB II
# STUDI PUSTAKA

## 2.1 Teori-Teori Umum

### 2.1.1 Konsep Dasar Sistem Informasi

Menurut Kadir (2021:55), sistem informasi merupakan kumpulan dari beberapa komponen yang saling berhubungan untuk mengumpulkan, memproses, menyimpan, dan mendistribusikan informasi guna mendukung pengambilan keputusan dalam suatu organisasi. Sistem informasi terdiri dari lima komponen utama yaitu perangkat keras (hardware), perangkat lunak (software), basis data (database), prosedur (procedure), dan manusia (people).

Karakteristik sistem informasi yang baik menurut Sutabri (2020:45) meliputi:
1. **Akurat** - informasi yang dihasilkan bebas dari kesalahan
2. **Tepat waktu** - informasi tersedia saat dibutuhkan
3. **Relevan** - informasi sesuai dengan kebutuhan pengguna
4. **Lengkap** - informasi yang disajikan komprehensif
5. **Dapat dipercaya** - informasi dapat diandalkan untuk pengambilan keputusan

Dalam konteks penelitian ini, sistem informasi digunakan untuk mengintegrasikan seluruh proses bisnis Inter Medi-A Computer Store mulai dari manajemen produk, pemrosesan pesanan, hingga pelaporan penjualan dalam satu platform e-commerce yang terintegrasi.

### 2.1.2 Konsep Electronic Commerce (E-Commerce)

Laudon & Laudon (2020:384) mendefinisikan electronic commerce sebagai proses jual beli barang dan jasa melalui jaringan internet yang melibatkan transaksi komersial antara organisasi dan individu. E-commerce telah mengubah cara perusahaan berinteraksi dengan pelanggan, supplier, dan mitra bisnis melalui digitalisasi proses transaksi.

Klasifikasi e-commerce berdasarkan pelaku transaksi:
1. **Business to Consumer (B2C)** - transaksi antara perusahaan dengan konsumen akhir
2. **Business to Business (B2B)** - transaksi antar perusahaan
3. **Consumer to Consumer (C2C)** - transaksi antar konsumen melalui platform marketplace
4. **Consumer to Business (C2B)** - individu menjual produk atau jasa kepada perusahaan

Keunggulan e-commerce menurut Turban et al. (2018:67) mencakup jangkauan global, operasional 24/7, biaya operasional rendah, personalisasi layanan, dan kemudahan perbandingan produk. Sistem e-commerce Inter Medi-A Computer Store mengadopsi model B2C dengan fitur marketplace yang memungkinkan multiple seller.

### 2.1.3 Konsep Dasar Basis Data

Menurut Connolly & Begg (2019:23), basis data adalah kumpulan data yang saling berhubungan secara logis dan dirancang untuk memenuhi kebutuhan informasi suatu organisasi. Sistem manajemen basis data (DBMS) adalah perangkat lunak yang memungkinkan pengguna untuk mendefinisikan, membuat, memelihara, dan mengontrol akses ke basis data.

Karakteristik basis data yang baik:
1. **Data Independence** - perubahan struktur data tidak mempengaruhi aplikasi
2. **Data Integrity** - konsistensi dan akurasi data terjaga
3. **Data Security** - perlindungan data dari akses yang tidak sah
4. **Concurrent Access** - multiple user dapat mengakses data secara bersamaan
5. **Recovery** - kemampuan pemulihan data jika terjadi kegagalan sistem

Dalam penelitian ini, MongoDB dipilih sebagai sistem basis data NoSQL yang memberikan fleksibilitas dalam struktur data dan skalabilitas horizontal untuk menangani pertumbuhan data e-commerce.

## 2.2 Teori-Teori Khusus

### 2.2.1 Software Development Life Cycle (SDLC) Waterfall

Pressman & Maxim (2019:69) menjelaskan bahwa model Waterfall merupakan pendekatan pengembangan perangkat lunak yang dilakukan secara berurutan dan sistematis melalui tahapan-tahapan yang telah ditentukan. Model ini cocok untuk proyek dengan kebutuhan yang jelas dan stabil serta memerlukan dokumentasi yang komprehensif.

Tahapan SDLC Waterfall:
1. **Requirements Analysis** - pengumpulan dan analisis kebutuhan sistem secara detail
2. **System Design** - perancangan arsitektur sistem, database, dan antarmuka
3. **Implementation** - implementasi kode program berdasarkan desain
4. **Testing** - pengujian sistem secara menyeluruh untuk memastikan kualitas
5. **Deployment** - peluncuran sistem ke lingkungan produksi
6. **Maintenance** - pemeliharaan dan perbaikan sistem berkelanjutan

Keunggulan model Waterfall menurut Sommerville (2018:45) meliputi struktur yang jelas, dokumentasi lengkap, mudah dikelola, dan cocok untuk tim besar. Model ini dipilih untuk penelitian ini karena kebutuhan sistem e-commerce sudah jelas dan memerlukan dokumentasi lengkap untuk keperluan akademis.

### 2.2.2 Teknologi React.js

Abdulloh (2018:45) menjelaskan bahwa React.js adalah library JavaScript yang dikembangkan oleh Facebook untuk membangun antarmuka pengguna yang interaktif dan responsif. React menggunakan konsep Virtual DOM yang membuat aplikasi web menjadi lebih cepat dan efisien dalam rendering komponen.

Konsep fundamental React.js:
1. **Component-Based Architecture** - aplikasi dibangun dari komponen yang reusable
2. **Virtual DOM** - representasi virtual dari DOM yang meningkatkan performa
3. **JSX (JavaScript XML)** - sintaks yang memungkinkan penulisan HTML dalam JavaScript
4. **State Management** - pengelolaan state aplikasi yang efisien
5. **Unidirectional Data Flow** - aliran data satu arah yang mudah diprediksi

Keunggulan React.js menurut Nugroho (2022:78) mencakup performa tinggi melalui Virtual DOM, komponen yang dapat digunakan kembali, dukungan komunitas yang besar, SEO friendly dengan server-side rendering, dan developer tools yang powerful untuk debugging.

### 2.2.3 Teknologi Node.js dan Express.js

Wahana Komputer (2022:78) mendefinisikan Node.js sebagai runtime environment JavaScript yang memungkinkan JavaScript berjalan di server-side menggunakan event-driven, non-blocking I/O model yang membuatnya ringan dan efisien untuk aplikasi real-time. Express.js adalah framework web untuk Node.js yang menyediakan layer tipis dari fitur aplikasi web fundamental.

Karakteristik Node.js:
1. **Asynchronous & Event-Driven** - semua API bersifat asynchronous
2. **Single Threaded** - menggunakan single thread dengan event looping
3. **Cross Platform** - dapat berjalan di berbagai sistem operasi
4. **Fast Code Execution** - dibangun di atas V8 JavaScript Engine
5. **NPM Ecosystem** - akses ke ribuan library open source

Express.js menyediakan fitur routing yang fleksibel, middleware support, template engine integration, dan RESTful API development yang memudahkan pembangunan backend aplikasi web modern.

### 2.2.4 Basis Data MongoDB

Indrajani (2019:89) menjelaskan bahwa MongoDB adalah sistem manajemen basis data NoSQL yang menggunakan format dokumen BSON (Binary JSON) untuk penyimpanan data. MongoDB memberikan fleksibilitas dalam struktur data dan skalabilitas horizontal yang tinggi untuk aplikasi modern.

Karakteristik MongoDB:
1. **Document-Oriented** - menyimpan data dalam format dokumen BSON
2. **Schema Flexibility** - tidak memerlukan skema yang kaku seperti RDBMS
3. **Horizontal Scaling** - mendukung sharding untuk distribusi data
4. **Rich Query Language** - mendukung query yang kompleks dan aggregation
5. **Indexing** - mendukung berbagai jenis index untuk optimasi performa

Keunggulan MongoDB untuk aplikasi e-commerce meliputi fleksibilitas schema untuk produk dengan spesifikasi yang bervariasi, performa tinggi untuk operasi read/write, high availability melalui replica set, dan kemampuan auto-scaling berdasarkan load aplikasi.

### 2.2.5 User Interface dan User Experience (UI/UX)

Sari (2020:32) mendefinisikan User Interface (UI) sebagai tampilan visual sistem yang berinteraksi langsung dengan pengguna, sedangkan User Experience (UX) merupakan keseluruhan pengalaman pengguna ketika menggunakan aplikasi. UI/UX yang baik dapat meningkatkan kepuasan pengguna dan conversion rate pada aplikasi e-commerce.

Prinsip dasar UI/UX Design:
1. **Usability** - kemudahan penggunaan dan navigasi yang intuitif
2. **Consistency** - konsistensi dalam elemen visual dan interaksi
3. **Accessibility** - dapat diakses oleh semua pengguna termasuk disabilitas
4. **Responsiveness** - tampilan optimal di berbagai perangkat
5. **Performance** - loading time yang cepat dan interaksi yang smooth

Elemen penting dalam UI/UX e-commerce mencakup navigasi yang jelas, fungsi pencarian yang powerful, tampilan produk yang menarik, proses checkout yang sederhana, dan optimasi untuk perangkat mobile.

## 2.3 Tools yang Digunakan

### 2.3.1 Development Environment

**Visual Studio Code** merupakan code editor yang powerful dengan dukungan extension untuk React.js, Node.js, dan MongoDB. Menyediakan fitur debugging, syntax highlighting, integrated terminal, dan Git integration yang memudahkan development process.

**Node.js Runtime Environment** berfungsi sebagai platform untuk menjalankan JavaScript di server-side dengan NPM (Node Package Manager) untuk manajemen dependencies dan package ecosystem yang luas.

**MongoDB Compass** adalah GUI tool untuk manajemen database MongoDB yang memudahkan dalam visualisasi data, query execution, performance monitoring, dan schema analysis.

### 2.3.2 Framework dan Library

**Frontend Technology Stack:**
- **React.js 18** - library untuk membangun user interface dengan component-based architecture
- **Tailwind CSS** - utility-first CSS framework untuk rapid styling development
- **React Router** - library untuk routing dalam single page application
- **Zustand** - lightweight state management library yang mudah digunakan
- **Axios** - HTTP client untuk komunikasi dengan backend API

**Backend Technology Stack:**
- **Express.js** - web framework untuk Node.js dengan middleware support
- **Mongoose** - ODM (Object Document Mapper) untuk MongoDB dengan schema validation
- **JWT (JSON Web Token)** - untuk authentication dan authorization
- **Multer** - middleware untuk handling multipart/form-data file upload
- **Bcrypt** - library untuk password hashing dan security

### 2.3.3 Deployment dan Testing Tools

**Deployment Platform:**
- **Vercel** - platform cloud untuk deployment frontend React.js dengan CDN global
- **MongoDB Atlas** - database-as-a-service untuk MongoDB dengan automatic scaling
- **GitHub** - version control system dan repository hosting dengan CI/CD integration

**Testing Framework:**
- **Jest** - JavaScript testing framework untuk unit testing
- **React Testing Library** - testing utilities untuk React components
- **Postman** - API testing dan documentation tool untuk backend endpoints

## 2.4 Penelitian Terdahulu

### 2.4.1 Jurnal dan Prosiding (5 Tahun Terakhir)

**1. Sari, D. P., & Wibowo, A. (2023)**
"Implementasi E-Commerce untuk UMKM Menggunakan Framework React.js"
*Jurnal Teknologi Informasi dan Komunikasi*, 19(3), 112-125.

Penelitian ini membahas implementasi sistem e-commerce untuk UMKM menggunakan React.js sebagai frontend framework. Hasil penelitian menunjukkan bahwa penggunaan React.js dapat meningkatkan performa aplikasi hingga 40% dibanding teknologi tradisional dan memberikan user experience yang lebih baik. Metodologi yang digunakan adalah prototype development dengan evaluasi usability testing. Penelitian ini relevan karena menggunakan teknologi yang sama dan fokus pada digitalisasi UMKM.

**2. Hidayat, R., & Pratama, B. (2022)**
"Analisis Performa Sistem E-Commerce Menggunakan Node.js dan MongoDB untuk Aplikasi Skala Besar"
*Prosiding Seminar Nasional Teknologi Informasi*, 8(2), 45-58.

Penelitian ini menganalisis performa sistem e-commerce yang dibangun dengan Node.js dan MongoDB dalam menangani traffic tinggi. Hasil penelitian membuktikan bahwa kombinasi teknologi ini dapat menangani hingga 10,000 concurrent users dengan response time rata-rata 200ms. Sistem yang dikembangkan berhasil meningkatkan throughput hingga 65% dibanding arsitektur tradisional. Penelitian ini memberikan insight tentang scalability dan performance optimization.

**3. Wibowo, H., Sari, M., & Rahman, A. (2021)**
"Perancangan Sistem E-Commerce Responsif dengan Pendekatan Mobile-First Design"
*Jurnal Sistem Informasi*, 16(2), 67-78.

Penelitian ini menunjukkan pentingnya responsive design dalam meningkatkan user experience hingga 60%. Implementasi mobile-first approach terbukti meningkatkan conversion rate sebesar 35% dan mengurangi bounce rate hingga 25%. Metodologi yang digunakan adalah design thinking dengan user-centered design approach. Penelitian ini relevan untuk aspek UI/UX development dalam sistem e-commerce.

**4. Suprianto, D., & Rahman, A. (2020)**
"Implementasi Metode Waterfall dalam Pengembangan Sistem Informasi E-Commerce pada Toko Komputer"
*Jurnal Informatika dan Komputer*, 14(1), 23-35.

Penelitian ini menunjukkan efektivitas metode Waterfall untuk proyek e-commerce dengan requirement yang jelas dan stabil. Sistem yang dikembangkan berhasil mengurangi kesalahan pencatatan hingga 90% dan meningkatkan efisiensi operasional sebesar 55%. Dokumentasi yang dihasilkan sangat lengkap dan memudahkan maintenance. Penelitian ini relevan untuk aspek metodologi pengembangan sistem.

**5. Pratama, B. E., & Nugroho, S. (2021)**
"Optimasi Performa Aplikasi Web E-Commerce Menggunakan Teknologi Modern dan Cloud Computing"
*Prosiding Konferensi Nasional Sistem Informasi*, 12(1), 89-102.

Penelitian ini membahas optimasi performa aplikasi e-commerce melalui implementasi teknologi modern dan cloud deployment. Hasil penelitian menunjukkan peningkatan loading speed hingga 70% dan availability 99.9% melalui cloud infrastructure. Implementasi CDN dan caching strategy berhasil mengurangi server load hingga 50%. Penelitian ini memberikan insight tentang deployment strategy dan performance optimization.

### 2.4.2 Analisis Gap Penelitian

Berdasarkan review terhadap penelitian terdahulu, terdapat beberapa research gap yang akan diisi oleh penelitian ini:

1. **Integrasi Teknologi Komprehensif**: Belum ada penelitian yang mengintegrasikan React.js, Node.js, dan MongoDB secara komprehensif dengan studi kasus spesifik toko komputer di Indonesia.

2. **Fokus Sektor IT Retail**: Penelitian sebelumnya lebih banyak fokus pada e-commerce general, sedangkan penelitian ini spesifik untuk toko komputer dengan karakteristik produk teknologi yang kompleks.

3. **End-to-End Implementation**: Penelitian ini tidak hanya membahas development, tetapi juga mencakup business analysis, deployment, dan digital marketing strategy yang terintegrasi.

4. **Real Business Case**: Menggunakan studi kasus nyata Inter Medi-A Computer Store dengan data dan proses bisnis yang actual, bukan simulasi atau prototype.

5. **Performance Metrics**: Menyediakan data performa dan improvement yang terukur dengan metodologi testing yang komprehensif.

### 2.4.3 Positioning Penelitian

Penelitian ini memposisikan diri sebagai implementasi praktis teknologi web modern untuk digitalisasi UMKM sektor IT dengan pendekatan yang holistik. Kontribusi utama penelitian ini adalah:

1. **Comprehensive Documentation**: Dokumentasi lengkap proses transformasi digital dari sistem manual ke digital
2. **Technology Best Practices**: Implementasi best practices React.js/Node.js/MongoDB untuk e-commerce
3. **Measurable Impact**: Data performa dan business improvement yang terukur
4. **Replicable Framework**: Framework yang dapat direplikasi untuk UMKM sejenis di Indonesia

## 2.5 Kerangka Teoritis

Berdasarkan studi pustaka yang telah dilakukan, kerangka teoritis penelitian ini dapat digambarkan sebagai integrasi antara teori sistem informasi, metodologi pengembangan perangkat lunak, dan teknologi web modern untuk menciptakan solusi e-commerce yang efektif.

**Landasan Teoritis:**
- Teori Sistem Informasi → Analisis kebutuhan dan perancangan sistem
- SDLC Waterfall → Metodologi pengembangan yang sistematis
- E-Commerce Theory → Model bisnis dan strategi digital
- UI/UX Principles → Desain antarmuka yang user-friendly
- Database Theory → Perancangan basis data yang optimal

**Implementasi Teknologi:**
- React.js → Frontend development dengan component-based architecture
- Node.js + Express.js → Backend development dengan RESTful API
- MongoDB → Database management dengan document-oriented approach
- Cloud Computing → Deployment dan scalability solution

**Expected Outcome:**
- Sistem e-commerce yang terintegrasi dan scalable
- Peningkatan efisiensi operasional bisnis
- Enhanced customer experience dan satisfaction
- Data-driven decision making capability

## 2.6 Kesimpulan Studi Pustaka

Berdasarkan studi pustaka yang telah dilakukan, dapat disimpulkan bahwa pengembangan sistem e-commerce berbasis web menggunakan teknologi React.js, Node.js, dan MongoDB dengan metodologi SDLC Waterfall merupakan pendekatan yang tepat dan modern untuk mengatasi permasalahan digitalisasi bisnis Inter Medi-A Computer Store.

Kombinasi teknologi ini memberikan keunggulan dalam hal performance melalui React.js Virtual DOM dan Node.js event-driven architecture, scalability melalui MongoDB horizontal scaling dan cloud deployment, developer experience yang optimal dengan JavaScript ecosystem yang mature, dan user experience yang superior melalui responsive design dan real-time features.

Penelitian terdahulu menunjukkan bahwa implementasi teknologi serupa telah terbukti memberikan peningkatan signifikan dalam efisiensi operasional, customer experience, dan pertumbuhan bisnis. Penelitian ini akan mengisi research gap dengan fokus spesifik pada sektor UMKM toko komputer dan implementasi yang komprehensif dari business analysis hingga deployment dan digital marketing strategy.

Kerangka teoritis yang telah disusun memberikan foundation yang solid untuk pengembangan sistem e-commerce yang tidak hanya secara teknis robust, tetapi juga memberikan value bisnis yang terukur bagi Inter Medi-A Computer Store dalam era digital economy.
