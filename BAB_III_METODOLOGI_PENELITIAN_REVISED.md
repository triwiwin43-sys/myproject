# BAB III
# METODOLOGI PENELITIAN

## 3.1 Tahapan Penelitian

Penelitian ini menggunakan pendekatan Software Development Life Cycle (SDLC) model Waterfall yang dilakukan secara sistematis dan berurutan. Setiap tahapan memiliki metode pengumpulan data, analisis, dan luaran yang spesifik untuk memastikan kualitas hasil penelitian yang optimal.

### 3.1.1 Tahap 1: Analisis Kebutuhan (Requirements Analysis)

**Tujuan:** Mengidentifikasi dan menganalisis kebutuhan sistem e-commerce Inter Medi-A Computer Store secara komprehensif untuk memahami kondisi existing dan requirement sistem yang akan dikembangkan.

**Metode Pengumpulan Data:**

1. **Observasi Langsung**
   - **Lokasi:** Inter Medi-A Computer Store, Jakarta
   - **Durasi:** 5 hari kerja (40 jam observasi)
   - **Fokus:** Mengamati proses bisnis yang sedang berjalan, alur transaksi penjualan, sistem pengelolaan stok barang, proses konfirmasi pembayaran, dan pola interaksi dengan pelanggan
   - **Instrumen:** Checklist observasi terstruktur, dokumentasi foto/video proses bisnis, catatan lapangan
   - **Teknik:** Participant observation dengan minimal interference terhadap operasional bisnis

2. **Wawancara Terstruktur dan Semi-Terstruktur**
   - **Responden Primer:**
     - Pemilik toko (1 orang) - wawancara mendalam 2 jam
     - Staff sales (2 orang) - masing-masing 1 jam
     - Staff IT/admin (1 orang) - wawancara teknis 1.5 jam
   - **Responden Sekunder:**
     - Pelanggan reguler (5 orang) - masing-masing 30 menit
     - Supplier utama (2 orang) - masing-masing 45 menit
   - **Instrumen:** Panduan wawancara dengan 25 pertanyaan terstruktur dan 10 pertanyaan follow-up
   - **Fokus:** Identifikasi pain points, kebutuhan fungsional, ekspektasi sistem, dan preferensi teknologi

3. **Analisis Dokumen Bisnis**
   - **Dokumen Target:** Laporan penjualan bulanan, data inventori, form pemesanan manual, nota penjualan, laporan keuangan
   - **Periode Analisis:** Data historis 6 bulan terakhir (April-September 2025)
   - **Fokus:** Pola transaksi, volume penjualan, trend produk populer, seasonal patterns, customer behavior

**Teknik Analisis Data:**
- **Analisis Deskriptif:** Kategorisasi dan klasifikasi data observasi dan wawancara
- **Root Cause Analysis:** Menggunakan Fishbone Diagram untuk identifikasi akar masalah
- **Gap Analysis:** Perbandingan kondisi existing vs desired state
- **Tools:** Microsoft Excel untuk tabulasi data, Lucidchart untuk diagram, NVIVO untuk analisis kualitatif

**Luaran Tahap 1:**
- Dokumen Software Requirements Specification (SRS) lengkap
- Fishbone Diagram analisis masalah operasional
- Business Model Canvas Inter Medi-A Computer Store
- Matriks kebutuhan fungsional (15 fitur utama) dan non-fungsional
- Rich Picture current business process
- Stakeholder analysis dan user persona (3 tipe pengguna)

### 3.1.2 Tahap 2: Perancangan Sistem (System Design)

**Tujuan:** Merancang arsitektur sistem, struktur database, dan antarmuka pengguna berdasarkan hasil analisis kebutuhan dengan menggunakan prinsip-prinsip software engineering yang baik.

**Metode Pengumpulan Data:**

1. **Studi Literatur Teknologi**
   - **Sumber:** Dokumentasi resmi React.js, Node.js, MongoDB, best practices guides
   - **Fokus:** Architecture patterns, security guidelines, performance optimization, scalability considerations
   - **Durasi:** 1 minggu intensive study
   - **Output:** Technology selection matrix dan architecture decision records

