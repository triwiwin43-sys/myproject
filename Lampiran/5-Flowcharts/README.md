# Flowcharts - Inter Medi-A E-Commerce Platform

## Deskripsi
Kumpulan flowchart yang menunjukkan alur proses untuk setiap jenis pengguna sistem.

## File Flowcharts

### 1. Customer Flowchart (`customer-flowchart.drawio`)
**Alur lengkap proses customer:**
- Registrasi/Login
- Browse dan search produk
- Manajemen shopping cart
- Proses checkout dan pembayaran
- Tracking order
- Request service (jika diperlukan)

**Decision Points:**
- Registered user?
- Add to cart?
- Proceed to checkout?
- Payment successful?
- Need service?

### 2. Admin Flowchart (`admin-flowchart.drawio`)
**Proses manajemen admin:**
- Login admin dengan autentikasi
- Akses dashboard admin
- Pilihan manajemen: Products, Orders, Users, Inventory, Reports
- Setiap modul memiliki sub-proses detail
- Loop untuk continuous management

**Management Modules:**
- **Products**: Add/Edit/Delete products, Manage categories
- **Orders**: Update status, Process refunds
- **Users**: Add/Edit users, Manage roles
- **Inventory**: Update stock, Monitor alerts
- **Reports**: Sales reports, Analytics

### 3. Technician Flowchart (`technician-flowchart.drawio`)
**Alur service technician:**
- Login technician
- View available service requests
- Select dan review request details
- Accept/Decline request
- Schedule service appointment
- Perform service dengan status updates
- Complete service dan generate report
- Loop untuk handle more requests

**Service Status Flow:**
- Pending → Accepted → Scheduled → In Progress → Completed

## Fitur Flowcharts
- **Start/End nodes** - Titik awal dan akhir proses
- **Decision diamonds** - Titik keputusan dengan Yes/No
- **Process rectangles** - Aktivitas/tindakan
- **Flow arrows** - Arah alur proses
- **Color coding** - Pengelompokan jenis aktivitas
- **Error handling** - Penanganan kegagalan proses

## Penggunaan
1. Buka file .drawio di draw.io
2. Setiap flowchart menunjukkan complete user journey
3. Dapat digunakan untuk training user
4. Reference untuk development team
