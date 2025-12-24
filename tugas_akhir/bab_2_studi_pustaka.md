# BAB II - STUDI PUSTAKA

## BAB II
## STUDI PUSTAKA

### 2.1 Teori-Teori Umum

#### 2.1.1 Sistem Informasi

Sistem informasi merupakan kombinasi dari teknologi informasi dan aktivitas orang yang menggunakan teknologi tersebut untuk mendukung operasi dan manajemen (Laudon & Laudon, 2020). Menurut O'Brien & Marakas (2019), sistem informasi adalah kombinasi teratur dari people, hardware, software, communications networks, data resources, dan policies and procedures yang menyimpan, memulihkan, mengubah, dan menyebarkan informasi dalam suatu organisasi.

Komponen utama sistem informasi meliputi:
1. **Hardware**: Perangkat keras komputer dan peralatan pendukung
2. **Software**: Program aplikasi dan sistem operasi
3. **Data**: Fakta-fakta yang diorganisir dalam database
4. **Procedures**: Aturan dan kebijakan penggunaan sistem
5. **People**: Pengguna dan spesialis sistem informasi
6. **Networks**: Jaringan komunikasi dan internet

#### 2.1.2 E-Commerce

E-commerce atau electronic commerce didefinisikan sebagai proses pembelian, penjualan, transfer, atau pertukaran produk, layanan, dan/atau informasi melalui jaringan komputer, termasuk internet (Turban et al., 2018). Laudon & Traver (2021) mendefinisikan e-commerce sebagai penggunaan internet, web, dan aplikasi mobile untuk bertransaksi bisnis secara digital antara organisasi dan individu.

**Jenis-Jenis E-Commerce:**
1. **Business-to-Consumer (B2C)**: Transaksi antara perusahaan dengan konsumen akhir
2. **Business-to-Business (B2B)**: Transaksi antara perusahaan dengan perusahaan lain
3. **Consumer-to-Consumer (C2C)**: Transaksi antara konsumen dengan konsumen
4. **Consumer-to-Business (C2B)**: Transaksi dari konsumen ke perusahaan

**Keuntungan E-Commerce:**
- Jangkauan pasar yang lebih luas (global reach)
- Operasional 24/7 tanpa batasan waktu
- Biaya operasional yang lebih rendah
- Personalisasi layanan untuk setiap pelanggan
- Kemudahan dalam tracking dan analisis data

### 2.2 Teori-Teori Khusus

#### 2.2.1 Teknologi Web Development

**Frontend Technologies:**

React.js adalah library JavaScript yang dikembangkan oleh Facebook untuk membangun user interface yang interaktif dan dinamis (React Team, 2023). React menggunakan konsep component-based architecture yang memungkinkan pengembangan aplikasi yang modular dan reusable.

Keunggulan React.js:
- Virtual DOM untuk performa yang optimal
- Component-based architecture untuk reusability
- Unidirectional data flow untuk predictable state management
- Large ecosystem dan community support
- SEO-friendly dengan server-side rendering

**Backend Technologies:**

Node.js adalah runtime environment JavaScript yang memungkinkan eksekusi JavaScript di server-side (Node.js Foundation, 2023). Express.js adalah web application framework untuk Node.js yang menyediakan fitur-fitur untuk membangun web dan mobile applications.

Keunggulan Node.js dan Express.js:
- Non-blocking I/O untuk performa tinggi
- JavaScript di frontend dan backend (full-stack JavaScript)
- NPM ecosystem yang sangat besar
- Scalable untuk aplikasi real-time
- RESTful API development yang mudah

**Database Management System:**

MongoDB adalah document-oriented NoSQL database yang menyimpan data dalam format BSON (Binary JSON) (MongoDB Inc., 2023). MongoDB cocok untuk aplikasi web modern yang membutuhkan fleksibilitas schema dan scalability horizontal.

Keunggulan MongoDB:
- Schema-less untuk fleksibilitas data structure
- Horizontal scaling dengan sharding
- Rich query language dengan aggregation framework
- High availability dengan replica sets
- Cloud-ready dengan MongoDB Atlas

#### 2.2.2 Payment Gateway Integration

Payment gateway adalah layanan yang memproses pembayaran elektronik untuk e-commerce dan aplikasi online (Chaffey, 2019). Midtrans adalah payment gateway lokal Indonesia yang menyediakan berbagai metode pembayaran seperti credit card, bank transfer, dan e-wallet.

Fitur-fitur Payment Gateway:
- Multiple payment methods (credit card, bank transfer, e-wallet)
- Security compliance (PCI DSS)
- Real-time transaction processing
- Fraud detection dan prevention
- Recurring payment untuk subscription

#### 2.2.3 Shipping API Integration

Shipping API memungkinkan integrasi dengan jasa pengiriman untuk kalkulasi biaya, booking pengiriman, dan tracking otomatis. JNE, J&T Express, dan SiCepat menyediakan API untuk integrasi dengan platform e-commerce.

Fungsi Shipping API:
- Kalkulasi biaya pengiriman berdasarkan berat dan tujuan
- Booking pengiriman otomatis
- Tracking status pengiriman real-time
- Estimasi waktu pengiriman
- Proof of delivery notification

### 2.3 Tools yang Digunakan

#### 2.3.1 Development Tools

**Visual Studio Code**: Code editor dengan fitur IntelliSense, debugging, dan Git integration yang mendukung pengembangan JavaScript/TypeScript.