2. **Benchmarking Kompetitor**
   - **Target Analisis:** 5 website e-commerce toko komputer terkemuka (Tokopedia Computer, Shopee IT, JD.ID Electronics, Bhinneka, Enterkomputer)
   - **Aspek Evaluasi:** UI/UX design patterns, feature completeness, user flow optimization, mobile responsiveness, loading performance
   - **Tools:** Google PageSpeed Insights, GTmetrix, Lighthouse untuk analisis performa
   - **Metodologi:** Heuristic evaluation menggunakan Nielsen's 10 usability principles

3. **User Experience Research**
   - **Metode:** Card sorting untuk information architecture, user journey mapping
   - **Responden:** 8 potential users (4 customers, 2 sellers, 2 admins)
   - **Tools:** Optimal Workshop untuk card sorting, Miro untuk journey mapping
   - **Fokus:** Navigation structure, content organization, task flow optimization

**Teknik Analisis Data:**
- **Comparative Analysis:** Feature comparison matrix dan performance benchmarking
- **Design Thinking Process:** Empathize, Define, Ideate, Prototype, Test
- **System Modeling:** Unified Modeling Language (UML) untuk system architecture
- **Tools:** Figma untuk UI/UX design, Draw.io untuk system diagrams, Balsamiq untuk wireframing

**Luaran Tahap 2:**
- System Architecture Document (3-tier architecture dengan microservices approach)
- Use Case Diagram dengan 12 use case utama dan detailed scenarios
- Class Diagram dengan 8 class utama dan relationship mapping
- Entity Relationship Diagram (ERD) untuk database design
- Database specification MongoDB (5 collections dengan indexing strategy)
- Complete UI/UX design system (15 halaman dengan responsive breakpoints)
- API specification document (20 RESTful endpoints dengan OpenAPI format)
- Security architecture dan data flow diagrams

### 3.1.3 Tahap 3: Implementasi (Implementation)

**Tujuan:** Mengimplementasikan sistem e-commerce berdasarkan desain yang telah dibuat menggunakan teknologi React.js, Node.js, dan MongoDB dengan menerapkan best practices dalam software development.

**Metode Pengumpulan Data:**

1. **Agile Development Tracking**
   - **Metodologi:** Scrum framework dengan 2-week sprints
   - **Metrics:** Velocity tracking, burndown charts, story points completion
   - **Tools:** Jira untuk project management, Git untuk version control
   - **Daily Monitoring:** Code commits, feature completion, bug reports

2. **Continuous Performance Monitoring**
   - **Metrics:** Loading time, memory usage, CPU utilization, bundle size
   - **Tools:** Chrome DevTools, Node.js profiler, MongoDB Compass, Webpack Bundle Analyzer
   - **Frequency:** Real-time monitoring dengan automated alerts
   - **Benchmarks:** Target loading time < 3 seconds, memory usage < 100MB

3. **Code Quality Assessment**
   - **Static Analysis:** ESLint untuk JavaScript, Prettier untuk code formatting
   - **Dynamic Analysis:** Jest untuk unit testing, Cypress untuk E2E testing
   - **Coverage Target:** Minimum 80% code coverage untuk critical paths
   - **Code Review:** Peer review process dengan checklist standardized

**Teknik Analisis Data:**
- **Performance Profiling:** Bottleneck identification dan optimization opportunities
- **Code Metrics Analysis:** Cyclomatic complexity, maintainability index, technical debt assessment
- **User Feedback Integration:** Continuous user testing dengan prototype iterations
- **Tools:** SonarQube untuk code quality, Lighthouse untuk web performance, New Relic untuk APM

**Luaran Tahap 3:**
- Complete source code frontend React.js (25+ reusable components)
- Robust backend API Node.js (15 modules dengan proper error handling)
- Optimized MongoDB database schema (5 collections dengan proper indexing)
- Comprehensive API documentation dengan Swagger/OpenAPI
- Automated test suite (100+ unit tests, 50+ integration tests)
- Performance optimization report dengan before/after metrics
- Security implementation report (authentication, authorization, data protection)

### 3.1.4 Tahap 4: Pengujian (Testing)

**Tujuan:** Memastikan sistem berfungsi sesuai spesifikasi dan memenuhi kebutuhan pengguna melalui pengujian yang komprehensif dan sistematis.

