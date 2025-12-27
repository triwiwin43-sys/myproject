## 4.5 Use Case Diagram dan Deskripsi Use Case

### 4.5.1 Use Case Diagram Sistem E-Commerce Inter Medi-A

```
                    SISTEM E-COMMERCE INTER MEDI-A COMPUTER STORE
    
    ┌─────────────┐                                                    ┌─────────────┐
    │             │                                                    │             │
    │  CUSTOMER   │                                                    │   SELLER    │
    │             │                                                    │             │
    └─────────────┘                                                    └─────────────┘
           │                                                                  │
           │                                                                  │
           │ ┌─────────────────────────────────────────────────────────────┐ │
           │ │                                                             │ │
           ├─│ UC001: Register & Login                                     │ │
           │ │                                                             │ │
           ├─│ UC002: Browse Products                                      │ │
           │ │                                                             │ │
           ├─│ UC003: Search Products                                      │ │
           │ │                                                             │ │
           ├─│ UC004: View Product Details                                 │ │
           │ │                                                             │ │
           ├─│ UC005: Add to Cart                                          │ │
           │ │                                                             │ │
           ├─│ UC006: Manage Shopping Cart                                 │ │
           │ │                                                             │ │
           ├─│ UC007: Checkout Process                                     │ │
           │ │                                                             │ │
           ├─│ UC008: Make Payment                                         │ │
           │ │                                                             │ │
           ├─│ UC009: Track Order Status                                   │ │
           │ │                                                             │ │
           ├─│ UC010: Manage Profile                                       │ │
           │ │                                                             │ │
           ├─│ UC011: View Order History                                   │ │
           │ │                                                             │ │
           ├─│ UC012: Submit Product Review                                │ │
           │ │                                                             │ │
           │ │                                                             │─┤
           │ │                                                             │ │
           │ │ UC013: Manage Products                                      │─┤
           │ │                                                             │ │
           │ │ UC014: Process Orders                                       │─┤
           │ │                                                             │ │
           │ │ UC015: Manage Inventory                                     │─┤
           │ │                                                             │ │
           │ │ UC016: View Sales Report                                    │─┤
           │ │                                                             │ │
           │ │ UC017: Customer Service                                     │─┤
           │ │                                                             │ │
           │ └─────────────────────────────────────────────────────────────┘ │
           │                                                                  │
           │                                                                  │
    ┌─────────────┐                                                    ┌─────────────┐
    │             │                                                    │             │
    │   ADMIN     │                                                    │   SYSTEM    │
    │             │                                                    │             │
    └─────────────┘                                                    └─────────────┘
           │                                                                  │
           │                                                                  │
           ├─ UC018: Manage Users                                             │
           │                                                                  │
           ├─ UC019: Manage Categories                                        │
           │                                                                  │
           ├─ UC020: System Monitoring                                        │
           │                                                                  │
           ├─ UC021: Generate Reports                                         │
           │                                                                  │
           ├─ UC022: Manage Settings                                          │
           │                                                                  │
           │                                                                  │
           │                                              UC023: Send Notifications ─┤
           │                                                                  │
           │                                              UC024: Auto Backup Data ───┤
           │                                                                  │
           │                                              UC025: Update Stock Status ─┤
```

**Gambar 4.6 Use Case Diagram Sistem E-Commerce Inter Medi-A**

### 4.5.2 Deskripsi Use Case Detail

#### **UC001: Register & Login**
- **Aktor:** Customer, Seller
- **Deskripsi:** Pengguna melakukan registrasi akun baru atau login ke sistem
- **Precondition:** Pengguna mengakses halaman login/register
- **Main Flow:**
  1. Pengguna memilih "Register" atau "Login"
  2. Sistem menampilkan form registrasi/login
  3. Pengguna mengisi data yang diperlukan
  4. Sistem validasi data dan credentials
  5. Sistem memberikan akses sesuai role pengguna
- **Alternative Flow:** Jika data tidak valid, sistem menampilkan pesan error
- **Postcondition:** Pengguna berhasil login dan dapat mengakses fitur sesuai role

#### **UC002: Browse Products**
- **Aktor:** Customer, Guest
- **Deskripsi:** Pengguna melihat daftar produk yang tersedia
- **Precondition:** Pengguna mengakses halaman produk
- **Main Flow:**
  1. Sistem menampilkan daftar produk dengan pagination
  2. Pengguna dapat filter berdasarkan kategori, harga, brand
  3. Sistem menampilkan hasil filter
  4. Pengguna dapat sorting berdasarkan harga, popularitas, rating
