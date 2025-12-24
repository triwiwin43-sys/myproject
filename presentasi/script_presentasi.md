# SCRIPT PRESENTASI TUGAS AKHIR
# SISTEM E-COMMERCE INTER MEDI-A

## OPENING (3 MENIT)

**[SLIDE 1 - TITLE]**
"Selamat pagi/siang Bapak/Ibu dosen penguji. Perkenalkan saya [NAMA], NIM [NIM] dari Program Studi [PRODI]. Hari ini saya akan mempresentasikan Tugas Akhir saya dengan judul 'Pengembangan Sistem E-Commerce Inter Medi-A untuk Penjualan Printer, Komputer dan Peralatan Kantor Berbasis Web'."

**[SLIDE 2 - AGENDA]**
"Presentasi hari ini akan saya bagi menjadi beberapa bagian: dimulai dari latar belakang masalah, metodologi penelitian, analisis dan perancangan sistem, implementasi, hasil pengujian, dan diakhiri dengan demo aplikasi."

**[SLIDE 3 - LATAR BELAKANG]**
"Latar belakang penelitian ini didasari oleh pertumbuhan e-commerce Indonesia yang mencapai Rp 401 triliun pada 2022 dengan growth 25%. Inter Medi-A sebagai perusahaan retail printer dan komputer yang telah beroperasi 10+ tahun masih menggunakan sistem konvensional, sehingga membutuhkan transformasi digital untuk tetap kompetitif."

**[SLIDE 4 - MASALAH]**
"Dari analisis yang dilakukan, Inter Medi-A menghadapi beberapa masalah utama: jangkauan pasar terbatas hanya area toko fisik, inventory management masih manual yang prone to error, tidak ada sistem tracking pesanan, metode pembayaran terbatas, dan tidak ada customer database terintegrasi."

**[SLIDE 5 - RUMUSAN MASALAH]**
"Berdasarkan masalah tersebut, saya merumuskan 5 pertanyaan penelitian yang akan dijawab melalui penelitian ini, mulai dari analisis sistem berjalan, perancangan, implementasi, pengujian, hingga evaluasi sistem e-commerce."

## METHODOLOGY & ANALYSIS (5 MENIT)

**[SLIDE 6 - TUJUAN]**
"Tujuan penelitian ini adalah menganalisis sistem existing, merancang sistem e-commerce terintegrasi, mengimplementasikan dengan modern web technologies, menguji kualitas sistem, dan mengevaluasi impact terhadap bisnis."

**[SLIDE 7 - MANFAAT]**
"Manfaat penelitian ini mencakup kontribusi teoritis berupa dokumentasi metodologi modern, manfaat praktis untuk ekspansi bisnis Inter Medi-A, kemudahan untuk customer, dan menjadi model referensi untuk industri sejenis."

**[SLIDE 8 - METODOLOGI]**
"Metodologi yang saya gunakan adalah SDLC Waterfall dengan 5 tahapan sistematis. Waterfall dipilih karena requirements jelas, timeline terbatas, dan dokumentasi lengkap diperlukan. Setiap tahapan memiliki metode pengumpulan data yang spesifik seperti wawancara, observasi, dan studi dokumentasi."

**[SLIDE 9 - ANALISIS SISTEM]**
"Dari analisis sistem berjalan, saya menggunakan fishbone analysis untuk mengidentifikasi root cause masalah dari 6 aspek: people, process, technology, material, environment, dan measurement. Saya juga menyusun Business Model Canvas untuk memahami ecosystem bisnis Inter Medi-A secara komprehensif."

**[SLIDE 10 - KEBUTUHAN]**
"Analisis kebutuhan menghasilkan 10 kebutuhan fungsional utama dan 6 kebutuhan non-fungsional. Kebutuhan fungsional mencakup user management, product catalog, shopping cart, hingga admin dashboard. Sedangkan non-fungsional fokus pada performance, security, dan usability."

## DESIGN & IMPLEMENTATION (7 MENIT)

**[SLIDE 11 - ARSITEKTUR]**
"Arsitektur sistem menggunakan three-tier architecture dengan React.js di presentation tier, Node.js Express di application tier, dan MongoDB di data tier. Sistem juga terintegrasi dengan external APIs untuk payment dan shipping."

**[SLIDE 12 - DATABASE]**
"Database design menggunakan MongoDB dengan 7 collection utama: Users, Products, Categories, Orders, Payments, ServiceRequests, dan Carts. Estimasi storage untuk 1 tahun operasi sekitar 1GB dengan rekomendasi MongoDB Atlas M10."

**[SLIDE 13 - UI/UX]**
"Perancangan UI/UX menggunakan mobile-first responsive design dengan 5 wireframe utama: homepage, product detail, shopping cart, checkout, dan admin dashboard. Design mengikuti prinsip user-centered design dan accessibility compliance."