**Metode Pengumpulan Data:**

1. **Black Box Testing**
   - **Scope:** Semua fitur fungsional sistem berdasarkan use case scenarios
   - **Test Cases:** 50+ skenario pengujian dengan positive dan negative cases
   - **Responden:** 3 internal testers + 5 external users (mix of technical dan non-technical)
   - **Tools:** Test case management dengan Excel/Jira, screen recording untuk bug documentation
   - **Methodology:** Equivalence partitioning, boundary value analysis, error guessing

2. **White Box Testing**
   - **Scope:** Code coverage analysis, logic flow testing, security vulnerability assessment
   - **Tools:** Jest untuk unit testing, Istanbul untuk coverage reporting, OWASP ZAP untuk security testing
   - **Metrics:** Statement coverage, branch coverage, function coverage
   - **Target:** 85% code coverage untuk critical business logic

3. **Performance Testing**
   - **Load Testing:** Apache JMeter untuk simulating concurrent users
   - **Stress Testing:** Gradual load increase hingga system breaking point
   - **Scenarios:** 100, 500, 1000, 2000 concurrent users
   - **Metrics:** Response time, throughput, error rate, resource utilization
   - **Environment:** Production-like environment untuk realistic results

4. **Usability Testing**
   - **Methodology:** Task-based testing dengan think-aloud protocol
   - **Responden:** 10 representative users (5 customers, 3 sellers, 2 admins)
   - **Tasks:** 15 critical user tasks dengan success criteria
   - **Metrics:** Task completion rate, time on task, error rate, satisfaction score (SUS)
   - **Tools:** Screen recording, eye-tracking (if available), post-test questionnaire

5. **Compatibility Testing**
   - **Browser Testing:** Chrome, Firefox, Safari, Edge (latest 2 versions)
   - **Device Testing:** Desktop, tablet, mobile (iOS dan Android)
   - **Screen Resolutions:** 320px to 1920px width
   - **Tools:** BrowserStack untuk cross-browser testing, responsive design testing tools

**Teknik Analisis Data:**
- **Statistical Analysis:** Descriptive statistics untuk performance metrics, inferential statistics untuk usability data
- **Quality Metrics:** Defect density, defect removal efficiency, mean time to failure
- **User Experience Analysis:** Task success rate analysis, user satisfaction correlation
- **Tools:** SPSS untuk statistical analysis, Excel untuk data visualization, R untuk advanced analytics

**Luaran Tahap 4:**
- Comprehensive test report dengan 95%+ pass rate
- Performance benchmark report dengan detailed metrics
- Usability testing report dengan SUS score target > 80
- Cross-browser compatibility matrix
- Security assessment report dengan vulnerability analysis
- Bug tracking dan resolution log dengan severity classification
- Test automation suite untuk regression testing

### 3.1.5 Tahap 5: Deployment dan Evaluasi

**Tujuan:** Melakukan deployment sistem ke production environment dan evaluasi dampak implementasi terhadap efisiensi bisnis dan kepuasan pengguna.

**Metode Pengumpulan Data:**

1. **Production Monitoring**
   - **Platform:** Vercel Analytics untuk frontend, MongoDB Atlas monitoring untuk database
   - **Metrics:** Uptime, response time, error rate, user engagement, conversion rate
   - **Duration:** 4 minggu continuous monitoring dengan weekly reports
   - **Alerting:** Real-time alerts untuk critical issues (downtime, performance degradation)

2. **User Satisfaction Survey**
   - **Responden:** 30+ active users (20 customers, 7 sellers, 3 admins)
   - **Instrument:** Online questionnaire dengan 25 pertanyaan (mix Likert scale dan open-ended)
   - **Aspects:** Ease of use, feature satisfaction, performance perception, intention to continue use
   - **Distribution:** Email invitation dengan follow-up reminders
   - **Timeline:** 2 weeks data collection period

3. **Business Impact Analysis**
   - **Data Sources:** System transaction logs, manual business records, financial reports
   - **Metrics:** Transaction volume, processing time, error reduction, customer acquisition
   - **Comparison Period:** 3 months before vs 1 month after implementation
   - **Methodology:** Before-after analysis dengan statistical significance testing

