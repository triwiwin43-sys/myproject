# Laporan Sistem - Inter Medi-A E-Commerce Platform

## Laporan 1: Laporan Penjualan Harian
**Tabel yang digunakan**: Orders, OrderItems, Products

### Query Structure:
```sql
SELECT 
    o.orderNumber,
    o.createdAt,
    u.name as customerName,
    p.name as productName,
    oi.quantity,
    oi.price,
    oi.subtotal,
    o.totalAmount,
    o.status
FROM Orders o
JOIN OrderItems oi ON o._id = oi.orderId
JOIN Products p ON oi.product = p._id
JOIN Users u ON o.user = u._id
WHERE DATE(o.createdAt) = CURRENT_DATE
ORDER BY o.createdAt DESC
```

### Informasi yang Disajikan:
- Nomor order dan waktu transaksi
- Data customer dan produk yang dibeli
- Quantity, harga satuan, dan subtotal
- Total amount per order
- Status pemesanan (pending, confirmed, shipped, delivered)
- Summary: Total penjualan hari ini, jumlah order, rata-rata nilai order

### Kegunaan Operasional:
- Monitoring penjualan real-time
- Identifikasi produk best seller harian
- Tracking performance tim sales
- Analisis pola pembelian customer

---

## Laporan 2: Laporan Inventory dan Stock
**Tabel yang digunakan**: Products, Categories, OrderItems

### Query Structure:
```sql
SELECT 
    p.sku,
    p.name as productName,
    c.name as categoryName,
    p.stock as currentStock,
    p.price,
    COALESCE(SUM(oi.quantity), 0) as totalSold,
    (p.stock + COALESCE(SUM(oi.quantity), 0)) as initialStock,
    CASE 
        WHEN p.stock <= 5 THEN 'Low Stock'
        WHEN p.stock <= 10 THEN 'Medium Stock'
        ELSE 'Good Stock'
    END as stockStatus
FROM Products p
LEFT JOIN Categories c ON p.category = c._id
LEFT JOIN OrderItems oi ON p._id = oi.product 
    AND DATE(oi.createdAt) >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY)
WHERE p.isActive = true
GROUP BY p._id, p.sku, p.name, c.name, p.stock, p.price
ORDER BY p.stock ASC, totalSold DESC
```

### Informasi yang Disajikan:
- SKU dan nama produk
- Kategori produk
- Stock saat ini dan status stock
- Harga jual dan total terjual (30 hari terakhir)
- Alert untuk produk yang perlu restock
- Analisis perputaran inventory

### Kegunaan Operasional:
- Perencanaan procurement dan restock
- Identifikasi produk slow moving
- Optimasi inventory investment
- Pencegahan stockout

---

## Laporan 3: Laporan Service dan Maintenance
**Tabel yang digunakan**: ServiceRequests, Users, Products

### Query Structure:
```sql
SELECT 
    sr.id as serviceId,
    sr.createdAt as requestDate,
    u.name as customerName,
    u.phone as customerPhone,
    p.name as productName,
    sr.serviceType,
    sr.description,
    sr.status,
    tech.name as technicianName,
    sr.scheduledDate,
    sr.completedDate,
    sr.cost,
    DATEDIFF(sr.completedDate, sr.scheduledDate) as serviceDuration
FROM ServiceRequests sr
JOIN Users u ON sr.user = u._id
LEFT JOIN Products p ON sr.product = p._id
LEFT JOIN Users tech ON sr.technician = tech._id
WHERE sr.createdAt >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY)
ORDER BY sr.createdAt DESC
```

### Informasi yang Disajikan:
- ID service dan tanggal request
- Data customer dan produk yang di-service
- Jenis service (repair, maintenance, installation)
- Status service dan teknisi yang menangani
- Jadwal dan durasi pengerjaan
- Biaya service dan tingkat kepuasan

### Kegunaan Operasional:
- Monitoring workload teknisi
- Tracking service quality dan duration
- Analisis revenue dari service
- Customer satisfaction measurement

---

## Laporan 4: Laporan Rekapitulasi Penjualan Bulanan (Aggregate)
**Tabel yang digunakan**: Orders, OrderItems