**[SLIDE 14 - TEKNOLOGI]**
"Technology stack yang dipilih adalah modern JavaScript full-stack: React.js untuk frontend, Node.js Express untuk backend, MongoDB untuk database, plus JWT untuk authentication dan integrasi Midtrans untuk payment serta multiple shipping APIs."

**[SLIDE 15 - IMPLEMENTASI]**
"Implementasi menghasilkan sistem dengan fitur lengkap: product catalog dengan advanced search, shopping cart dengan real-time validation, multiple payment methods, automatic shipping calculation, dan comprehensive admin dashboard."

**[SLIDE 16 - ADMIN DASHBOARD]**
"Admin dashboard menyediakan real-time analytics, product management dengan CRUD operations, order processing workflow, comprehensive reporting system, dan notification center untuk monitoring sistem."

**[SLIDE 17 - KEAMANAN]**
"Aspek keamanan diimplementasikan dengan JWT authentication, role-based access control, password hashing dengan bcrypt, input validation, XSS dan CSRF protection, plus rate limiting untuk mencegah brute force attacks."

## TESTING & RESULTS (3 MENIT)

**[SLIDE 18 - PENGUJIAN]**
"Pengujian dilakukan dengan 6 metode: unit testing dengan Jest mencapai 87.3% coverage, integration testing untuk API endpoints, system testing untuk end-to-end scenarios, UAT dengan 25 users, performance testing hingga 500 concurrent users, dan security testing tanpa critical vulnerabilities."

**[SLIDE 19 - HASIL]**
"Hasil pengujian menunjukkan performance metrics yang excellent: response time 245ms, throughput 450 req/sec, uptime 99.8%. User acceptance testing mencapai 92% satisfaction rate dengan usability score 4.6/5.0. Proyeksi business impact menunjukkan potensi 10x market expansion dan 60% efficiency improvement."

## CONCLUSION & DEMO (2 MENIT)

**[SLIDE 20 - DEMO]**
"Sekarang saya akan mendemonstrasikan aplikasi yang telah dikembangkan. [LAKUKAN LIVE DEMO: customer journey dari browsing hingga checkout, dan admin features untuk management]"

**[SLIDE 21 - KESIMPULAN]**
"Kesimpulan penelitian: semua tujuan penelitian tercapai dengan baik. Sistem berhasil dianalisis, dirancang dengan arsitektur scalable, diimplementasikan dengan fitur lengkap, diuji dengan multiple methods, dan dievaluasi dengan hasil memuaskan. Sistem memenuhi 95% kebutuhan bisnis Inter Medi-A."

**[SLIDE 22 - SARAN]**
"Saran untuk implementasi produksi meliputi deployment, staff training, dan marketing campaign. Untuk pengembangan selanjutnya: mobile app, AI recommendation, chatbot integration, dan marketplace expansion. Penelitian selanjutnya dapat fokus pada UX optimization dan machine learning implementation."

**[SLIDE 23 - KONTRIBUSI]**
"Kontribusi penelitian ini mencakup aspek akademis berupa metodologi dan best practices, aspek praktis berupa sistem production-ready, dan kebaruan berupa modern technology stack dengan comprehensive integration."

**[SLIDE 24 - CLOSING]**
"Demikian presentasi Tugas Akhir saya. Terima kasih atas perhatian Bapak/Ibu dosen penguji. Saya siap menjawab pertanyaan yang diajukan."

---

# TIPS DELIVERY PRESENTASI

## BAHASA TUBUH & VOCAL
- **Postur**: Berdiri tegak, confident
- **Eye contact**: Bergantian ke semua penguji
- **Gesture**: Natural, tidak berlebihan
- **Voice**: Jelas, tidak terlalu cepat
- **Pause**: Gunakan jeda untuk emphasis

## HANDLING QUESTIONS
- **Listen carefully**: Dengarkan pertanyaan sampai selesai
- **Clarify**: Jika tidak jelas, minta klarifikasi
- **Structure answer**: Point utama dulu, detail kemudian
- **Admit limitations**: Jika tidak tahu, akui dengan jujur
- **Stay calm**: Tetap tenang meskipun pertanyaan sulit

## TECHNICAL DEMO
- **Prepare backup**: Video demo jika live demo gagal
- **Test beforehand**: Pastikan semua berjalan lancar
- **Explain while doing**: Narasi setiap action yang dilakukan
- **Show key features**: Focus pada unique selling points
- **Handle errors gracefully**: Jika ada error, tetap calm dan explain

## TIME MANAGEMENT
- **Practice timing**: Latihan dengan stopwatch
- **Key points**: Prioritize poin-poin penting
- **Flexible**: Siap adjust jika waktu terbatas
- **Buffer time**: Sisakan waktu untuk Q&A

**REMEMBER**: Confidence comes from preparation. Practice multiple times dan pahami setiap detail sistem yang dikembangkan!
