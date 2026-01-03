# DESKRIPSI USE CASE - SISTEM E-COMMERCE INTER MEDI-A

## RINGKASAN USE CASE

### **CUSTOMER USE CASES (13 Use Cases)**
1. Register Account
2. Login
3. Browse Products
4. Search Products
5. View Product Detail
6. Add to Cart
7. Manage Cart
8. Checkout
9. Make Payment
10. Track Order
11. View Order History
12. Manage Profile
13. Request Service

### **ADMIN USE CASES (10 Use Cases)**
1. Admin Login
2. Manage Products
3. Manage Categories
4. Manage Inventory
5. Manage Orders
6. Manage Customers
7. View Reports
8. Manage Payments
9. Manage Shipping
10. System Settings

### **SELLER USE CASES (6 Use Cases)**
1. Seller Login
2. Manage Products
3. Process Orders
4. Manage Inventory
5. Customer Communication
6. Manage Seller Profile

---

## DESKRIPSI DETAIL USE CASE

### **CUSTOMER USE CASES**

#### **UC-001: Register Account**
- **Aktor**: Customer
- **Deskripsi**: Customer mendaftar akun baru untuk mengakses sistem
- **Precondition**: Customer belum memiliki akun
- **Postcondition**: Akun customer berhasil dibuat
- **Main Flow**:
  1. Customer mengakses halaman registrasi
  2. Customer mengisi form registrasi (nama, email, password, telepon)
  3. System validasi data
  4. System kirim email verifikasi
  5. Customer verifikasi email
  6. Akun berhasil dibuat

#### **UC-002: Login**
- **Aktor**: Customer
- **Deskripsi**: Customer login ke sistem menggunakan kredensial
- **Precondition**: Customer memiliki akun yang valid
- **Postcondition**: Customer berhasil login dan dapat mengakses fitur
- **Main Flow**:
  1. Customer mengakses halaman login
  2. Customer input email dan password
  3. System validasi kredensial
  4. System redirect ke dashboard customer

#### **UC-003: Browse Products**
- **Aktor**: Customer
- **Deskripsi**: Customer melihat daftar produk yang tersedia
- **Precondition**: System memiliki data produk
- **Postcondition**: Customer dapat melihat produk-produk
- **Main Flow**:
  1. Customer mengakses halaman produk
  2. System tampilkan daftar produk dengan pagination
  3. Customer dapat filter berdasarkan kategori
  4. Customer dapat sort berdasarkan harga/nama

#### **UC-004: Search Products**
- **Aktor**: Customer
- **Deskripsi**: Customer mencari produk berdasarkan keyword
- **Precondition**: System memiliki data produk
- **Postcondition**: System menampilkan hasil pencarian
- **Main Flow**:
  1. Customer input keyword di search box
  2. System cari produk berdasarkan nama/deskripsi
  3. System tampilkan hasil pencarian
  4. Customer dapat filter hasil pencarian

#### **UC-005: View Product Detail**
- **Aktor**: Customer
- **Deskripsi**: Customer melihat detail lengkap produk
- **Precondition**: Produk tersedia di sistem
- **Postcondition**: Customer mendapat informasi detail produk
- **Main Flow**:
  1. Customer klik produk dari daftar
  2. System tampilkan detail produk (gambar, spesifikasi, harga, stok)
  3. System tampilkan review dan rating
  4. Customer dapat melihat produk terkait

#### **UC-006: Add to Cart**
- **Aktor**: Customer
- **Deskripsi**: Customer menambahkan produk ke keranjang belanja
- **Precondition**: Customer login dan produk tersedia
- **Postcondition**: Produk berhasil ditambahkan ke cart
- **Main Flow**:
  1. Customer pilih produk dan quantity
  2. Customer klik "Add to Cart"
  3. System validasi stok
  4. System tambahkan ke cart
  5. System update cart counter

#### **UC-007: Manage Cart**
- **Aktor**: Customer
- **Deskripsi**: Customer mengelola isi keranjang belanja
- **Precondition**: Cart memiliki item
- **Postcondition**: Cart berhasil diupdate
- **Main Flow**:
  1. Customer akses halaman cart
  2. Customer dapat update quantity
  3. Customer dapat hapus item
  4. System update total harga
  5. System simpan perubahan

#### **UC-008: Checkout**
- **Aktor**: Customer
- **Deskripsi**: Customer melakukan proses checkout
- **Precondition**: Cart memiliki item dan customer login
- **Postcondition**: Order berhasil dibuat
- **Main Flow**:
  1. Customer klik checkout dari cart
  2. Customer pilih alamat pengiriman
  3. Customer pilih metode pengiriman
  4. Customer review order summary
  5. Customer konfirmasi order
  6. System buat order baru

#### **UC-009: Make Payment**
- **Aktor**: Customer
- **Deskripsi**: Customer melakukan pembayaran order
- **Precondition**: Order sudah dibuat
- **Postcondition**: Payment berhasil diproses
- **Main Flow**:
  1. Customer pilih metode pembayaran
  2. Customer input detail pembayaran
  3. System proses payment via gateway
  4. System update status order
  5. System kirim konfirmasi email

