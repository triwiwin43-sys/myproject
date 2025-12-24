# BAB III - METODOLOGI PENELITIAN

## BAB III
## METODOLOGI PENELITIAN

### 3.1 Tahapan Penelitian

Penelitian pengembangan sistem e-commerce Inter Medi-A dilakukan melalui tahapan-tahapan sistematis yang mengacu pada metodologi Software Development Life Cycle (SDLC) dengan pendekatan model Waterfall. Setiap tahapan memiliki aktivitas spesifik, metode pengumpulan data, dan luaran yang jelas untuk memastikan pengembangan sistem yang berkualitas dan sesuai dengan kebutuhan bisnis.

#### 3.1.1 Tahap Analisis Kebutuhan (Requirements Analysis)

**Aktivitas yang dilakukan:**
- Studi literatur tentang e-commerce dan teknologi web development
- Analisis sistem yang sedang berjalan di Inter Medi-A
- Identifikasi stakeholder dan pengguna sistem
- Pengumpulan kebutuhan fungsional dan non-fungsional
- Analisis masalah menggunakan fishbone diagram
- Penyusunan business model canvas

**Metode pengumpulan data:**
- **Wawancara terstruktur** dengan pihak manajemen Inter Medi-A untuk memahami proses bisnis yang berjalan, permasalahan yang dihadapi, dan ekspektasi terhadap sistem yang akan dikembangkan
- **Observasi langsung** terhadap aktivitas operasional perusahaan untuk mengidentifikasi workflow dan bottleneck dalam proses bisnis existing
- **Studi dokumentasi** terhadap dokumen-dokumen bisnis seperti laporan penjualan, data inventory, dan prosedur operasional standar
- **Survei kuesioner** kepada pelanggan existing untuk memahami preferensi dan kebutuhan dalam berbelanja online

**Luaran tahap ini:**
- Dokumen analisis sistem berjalan
- Dokumen kebutuhan fungsional dan non-fungsional
- Business model canvas Inter Medi-A
- Fishbone diagram analisis masalah
- Use case diagram dan deskripsi use case
- Aturan bisnis sistem e-commerce

#### 3.1.2 Tahap Perancangan Sistem (System Design)

**Aktivitas yang dilakukan:**
- Perancangan arsitektur sistem e-commerce
- Perancangan database (conceptual, logical, physical data model)
- Perancangan antarmuka pengguna (UI/UX design)
- Perancangan API endpoints dan data flow
- Perancangan keamanan sistem
- Perancangan integrasi payment gateway dan shipping API

**Metode pengumpulan data:**
- **Analisis best practices** dari sistem e-commerce existing untuk mendapatkan insight tentang design pattern yang efektif
- **Benchmarking** terhadap kompetitor untuk mengidentifikasi fitur-fitur yang dibutuhkan
- **User research** melalui interview dan usability testing untuk memahami user behavior dan preferences

**Luaran tahap ini:**
- Dokumen arsitektur sistem
- Entity Relationship Diagram (ERD)
- Class diagram dan sequence diagram
- Wireframe dan mockup antarmuka pengguna
- API documentation dan data flow diagram
- Dokumen spesifikasi teknis sistem

#### 3.1.3 Tahap Implementasi (Implementation)

**Aktivitas yang dilakukan:**
- Setup development environment dan tools
- Implementasi database menggunakan MongoDB
- Pengembangan backend API menggunakan Node.js dan Express.js
- Pengembangan frontend menggunakan React.js
- Integrasi payment gateway (Midtrans)
- Integrasi shipping API (JNE, J&T, SiCepat)
- Implementasi fitur keamanan dan authentication

**Metode pengumpulan data:**
- **Code review** secara berkala untuk memastikan kualitas kode dan adherence terhadap coding standards
- **Progress tracking** menggunakan project management tools untuk monitoring development progress
- **Technical documentation** untuk setiap modul yang dikembangkan

**Luaran tahap ini:**
- Source code aplikasi frontend dan backend
- Database schema dan sample data
- API endpoints yang functional
- Integrated payment dan shipping system
- User authentication dan authorization system
- Admin dashboard dengan reporting features

#### 3.1.4 Tahap Pengujian (Testing)

**Aktivitas yang dilakukan:**
- Unit testing untuk setiap komponen sistem
- Integration testing untuk memastikan integrasi antar modul
- System testing untuk memvalidasi keseluruhan sistem
- User Acceptance Testing (UAT) dengan stakeholder
- Performance testing untuk mengukur performa sistem
- Security testing untuk memastikan keamanan sistem

**Metode pengumpulan data:**
- **Automated testing** menggunakan Jest untuk unit testing dan Cypress untuk end-to-end testing
- **Manual testing** dengan test case yang telah disiapkan untuk memvalidasi fungsionalitas sistem
- **Load testing** menggunakan tools seperti Apache JMeter untuk mengukur performa sistem
- **User feedback collection** melalui UAT session dengan representative users

**Luaran tahap ini:**
- Test case dan test results documentation
- Bug reports dan resolution tracking
- Performance testing results
- User acceptance testing report
- Security audit report
- System quality assurance documentation

#### 3.1.5 Tahap Deployment dan Evaluasi

