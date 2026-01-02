# Entity Relationship Diagram (ERD) - Inter Medi-A E-Commerce Platform

## Deskripsi
ERD menunjukkan struktur database lengkap dengan entitas, atribut, dan relasi antar entitas.

## Entitas Utama
1. **Users** - Data pengguna (customer, admin, technician)
2. **Categories** - Kategori produk (printer, computer parts, office equipment)
3. **Products** - Data produk dengan spesifikasi lengkap
4. **Orders** - Data pesanan customer
5. **Order_Items** - Detail item dalam pesanan
6. **Shopping_Cart** - Keranjang belanja sementara
7. **Service_Requests** - Permintaan service equipment
8. **Payments** - Data transaksi pembayaran
9. **Inventory** - Manajemen stok produk
10. **Reviews** - Review dan rating produk

## Relasi Utama
- Users → Orders (1:M) - Satu user bisa memiliki banyak order
- Categories → Products (1:M) - Satu kategori berisi banyak produk
- Orders → Order_Items (1:M) - Satu order berisi banyak item
- Products → Reviews (1:M) - Satu produk bisa memiliki banyak review
- Orders → Payments (1:1) - Satu order memiliki satu pembayaran

## Primary Keys & Foreign Keys
- Setiap entitas memiliki primary key (PK)
- Foreign key (FK) menunjukkan relasi antar entitas
- Constraint referential integrity terjaga

## File
- `erd-diagram.drawio` - File ERD yang dapat dibuka di draw.io
