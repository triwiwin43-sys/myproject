# BAB I
# PENDAHULUAN

## 1.1 Latar Belakang

Era digitalisasi telah mengubah paradigma bisnis secara fundamental, khususnya dalam sektor perdagangan yang mengalami transformasi dari model konvensional menuju electronic commerce (e-commerce). Fenomena ini diperkuat oleh data Asosiasi E-Commerce Indonesia (idEA) yang menunjukkan bahwa nilai transaksi e-commerce Indonesia mencapai USD 77 miliar pada tahun 2025, dengan pertumbuhan tahunan sebesar 23% (idEA, 2025). Perkembangan ini mencerminkan pergeseran perilaku konsumen yang semakin mengutamakan kemudahan, kecepatan, dan aksesibilitas dalam berbelanja.

Situasi yang melatarbelakangi penelitian ini adalah kondisi pasca pandemi COVID-19 yang mempercepat adopsi teknologi digital dalam berbagai sektor bisnis. Pembatasan mobilitas dan protokol kesehatan telah mendorong pelaku usaha untuk beradaptasi dengan model bisnis digital guna mempertahankan kelangsungan operasional. Khususnya pada sektor teknologi informasi, dimana permintaan terhadap perangkat komputer, printer, dan aksesoris IT mengalami peningkatan signifikan seiring dengan implementasi work from home dan pembelajaran daring.

Inter Medi-A Computer Store sebagai entitas bisnis yang bergerak dalam penjualan perangkat teknologi informasi dan layanan servis maintenance, menghadapi tantangan dalam mengoptimalkan proses bisnis yang masih bersifat konvensional. Observasi awal menunjukkan bahwa sistem operasional yang berjalan saat ini masih mengandalkan pencatatan manual, pengelolaan inventori berbasis spreadsheet, dan komunikasi pelanggan melalui media sosial tanpa integrasi sistem yang komprehensif.

Masalah yang terjadi terkait dengan topik yang diambil mencakup beberapa aspek kritis. Pertama, ketidakefisienan dalam pengelolaan data transaksi dan inventori yang berpotensi menimbulkan kesalahan operasional dan kehilangan peluang bisnis. Kedua, keterbatasan jangkauan pemasaran yang hanya mengandalkan platform media sosial tanpa website resmi yang dapat meningkatkan kredibilitas dan visibility bisnis. Ketiga, proses konfirmasi pembayaran dan tracking pesanan yang membutuhkan waktu relatif lama, berdampak pada kepuasan pelanggan dan efisiensi operasional.

Solusi untuk mengatasi permasalahan yang terjadi adalah pengembangan sistem e-commerce berbasis web menggunakan teknologi modern React.js untuk frontend dan Node.js dengan MongoDB untuk backend. Pemilihan teknologi ini didasarkan pada karakteristik yang mendukung pengembangan aplikasi web yang responsif, skalabel, dan memiliki performa optimal. React.js menyediakan komponen-komponen reusable yang memungkinkan pengembangan user interface yang interaktif, sementara Node.js dengan MongoDB memberikan fleksibilitas dalam pengelolaan data dan API yang efisien.

Argumentasi tentang pemilihan topik penelitian ini didasarkan pada tiga aspek utama. Pertama, relevansi dengan tren digitalisasi UMKM yang menjadi fokus pemerintah dalam mendorong pertumbuhan ekonomi digital. Kedua, kontribusi praktis dalam implementasi teknologi web modern untuk sektor bisnis teknologi informasi. Ketiga, potensi replikasi dan adaptasi solusi yang dikembangkan untuk entitas bisnis sejenis dengan karakteristik operasional yang serupa.

Arti pentingnya penelitian yang akan dilakukan terletak pada kontribusi terhadap pengembangan ekosistem e-commerce Indonesia, khususnya dalam segmen UMKM teknologi informasi. Penelitian ini tidak hanya memberikan solusi praktis bagi Inter Medi-A Computer Store, tetapi juga menghasilkan dokumentasi implementasi yang dapat menjadi referensi bagi akademisi dan praktisi dalam pengembangan sistem e-commerce berbasis teknologi web modern.