### Query Structure:
```sql
SELECT 
    YEAR(o.createdAt) as tahun,
    MONTH(o.createdAt) as bulan,
    MONTHNAME(o.createdAt) as namaBulan,
    COUNT(DISTINCT o._id) as totalOrders,
    SUM(o.totalAmount) as totalRevenue,
    AVG(o.totalAmount) as avgOrderValue,
    SUM(oi.quantity) as totalItemsSold,
    COUNT(DISTINCT o.user) as uniqueCustomers,
    MAX(o.totalAmount) as highestOrder,
    MIN(o.totalAmount) as lowestOrder,
    SUM(CASE WHEN o.status = 'delivered' THEN o.totalAmount ELSE 0 END) as deliveredRevenue,
    (SUM(CASE WHEN o.status = 'delivered' THEN o.totalAmount ELSE 0 END) / SUM(o.totalAmount)) * 100 as deliveryRate
FROM Orders o
JOIN OrderItems oi ON o._id = oi.orderId
WHERE o.createdAt >= DATE_SUB(CURRENT_DATE, INTERVAL 12 MONTH)
    AND o.status != 'cancelled'
GROUP BY YEAR(o.createdAt), MONTH(o.createdAt)
ORDER BY tahun DESC, bulan DESC
```

### Informasi yang Disajikan:
- Rekapitulasi per bulan (12 bulan terakhir)
- Total orders, revenue, dan average order value
- Jumlah items terjual dan unique customers
- Highest dan lowest order value
- Delivery rate dan success rate
- Growth comparison month-over-month

### Kegunaan Manajemen:
- Analisis trend penjualan bulanan
- Forecasting dan budgeting
- Performance evaluation
- Strategic decision making

---

## Dashboard System & Notifikasi

### Real-time Dashboard Widgets:

**1. Sales Performance Widget**
```javascript
// Real-time sales counter
{
  todaySales: "Rp 15.2M",
  todayOrders: 47,
  avgOrderValue: "Rp 323K",
  conversionRate: "3.8%"
}
```

**2. Inventory Alert Widget**
```javascript
// Low stock notifications
{
  criticalStock: [
    {product: "Canon G2010", stock: 2, status: "critical"},
    {product: "HP M404n", stock: 1, status: "critical"},
    {product: "Paper A4", stock: 5, status: "low"}
  ]
}
```

**3. Order Status Widget**
```javascript
// Order processing pipeline
{
  pending: 12,
  confirmed: 8,
  processing: 15,
  shipped: 23,
  delivered: 156
}
```

**4. Customer Service Widget**
```javascript
// Service requests status
{
  newRequests: 5,
  inProgress: 12,
  completed: 8,
  avgResponseTime: "2.3 hours"
}
```

### Automated Notifications:

**1. Stock Alerts**
- Email notification ketika stock < 5 units
- SMS alert untuk critical stock (< 2 units)
- Weekly inventory report ke procurement team

**2. Order Notifications**
- Real-time order notifications ke admin
- Payment confirmation alerts
- Shipping status updates ke customer

**3. Service Alerts**
- New service request notifications
- Overdue service reminders
- Customer satisfaction survey triggers

**4. Performance Alerts**
- Daily sales target achievement
- Website downtime notifications
- Security breach alerts

### Integration Features:

**1. Mobile App Dashboard**
- Push notifications untuk critical alerts
- Offline capability untuk basic functions
- Biometric authentication untuk admin access

**2. WhatsApp Business Integration**
- Automated order confirmations
- Shipping notifications
- Customer service chat integration

**3. Email Automation**
- Welcome series untuk new customers
- Abandoned cart recovery
- Post-purchase follow-up surveys

**4. SMS Gateway**
- OTP untuk secure transactions
- Order status updates
- Promotional campaigns

### Reporting Schedule:

**Daily Reports** (Auto-generated at 7 AM):
- Sales summary previous day
- New customer registrations
- Inventory alerts
- Service requests status

**Weekly Reports** (Every Monday):
- Weekly performance summary
- Top selling products
- Customer satisfaction scores
- Marketing campaign results

**Monthly Reports** (1st of each month):
- Comprehensive business review
- Financial performance analysis
- Inventory turnover report
- Customer retention metrics

**Quarterly Reports** (Every 3 months):
- Strategic business review
- Market analysis and trends
- ROI analysis by channel
- Growth planning recommendations
