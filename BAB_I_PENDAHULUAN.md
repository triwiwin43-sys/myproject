# BAB I
# PENDAHULUAN

## 1.1 Latar Belakang

Perkembangan teknologi informasi yang begitu pesat di era digital saat ini telah mengubah cara masyarakat dalam menjalankan aktivitas bisnis dan transaksi. Salah satu wujud nyata dari transformasi digital tersebut adalah munculnya e-commerce, yaitu sistem perdagangan elektronik yang memungkinkan interaksi antara penjual dan pembeli dilakukan secara daring melalui internet. Menurut data Badan Pusat Statistik (2023), pertumbuhan e-commerce di Indonesia mencapai 52% pada tahun 2023, menunjukkan bahwa masyarakat semakin mengadopsi teknologi digital untuk kebutuhan berbelanja.

Fenomena ini mendorong pelaku usaha, khususnya di sektor teknologi informasi, untuk beradaptasi dengan tren digitalisasi guna mempertahankan daya saing bisnis. Inter Medi-A Computer Store merupakan usaha yang bergerak di bidang penjualan printer, komputer, laptop, aksesoris komputer, serta jasa servis dan maintenance perangkat IT yang berlokasi di Jakarta. Sebagai toko yang telah beroperasi hampir satu dekade, Inter Medi-A Computer Store memiliki basis pelanggan yang solid dan reputasi yang baik di industri teknologi informasi.

Namun, dalam menghadapi persaingan yang semakin ketat dan perubahan perilaku konsumen yang lebih mengutamakan kemudahan berbelanja online, Inter Medi-A Computer Store masih menghadapi beberapa tantangan operasional. Proses bisnis yang berjalan saat ini masih dilakukan secara manual, mulai dari pencatatan transaksi, pengelolaan inventori, promosi produk, hingga konfirmasi pembayaran. Sistem pencatatan masih menggunakan buku manual dan spreadsheet Excel yang terpisah-pisah, sehingga rentan terhadap kesalahan data dan sulit untuk dilakukan monitoring secara real-time.

Permasalahan utama yang dihadapi meliputi kesulitan dalam pengelolaan stok barang yang akurat, proses konfirmasi pembayaran yang memakan waktu lama, keterbatasan jangkauan pemasaran yang hanya mengandalkan media sosial, dan tidak adanya sistem tracking pesanan untuk pelanggan. Kondisi ini berdampak pada menurunnya efisiensi operasional dan berpotensi kehilangan pelanggan yang beralih ke kompetitor yang telah memiliki platform digital yang lebih modern.

Untuk mengatasi permasalahan tersebut, diperlukan solusi berupa pengembangan sistem e-commerce berbasis web yang dapat mengintegrasikan seluruh proses bisnis Inter Medi-A Computer Store. Sistem ini akan dibangun menggunakan teknologi modern React.js untuk frontend dan Node.js dengan MongoDB untuk backend, yang memungkinkan pengembangan aplikasi web yang responsif, skalabel, dan memiliki performa tinggi.

Pemilihan topik penelitian ini didasari oleh urgensi transformasi digital pada sektor UMKM teknologi informasi, khususnya dalam menghadapi era new normal pasca pandemi COVID-19 yang mempercepat adopsi teknologi digital. Penelitian ini menjadi penting karena akan memberikan kontribusi dalam bentuk implementasi praktis teknologi web modern untuk mendukung digitalisasi UMKM, sekaligus menjadi referensi bagi pelaku usaha sejenis dalam mengembangkan platform e-commerce yang efektif dan efisien.

Keterkaitan penelitian ini dengan tuntutan kebutuhan saat ini sangat relevan, mengingat konsumen modern mengharapkan kemudahan berbelanja 24/7, transparansi informasi produk, dan kecepatan dalam proses transaksi. Di masa depan, sistem e-commerce yang dikembangkan dapat menjadi fondasi untuk implementasi teknologi yang lebih advanced seperti artificial intelligence untuk rekomendasi produk, integrasi dengan payment gateway, dan ekspansi ke marketplace yang lebih luas.