Kaitannya dengan tuntutan kebutuhan saat ini sangat relevan dengan ekspektasi konsumen digital yang mengharapkan pengalaman berbelanja yang seamless, informasi produk yang transparan, dan proses transaksi yang efisien. Sementara itu, tuntutan perkembangan di masa yang akan datang mengarah pada integrasi teknologi artificial intelligence untuk personalisasi pengalaman pengguna, implementasi payment gateway untuk otomatisasi pembayaran, dan ekspansi ke marketplace yang lebih luas untuk meningkatkan jangkauan pasar.

## 1.2 Masalah

### a. Identifikasi Masalah

Berdasarkan pengamatan langsung terhadap proses bisnis Inter Medi-A Computer Store dan wawancara mendalam dengan stakeholder terkait, dapat diidentifikasi beberapa masalah fundamental yang menghambat optimalisasi kinerja operasional:

1. **Ketidakefisienan Sistem Pencatatan dan Dokumentasi**: Proses pencatatan transaksi penjualan, data pelanggan, dan manajemen inventori masih menggunakan metode manual berbasis buku catatan dan spreadsheet Excel yang tidak terintegrasi. Kondisi ini mengakibatkan duplikasi data, inkonsistensi informasi, dan kesulitan dalam melakukan sinkronisasi data antar departemen operasional.

2. **Ketidakakuratan Pengelolaan Inventori Real-time**: Sistem monitoring stok barang yang tidak terintegrasi menyebabkan keterlambatan update informasi ketersediaan produk, berpotensi menimbulkan overselling atau stockout yang tidak terprediksi, berdampak pada penurunan tingkat kepuasan pelanggan dan kerugian finansial.

3. **Lambatnya Proses Verifikasi dan Konfirmasi Pembayaran**: Mekanisme verifikasi pembayaran yang masih dilakukan secara manual melalui pengecekan rekening bank membutuhkan waktu 2-4 jam hingga 1 hari kerja, mengakibatkan keterlambatan dalam proses fulfillment pesanan dan berpotensi menurunkan customer satisfaction.

4. **Keterbatasan Jangkauan dan Strategi Pemasaran Digital**: Aktivitas promosi dan pemasaran produk yang hanya mengandalkan platform media sosial (WhatsApp dan Instagram) tanpa website resmi membatasi visibility bisnis dan kredibilitas di mata calon pelanggan yang melakukan pencarian melalui search engine.

5. **Ketiadaan Sistem Tracking dan Monitoring Pesanan**: Pelanggan tidak memiliki akses untuk memantau status pesanan secara mandiri, mengakibatkan tingginya volume pertanyaan berulang melalui WhatsApp yang membebani kapasitas staff customer service dan menurunkan efisiensi operasional.

6. **Kompleksitas Proses Pembuatan Laporan Bisnis**: Proses kompilasi dan analisis data untuk pembuatan laporan penjualan membutuhkan waktu yang signifikan karena harus mengintegrasikan data dari berbagai sumber manual, menghambat proses pengambilan keputusan bisnis yang responsif.

7. **Ketiadaan Sistem Backup dan Recovery Data**: Data bisnis yang tersimpan dalam file lokal tanpa implementasi sistem backup yang sistematis berisiko mengalami kehilangan data kritis jika terjadi kerusakan perangkat keras atau human error.

### b. Batasan Masalah

Untuk memastikan fokus penelitian dan pencapaian tujuan yang optimal, penelitian ini dibatasi pada aspek-aspek berikut:

1. **Cakupan Produk dan Layanan**: Sistem e-commerce yang dikembangkan mencakup penjualan produk teknologi informasi (laptop, printer, PC desktop, aksesoris komputer) dan layanan servis maintenance, tidak termasuk penjualan software berlisensi atau layanan konsultasi IT enterprise.