- **Alternative Flow:** Jika tidak ada produk, sistem menampilkan pesan "No products found"
- **Postcondition:** Pengguna dapat melihat produk yang tersedia

#### **UC003: Search Products**
- **Aktor:** Customer, Guest
- **Deskripsi:** Pengguna mencari produk berdasarkan keyword
- **Precondition:** Pengguna berada di halaman utama atau produk
- **Main Flow:**
  1. Pengguna memasukkan keyword di search box
  2. Sistem melakukan pencarian berdasarkan nama, deskripsi, kategori
  3. Sistem menampilkan hasil pencarian dengan relevance ranking
  4. Pengguna dapat refine search dengan filter tambahan
- **Alternative Flow:** Jika tidak ditemukan, sistem suggest produk serupa
- **Postcondition:** Pengguna mendapat hasil pencarian yang relevan

#### **UC004: View Product Details**
- **Aktor:** Customer, Guest
- **Deskripsi:** Pengguna melihat detail lengkap produk
- **Precondition:** Pengguna memilih produk dari daftar
- **Main Flow:**
  1. Sistem menampilkan detail produk (foto, spesifikasi, harga)
  2. Sistem menampilkan stok availability
  3. Sistem menampilkan review dan rating dari customer lain
  4. Sistem menampilkan produk related/recommended
- **Alternative Flow:** Jika produk tidak tersedia, tampilkan status "Out of Stock"
- **Postcondition:** Pengguna mendapat informasi lengkap produk

#### **UC005: Add to Cart**
- **Aktor:** Customer
- **Deskripsi:** Customer menambahkan produk ke keranjang belanja
- **Precondition:** Customer login dan melihat detail produk
- **Main Flow:**
  1. Customer memilih quantity produk
  2. Customer klik "Add to Cart"
  3. Sistem validasi stok availability
  4. Sistem menambahkan produk ke cart
  5. Sistem update cart counter dan total
- **Alternative Flow:** Jika stok tidak cukup, tampilkan pesan error
- **Postcondition:** Produk berhasil ditambahkan ke cart

#### **UC006: Manage Shopping Cart**
- **Aktor:** Customer
- **Deskripsi:** Customer mengelola item dalam keranjang belanja
- **Precondition:** Customer memiliki item di cart
- **Main Flow:**
  1. Customer mengakses halaman cart
  2. Sistem menampilkan daftar item dengan detail
  3. Customer dapat update quantity atau remove item
  4. Sistem recalculate total price dan shipping
  5. Sistem save perubahan cart
- **Alternative Flow:** Jika item sudah tidak tersedia, tampilkan notifikasi
- **Postcondition:** Cart berhasil diupdate sesuai perubahan

#### **UC007: Checkout Process**
- **Aktor:** Customer
- **Deskripsi:** Customer melakukan proses checkout untuk pembelian
- **Precondition:** Customer memiliki item di cart dan sudah login
- **Main Flow:**
  1. Customer klik "Checkout" dari cart
  2. Sistem tampilkan form shipping address
  3. Customer pilih metode pengiriman dan kurir
  4. Sistem calculate total termasuk ongkir
  5. Customer konfirmasi order details
  6. Sistem generate order ID dan redirect ke payment
- **Alternative Flow:** Jika alamat tidak lengkap, minta customer melengkapi
- **Postcondition:** Order berhasil dibuat dan menunggu pembayaran

#### **UC008: Make Payment**
- **Aktor:** Customer
- **Deskripsi:** Customer melakukan pembayaran untuk order
- **Precondition:** Order sudah dibuat dan menunggu pembayaran
- **Main Flow:**
  1. Sistem tampilkan detail pembayaran dan rekening tujuan
  2. Customer melakukan transfer sesuai nominal
  3. Customer upload bukti transfer
  4. Sistem save bukti pembayaran
  5. Sistem kirim notifikasi ke seller untuk verifikasi
- **Alternative Flow:** Jika upload gagal, customer dapat retry
- **Postcondition:** Bukti pembayaran tersimpan dan menunggu verifikasi

#### **UC009: Track Order Status**
- **Aktor:** Customer
- **Deskripsi:** Customer melacak status pesanan
- **Precondition:** Customer memiliki order yang sedang diproses
- **Main Flow:**
  1. Customer akses halaman "My Orders"
  2. Sistem tampilkan daftar order dengan status
  3. Customer pilih order untuk detail tracking
  4. Sistem tampilkan timeline status dan nomor resi (jika ada)
  5. Sistem tampilkan estimasi delivery