## 1.2 Masalah

### a. Identifikasi Masalah

Berdasarkan pengamatan langsung dan wawancara dengan pemilik Inter Medi-A Computer Store, serta analisis terhadap proses bisnis yang sedang berjalan, dapat diidentifikasi beberapa masalah utama yang dihadapi:

1. **Sistem Pencatatan Manual yang Tidak Efisien**: Pencatatan transaksi penjualan, data pelanggan, dan inventori masih menggunakan buku manual dan spreadsheet Excel yang terpisah, menyebabkan duplikasi data dan kesulitan dalam sinkronisasi informasi antar bagian.

2. **Pengelolaan Stok Barang yang Tidak Akurat**: Tidak adanya sistem real-time untuk monitoring stok barang menyebabkan sering terjadinya overselling atau stockout yang tidak terprediksi, berdampak pada kepuasan pelanggan dan kerugian finansial.

3. **Proses Konfirmasi Pembayaran yang Lambat**: Verifikasi pembayaran masih dilakukan secara manual melalui pengecekan rekening bank, membutuhkan waktu 2-4 jam bahkan hingga 1 hari kerja, menyebabkan keterlambatan dalam proses fulfillment pesanan.

4. **Keterbatasan Jangkauan Pemasaran**: Promosi produk hanya mengandalkan media sosial WhatsApp dan Instagram tanpa website resmi, membatasi visibility dan kredibilitas bisnis di mata calon pelanggan yang mencari informasi melalui search engine.

5. **Tidak Ada Sistem Tracking Pesanan**: Pelanggan tidak dapat memantau status pesanan secara mandiri, menyebabkan banyaknya pertanyaan berulang via WhatsApp yang membebani staff customer service.

6. **Kesulitan dalam Pembuatan Laporan**: Proses pembuatan laporan penjualan dan analisis bisnis membutuhkan waktu yang lama karena harus mengumpulkan data dari berbagai sumber manual, menghambat pengambilan keputusan bisnis yang cepat.

7. **Tidak Ada Backup Data yang Sistematis**: Data bisnis tersimpan dalam file lokal tanpa sistem backup yang teratur, berisiko kehilangan data penting jika terjadi kerusakan perangkat atau human error.

### b. Batasan Masalah

Untuk memfokuskan penelitian dan memastikan pencapaian tujuan yang optimal, penelitian ini dibatasi pada hal-hal berikut:

1. **Ruang Lingkup Bisnis**: Sistem e-commerce yang dikembangkan hanya mencakup aktivitas penjualan produk teknologi informasi (laptop, printer, PC desktop, aksesoris komputer) dan layanan servis maintenance, tidak termasuk penjualan software atau layanan konsultasi IT.

2. **Teknologi yang Digunakan**: Pengembangan sistem menggunakan teknologi React.js untuk frontend, Node.js dengan Express.js untuk backend, dan MongoDB sebagai database, dengan deployment pada platform cloud Vercel dan MongoDB Atlas.

3. **Fitur Pembayaran**: Sistem pembayaran menggunakan metode konfirmasi manual dengan upload bukti transfer, belum terintegrasi dengan payment gateway otomatis seperti Midtrans atau Xendit.

4. **Cakupan Pengguna**: Sistem dirancang untuk tiga jenis pengguna yaitu Customer (pembeli), Seller (penjual), dan Admin (administrator), masing-masing dengan hak akses dan fitur yang berbeda sesuai perannya.

5. **Area Pengiriman**: Sistem pengiriman difokuskan untuk wilayah Jabodetabek dengan ekspansi bertahap ke kota-kota besar lainnya, menggunakan jasa kurir JNE, J&T Express, dan SiCepat.

6. **Periode Pengembangan**: Penelitian dan pengembangan sistem dilakukan dalam periode 6 minggu, dari tahap analisis kebutuhan hingga deployment dan testing.

7. **Metode Pengujian**: Pengujian sistem menggunakan metode Black Box Testing untuk fungsionalitas dan White Box Testing untuk performa, tidak mencakup penetration testing atau security audit yang mendalam.

