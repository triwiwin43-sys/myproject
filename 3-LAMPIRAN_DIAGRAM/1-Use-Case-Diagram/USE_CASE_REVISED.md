# USE CASE DIAGRAM - INTER MEDI-A E-COMMERCE
## Revisi Berdasarkan Feedback Dosen

---

## AKTOR SISTEM

### 1. **CUSTOMER/PELANGGAN**
- Pengguna yang ingin membeli produk
- Melakukan transaksi pembelian

### 2. **ADMIN/SELLER**
- Pengelola sistem dan penjual
- Mengelola produk dan transaksi

---

## USE CASE CUSTOMER/PELANGGAN

### **UC-C01: Melakukan Pendaftaran**
- **Deskripsi:** Customer mendaftar akun baru
- **Aktor:** Customer
- **Precondition:** Customer belum memiliki akun
- **Flow:**
  1. Customer mengisi form registrasi
  2. Sistem validasi data
  3. Akun berhasil dibuat

### **UC-C02: Lihat-lihat Produk**
- **Deskripsi:** Customer melihat katalog produk
- **Aktor:** Customer
- **Precondition:** -
- **Flow:**
  1. Customer browse katalog
  2. Filter/search produk
  3. Lihat detail produk

### **UC-C03: Tambahkan ke Keranjang Belanja**
- **Deskripsi:** Customer menambah produk ke cart
- **Aktor:** Customer
- **Precondition:** Customer sudah login
- **Flow:**
  1. Pilih produk
  2. Tentukan quantity
  3. Add to cart

### **UC-C04: Lakukan Pembayaran/Konfirmasi Pembayaran**
- **Deskripsi:** Customer melakukan checkout dan bayar
- **Aktor:** Customer
- **Precondition:** Ada item di keranjang
- **Flow:**
  1. Review order
  2. Pilih metode pembayaran
  3. Konfirmasi pembayaran
  4. Upload bukti transfer

### **UC-C05: Input Data Pengiriman Produk**
- **Deskripsi:** Customer input alamat pengiriman
- **Aktor:** Customer
- **Precondition:** Sudah melakukan pembayaran
- **Flow:**
  1. Input alamat lengkap
  2. Pilih kurir
  3. Konfirmasi data pengiriman

---

## USE CASE ADMIN/SELLER

### **UC-A01: Input Produk**
- **Deskripsi:** Admin menambah produk baru
- **Aktor:** Admin
- **Precondition:** Admin sudah login
- **Flow:**
  1. Input data produk
  2. Upload foto produk
  3. Set harga dan stok
  4. Publish produk

### **UC-A02: Konfirmasi Pembayaran**
- **Deskripsi:** Admin verifikasi pembayaran customer
- **Aktor:** Admin
- **Precondition:** Ada order dengan bukti bayar
- **Flow:**
  1. Cek bukti pembayaran
  2. Verifikasi dengan rekening
  3. Update status pembayaran

### **UC-A03: Konfirmasi Pengiriman**
- **Deskripsi:** Admin konfirmasi barang sudah dikirim
- **Aktor:** Admin
- **Precondition:** Pembayaran sudah dikonfirmasi
- **Flow:**
  1. Siapkan barang
  2. Input nomor resi
  3. Update status pengiriman

### **UC-A04: Cetak Laporan Pemesanan**
- **Deskripsi:** Admin generate laporan order
- **Aktor:** Admin
- **Precondition:** Ada data pemesanan
- **Flow:**
  1. Pilih periode laporan
  2. Filter data order
  3. Generate dan print laporan

### **UC-A05: Cetak Laporan Penjualan/Pembayaran**
- **Deskripsi:** Admin generate laporan keuangan
- **Aktor:** Admin
- **Precondition:** Ada data penjualan
- **Flow:**
  1. Pilih periode laporan
  2. Hitung total penjualan
  3. Generate laporan keuangan

### **UC-A06: Cetak Laporan Pengiriman Barang**
- **Deskripsi:** Admin generate laporan pengiriman
- **Aktor:** Admin
- **Precondition:** Ada data pengiriman
- **Flow:**
  1. Filter data pengiriman
  2. Group by status/kurir
  3. Generate laporan

### **UC-A07: Cetak Laporan Barang Terlaris**
- **Deskripsi:** Admin lihat produk best seller
- **Aktor:** Admin
- **Precondition:** Ada data penjualan
- **Flow:**
  1. Analisis data penjualan
  2. Ranking produk terlaris
  3. Generate laporan

### **UC-A08: Kelola Stok Produk**
- **Deskripsi:** Admin update stok barang
- **Aktor:** Admin
- **Precondition:** Produk sudah ada
- **Flow:**
  1. Cek stok current
  2. Update quantity
  3. Set alert minimum stok

---

## DIAGRAM USE CASE

```
                    SISTEM E-COMMERCE INTER MEDI-A

    CUSTOMER                                           ADMIN/SELLER
        |                                                   |
        |---> UC-C01: Melakukan Pendaftaran                |
        |---> UC-C02: Lihat-lihat Produk                   |
        |---> UC-C03: Tambahkan ke Keranjang               |
        |---> UC-C04: Lakukan Pembayaran                   |
        |---> UC-C05: Input Data Pengiriman                |
        |                                                   |
        |                                                   |---> UC-A01: Input Produk
        |                                                   |---> UC-A02: Konfirmasi Pembayaran
        |                                                   |---> UC-A03: Konfirmasi Pengiriman
        |                                                   |---> UC-A04: Cetak Laporan Pemesanan
        |                                                   |---> UC-A05: Cetak Laporan Penjualan
        |                                                   |---> UC-A06: Cetak Laporan Pengiriman
        |                                                   |---> UC-A07: Cetak Laporan Barang Terlaris
        |                                                   |---> UC-A08: Kelola Stok Produk
```

---

## RINGKASAN USE CASE

### **TOTAL USE CASE: 13**
- **Customer Use Cases:** 5
- **Admin Use Cases:** 8

### **FOKUS UTAMA:**
✅ **Sederhana & Umum** - Sesuai feedback dosen  
✅ **Core E-commerce Functions** - Fungsi dasar yang penting  
✅ **Praktis & Implementable** - Bisa direalisasikan  
✅ **User-Friendly** - Mudah dipahami user

---

## CATATAN REVISI

**PERUBAHAN DARI VERSI SEBELUMNYA:**
- ❌ Hapus use case yang terlalu kompleks
- ❌ Hapus aktor Technician (digabung ke Admin)
- ✅ Fokus pada fungsi e-commerce dasar
- ✅ Sesuaikan dengan feedback dosen
- ✅ Lebih praktis dan mudah dipahami

**ALASAN PENYEDERHANAAN:**
- Lebih mudah dipahami stakeholder
- Implementasi lebih fokus
- Testing lebih manageable
- Dokumentasi lebih ringkas