4. **Stakeholder Feedback Collection**
   - **Method:** Semi-structured interviews dengan key stakeholders
   - **Participants:** Business owner, staff members, key customers
   - **Focus:** System adoption, workflow changes, perceived benefits, improvement suggestions
   - **Duration:** 45-60 minutes per interview dengan audio recording

**Teknik Analisis Data:**
- **Comparative Analysis:** Before-after implementation comparison dengan statistical tests
- **ROI Calculation:** Cost-benefit analysis dengan NPV dan payback period
- **User Satisfaction Analysis:** Correlation analysis antara features dan satisfaction
- **Tools:** Google Analytics untuk web analytics, custom dashboard untuk business metrics, SPSS untuk statistical analysis

**Luaran Tahap 5:**
- Production deployment report dengan go-live checklist
- User satisfaction survey results (target: rata-rata 4.2/5.0)
- Business impact analysis dengan quantified improvements
- ROI calculation dan cost-benefit analysis report
- Stakeholder feedback summary dengan actionable insights
- System performance baseline untuk future monitoring
- Maintenance dan support documentation
- Recommendations untuk continuous improvement

### 3.1.6 Diagram Alir Tahapan Penelitian

```
                                    MULAI
                                      │
                                      ▼
                        ┌─────────────────────────────┐
                        │     TAHAP 1: ANALISIS      │
                        │       KEBUTUHAN             │
                        │                             │
                        │ • Observasi Langsung        │
                        │ • Wawancara Terstruktur     │
                        │ • Analisis Dokumen Bisnis   │
                        │                             │
                        │ Output: SRS, BMC, User      │
                        │ Requirements, Gap Analysis  │
                        └─────────────────────────────┘
                                      │
                                      ▼
                        ┌─────────────────────────────┐
                        │    TAHAP 2: PERANCANGAN    │
                        │         SISTEM              │
                        │                             │
                        │ • Studi Literatur Teknologi │
                        │ • Benchmarking Kompetitor   │
                        │ • UX Research & Design      │
                        │                             │
                        │ Output: System Architecture,│
                        │ UML Diagrams, UI/UX Design  │
                        └─────────────────────────────┘
                                      │
                                      ▼
                        ┌─────────────────────────────┐
                        │   TAHAP 3: IMPLEMENTASI    │
                        │                             │
                        │ • Frontend Development      │
                        │   (React.js + Tailwind)    │
                        │ • Backend Development       │
                        │   (Node.js + Express)      │
                        │ • Database Implementation   │
                        │   (MongoDB)                 │
                        │                             │
                        │ Output: Working System,     │
                        │ Source Code, Documentation  │
                        └─────────────────────────────┘
                                      │
                                      ▼
                        ┌─────────────────────────────┐
                        │     TAHAP 4: PENGUJIAN     │
                        │                             │
                        │ • Black Box Testing         │
                        │ • White Box Testing         │
                        │ • Performance Testing       │
                        │ • Usability Testing         │
                        │ • Compatibility Testing     │
                        │                             │
                        │ Output: Test Reports,       │
                        │ Bug Fixes, Quality Metrics  │
                        └─────────────────────────────┘
                                      │
                                      ▼
                        ┌─────────────────────────────┐
                        │  TAHAP 5: DEPLOYMENT &     │
                        │       EVALUASI              │
                        │                             │
                        │ • Production Deployment     │
                        │ • User Satisfaction Survey  │
                        │ • Business Impact Analysis  │
                        │ • Stakeholder Feedback     │
                        │                             │
                        │ Output: Live System, ROI    │
                        │ Analysis, Recommendations   │
                        └─────────────────────────────┘
                                      │
                                      ▼
                        ┌─────────────────────────────┐
                        │    DOKUMENTASI FINAL &     │
                        │       PELAPORAN             │
                        │                             │
                        │ • Laporan Penelitian        │
                        │ • Technical Documentation   │
                        │ • User Manual               │
                        │ • Future Work Recommendations│
                        └─────────────────────────────┘
                                      │
                                      ▼
                                   SELESAI
```