2. **Teknologi dan Platform Pengembangan**: Implementasi sistem menggunakan React.js untuk frontend development, Node.js dengan Express.js framework untuk backend development, dan MongoDB sebagai database management system, dengan deployment pada platform cloud Vercel dan MongoDB Atlas.

3. **Sistem Pembayaran**: Mekanisme pembayaran menggunakan metode konfirmasi manual dengan upload bukti transfer, belum mengintegrasikan payment gateway otomatis seperti Midtrans, Xendit, atau DOKU.

4. **Segmentasi Pengguna**: Sistem dirancang untuk mengakomodasi tiga kategori pengguna yaitu Customer (pembeli), Seller (penjual), dan Admin (administrator), masing-masing dengan role-based access control dan fitur yang disesuaikan dengan kebutuhan operasional.

5. **Jangkauan Geografis Pengiriman**: Layanan pengiriman difokuskan untuk wilayah Jabodetabek dengan rencana ekspansi bertahap ke kota-kota besar lainnya, menggunakan jasa ekspedisi JNE, J&T Express, dan SiCepat.

6. **Timeline Pengembangan**: Penelitian dan pengembangan sistem dilaksanakan dalam periode Oktober hingga Desember 2025, mencakup tahap analisis kebutuhan, perancangan, implementasi, testing, dan deployment.

7. **Metodologi Pengujian**: Evaluasi sistem menggunakan Black Box Testing untuk validasi fungsionalitas dan White Box Testing untuk analisis performa, tidak mencakup penetration testing atau comprehensive security audit.

### c. Rumusan Masalah

Berdasarkan identifikasi masalah dan batasan masalah yang telah ditetapkan, rumusan masalah dalam penelitian ini diformulasikan sebagai berikut:

1. **Bagaimana kondisi sistem penjualan dan layanan servis yang sedang berjalan pada Inter Medi-A Computer Store saat ini?**

2. **Bagaimana merancang dan mengimplementasikan sistem e-commerce berbasis web menggunakan React.js dan Node.js untuk Inter Medi-A Computer Store yang dapat mengatasi permasalahan sistem manual yang ada?**

3. **Bagaimana melakukan pengujian dan evaluasi sistem e-commerce yang dikembangkan agar sesuai dengan kebutuhan bisnis dan memberikan peningkatan efisiensi operasional yang signifikan?**

## 1.3 Tujuan dan Manfaat Penelitian

### a. Tujuan Penelitian

Penelitian ini bertujuan untuk:

1. **Menganalisis dan mengevaluasi sistem penjualan dan layanan servis yang sedang berjalan** pada Inter Medi-A Computer Store untuk mengidentifikasi gap analysis antara kondisi existing dengan kebutuhan optimal dalam proses bisnis yang terintegrasi.

2. **Merancang dan mengimplementasikan sistem e-commerce berbasis web** menggunakan teknologi React.js untuk frontend development dan Node.js dengan MongoDB untuk backend development yang dapat mengotomatisasi proses bisnis, meningkatkan efisiensi operasional, dan memberikan user experience yang optimal bagi stakeholder.

3. **Melakukan pengujian komprehensif dan evaluasi performa sistem** yang dikembangkan menggunakan metodologi Black Box Testing dan White Box Testing untuk memastikan fungsionalitas, reliability, dan scalability sistem sesuai dengan requirement specification Inter Medi-A Computer Store.

### b. Manfaat Penelitian

Manfaat yang diharapkan dari penelitian ini dapat dikategorikan sebagai berikut:

#### 1. Manfaat Teoritis bagi Pengembangan Ilmu Pengetahuan:
- **Kontribusi pada Body of Knowledge**: Penelitian ini menambah literatur akademik tentang implementasi teknologi web modern (React.js, Node.js, MongoDB) dalam konteks digitalisasi UMKM sektor teknologi informasi di Indonesia.
- **Referensi Metodologi Pengembangan**: Dokumentasi lengkap proses transformasi digital dari sistem manual ke sistem terintegrasi dapat menjadi referensi metodologis bagi peneliti lain dalam bidang sistem informasi dan e-commerce.
- **Studi Kasus Empiris**: Hasil penelitian memberikan evidence-based analysis tentang efektivitas penerapan teknologi web modern untuk meningkatkan efisiensi operasional bisnis skala UMKM.

