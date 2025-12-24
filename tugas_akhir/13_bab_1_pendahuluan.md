# BAB I - PENDAHULUAN

## BAB I
## PENDAHULUAN

### 1.1 Latar Belakang

Perkembangan media penjualan berbasis web telah mengalami pertumbuhan yang sangat pesat dalam beberapa tahun terakhir. Fenomena ini didorong oleh meningkatnya penetrasi internet di Indonesia yang mencapai 77,02% atau sekitar 210,03 juta pengguna pada tahun 2022 menurut data Asosiasi Penyelenggara Jasa Internet Indonesia (APJII). Transformasi digital ini telah mengubah perilaku konsumen dari berbelanja secara konvensional menjadi berbelanja secara online melalui platform e-commerce.

Situasi yang melatarbelakangi penelitian ini adalah kondisi Inter Medi-A sebagai perusahaan yang bergerak di bidang penjualan printer, komputer, dan peralatan kantor yang masih mengandalkan sistem penjualan konvensional. Perusahaan yang telah beroperasi selama lebih dari 10 tahun ini melayani berbagai segmen pelanggan mulai dari individual, UMKM, hingga korporasi dengan menyediakan produk dan layanan service maintenance peralatan kantor.

Masalah yang terjadi terkait dengan topik yang diambil adalah Inter Medi-A menghadapi keterbatasan dalam jangkauan pasar karena hanya mengandalkan toko fisik dan penjualan langsung. Proses bisnis yang berjalan saat ini meliputi pencatatan inventory secara manual, pemrosesan pesanan melalui telepon atau kunjungan langsung, serta sistem pembayaran yang masih konvensional. Hal ini menyebabkan perusahaan kehilangan potensi pasar yang lebih luas dan mengalami inefisiensi dalam operasional bisnis.

Solusi untuk mengatasi permasalahan yang terjadi adalah dengan mengembangkan sistem e-commerce berbasis web yang dapat mengintegrasikan seluruh proses bisnis mulai dari katalog produk, pemesanan, pembayaran, hingga pengiriman. Sistem ini akan dilengkapi dengan fitur manajemen inventory real-time, multiple payment gateway, sistem tracking pesanan, dan dashboard analytics untuk mendukung pengambilan keputusan bisnis.

Argumentasi tentang pemilihan topik penelitian didasarkan pada urgensi transformasi digital yang harus dilakukan oleh perusahaan retail untuk tetap kompetitif di era digital. Menurut data McKinsey Global Institute, perusahaan yang melakukan transformasi digital dapat meningkatkan revenue hingga 23% dan mengurangi biaya operasional hingga 12%. Selain itu, pandemi COVID-19 telah mempercepat adopsi e-commerce di Indonesia dengan pertumbuhan transaksi mencapai 33% pada tahun 2021.

Arti pentingnya penelitian yang akan dilakukan adalah untuk memberikan solusi teknologi informasi yang dapat meningkatkan daya saing Inter Medi-A di pasar digital, memperluas jangkauan pelanggan, dan meningkatkan efisiensi operasional. Penelitian ini juga akan menghasilkan sistem e-commerce yang dapat menjadi model bagi perusahaan sejenis dalam melakukan transformasi digital.

Kaitannya dengan tuntutan kebutuhan saat ini adalah merespons perubahan perilaku konsumen yang semakin digital-savvy dan mengharapkan kemudahan berbelanja online. Sedangkan untuk tuntutan perkembangan di masa yang akan datang, sistem e-commerce ini akan menjadi fondasi untuk implementasi teknologi-teknologi baru seperti artificial intelligence, machine learning untuk recommendation system, dan Internet of Things (IoT) untuk smart inventory management.

### 1.2 Masalah

#### 1.2.1 Identifikasi Masalah

Berdasarkan pengamatan langsung di lapangan dan wawancara dengan pihak manajemen Inter Medi-A, dapat diidentifikasi beberapa masalah yang dihadapi perusahaan dalam menjalankan operasional bisnisnya:

1. **Belum efektifnya proses penjualan** karena masih mengandalkan sistem konvensional yang membatasi jangkauan pasar hanya pada area sekitar toko fisik.

2. **Belum efektifnya sistem informasi inventory** karena pencatatan stock masih dilakukan secara manual sehingga sering terjadi ketidakakuratan data dan kesulitan dalam monitoring ketersediaan produk real-time.

3. **Masih terdapat kesalahan dalam proses pemesanan** karena sistem yang berjalan saat ini masih mengandalkan komunikasi telepon dan pencatatan manual yang rentan terhadap human error.

4. **Masih adanya keluhan pelanggan mengenai pelayanan informasi produk** karena tidak tersedianya platform yang dapat diakses 24/7 untuk melihat katalog produk, spesifikasi, dan ketersediaan stock.

5. **Masih sulitnya memperoleh informasi mengenai status pesanan dan pengiriman** karena tidak adanya sistem tracking yang terintegrasi dengan jasa pengiriman.

6. **Belum optimalnya pengelolaan data pelanggan** untuk keperluan customer relationship management dan strategi pemasaran yang lebih targeted.