**Gambar 3.1 Diagram Alir Tahapan Penelitian Sistem E-Commerce Inter Medi-A**

### 3.1.7 Timeline dan Resource Allocation

**Tabel 3.1 Jadwal Pelaksanaan Penelitian**

| Tahap | Aktivitas Utama | Minggu 1-2 | Minggu 3-4 | Minggu 5-6 | Minggu 7-8 | Minggu 9-10 |
|-------|-----------------|-------------|-------------|-------------|-------------|-------------|
| 1 | Analisis Kebutuhan | ████████ | ████ | | | |
| 2 | Perancangan Sistem | ████ | ████████ | ████ | | |
| 3 | Implementasi | | ████ | ████████ | ████████ | |
| 4 | Testing & QA | | | ████ | ████████ | ████ |
| 5 | Deployment & Evaluasi | | | | ████ | ████████ |
| 6 | Dokumentasi | ████ | ████ | ████ | ████ | ████████ |

**Resource Requirements:**
- **Human Resources:** 1 researcher (full-time), 3 part-time testers, 5-10 user participants
- **Technology Resources:** Development hardware, cloud services (Vercel, MongoDB Atlas), testing tools
- **Financial Budget:** Estimated $500-1000 untuk cloud services, domain, dan testing tools

## 3.2 Perbedaan dari Penelitian Sebelumnya

Berdasarkan comprehensive review terhadap 5 penelitian terdahulu yang telah dianalisis pada BAB II, penelitian ini memiliki beberapa perbedaan signifikan dan kontribusi unik yang menjadi novelty dan added value:

### 3.2.1 Perbedaan dengan Sari & Wibowo (2023) - "Implementasi E-Commerce untuk UMKM Menggunakan Framework React.js"

**Penelitian Sebelumnya:**
- **Scope:** Implementasi React.js untuk UMKM secara general tanpa spesialisasi industri
- **Technology Stack:** React.js frontend dengan backend PHP dan database MySQL (traditional stack)
- **Deployment:** Conventional hosting tanpa cloud-native approach
- **Evaluation:** Terbatas pada technical performance metrics (40% improvement)
- **Business Analysis:** Minimal business impact assessment
- **Methodology:** Basic prototype development tanpa comprehensive SDLC

**Penelitian Ini - Perbedaan Signifikan:**
- **Industry-Specific Focus:** Spesialisasi pada sektor toko komputer dengan karakteristik produk IT yang kompleks dan technical specifications
- **Modern Full-Stack JavaScript:** Konsistensi teknologi menggunakan React.js + Node.js + MongoDB untuk seamless development experience
- **Cloud-Native Architecture:** Production-ready deployment dengan Vercel dan MongoDB Atlas untuk scalability dan reliability
- **Holistic Evaluation:** Comprehensive assessment mencakup technical performance, business impact, dan user experience
- **Real Business Case:** Implementasi pada bisnis aktual dengan real data dan operational constraints
- **Enhanced Methodology:** SDLC Waterfall dengan agile practices dan continuous user feedback

**Kontribusi Unik:**
- First comprehensive study mengintegrasikan modern JavaScript ecosystem untuk toko komputer di Indonesia
- Cloud-first deployment strategy dengan performance optimization
- Quantified business impact dengan ROI calculation

### 3.2.2 Perbedaan dengan Hidayat & Pratama (2022) - "Analisis Performa Sistem E-Commerce Menggunakan Node.js dan MongoDB"

**Penelitian Sebelumnya:**
- **Focus:** Technical scalability analysis (10,000 concurrent users, 200ms response time)
- **Frontend:** Tidak membahas frontend framework secara detail
- **Evaluation Scope:** Terbatas pada database performance dan server scalability
- **Business Context:** Tidak ada analisis dampak bisnis atau user experience
- **Implementation:** Prototype-level tanpa production deployment

**Penelitian Ini - Perbedaan Signifikan:**
- **End-to-End Integration:** Comprehensive frontend-backend integration dengan React.js sebagai modern UI framework
- **User-Centered Design:** Extensive UI/UX research dengan design thinking methodology
- **Business Impact Focus:** Detailed ROI analysis, customer satisfaction metrics, dan operational efficiency improvement
- **Production Implementation:** Real-world deployment dengan actual business operations
- **Comprehensive Testing:** Multi-layered testing strategy termasuk usability dan compatibility testing