#### 2. Manfaat Praktis bagi Inter Medi-A Computer Store:
- **Optimalisasi Efisiensi Operasional**: Implementasi sistem terintegrasi diproyeksikan dapat meningkatkan efisiensi operasional hingga 60% dan mengurangi error rate dalam pencatatan transaksi hingga 95% melalui otomatisasi proses bisnis.
- **Ekspansi Jangkauan Pasar**: Platform e-commerce memungkinkan akses pelanggan 24/7 dari seluruh wilayah Indonesia, tidak terbatas pada area geografis Jakarta, sehingga berpotensi meningkatkan market penetration dan volume penjualan secara signifikan.
- **Enhancement Customer Experience**: Implementasi fitur order tracking, comprehensive product catalog, dan integrated payment system memberikan superior customer experience yang dapat meningkatkan customer retention rate.
- **Data-Driven Decision Making**: Dashboard analytics dan real-time reporting system memfasilitasi manajemen dalam mengambil strategic business decision berdasarkan accurate data dan business intelligence.

#### 3. Manfaat bagi Stakeholder Eksternal:
- **Peningkatan Customer Satisfaction**: Pelanggan memperoleh kemudahan dalam mengakses product catalog, melakukan order placement, dan monitoring delivery status melalui responsive web interface yang dapat diakses kapan saja dan dimana saja.
- **Transparansi Informasi Bisnis**: Penyediaan informasi produk yang comprehensive, transparent pricing, dan accurate delivery estimation membantu pelanggan dalam informed decision making process.
- **Acceleration Service Delivery**: Optimalisasi proses payment confirmation dan real-time order status update berkontribusi pada peningkatan overall customer satisfaction index.

#### 4. Manfaat bagi Komunitas Akademik dan Praktisi IT:
- **Implementation Reference**: Penelitian ini menjadi practical reference dalam implementasi React.js, Node.js, dan MongoDB untuk pengembangan e-commerce system pada skala UMKM dengan kompleksitas bisnis yang moderate.
- **Technology Adoption Case Study**: Dokumentasi comprehensive tentang technology selection, architecture design, dan implementation strategy dapat menjadi learning resource bagi akademisi dan praktisi IT.
- **Best Practice Documentation**: Hasil penelitian menghasilkan documented best practices dalam pengembangan e-commerce system yang dapat diadaptasi untuk konteks bisnis yang serupa.

#### 5. Manfaat bagi Masyarakat dan Industri:
- **Akselerasi Digitalisasi UMKM**: Penelitian ini dapat menginspirasi dan memberikan roadmap bagi pelaku UMKM lain untuk melakukan digital transformation guna meningkatkan competitive advantage dalam era digital economy.
- **Kontribusi Ekonomi Digital**: Mendukung pertumbuhan ekosistem e-commerce Indonesia yang berkontribusi pada peningkatan GDP sektor digital dan penciptaan economic value added.
- **Job Creation Potential**: Pengembangan sistem e-commerce berpotensi membuka employment opportunities baru di bidang digital marketing, IT support, dan e-commerce operations management.

## 1.4 Sistematika Penulisan

Sistematika penulisan laporan penelitian ini disusun dalam lima bab yang saling berkaitan dan mendukung untuk memberikan gambaran komprehensif tentang pengembangan sistem e-commerce Inter Medi-A Computer Store. Setiap bab dirancang untuk menyajikan informasi secara sistematis dan logis guna memfasilitasi pemahaman yang mendalam tentang proses penelitian dan hasil yang dicapai.