7. **Masih terbatasnya metode pembayaran** yang tersedia bagi pelanggan, hanya menerima pembayaran tunai dan transfer bank manual.

#### 1.2.2 Batasan Masalah

Untuk memfokuskan penelitian dan pengembangan sistem agar tidak berubah arah dari tujuan yang ditetapkan, maka ditetapkan batasan masalah sebagai berikut:

1. **Ruang Lingkup Bisnis**: Penelitian difokuskan pada pengembangan sistem e-commerce untuk Inter Medi-A dengan produk utama printer, komputer, dan peralatan kantor.

2. **Platform Teknologi**: Sistem dikembangkan sebagai web application berbasis responsive design yang dapat diakses melalui desktop dan mobile browser.

3. **Teknologi Implementasi**: Menggunakan React.js untuk frontend, Node.js dengan Express.js untuk backend, dan MongoDB sebagai database management system.

4. **Integrasi Payment**: Terbatas pada integrasi dengan payment gateway Midtrans untuk metode pembayaran bank transfer, e-wallet (DANA, OVO, GoPay), dan credit card.

5. **Sistem Pengiriman**: Integrasi dengan API JNE, J&T Express, dan SiCepat untuk kalkulasi biaya pengiriman dan tracking otomatis.

6. **Cakupan Geografis**: Sistem melayani pengiriman ke seluruh wilayah Indonesia dengan fokus utama area Jabodetabek dan kota-kota besar.

7. **Level Pengguna**: Sistem mendukung tiga level pengguna yaitu Customer (pembeli), Admin (pengelola), dan Technician (untuk service management).

8. **Fitur Keamanan**: Implementasi basic security measures meliputi authentication, authorization, input validation, dan enkripsi data sensitif.

#### 1.2.3 Rumusan Masalah

Berdasarkan identifikasi masalah yang telah diuraikan di atas, maka rumusan masalah dalam penelitian ini adalah:

1. **Bagaimana sistem penjualan yang sedang berjalan pada Inter Medi-A saat ini?**

2. **Bagaimana perancangan sistem e-commerce berbasis web untuk penjualan printer, komputer, dan peralatan kantor pada Inter Medi-A?**

3. **Bagaimana implementasi sistem e-commerce yang terintegrasi dengan payment gateway dan shipping API untuk meningkatkan efisiensi operasional Inter Medi-A?**

4. **Bagaimana pengujian sistem e-commerce yang telah dikembangkan untuk memastikan kesesuaian dengan kebutuhan bisnis Inter Medi-A?**

5. **Bagaimana hasil analisis dan evaluasi sistem e-commerce dalam meningkatkan performa bisnis Inter Medi-A?**

### 1.3 Batasan Masalah

Untuk memfokuskan penelitian dan pengembangan sistem, ditetapkan batasan masalah sebagai berikut:

1. **Scope Bisnis**: Sistem e-commerce dikembangkan khusus untuk Inter Medi-A dengan fokus pada penjualan printer, komputer, dan peralatan kantor.

2. **Platform**: Sistem dikembangkan sebagai web application yang responsive dan dapat diakses melalui desktop dan mobile browser.

3. **Teknologi**: Implementasi menggunakan React.js untuk frontend, Node.js dengan Express.js untuk backend, dan MongoDB sebagai database.

4. **Payment Gateway**: Integrasi terbatas pada payment gateway lokal Indonesia (Midtrans) dengan metode pembayaran bank transfer, e-wallet, dan credit card.

5. **Shipping Integration**: Sistem pengiriman terintegrasi dengan API JNE, J&T Express, dan SiCepat untuk kalkulasi biaya dan tracking.

6. **Geographic Coverage**: Sistem melayani pengiriman ke seluruh wilayah Indonesia dengan fokus utama Jabodetabek.

7. **User Management**: Sistem mendukung tiga level user yaitu Customer, Admin, dan Technician untuk service management.

8. **Security**: Implementasi basic security measures termasuk authentication, authorization, input validation, dan data encryption.

9. **Testing**: Pengujian terbatas pada functional testing, performance testing, dan user acceptance testing.

10. **Deployment**: Sistem di-deploy pada cloud platform (AWS/Google Cloud) untuk production environment.

### 1.3 Tujuan dan Manfaat Penelitian

#### 1.3.1 Tujuan Penelitian

Penelitian ini bertujuan untuk:

1. **Menganalisis sistem penjualan yang sedang berjalan** pada Inter Medi-A untuk mengidentifikasi kelemahan dan kebutuhan pengembangan sistem e-commerce.

2. **Merancang sistem e-commerce berbasis web** yang dapat mengelola penjualan online, inventory management, payment processing, dan shipping integration secara terintegrasi.

3. **Mengimplementasikan sistem e-commerce** dengan fitur lengkap meliputi katalog produk, keranjang belanja, checkout process, payment gateway, dan admin dashboard.

4. **Menguji dan memvalidasi sistem e-commerce** yang telah dikembangkan melalui functional testing, performance testing, dan user acceptance testing.