**Kontribusi Unik:**
- Integration of technical performance dengan business value creation
- User experience optimization berdasarkan actual user research
- Production-ready system dengan maintenance dan support strategy

### 3.2.3 Perbedaan dengan Wibowo, Sari & Rahman (2021) - "Perancangan Sistem E-Commerce Responsif dengan Pendekatan Mobile-First"

**Penelitian Sebelumnya:**
- **Primary Focus:** Responsive design dan mobile optimization (60% UX improvement)
- **Technology:** Traditional web technologies (PHP, MySQL) tanpa modern framework
- **Metrics:** Terbatas pada conversion rate (35% increase) dan bounce rate (25% reduction)
- **Architecture:** Monolithic architecture tanpa microservices consideration
- **Scope:** UI/UX focused tanpa comprehensive backend architecture

**Penelitian Ini - Perbedaan Signifikan:**
- **Modern Technology Stack:** React.js dengan component-based architecture untuk better maintainability
- **Comprehensive System Design:** Full-stack architecture dengan API-first approach dan microservices readiness
- **Advanced Features:** Real-time notifications, analytics dashboard, automated inventory management
- **Digital Marketing Integration:** SEO optimization, social media integration, dan digital marketing strategy
- **Scalability Planning:** Cloud-native architecture dengan horizontal scaling capability

**Kontribusi Unik:**
- Modern frontend architecture dengan reusable component library
- Integrated digital marketing strategy untuk online presence
- Scalable system architecture untuk future growth

### 3.2.4 Perbedaan dengan Suprianto & Rahman (2020) - "Implementasi Metode Waterfall dalam Pengembangan Sistem E-Commerce pada Toko Komputer"

**Penelitian Sebelumnya:**
- **Methodology:** Traditional Waterfall methodology untuk toko komputer
- **Technology:** Conventional web technologies tanpa modern framework
- **Deployment:** Local hosting tanpa cloud infrastructure
- **Metrics:** Focus pada error reduction (90%) dan operational efficiency (55%)
- **Scope:** Basic e-commerce functionality tanpa advanced features

**Penelitian Ini - Perbedaan Signifikan:**
- **Enhanced Methodology:** Waterfall dengan agile practices, continuous integration, dan user feedback loops
- **Modern Technology Stack:** React.js + Node.js + MongoDB dengan modern development practices
- **Cloud-First Strategy:** Production deployment dengan CDN, auto-scaling, dan global availability
- **Comprehensive Testing:** Multi-layered testing strategy termasuk performance, security, dan usability
- **User Experience Focus:** Extensive UX research dengan user-centered design approach

**Kontribusi Unik:**
- Enhanced SDLC methodology dengan modern development practices
- Cloud-native deployment dengan DevOps integration
- Comprehensive quality assurance dengan automated testing

### 3.2.5 Perbedaan dengan Pratama & Nugroho (2021) - "Optimasi Performa Aplikasi Web E-Commerce dengan Teknologi Modern dan Cloud Computing"

**Penelitian Sebelumnya:**
- **Focus:** Performance optimization dengan cloud computing (70% loading speed improvement)
- **Scope:** Technical optimization tanpa comprehensive business analysis
- **Features:** Basic e-commerce functionality dengan performance focus
- **Evaluation:** Terbatas pada technical metrics (availability 99.9%, server load reduction 50%)

**Penelitian Ini - Perbedaan Signifikan:**
- **Holistic Approach:** Integration of performance optimization dengan business value creation
- **Complete E-Commerce Solution:** End-to-end functionality dengan advanced features (analytics, inventory management, multi-user roles)
- **Business Process Optimization:** Not just technical performance but business workflow improvement
- **Sustainability Framework:** Long-term maintenance strategy dengan continuous improvement plan
- **User-Centric Evaluation:** User satisfaction metrics alongside technical performance

**Kontribusi Unik:**
- Comprehensive e-commerce solution dengan business process integration
- Sustainable development framework untuk long-term success
- User satisfaction focus dengan quantified business impact

