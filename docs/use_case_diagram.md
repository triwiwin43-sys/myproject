# Use Case Diagram - Inter Medi-A E-Commerce Platform

## Actors:
- **Customer**: End user yang melakukan pembelian
- **Admin**: Administrator sistem
- **Teknisi**: Staff service dan maintenance

## Use Case Diagram:

```
                    Inter Medi-A E-Commerce System
    
Customer                                                Admin
   |                                                      |
   |-- Register/Login                                     |-- Manage Products
   |-- Browse Products                                    |-- Manage Orders  
   |-- Search Products                                    |-- Manage Users
   |-- Add to Cart                                        |-- View Reports
   |-- Checkout                                           |-- Manage Promotions
   |-- Make Payment                                       |-- Manage Categories
   |-- Track Order                                        |-- System Settings
   |-- Request Service                                    |
   |-- View Order History                                 |
   |-- Update Profile                                     |
   |-- Leave Review                                       |
                                                          |
                                              Teknisi     |
                                                 |        |
                                                 |-- Manage Service Requests
                                                 |-- Update Service Status
                                                 |-- Create Service Report
                                                 |-- Schedule Appointments
```

## Deskripsi Use Case:

### Customer Use Cases:

**UC-001: Register/Login**
- **Actor**: Customer
- **Deskripsi**: Customer mendaftar akun baru atau login ke sistem
- **Precondition**: Customer memiliki email valid
- **Flow**: Input email/password → Validasi → Access granted
- **Postcondition**: Customer berhasil masuk ke sistem

**UC-002: Browse Products**
- **Actor**: Customer
- **Deskripsi**: Customer melihat daftar produk yang tersedia
- **Precondition**: Customer mengakses website
- **Flow**: Pilih kategori → View products → Filter/Sort
- **Postcondition**: Customer melihat produk sesuai kategori

**UC-003: Add to Cart**
- **Actor**: Customer
- **Deskripsi**: Customer menambahkan produk ke keranjang belanja
- **Precondition**: Customer login dan produk tersedia
- **Flow**: Pilih produk → Set quantity → Add to cart
- **Postcondition**: Produk tersimpan di keranjang

**UC-004: Checkout**
- **Actor**: Customer
- **Deskripsi**: Customer melakukan proses pembelian
- **Precondition**: Ada item di keranjang
- **Flow**: Review cart → Input alamat → Pilih pengiriman → Payment
- **Postcondition**: Order berhasil dibuat

**UC-005: Track Order**
- **Actor**: Customer
- **Deskripsi**: Customer melacak status pesanan
- **Precondition**: Customer memiliki order aktif
- **Flow**: Input order ID → View status → Track shipping
- **Postcondition**: Customer mengetahui status terkini

### Admin Use Cases:

**UC-006: Manage Products**
- **Actor**: Admin
- **Deskripsi**: Admin mengelola data produk
- **Precondition**: Admin login dengan privilege
- **Flow**: CRUD operations pada produk
- **Postcondition**: Data produk ter-update

**UC-007: Manage Orders**
- **Actor**: Admin
- **Deskripsi**: Admin memproses dan mengelola pesanan
- **Precondition**: Ada order dari customer
- **Flow**: View orders → Update status → Process shipping
- **Postcondition**: Order status ter-update

**UC-008: View Reports**
- **Actor**: Admin
- **Deskripsi**: Admin melihat laporan penjualan dan analytics
- **Precondition**: Ada data transaksi
- **Flow**: Select report type → Set date range → Generate report
- **Postcondition**: Report ditampilkan

### Teknisi Use Cases:

**UC-009: Manage Service Requests**
- **Actor**: Teknisi
- **Deskripsi**: Teknisi mengelola permintaan service
- **Precondition**: Ada service request dari customer
- **Flow**: View requests → Accept/Decline → Schedule appointment
- **Postcondition**: Service request ter-assign

**UC-010: Update Service Status**
- **Actor**: Teknisi
- **Deskripsi**: Teknisi update progress perbaikan
- **Precondition**: Service sedang berlangsung
- **Flow**: Input progress → Update status → Notify customer
- **Postcondition**: Customer mendapat update status
