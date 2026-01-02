# Use Case Diagram - Inter Medi-A E-Commerce Platform

## Deskripsi
Diagram use case yang menunjukkan semua fungsionalitas sistem dan interaksi antara aktor dengan sistem.

## Aktor
- **Customer**: Pengguna akhir yang melakukan pembelian
- **Admin**: Administrator sistem yang mengelola platform
- **Service Technician**: Teknisi yang menangani service request

## Use Case Utama
### Customer:
- Register Account, Login, Browse Products, Search Products
- Add to Cart, Manage Shopping Cart, Checkout, Make Payment
- Track Order, Request Service, View Order History, Manage Profile

### Admin:
- Admin Login, Manage Products, Manage Categories, Manage Orders
- Manage Users, View Reports, Manage Inventory

### Service Technician:
- Technician Login, View Service Requests, Update Service Status, Schedule Service

## Relasi
- **Include**: Relasi wajib (contoh: Browse Products → View Product Details)
- **Extend**: Relasi opsional (contoh: View Order History ← Track Order)

## File
- `usecase-diagram.drawio` - File diagram yang dapat dibuka di draw.io