5. **Menganalisis hasil implementasi sistem** dalam meningkatkan efisiensi operasional dan performa bisnis Inter Medi-A.

#### 1.3.2 Manfaat Penelitian

**Manfaat Teoritis:**

1. **Kontribusi Ilmu Pengetahuan**: Memberikan kontribusi dalam bidang sistem informasi, khususnya pengembangan e-commerce untuk sektor retail peralatan kantor dengan integrasi teknologi modern.

2. **Referensi Akademis**: Menjadi referensi bagi penelitian selanjutnya dalam pengembangan sistem e-commerce menggunakan teknologi React.js, Node.js, dan MongoDB.

3. **Dokumentasi Best Practices**: Mendokumentasikan metodologi dan best practices dalam implementasi e-commerce system dengan integrasi payment gateway dan shipping API.

**Manfaat Praktis:**

**Bagi Inter Medi-A:**
1. Meningkatkan jangkauan pasar dari lokal menjadi nasional melalui platform online
2. Meningkatkan efisiensi operasional dengan otomatisasi proses bisnis
3. Memberikan layanan 24/7 kepada pelanggan tanpa batasan waktu dan lokasi
4. Meningkatkan competitive advantage di era transformasi digital
5. Menyediakan data analytics real-time untuk strategic decision making

**Bagi Pelanggan:**
1. Kemudahan berbelanja kapan saja dan dimana saja melalui platform online
2. Akses informasi produk yang lengkap, akurat, dan up-to-date
3. Multiple pilihan metode pembayaran dan pengiriman sesuai preferensi
4. Tracking pesanan real-time untuk monitoring status pengiriman
5. Layanan purna jual yang lebih terorganisir dan responsif

**Bagi Industri:**
1. Benchmark untuk pengembangan e-commerce di sektor retail peralatan kantor
2. Demonstrasi implementasi teknologi modern dalam transformasi bisnis tradisional
3. Model referensi transformasi digital untuk UMKM dan perusahaan sejenis

### 1.4 Sistematika Penulisan

Sistematika penulisan Tugas Akhir ini disusun dalam enam bab yang saling berkaitan dan mendukung untuk memberikan pemahaman yang komprehensif tentang pengembangan sistem e-commerce Inter Medi-A. Setiap bab memiliki fokus pembahasan yang spesifik namun terintegrasi dalam satu kesatuan penelitian yang utuh.

Bab pertama merupakan pendahuluan yang menguraikan latar belakang penelitian, identifikasi masalah yang dihadapi Inter Medi-A, batasan dan rumusan masalah yang akan dipecahkan, serta tujuan dan manfaat yang ingin dicapai dari penelitian ini. Bab ini memberikan gambaran umum tentang urgensi pengembangan sistem e-commerce dan kontribusi yang diharapkan dari penelitian.

Bab kedua membahas studi pustaka yang mencakup landasan teori yang digunakan dalam penelitian. Pembahasan meliputi teori-teori umum tentang sistem informasi dan e-commerce, teori-teori khusus yang berkaitan dengan teknologi web development, metodologi pengembangan sistem, serta tools dan framework yang digunakan. Bab ini juga menyajikan review dari minimal lima referensi jurnal atau hasil penelitian terpublikasi dalam lima tahun terakhir yang relevan dengan topik penelitian.

Bab ketiga menguraikan metodologi penelitian yang digunakan, termasuk tahapan-tahapan penelitian yang dilakukan secara rinci beserta rencana luaran dari setiap tahapan. Bab ini menjelaskan metode pengumpulan data melalui wawancara, observasi, dan studi dokumentasi, serta bagaimana data tersebut dianalisis dan diolah untuk tahap perancangan sistem. Selain itu, bab ini juga menjelaskan perbedaan penelitian yang dilakukan dengan penelitian-penelitian sebelumnya.

Bab keempat menyajikan hasil analisis dan perancangan sistem yang meliputi analisis sistem yang sedang berjalan, identifikasi kebutuhan sistem, perancangan arsitektur sistem, perancangan database, dan perancangan antarmuka pengguna. Bab ini juga membahas business model canvas, use case diagram, dan aturan bisnis yang menjadi dasar pengembangan sistem e-commerce.

Bab kelima membahas implementasi dan pengujian sistem yang telah dikembangkan. Pembahasan meliputi proses implementasi sistem menggunakan teknologi yang telah dipilih, pengujian sistem melalui berbagai metode testing, analisis hasil pengujian, serta dokumentasi laporan-laporan sistem yang dihasilkan. Bab ini juga menyajikan evaluasi kesesuaian sistem dengan kebutuhan bisnis yang telah ditetapkan.

Bab keenam merupakan penutup yang berisi kesimpulan dari hasil penelitian yang menjawab rumusan masalah yang telah ditetapkan, serta saran-saran untuk pengembangan sistem lebih lanjut dan penelitian selanjutnya. Kesimpulan disusun berdasarkan hasil analisis, perancangan, implementasi, dan pengujian sistem yang telah dilakukan.