**Aktivitas yang dilakukan:**
- Deployment sistem ke production environment
- Monitoring sistem dan performance tuning
- Training pengguna sistem
- Evaluasi pencapaian tujuan penelitian
- Dokumentasi final dan user manual

**Metode pengumpulan data:**
- **System monitoring** menggunakan tools monitoring untuk tracking system performance dan uptime
- **User feedback collection** setelah sistem live untuk evaluasi user satisfaction
- **Business metrics analysis** untuk mengukur impact sistem terhadap business performance

**Luaran tahap ini:**
- Sistem e-commerce yang fully functional dan deployed
- User manual dan technical documentation
- Training materials untuk pengguna
- Evaluation report dan lessons learned
- Recommendation untuk future development

#### 3.1.6 Diagram Alir Tahapan Penelitian

```
[START] 
   ↓
[Studi Literatur]
   ↓
[Analisis Sistem Berjalan] → [Wawancara & Observasi]
   ↓
[Identifikasi Kebutuhan] → [Survei & Dokumentasi]
   ↓
[Analisis Masalah] → [Fishbone Analysis]
   ↓
[Perancangan Sistem] → [Design & Modeling]
   ↓
[Implementasi Backend] → [Node.js + MongoDB]
   ↓
[Implementasi Frontend] → [React.js]
   ↓
[Integrasi Payment & Shipping] → [API Integration]
   ↓
[Testing & Quality Assurance] → [Multiple Testing Methods]
   ↓
[Deployment] → [Production Environment]
   ↓
[Evaluasi & Dokumentasi]
   ↓
[END]
```

### 3.2 Perbedaan dari Penelitian Sebelumnya

Penelitian ini memiliki beberapa perbedaan signifikan dibandingkan dengan penelitian-penelitian sebelumnya yang telah direview dalam studi pustaka:

#### 3.2.1 Perbedaan Teknologi yang Digunakan

**Dibandingkan dengan Adiputra & Wijaya (2021):**
- Penelitian sebelumnya menggunakan PHP CodeIgniter dengan MySQL sebagai teknologi utama
- Penelitian ini menggunakan modern JavaScript stack (React.js, Node.js, MongoDB) yang memberikan performa lebih baik dan user experience yang lebih responsif
- Implementasi real-time features menggunakan WebSocket untuk live notifications dan updates

**Dibandingkan dengan Kusuma & Novianti (2019):**
- Penelitian sebelumnya menggunakan PHP native dengan pendekatan traditional web development
- Penelitian ini menggunakan Single Page Application (SPA) architecture dengan React.js untuk better user experience
- Implementasi mobile-first responsive design untuk optimal mobile experience

#### 3.2.2 Perbedaan Scope dan Fitur

**Dibandingkan dengan Pratama & Suharto (2021):**
- Penelitian sebelumnya fokus hanya pada aspek security payment gateway
- Penelitian ini mengembangkan complete e-commerce ecosystem dengan multiple payment methods, shipping integration, inventory management, dan customer service features
- Implementasi comprehensive admin dashboard dengan real-time analytics dan reporting

**Dibandingkan dengan Rahayu & Wijayanti (2020):**
- Penelitian sebelumnya fokus pada strategi digital marketing secara teoritis
- Penelitian ini mengintegrasikan SEO optimization dan digital marketing tools directly dalam sistem yang dikembangkan
- Implementasi automated marketing features seperti email campaigns dan social media integration

#### 3.2.3 Perbedaan Metodologi dan Pendekatan

**Dibandingkan dengan Hartono & Sari (2020):**
- Penelitian sebelumnya bersifat analytical study terhadap faktor kepuasan pelanggan
- Penelitian ini bersifat development research dengan implementasi langsung faktor-faktor kepuasan pelanggan dalam sistem
- Menggunakan user-centered design approach dengan extensive user research dan usability testing

#### 3.2.4 Perbedaan Kontribusi dan Inovasi

**Aspek Teknologi:**
- Implementasi microservices architecture untuk better scalability
- Integration dengan multiple third-party APIs (payment, shipping, notification)
- Real-time data synchronization untuk inventory dan order management

**Aspek Bisnis:**
- Comprehensive business model canvas implementation
- Integration dengan existing business processes Inter Medi-A
- Focus pada specific industry (printer, computer, office equipment) dengan specialized features

**Aspek User Experience:**
- Mobile-first responsive design dengan progressive web app features
- Accessibility compliance untuk inclusive design
- Personalization features berdasarkan user behavior dan preferences

#### 3.2.5 Perbedaan Evaluasi dan Validasi

Penelitian ini menggunakan multiple validation methods:
- **Technical validation** melalui comprehensive testing (unit, integration, system, performance, security)
- **Business validation** melalui real business metrics dan KPI measurement
- **User validation** melalui extensive user acceptance testing dan user satisfaction surveys
- **Academic validation** melalui peer review dan expert evaluation

Sedangkan penelitian-penelitian sebelumnya umumnya hanya menggunakan satu atau dua metode validasi, sehingga penelitian ini memberikan validasi yang lebih komprehensif dan reliable terhadap hasil yang dicapai.