### c. Rumusan Masalah

Berdasarkan identifikasi masalah dan batasan masalah yang telah ditetapkan, rumusan masalah dalam penelitian ini adalah:

1. **Bagaimana sistem penjualan dan layanan servis yang sedang berjalan pada Inter Medi-A Computer Store saat ini?**

2. **Bagaimana merancang dan mengimplementasikan sistem e-commerce berbasis web menggunakan React.js dan Node.js untuk Inter Medi-A Computer Store yang dapat mengatasi permasalahan sistem manual yang ada?**

3. **Bagaimana melakukan pengujian dan evaluasi sistem e-commerce yang dikembangkan agar sesuai dengan kebutuhan bisnis dan memberikan peningkatan efisiensi operasional yang signifikan?**

## 1.3 Tujuan dan Manfaat Penelitian

### a. Tujuan Penelitian

Penelitian ini bertujuan untuk:

1. **Menganalisis dan mendokumentasikan sistem penjualan dan layanan servis yang sedang berjalan** pada Inter Medi-A Computer Store untuk mengidentifikasi kelemahan dan peluang perbaikan dalam proses bisnis yang ada.

2. **Merancang dan mengimplementasikan sistem e-commerce berbasis web** menggunakan teknologi React.js untuk frontend dan Node.js dengan MongoDB untuk backend yang dapat mengotomatisasi proses bisnis, meningkatkan efisiensi operasional, dan memberikan pengalaman berbelanja yang optimal bagi pelanggan.

3. **Melakukan pengujian komprehensif terhadap sistem yang dikembangkan** menggunakan metode Black Box Testing dan White Box Testing untuk memastikan fungsionalitas, performa, dan keandalan sistem sesuai dengan kebutuhan bisnis Inter Medi-A Computer Store.

### b. Manfaat Penelitian

Manfaat yang diharapkan dari penelitian ini meliputi:

#### 1. Manfaat bagi Inter Medi-A Computer Store:
- **Peningkatan Efisiensi Operasional**: Otomatisasi proses pencatatan transaksi, manajemen inventori, dan pembuatan laporan dapat meningkatkan efisiensi operasional hingga 60% dan mengurangi kesalahan manual hingga 95%.
- **Perluasan Jangkauan Pasar**: Platform e-commerce memungkinkan akses pelanggan 24/7 dari seluruh Indonesia, tidak terbatas pada area Jakarta saja, sehingga berpotensi meningkatkan volume penjualan secara signifikan.
- **Peningkatan Customer Experience**: Fitur tracking pesanan, katalog produk yang lengkap, dan sistem pembayaran yang terintegrasi memberikan pengalaman berbelanja yang lebih memuaskan bagi pelanggan.
- **Data-Driven Decision Making**: Dashboard analytics dan laporan real-time membantu manajemen dalam mengambil keputusan bisnis berdasarkan data yang akurat dan terkini.

#### 2. Manfaat bagi Pelanggan:
- **Kemudahan Berbelanja**: Pelanggan dapat mengakses katalog produk, melakukan pemesanan, dan tracking status pesanan kapan saja dan dimana saja melalui website yang responsif.
- **Transparansi Informasi**: Informasi produk yang lengkap, harga yang jelas, dan estimasi pengiriman yang akurat membantu pelanggan dalam pengambilan keputusan pembelian.
- **Layanan yang Lebih Cepat**: Proses konfirmasi pembayaran dan update status pesanan yang lebih cepat meningkatkan kepuasan pelanggan.

#### 3. Manfaat bagi Akademisi dan Praktisi IT:
- **Referensi Implementasi Teknologi Modern**: Penelitian ini menjadi referensi praktis dalam implementasi React.js, Node.js, dan MongoDB untuk pengembangan sistem e-commerce skala UMKM.
- **Studi Kasus Digitalisasi UMKM**: Dokumentasi lengkap proses transformasi digital dari sistem manual ke sistem terintegrasi dapat menjadi pembelajaran bagi peneliti lain.
- **Kontribusi pada Body of Knowledge**: Hasil penelitian menambah literatur tentang penerapan teknologi web modern dalam konteks bisnis lokal Indonesia.