- **Alternative Flow:** Jika belum ada resi, tampilkan status "Processing"
- **Postcondition:** Customer mendapat informasi status terkini

#### **UC010: Manage Profile**
- **Aktor:** Customer, Seller
- **Deskripsi:** Pengguna mengelola profil dan informasi akun
- **Precondition:** Pengguna sudah login
- **Main Flow:**
  1. Pengguna akses halaman profile
  2. Sistem tampilkan form edit profile
  3. Pengguna update informasi (nama, alamat, telepon)
  4. Pengguna dapat change password
  5. Sistem save perubahan dan kirim konfirmasi
- **Alternative Flow:** Jika email sudah digunakan, tampilkan error
- **Postcondition:** Profile berhasil diupdate

#### **UC013: Manage Products**
- **Aktor:** Seller, Admin
- **Deskripsi:** Seller mengelola produk yang dijual
- **Precondition:** Seller sudah login dan terverifikasi
- **Main Flow:**
  1. Seller akses halaman "My Products"
  2. Seller dapat add, edit, atau delete produk
  3. Seller upload foto produk dan isi detail
  4. Seller set harga dan stok
  5. Sistem save produk dan publish ke catalog
- **Alternative Flow:** Jika foto tidak sesuai format, tampilkan error
- **Postcondition:** Produk berhasil dikelola dan tersedia di catalog

#### **UC014: Process Orders**
- **Aktor:** Seller
- **Deskripsi:** Seller memproses pesanan dari customer
- **Precondition:** Ada order baru yang perlu diproses
- **Main Flow:**
  1. Seller menerima notifikasi order baru
  2. Seller akses halaman "Orders Management"
  3. Seller verifikasi pembayaran customer
  4. Seller update status order dan siapkan barang
  5. Seller input nomor resi pengiriman
  6. Sistem kirim notifikasi ke customer
- **Alternative Flow:** Jika pembayaran tidak valid, seller dapat reject order
- **Postcondition:** Order berhasil diproses dan dikirim

#### **UC015: Manage Inventory**
- **Aktor:** Seller, Admin
- **Deskripsi:** Mengelola stok dan inventori produk
- **Precondition:** Seller memiliki produk yang terdaftar
- **Main Flow:**
  1. Seller akses halaman inventory
  2. Sistem tampilkan current stock semua produk
  3. Seller dapat update stock quantity
  4. Sistem set alert jika stock < minimum threshold
  5. Sistem auto-update product availability
- **Alternative Flow:** Jika stock 0, produk otomatis "Out of Stock"
- **Postcondition:** Inventory berhasil diupdate dan sinkron

#### **UC018: Manage Users**
- **Aktor:** Admin
- **Deskripsi:** Admin mengelola pengguna sistem
- **Precondition:** Admin sudah login dengan privilege
- **Main Flow:**
  1. Admin akses user management panel
  2. Admin dapat view, edit, suspend, atau delete user
  3. Admin dapat approve seller registration
  4. Admin dapat reset password user
  5. Admin dapat assign role dan permission
- **Alternative Flow:** Jika user sedang aktif, konfirmasi sebelum suspend
- **Postcondition:** User management berhasil dilakukan

#### **UC021: Generate Reports**
- **Aktor:** Admin, Seller
- **Deskripsi:** Generate laporan bisnis dan analytics
- **Precondition:** Ada data transaksi yang dapat dilaporkan
- **Main Flow:**
  1. User pilih jenis laporan (sales, inventory, customer)
  2. User set parameter (date range, filter)
  3. Sistem generate laporan sesuai parameter
  4. Sistem tampilkan laporan dalam format table/chart
  5. User dapat export laporan ke Excel/PDF
- **Alternative Flow:** Jika tidak ada data, tampilkan laporan kosong
- **Postcondition:** Laporan berhasil digenerate dan dapat didownload

### 4.5.3 Use Case Prioritization

**High Priority (Must Have):**
- UC001: Register & Login
- UC002: Browse Products
- UC005: Add to Cart
- UC007: Checkout Process
- UC008: Make Payment
- UC013: Manage Products
- UC014: Process Orders

**Medium Priority (Should Have):**
- UC003: Search Products
- UC006: Manage Shopping Cart
- UC009: Track Order Status
- UC015: Manage Inventory
- UC021: Generate Reports

**Low Priority (Could Have):**
- UC010: Manage Profile
- UC012: Submit Product Review
- UC018: Manage Users
- UC020: System Monitoring
