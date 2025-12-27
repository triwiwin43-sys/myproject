# BAB IV
# HASIL DAN PEMBAHASAN

## 4.1 Analisis Proses Sistem Berjalan

Analisis proses sistem berjalan bertujuan untuk memahami alur bisnis yang sedang berlangsung di Inter Medi-A Computer Store sebelum implementasi sistem e-commerce. Berikut adalah gambaran proses bisnis yang sedang berjalan:

### 4.1.1 Rich Picture Sistem Manual Inter Medi-A Computer Store

```
                    INTER MEDI-A COMPUTER STORE
                         (Sistem Manual)
    
    ┌─────────────────────────────────────────────────────────────────┐
    │                        TOKO FISIK                               │
    │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
    │  │ PELANGGAN   │  │ STAFF SALES │  │   GUDANG    │             │
    │  │ - Datang    │  │ - Melayani  │  │ - Cek Stok  │             │
    │  │ - Pilih     │  │ - Nego      │  │ - Ambil     │             │
    │  │ - Bayar     │  │ - Hitung    │  │ - Packing   │             │
    │  └─────────────┘  └─────────────┘  └─────────────┘             │
    └─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
    ┌─────────────────────────────────────────────────────────────────┐
    │                    PEMESANAN ONLINE                             │
    │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
    │  │ WHATSAPP    │  │ TELEPON     │  │ INSTAGRAM   │             │
    │  │ - Chat      │  │ - Call      │  │ - DM        │             │
    │  │ - Foto      │  │ - Info      │  │ - Comment   │             │
    │  │ - Nego      │  │ - Pesan     │  │ - Story     │             │
    │  └─────────────┘  └─────────────┘  └─────────────┘             │
    └─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
    ┌─────────────────────────────────────────────────────────────────┐
    │                   PENCATATAN MANUAL                             │
    │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
    │  │ BUKU BESAR  │  │ EXCEL STOK  │  │ NOTA MANUAL │             │
    │  │ - Transaksi │  │ - Inventory │  │ - Penjualan │             │
    │  │ - Keuangan  │  │ - Supplier  │  │ - Servis    │             │
    │  │ - Laporan   │  │ - Harga     │  │ - Garansi   │             │
    │  └─────────────┘  └─────────────┘  └─────────────┘             │
    └─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
    ┌─────────────────────────────────────────────────────────────────┐
    │                    MASALAH UTAMA                                │
    │  • Duplikasi Data        • Proses Lambat                       │
    │  • Error Manual          • Stok Tidak Real-time                │
    │  • Sulit Tracking        • Laporan Terlambat                   │
    │  • Jangkauan Terbatas    • Customer Service Overload           │
    └─────────────────────────────────────────────────────────────────┘
```

**Gambar 4.1 Rich Picture Sistem Manual Inter Medi-A Computer Store**

### 4.1.2 Activity Diagram Proses Penjualan Manual

```
    PELANGGAN          STAFF SALES         GUDANG           KEUANGAN
        │                   │                │                 │
        │ Datang ke Toko    │                │                 │
        ├──────────────────▶│                │                 │
        │                   │ Sambut         │                 │
        │                   │ Pelanggan      │                 │
        │                   │                │                 │
        │ Tanya Produk      │                │                 │
        ├──────────────────▶│                │                 │
        │                   │ Cek Stok       │                 │
        │                   ├───────────────▶│                 │
        │                   │                │ Cek Manual     │
        │                   │                │ (Buku/Excel)   │
        │                   │ Info Stok      │                 │
        │                   │◀───────────────┤                 │
        │ Info Produk       │                │                 │
        │◀──────────────────┤                │                 │
        │                   │                │                 │
        │ Nego Harga        │                │                 │
        ├──────────────────▶│                │                 │
        │                   │ Hitung Total   │                 │
        │                   │ (Kalkulator)   │                 │
        │                   │                │                 │
        │ Setuju Harga      │                │                 │
        ├──────────────────▶│                │                 │
        │                   │ Ambil Barang   │                 │
        │                   ├───────────────▶│                 │
        │                   │                │ Siapkan        │
        │                   │                │ Barang         │
        │                   │ Barang Siap    │                 │
        │                   │◀───────────────┤                 │
        │                   │                │                 │
        │ Bayar Cash/       │                │                 │
        │ Transfer          │                │                 │
        ├──────────────────▶│                │                 │
        │                   │ Catat          │                 │
        │                   │ Transaksi      │                 │
        │                   ├────────────────────────────────▶│
        │                   │                │                 │ Input ke
        │                   │                │                 │ Buku Besar
        │ Terima Barang     │                │                 │
        │ & Nota            │                │                 │
        │◀──────────────────┤                │                 │
        │                   │                │                 │
```