#### **UC-010: Track Order**
- **Aktor**: Customer
- **Deskripsi**: Customer melacak status pengiriman order
- **Precondition**: Order sudah dibuat
- **Postcondition**: Customer mendapat info status order
- **Main Flow**:
  1. Customer akses halaman track order
  2. Customer input order number
  3. System tampilkan status pengiriman
  4. System tampilkan tracking history

#### **UC-011: View Order History**
- **Aktor**: Customer
- **Deskripsi**: Customer melihat riwayat pesanan
- **Precondition**: Customer memiliki order history
- **Postcondition**: Customer dapat melihat semua order sebelumnya
- **Main Flow**:
  1. Customer akses halaman order history
  2. System tampilkan daftar order
  3. Customer dapat filter berdasarkan status/tanggal
  4. Customer dapat melihat detail order

#### **UC-012: Manage Profile**
- **Aktor**: Customer
- **Deskripsi**: Customer mengelola informasi profil
- **Precondition**: Customer login
- **Postcondition**: Profil berhasil diupdate
- **Main Flow**:
  1. Customer akses halaman profile
  2. Customer edit informasi personal
  3. Customer update alamat
  4. Customer ganti password
  5. System simpan perubahan

#### **UC-013: Request Service**
- **Aktor**: Customer
- **Deskripsi**: Customer mengajukan permintaan layanan teknis
- **Precondition**: Customer login
- **Postcondition**: Service request berhasil dibuat
- **Main Flow**:
  1. Customer akses halaman service request
  2. Customer pilih jenis layanan
  3. Customer isi detail masalah
  4. Customer upload foto/dokumen
  5. System buat service ticket
  6. System assign ke technician

---

### **ADMIN USE CASES**

#### **UC-014: Admin Login**
- **Aktor**: Admin
- **Deskripsi**: Admin login ke dashboard admin
- **Precondition**: Admin memiliki kredensial valid
- **Postcondition**: Admin dapat mengakses dashboard
- **Main Flow**:
  1. Admin akses halaman admin login
  2. Admin input username dan password
  3. System validasi kredensial admin
  4. System redirect ke admin dashboard

#### **UC-015: Manage Products**
- **Aktor**: Admin
- **Deskripsi**: Admin mengelola data produk
- **Precondition**: Admin login
- **Postcondition**: Data produk berhasil dikelola
- **Main Flow**:
  1. Admin akses halaman manage products
  2. Admin dapat tambah produk baru
  3. Admin dapat edit produk existing
  4. Admin dapat hapus produk
  5. Admin dapat upload gambar produk
  6. System simpan perubahan

#### **UC-016: Manage Categories**
- **Aktor**: Admin
- **Deskripsi**: Admin mengelola kategori produk
- **Precondition**: Admin login
- **Postcondition**: Kategori berhasil dikelola
- **Main Flow**:
  1. Admin akses halaman categories
  2. Admin dapat tambah kategori baru
  3. Admin dapat edit nama kategori
  4. Admin dapat hapus kategori
  5. Admin dapat set parent category
  6. System update struktur kategori

#### **UC-017: Manage Inventory**
- **Aktor**: Admin
- **Deskripsi**: Admin mengelola stok inventory
- **Precondition**: Admin login dan produk tersedia
- **Postcondition**: Stok inventory terupdate
- **Main Flow**:
  1. Admin akses halaman inventory
  2. Admin lihat current stock level
  3. Admin dapat update stock quantity
  4. Admin dapat set minimum stock alert
  5. Admin dapat lihat stock movement history
  6. System update inventory data

#### **UC-018: Manage Orders**
- **Aktor**: Admin
- **Deskripsi**: Admin mengelola pesanan customer
- **Precondition**: Ada order dari customer
- **Postcondition**: Status order terupdate
- **Main Flow**:
  1. Admin akses halaman orders
  2. Admin lihat daftar order
  3. Admin dapat update status order
  4. Admin dapat print invoice
  5. Admin dapat cancel order
  6. System kirim notifikasi ke customer

#### **UC-019: Manage Customers**
- **Aktor**: Admin
- **Deskripsi**: Admin mengelola data customer
- **Precondition**: Ada data customer
- **Postcondition**: Data customer terkelola
- **Main Flow**:
  1. Admin akses halaman customers
  2. Admin lihat daftar customer
  3. Admin dapat lihat detail customer
  4. Admin dapat edit customer info
  5. Admin dapat disable/enable account
  6. System simpan perubahan

#### **UC-020: View Reports**
- **Aktor**: Admin
- **Deskripsi**: Admin melihat laporan bisnis
- **Precondition**: Ada data transaksi
- **Postcondition**: Admin mendapat insight bisnis
- **Main Flow**:
  1. Admin akses halaman reports
  2. Admin pilih jenis laporan
  3. Admin set periode laporan
  4. System generate laporan
  5. Admin dapat export laporan
  6. System tampilkan grafik dan chart