**Postman**: Tool untuk testing dan dokumentasi API yang memungkinkan testing endpoint REST API secara interaktif.

**Git & GitHub**: Version control system untuk manajemen source code dan kolaborasi tim pengembangan.

#### 2.3.2 Design Tools

**Figma**: Tool design collaborative untuk membuat wireframe, mockup, dan prototype user interface.

**Adobe XD**: Tool design untuk user experience dan user interface design dengan fitur prototyping.

#### 2.3.3 Testing Tools

**Jest**: JavaScript testing framework untuk unit testing dan integration testing.

**Cypress**: End-to-end testing framework untuk testing aplikasi web secara otomatis.

**Lighthouse**: Tool untuk audit performa, accessibility, dan SEO website.

### 2.4 Metodologi Pengembangan Sistem

#### 2.4.1 Software Development Life Cycle (SDLC)

SDLC adalah proses sistematis untuk mengembangkan software yang berkualitas tinggi dalam waktu dan biaya yang efektif (Pressman & Maxim, 2020). SDLC menyediakan framework terstruktur untuk perencanaan, pembuatan, testing, dan deployment software.

#### 2.4.2 Model Waterfall

Model Waterfall adalah pendekatan sequential dalam pengembangan software dimana setiap fase harus diselesaikan sebelum melanjutkan ke fase berikutnya (Sommerville, 2020). Model ini cocok untuk proyek dengan requirement yang jelas dan stabil.

Tahapan Model Waterfall:
1. **Requirements Analysis**: Analisis dan dokumentasi kebutuhan sistem
2. **System Design**: Perancangan arsitektur dan desain sistem
3. **Implementation**: Coding dan pengembangan sistem
4. **Testing**: Pengujian sistem untuk memastikan kualitas
5. **Deployment**: Implementasi sistem ke production environment
6. **Maintenance**: Pemeliharaan dan update sistem

### 2.5 Penelitian Terkait

#### 2.5.1 Penelitian Pertama

Adiputra & Wijaya (2021) dalam penelitiannya yang berjudul "Implementasi Sistem E-Commerce Berbasis Web Menggunakan Framework CodeIgniter" mengembangkan sistem e-commerce untuk toko online dengan menggunakan PHP CodeIgniter dan MySQL. Hasil penelitian menunjukkan bahwa sistem dapat meningkatkan efisiensi penjualan sebesar 35% dan mengurangi kesalahan pencatatan inventory sebesar 60%.

**Perbedaan dengan penelitian ini**: Penelitian Adiputra menggunakan teknologi PHP CodeIgniter sedangkan penelitian ini menggunakan modern JavaScript stack (React.js dan Node.js). Selain itu, penelitian ini fokus pada integrasi payment gateway dan shipping API yang tidak dibahas dalam penelitian sebelumnya.

#### 2.5.2 Penelitian Kedua

Pratama & Suharto (2021) melakukan penelitian "Implementasi Payment Gateway pada Sistem E-Commerce untuk Meningkatkan Keamanan Transaksi" yang fokus pada aspek keamanan pembayaran online. Penelitian ini menggunakan enkripsi AES dan implementasi SSL untuk mengamankan data transaksi.

**Perbedaan dengan penelitian ini**: Penelitian Pratama fokus pada aspek security payment gateway, sedangkan penelitian ini mengembangkan sistem e-commerce secara komprehensif dengan integrasi multiple payment methods dan shipping API.

#### 2.5.3 Penelitian Ketiga

Kusuma & Novianti (2019) dalam "Pengembangan Sistem Informasi Penjualan Online Menggunakan Metode Waterfall" mengembangkan sistem penjualan online untuk UMKM dengan metodologi waterfall. Sistem berhasil meningkatkan omzet penjualan sebesar 45% dalam 6 bulan implementasi.

**Perbedaan dengan penelitian ini**: Penelitian Kusuma menggunakan teknologi konvensional (PHP native), sedangkan penelitian ini menggunakan modern web technologies dengan fokus pada user experience dan mobile responsiveness.

#### 2.5.4 Penelitian Keempat

Rahayu & Wijayanti (2020) melakukan penelitian "Strategi Digital Marketing untuk Meningkatkan Penjualan E-Commerce UMKM" yang menganalisis efektivitas strategi digital marketing dalam meningkatkan penjualan online. Hasil penelitian menunjukkan bahwa SEO dan social media marketing dapat meningkatkan traffic website sebesar 150%.

**Perbedaan dengan penelitian ini**: Penelitian Rahayu fokus pada strategi marketing, sedangkan penelitian ini mengintegrasikan strategi SEO dan digital marketing dalam pengembangan sistem e-commerce secara teknis.

#### 2.5.5 Penelitian Kelima

Hartono & Sari (2020) dalam penelitiannya "Analisis Faktor-Faktor yang Mempengaruhi Kepuasan Pelanggan E-Commerce di Indonesia" mengidentifikasi faktor-faktor yang mempengaruhi kepuasan pelanggan dalam berbelanja online, termasuk kemudahan penggunaan, keamanan, dan kualitas layanan.

**Perbedaan dengan penelitian ini**: Penelitian Hartono bersifat analitis terhadap faktor kepuasan pelanggan, sedangkan penelitian ini bersifat development dengan mengimplementasikan faktor-faktor tersebut dalam sistem e-commerce yang dikembangkan.