**Gambar 4.2 Activity Diagram Proses Penjualan Manual**

### 4.1.3 Activity Diagram Pemesanan Online via WhatsApp

```
    PELANGGAN          STAFF SALES         GUDANG           KEUANGAN
        │                   │                │                 │
        │ Chat WhatsApp     │                │                 │
        ├──────────────────▶│                │                 │
        │                   │ Balas Chat     │                 │
        │                   │ Tanya Kebutuhan│                 │
        │ Kirim Spesifikasi │                │                 │
        │ Kebutuhan         │                │                 │
        ├──────────────────▶│                │                 │
        │                   │ Cari Produk    │                 │
        │                   │ yang Sesuai    │                 │
        │                   │                │                 │
        │                   │ Cek Stok       │                 │
        │                   ├───────────────▶│                 │
        │                   │                │ Cek Manual     │
        │                   │                │ di Excel       │
        │                   │ Konfirmasi     │                 │
        │                   │ Ketersediaan   │                 │
        │                   │◀───────────────┤                 │
        │ Info Produk +     │                │                 │
        │ Harga + Foto      │                │                 │
        │◀──────────────────┤                │                 │
        │                   │                │                 │
        │ Nego Harga        │                │                 │
        ├──────────────────▶│                │                 │
        │                   │ Hitung Ulang   │                 │
        │                   │ + Ongkir       │                 │
        │ Deal Harga        │                │                 │
        │◀──────────────────┤                │                 │
        │                   │                │                 │
        │ Konfirmasi        │                │                 │
        │ Pemesanan         │                │                 │
        ├──────────────────▶│                │                 │
        │                   │ Kirim Detail   │                 │
        │                   │ Rekening       │                 │
        │ Transfer          │                │                 │
        │ Pembayaran        │                │                 │
        ├──────────────────▶│                │                 │
        │                   │ Cek Rekening   │                 │
        │                   │ Manual         │                 │
        │                   ├────────────────────────────────▶│
        │                   │                │                 │ Verifikasi
        │                   │                │                 │ Manual
        │                   │ Konfirmasi     │                 │
        │                   │ Pembayaran     │                 │
        │                   │◀───────────────────────────────┤
        │ Pembayaran        │                │                 │
        │ Diterima          │                │                 │
        │◀──────────────────┤                │                 │
        │                   │ Siapkan        │                 │
        │                   │ Pengiriman     │                 │
        │                   ├───────────────▶│                 │
        │                   │                │ Packing &      │
        │                   │                │ Kirim Barang   │
        │ Terima Barang     │                │                 │
        │◀──────────────────┼───────────────┤                 │
```

**Gambar 4.3 Activity Diagram Pemesanan Online via WhatsApp**

### 4.1.4 Identifikasi Kelemahan Sistem Manual

Berdasarkan analisis proses sistem berjalan, teridentifikasi beberapa kelemahan utama:

1. **Pencatatan Duplikat dan Tidak Terintegrasi**
   - Data transaksi dicatat di buku manual dan Excel terpisah
   - Risiko inkonsistensi data tinggi
   - Sulit melakukan sinkronisasi antar bagian

2. **Pengelolaan Stok Tidak Real-time**
   - Update stok manual membutuhkan waktu lama
   - Sering terjadi overselling atau stockout
   - Sulit tracking pergerakan barang

3. **Proses Konfirmasi Pembayaran Lambat**
   - Verifikasi manual membutuhkan 2-4 jam
   - Ketergantungan pada jam kerja bank
   - Delay dalam proses fulfillment

4. **Keterbatasan Jangkauan Pemasaran**
   - Hanya mengandalkan WhatsApp dan Instagram
   - Tidak ada website resmi untuk SEO
   - Sulit dijangkau pelanggan baru

5. **Customer Service Overload**
   - Semua pertanyaan melalui WhatsApp personal
   - Tidak ada sistem tracking pesanan
   - Staff kewalahan handle multiple chat

6. **Laporan Bisnis Tidak Efisien**
   - Pembuatan laporan manual memakan waktu
   - Data tersebar di berbagai file
   - Sulit analisis trend dan pattern

## 4.2 Analisis Masalah

### 4.2.1 Fishbone Diagram Analisis Masalah