#### **UC-021: Manage Payments**
- **Aktor**: Admin
- **Deskripsi**: Admin mengelola pembayaran
- **Precondition**: Ada transaksi pembayaran
- **Postcondition**: Status pembayaran terupdate
- **Main Flow**:
  1. Admin akses halaman payments
  2. Admin lihat daftar pembayaran
  3. Admin dapat verify manual payment
  4. Admin dapat refund payment
  5. Admin dapat lihat payment gateway logs
  6. System update payment status

#### **UC-022: Manage Shipping**
- **Aktor**: Admin
- **Deskripsi**: Admin mengelola pengiriman
- **Precondition**: Ada order yang perlu dikirim
- **Postcondition**: Pengiriman terkelola
- **Main Flow**:
  1. Admin akses halaman shipping
  2. Admin lihat order ready to ship
  3. Admin dapat print shipping label
  4. Admin dapat update tracking number
  5. Admin dapat set shipping status
  6. System kirim notifikasi tracking

#### **UC-023: System Settings**
- **Aktor**: Admin
- **Deskripsi**: Admin mengatur konfigurasi sistem
- **Precondition**: Admin memiliki akses settings
- **Postcondition**: Konfigurasi sistem terupdate
- **Main Flow**:
  1. Admin akses halaman settings
  2. Admin dapat update company info
  3. Admin dapat set payment methods
  4. Admin dapat configure shipping options
  5. Admin dapat set tax rates
  6. System simpan konfigurasi

---

### **SELLER USE CASES**

#### **UC-024: Seller Login**
- **Aktor**: Seller
- **Deskripsi**: Seller login ke panel seller untuk mengelola produk dan pesanan
- **Precondition**: Seller memiliki akun valid
- **Postcondition**: Seller dapat akses panel seller
- **Main Flow**:
  1. Seller akses halaman seller login
  2. Seller input kredensial
  3. System validasi seller account
  4. System redirect ke seller dashboard

#### **UC-025: Manage Products**
- **Aktor**: Seller
- **Deskripsi**: Seller mengelola produk yang dijual
- **Precondition**: Seller login
- **Postcondition**: Produk berhasil dikelola
- **Main Flow**:
  1. Seller akses halaman manage products
  2. Seller dapat tambah produk baru
  3. Seller dapat edit detail produk
  4. Seller dapat update harga dan stok
  5. Seller dapat upload/edit gambar produk
  6. System simpan perubahan

#### **UC-026: Process Orders**
- **Aktor**: Seller
- **Deskripsi**: Seller memproses pesanan dari customer
- **Precondition**: Ada order dari customer
- **Postcondition**: Order berhasil diproses
- **Main Flow**:
  1. Seller akses halaman orders
  2. Seller lihat daftar order baru
  3. Seller konfirmasi ketersediaan produk
  4. Seller update status order (confirmed, packed, shipped)
  5. Seller input tracking number
  6. System kirim notifikasi ke customer

#### **UC-027: Manage Inventory**
- **Aktor**: Seller
- **Deskripsi**: Seller mengelola stok inventory produk
- **Precondition**: Seller memiliki produk
- **Postcondition**: Inventory terupdate
- **Main Flow**:
  1. Seller akses halaman inventory
  2. Seller lihat current stock level
  3. Seller dapat update stock quantity
  4. Seller dapat set low stock alert
  5. Seller dapat lihat stock movement
  6. System update inventory data

#### **UC-028: Customer Communication**
- **Aktor**: Seller
- **Deskripsi**: Seller berkomunikasi dengan customer
- **Precondition**: Ada inquiry atau order dari customer
- **Postcondition**: Komunikasi berhasil dilakukan
- **Main Flow**:
  1. Seller akses halaman messages/chat
  2. Seller lihat pesan dari customer
  3. Seller dapat reply pesan customer
  4. Seller dapat kirim update status order
  5. Seller dapat share tracking information
  6. System simpan history komunikasi

#### **UC-029: Manage Seller Profile**
- **Aktor**: Seller
- **Deskripsi**: Seller mengelola profil dan informasi toko
- **Precondition**: Seller login
- **Postcondition**: Profil seller terupdate
- **Main Flow**:
  1. Seller akses halaman profile
  2. Seller update informasi toko
  3. Seller update contact information
  4. Seller set business hours
  5. Seller upload logo/banner toko
  6. System simpan profil seller

---

## SUMMARY

**Total Use Cases: 29**
- Customer: 13 use cases
- Admin: 10 use cases  
- Seller: 6 use cases

**Key Features Covered:**
- Complete e-commerce functionality
- Comprehensive admin management
- Seller product & order management
- Real-time tracking and notifications
- Reporting and analytics
- User profile management

Sistem ini mendukung semua aspek bisnis Inter Medi-A dari penjualan online hingga manajemen seller dengan interface yang user-friendly untuk semua jenis pengguna.