**Bab I Pendahuluan** menyajikan foundation penelitian yang mencakup latar belakang yang menjelaskan fenomena digitalisasi e-commerce dan kondisi existing Inter Medi-A Computer Store. Bab ini menguraikan situasi yang melatarbelakangi penelitian, masalah yang terjadi dalam sistem operasional saat ini, serta solusi yang diusulkan untuk mengatasi permasalahan tersebut. Argumentasi pemilihan topik penelitian dijelaskan berdasarkan relevansi dengan tren digitalisasi UMKM dan kontribusi praktis yang dapat diberikan. Identifikasi masalah dilakukan secara sistematis dengan menguraikan gap analysis antara kondisi existing dengan kebutuhan optimal, dilengkapi dengan batasan penelitian untuk memfokuskan scope dan rumusan masalah yang akan dijawab melalui penelitian. Tujuan dan manfaat penelitian dijelaskan secara detail untuk memberikan justifikasi academic dan practical significance dari penelitian yang dilakukan.

**Bab II Landasan Teori** membahas theoretical framework yang menjadi foundation pengembangan sistem e-commerce. Bab ini menguraikan konsep fundamental sistem informasi, e-commerce, dan teknologi web modern yang digunakan seperti React.js, Node.js, dan MongoDB. Pembahasan mencakup karakteristik, keunggulan, dan implementasi masing-masing teknologi dalam konteks pengembangan aplikasi web. Selain itu, dijelaskan metodologi Software Development Life Cycle (SDLC) Waterfall yang diterapkan, konsep User Interface/User Experience (UI/UX) design, serta teori-teori pendukung lainnya yang relevan dengan penelitian. Literature review dari penelitian terdahulu yang berkaitan dengan topik e-commerce dan digitalisasi UMKM juga diuraikan untuk memberikan positioning penelitian dalam konteks academic discourse yang lebih luas.

**Bab III Metodologi Penelitian** menjelaskan systematic approach yang digunakan dalam melaksanakan penelitian. Bab ini mencakup research design yang dipilih, lokasi dan timeline pelaksanaan penelitian, metode pengumpulan data melalui observasi langsung dan in-depth interview dengan stakeholder, serta tahapan pengembangan sistem menggunakan SDLC Waterfall methodology. Dijelaskan pula requirement analysis yang mencakup functional dan non-functional requirements, system architecture design, technology stack selection, serta testing strategy yang akan diimplementasikan untuk memastikan quality assurance hasil penelitian. Data collection techniques dan data analysis methods juga diuraikan secara detail untuk memberikan transparency dalam proses penelitian.

**Bab IV Hasil dan Pembahasan** menyajikan comprehensive analysis dan implementation results dari penelitian yang dilakukan. Bab ini dimulai dengan current system analysis menggunakan activity diagram dan rich picture untuk memvisualisasikan existing business process, dilanjutkan dengan problem analysis menggunakan fishbone diagram untuk mengidentifikasi root cause dari permasalahan yang ada. Pembahasan mencakup Business Model Canvas untuk memahami value proposition dan business model, business rules yang diterapkan dalam sistem, use case diagram dengan detailed scenario description, serta data modeling yang mencakup class diagram dan database specification. Bab ini juga menampilkan User Interface/User Experience design, SEO dan digital marketing strategy yang diimplementasikan, system architecture dan technical implementation, serta comprehensive testing results yang mencakup functional testing, performance testing, dan user acceptance testing.

**Bab V Penutup** merangkum seluruh hasil penelitian dalam bentuk conclusion yang menjawab research questions yang telah ditetapkan dalam rumusan masalah. Bab ini mengevaluasi achievement terhadap research objectives, mengidentifikasi contribution yang diberikan baik dari aspek theoretical maupun practical, serta menyampaikan recommendation untuk future development dan system enhancement. Limitation penelitian juga diuraikan secara objektif untuk memberikan transparency tentang scope dan constraint yang ada. Recommendation ditujukan kepada Inter Medi-A Computer Store untuk system optimization dan business process improvement, kepada academic community untuk further research opportunities, serta kepada IT practitioners untuk technology implementation dalam konteks bisnis yang serupa. Future work dan potential research directions juga disampaikan untuk memberikan roadmap pengembangan sistem yang berkelanjutan.