#### 4. Manfaat bagi Masyarakat dan Industri:
- **Mendorong Digitalisasi UMKM**: Penelitian ini dapat menginspirasi pelaku UMKM lain untuk melakukan transformasi digital guna meningkatkan daya saing.
- **Peningkatan Ekonomi Digital**: Kontribusi terhadap pertumbuhan ekosistem e-commerce Indonesia yang semakin berkembang.
- **Penciptaan Lapangan Kerja**: Pengembangan sistem e-commerce berpotensi membuka peluang kerja baru di bidang teknologi informasi dan digital marketing.

## 1.4 Sistematika Penulisan

Sistematika penulisan laporan penelitian ini disusun dalam lima bab yang saling berkaitan dan mendukung untuk memberikan gambaran yang komprehensif tentang pengembangan sistem e-commerce Inter Medi-A Computer Store.

**Bab I Pendahuluan** menyajikan fondasi penelitian yang mencakup latar belakang yang menjelaskan fenomena digitalisasi e-commerce dan kondisi bisnis Inter Medi-A Computer Store saat ini. Bab ini juga menguraikan identifikasi masalah yang dihadapi dalam sistem manual, batasan penelitian untuk memfokuskan ruang lingkup, serta rumusan masalah yang akan dijawab melalui penelitian. Tujuan dan manfaat penelitian dijelaskan secara detail untuk memberikan justifikasi pentingnya penelitian ini dilakukan, baik dari perspektif akademis maupun praktis.

**Bab II Landasan Teori** membahas kerangka teoritis yang menjadi dasar pengembangan sistem e-commerce. Bab ini menguraikan konsep dasar sistem informasi, e-commerce, dan teknologi web modern yang digunakan seperti React.js, Node.js, dan MongoDB. Selain itu, dijelaskan juga metodologi Software Development Life Cycle (SDLC) Waterfall yang diterapkan, konsep User Interface/User Experience (UI/UX), serta teori-teori pendukung lainnya yang relevan dengan penelitian. Landasan teori ini berfungsi sebagai rujukan ilmiah dalam proses analisis dan perancangan sistem.

**Bab III Metodologi Penelitian** menjelaskan pendekatan sistematis yang digunakan dalam melaksanakan penelitian. Bab ini mencakup jenis penelitian yang dipilih, lokasi dan waktu pelaksanaan, metode pengumpulan data melalui observasi dan wawancara, serta tahapan pengembangan sistem menggunakan SDLC Waterfall. Dijelaskan pula analisis kebutuhan fungsional dan non-fungsional, perancangan arsitektur sistem, tools dan teknologi yang digunakan, serta rencana pengujian sistem yang akan dilakukan untuk memastikan kualitas hasil penelitian.

**Bab IV Hasil dan Pembahasan** menyajikan hasil implementasi penelitian secara komprehensif. Bab ini dimulai dengan analisis proses sistem berjalan menggunakan activity diagram dan rich picture, dilanjutkan dengan analisis masalah menggunakan fishbone diagram. Pembahasan mencakup Business Model Canvas untuk memahami model bisnis, aturan bisnis yang diterapkan, use case diagram dengan deskripsi lengkap, serta model data yang mencakup class diagram dan spesifikasi basis data. Bab ini juga menampilkan rancangan User Interface/User Experience, strategi SEO dan marketing yang diimplementasikan, serta hasil pengujian sistem yang telah dikembangkan.

**Bab V Penutup** merangkum seluruh hasil penelitian dalam bentuk kesimpulan yang menjawab rumusan masalah yang telah ditetapkan. Bab ini mengevaluasi pencapaian tujuan penelitian, mengidentifikasi kontribusi yang diberikan, serta menyampaikan saran untuk pengembangan sistem lebih lanjut. Saran ditujukan kepada Inter Medi-A Computer Store untuk optimalisasi sistem, kepada akademisi untuk penelitian lanjutan, serta kepada praktisi IT untuk implementasi teknologi serupa pada konteks bisnis yang berbeda.
