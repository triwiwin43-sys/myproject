# Activity Diagram - Inter Medi-A E-Commerce Platform

## Proses Sistem Berjalan

```
[Customer] --> (Browse Products) --> (Select Product) --> (Add to Cart)
    |
    v
(View Cart) --> (Checkout Process) --> (Payment Confirmation)
    |
    v
(Order Processing) --> (Shipping Calculation) --> (Order Fulfillment)
    |
    v
(Delivery) --> (Order Complete)

[Admin] --> (Product Management) --> (Order Management) --> (Customer Service)
```

### Deskripsi Proses:

1. **Customer Journey:**
   - Browse produk printer, komputer, dan peralatan kantor
   - Pilih produk dan tambah ke keranjang
   - Proses checkout dengan konfirmasi pembayaran
   - Perhitungan biaya pengiriman berdasarkan kota tujuan
   - Tracking pengiriman hingga selesai

2. **Admin Operations:**
   - Manajemen produk (CRUD operations)
   - Pemrosesan pesanan
   - Layanan pelanggan dan dukungan teknis

3. **Service Management:**
   - Penjadwalan service printer/komputer
   - Tracking status perbaikan
   - Konfirmasi penyelesaian service