### 3.2.6 Positioning Matrix dan Kontribusi Penelitian

**Tabel 3.2 Comparative Analysis Matrix**

| Aspek Penelitian | Penelitian Terdahulu | Penelitian Ini | Kontribusi Unik |
|------------------|---------------------|-----------------|-----------------|
| **Technology Stack** | PHP/MySQL, Basic React | React.js + Node.js + MongoDB | Modern full-stack JavaScript ecosystem |
| **Deployment Strategy** | Traditional hosting | Cloud-native (Vercel + Atlas) | Production-ready scalable architecture |
| **Evaluation Scope** | Technical performance only | Technical + Business + UX | Holistic impact assessment |
| **Industry Focus** | General e-commerce | IT/Computer store specific | Domain-specific optimization |
| **Methodology** | Basic Waterfall/Prototype | Enhanced Waterfall + Agile | Modern SDLC with continuous feedback |
| **Business Analysis** | Limited/None | Comprehensive ROI + Impact | Quantified business value creation |
| **User Research** | Minimal user involvement | Extensive UX research | User-centered design approach |
| **Sustainability** | Not addressed | Long-term strategy included | Maintenance and growth planning |
| **Documentation** | Basic technical docs | Comprehensive academic docs | Replicable research framework |
| **Real-world Impact** | Prototype/Simulation | Actual business implementation | Practical business transformation |

### 3.2.7 Research Gap Analysis dan Kontribusi

**Identified Research Gaps:**

1. **Technology Integration Gap:** Belum ada penelitian yang mengintegrasikan React.js, Node.js, dan MongoDB secara komprehensif untuk sektor toko komputer di Indonesia
2. **Business Impact Gap:** Kurangnya penelitian yang mengukur dampak teknis dan bisnis secara bersamaan
3. **User Experience Gap:** Minimnya penelitian yang menggabungkan technical implementation dengan extensive user research
4. **Sustainability Gap:** Tidak ada penelitian yang membahas long-term maintenance dan growth strategy
5. **Methodology Gap:** Kurangnya penelitian yang menggunakan enhanced SDLC dengan modern development practices

**Unique Contributions of This Research:**

1. **Methodological Innovation:**
   - Enhanced SDLC Waterfall dengan agile practices dan continuous user feedback
   - Comprehensive evaluation framework (technical + business + UX)
   - Replicable digital transformation methodology untuk UMKM Indonesia

2. **Technological Contribution:**
   - First comprehensive implementation of modern JavaScript ecosystem untuk toko komputer
   - Cloud-native architecture dengan production-ready deployment
   - Performance optimization dengan measurable business impact

3. **Business Value Creation:**
   - Quantified ROI calculation dengan before-after comparison
   - Customer journey optimization berdasarkan actual user behavior
   - Sustainable business model dengan integrated digital marketing

4. **Academic Rigor:**
   - Longitudinal study dengan 4+ weeks production monitoring
   - Statistical validation menggunakan appropriate statistical tests
   - Comprehensive documentation untuk research reproducibility

5. **Practical Impact:**
   - Real business transformation dengan measurable outcomes
   - Replicable framework untuk similar UMKM digitalization
   - Best practices documentation untuk industry adoption

### 3.2.8 Expected Research Outcomes

**Technical Outcomes:**
- Modern e-commerce platform dengan 99.9% uptime
- Performance improvement dengan loading time < 3 seconds
- Scalable architecture supporting 1000+ concurrent users

**Business Outcomes:**
- Operational efficiency improvement > 50%
- Customer satisfaction score > 4.2/5.0
- ROI positive dalam 6 bulan implementation

**Academic Outcomes:**
- Comprehensive research documentation untuk future reference
- Replicable methodology untuk similar research
- Contribution to digital transformation body of knowledge

**Social Impact:**
- UMKM digitalization model untuk Indonesian market
- Job creation potential dalam digital economy
- Technology adoption acceleration untuk traditional businesses

Penelitian ini mengisi significant research gap dengan memberikan comprehensive solution, modern technology implementation, dan holistic evaluation yang dapat menjadi reference untuk digitalisasi UMKM sektor IT di Indonesia dan berkontribusi pada sustainable digital economy development.