```
                                    MASALAH UTAMA:
                              Efisiensi Operasional Rendah
                                        │
                                        │
    ┌─────────────────────────────────────────────────────────────────┐
    │                                                                 │
    │                                                                 │
MANUSIA                                                           METODE
    │                                                                 │
    │ • Staff overload                                                │
    │ • Skill teknologi terbatas                                      │
    │ • Multitasking berlebihan                                       │
    │ • Training tidak memadai                                        │
    │                                                                 │
    │                                                                 │
    │                                                                 │
    │                                                                 │
    │                                                                 │
    │                                                                 │
    │                                                                 │
    │                                                                 │
MESIN/TEKNOLOGI                                                  MATERIAL
    │                                                                 │
    │ • Sistem manual                                                 │
    │ • Tidak ada integrasi                                           │
    │ • Hardware terbatas                                             │
    │ • Tidak ada backup system                                       │
    │                                                                 │
    └─────────────────────────────────────────────────────────────────┘
                                        │
                                        │
                              • Proses manual lambat
                              • Tidak ada SOP digital
                              • Komunikasi tidak terstruktur
                              • Tidak ada quality control
                              
                              • Data tidak akurat
                              • Informasi tidak real-time
                              • Dokumentasi tidak lengkap
                              • Laporan terlambat
```

**Gambar 4.4 Fishbone Diagram Analisis Masalah Inter Medi-A Computer Store**

### 4.2.2 Penjelasan Analisis Masalah

**1. Faktor Manusia (People)**
- **Staff Overload**: Karyawan harus menangani multiple tasks secara bersamaan (sales, customer service, admin)
- **Skill Teknologi Terbatas**: Kurangnya kemampuan menggunakan tools digital modern
- **Multitasking Berlebihan**: Satu orang handle WhatsApp, telepon, dan customer walk-in bersamaan
- **Training Tidak Memadai**: Tidak ada pelatihan sistematis untuk efisiensi kerja

**2. Faktor Metode (Method)**
- **Proses Manual Lambat**: Semua proses dilakukan manual tanpa otomatisasi
- **Tidak Ada SOP Digital**: Standard Operating Procedure masih berbasis kertas
- **Komunikasi Tidak Terstruktur**: Informasi tersebar di berbagai channel tanpa sentralisasi
- **Tidak Ada Quality Control**: Tidak ada sistem untuk memastikan kualitas layanan

**3. Faktor Mesin/Teknologi (Machine)**
- **Sistem Manual**: Masih menggunakan buku catatan dan Excel terpisah
- **Tidak Ada Integrasi**: Sistem tidak terhubung antar departemen
- **Hardware Terbatas**: Komputer dan perangkat teknologi tidak memadai
- **Tidak Ada Backup System**: Risiko kehilangan data tinggi

**4. Faktor Material (Material)**
- **Data Tidak Akurat**: Informasi stok dan transaksi sering tidak update
- **Informasi Tidak Real-time**: Delay dalam update status dan ketersediaan
- **Dokumentasi Tidak Lengkap**: Catatan transaksi dan customer tidak sistematis
- **Laporan Terlambat**: Pembuatan laporan bisnis membutuhkan waktu lama

### 4.2.3 Root Cause Analysis

Berdasarkan fishbone diagram, akar masalah utama adalah:

1. **Ketiadaan Sistem Terintegrasi**: Tidak ada platform yang menghubungkan semua proses bisnis
2. **Ketergantungan pada Proses Manual**: Semua aktivitas dilakukan secara manual tanpa otomatisasi
3. **Kurangnya Investasi Teknologi**: Belum ada komitmen untuk modernisasi sistem
4. **Tidak Ada Digital Strategy**: Belum ada roadmap transformasi digital yang jelas

### 4.2.4 Impact Analysis

**Dampak Terhadap Bisnis:**
- **Revenue Loss**: Kehilangan pelanggan karena layanan lambat
- **Operational Cost**: Biaya operasional tinggi karena inefficiency
- **Customer Satisfaction**: Tingkat kepuasan pelanggan menurun
- **Competitive Disadvantage**: Tertinggal dari kompetitor yang sudah digital

**Dampak Terhadap Stakeholder:**
- **Owner**: Sulit monitoring bisnis dan pengambilan keputusan
- **Staff**: Beban kerja berlebihan dan stress
- **Customer**: Pengalaman berbelanja tidak optimal
- **Supplier**: Koordinasi pemesanan tidak efisien
