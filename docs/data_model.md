# Model Data - Inter Medi-A E-Commerce Platform

## A. Pemodelan Data Konseptual (Class Diagram)

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│      User       │    │    Product      │    │    Category     │
├─────────────────┤    ├─────────────────┤    ├─────────────────┤
│ + id: String    │    │ + id: String    │    │ + id: String    │
│ + email: String │    │ + name: String  │    │ + name: String  │
│ + password: Hash│    │ + price: Number │    │ + description   │
│ + name: String  │    │ + stock: Number │    │ + isActive: Bool│
│ + phone: String │    │ + category: Ref │────┤ + createdAt     │
│ + address: Array│    │ + images: Array │    └─────────────────┘
│ + role: Enum    │    │ + description   │
│ + isActive: Bool│    │ + specifications│
│ + createdAt     │    │ + isActive: Bool│
└─────────────────┘    │ + createdAt     │
         │              └─────────────────┘
         │                       │
         │              ┌─────────────────┐
         │              │      Cart       │
         │              ├─────────────────┤
         │              │ + id: String    │
         │              │ + user: Ref     │────┐
         │              │ + items: Array  │    │
         │              │ + totalAmount   │    │
         │              │ + createdAt     │    │
         │              └─────────────────┘    │
         │                       │             │
         │              ┌─────────────────┐    │
         │              │   CartItem      │    │
         │              ├─────────────────┤    │
         │              │ + product: Ref  │────┤
         │              │ + quantity: Num │    │
         │              │ + price: Number │    │
         │              └─────────────────┘    │
         │                                     │
         └─────────────────┐                   │
                          │                   │
         ┌─────────────────┐                   │
         │     Order       │                   │
         ├─────────────────┤                   │
         │ + id: String    │                   │
         │ + user: Ref     │───────────────────┘
         │ + items: Array  │
         │ + totalAmount   │
         │ + shippingAddr  │
         │ + shippingCost  │
         │ + status: Enum  │
         │ + paymentStatus │
         │ + createdAt     │
         └─────────────────┘
                  │
         ┌─────────────────┐
         │   OrderItem     │
         ├─────────────────┤
         │ + product: Ref  │
         │ + quantity: Num │
         │ + price: Number │
         │ + subtotal: Num │
         └─────────────────┘

         ┌─────────────────┐    ┌─────────────────┐
         │    Payment      │    │   ServiceReq    │
         ├─────────────────┤    ├─────────────────┤
         │ + id: String    │    │ + id: String    │
         │ + order: Ref    │    │ + user: Ref     │
         │ + amount: Number│    │ + product: Ref  │
         │ + method: Enum  │    │ + description   │
         │ + status: Enum  │    │ + status: Enum  │
         │ + transactionId │    │ + technician    │
         │ + createdAt     │    │ + scheduledDate │
         └─────────────────┘    │ + completedDate │
                               │ + cost: Number  │
                               └─────────────────┘
```

## B. Spesifikasi Basis Data

### 1. Users Collection
```javascript
{
  _id: ObjectId,
  email: String (unique, required),
  password: String (hashed, required),
  name: String (required),
  phone: String,
  addresses: [{
    label: String,
    street: String,
    city: String,
    province: String,
    postalCode: String,
    isDefault: Boolean
  }],
  role: String (enum: ['customer', 'admin', 'technician']),
  isActive: Boolean (default: true),
  loyaltyPoints: Number (default: 0),
  createdAt: Date,
  updatedAt: Date
}
```

### 2. Categories Collection
```javascript
{
  _id: ObjectId,
  name: String (required, unique),
  description: String,
  parentCategory: ObjectId (ref: Categories),
  isActive: Boolean (default: true),
  createdAt: Date
}
```

### 3. Products Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  sku: String (unique, required),
  category: ObjectId (ref: Categories, required),
  price: Number (required),
  stock: Number (required, default: 0),
  images: [String],
  description: String,
  specifications: {
    brand: String,
    model: String,
    warranty: String,
    weight: Number,
    dimensions: String
  },
  isActive: Boolean (default: true),
  createdAt: Date,
  updatedAt: Date
}
```

### 4. Carts Collection
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: Users, required),
  items: [{
    product: ObjectId (ref: Products),
    quantity: Number (required, min: 1),
    price: Number (required)
  }],
  totalAmount: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### 5. Orders Collection
```javascript
{
  _id: ObjectId,
  orderNumber: String (unique, required),
  user: ObjectId (ref: Users, required),
  items: [{
    product: ObjectId (ref: Products),
    productName: String,
    quantity: Number,
    price: Number,
    subtotal: Number
  }],
  totalAmount: Number,
  shippingAddress: {
    name: String,
    phone: String,
    street: String,
    city: String,
    province: String,
    postalCode: String
  },
  shippingCost: Number,
  shippingMethod: String,
  status: String (enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled']),
  paymentStatus: String (enum: ['pending', 'paid', 'failed', 'refunded']),
  trackingNumber: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 6. Payments Collection
```javascript
{
  _id: ObjectId,
  order: ObjectId (ref: Orders, required),
  amount: Number (required),
  method: String (enum: ['bank_transfer', 'credit_card', 'e_wallet']),
  status: String (enum: ['pending', 'success', 'failed', 'expired']),
  transactionId: String,
  paymentProof: String,
  paidAt: Date,
  createdAt: Date
}
```

### 7. ServiceRequests Collection
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: Users, required),
  product: ObjectId (ref: Products),
  serviceType: String (enum: ['repair', 'maintenance', 'installation']),
  description: String (required),
  status: String (enum: ['pending', 'assigned', 'in_progress', 'completed', 'cancelled']),
  technician: ObjectId (ref: Users),
  scheduledDate: Date,
  completedDate: Date,
  cost: Number,
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

## C. Estimasi Kebutuhan Simpanan Data

### Proyeksi Data (1 Tahun):
- **Users**: 10,000 records × 2KB = 20MB
- **Products**: 5,000 records × 5KB = 25MB  
- **Orders**: 50,000 records × 3KB = 150MB
- **OrderItems**: 150,000 records × 1KB = 150MB
- **Payments**: 50,000 records × 1KB = 50MB
- **ServiceRequests**: 5,000 records × 2KB = 10MB
- **Categories**: 100 records × 1KB = 100KB
- **Carts**: 2,000 active × 2KB = 4MB

**Total Estimasi**: ~410MB untuk data operasional
**Dengan Index & Overhead**: ~600MB
**Backup & Log Files**: ~200MB
**Total Storage Needed**: ~1GB untuk tahun pertama

### Rekomendasi Database:
- **MongoDB Atlas M10**: 10GB storage, cukup untuk 5-10 tahun
- **Connection Limit**: 500 concurrent connections
- **Backup**: Automated daily backup
- **Scaling**: Dapat upgrade ke M20/M30 sesuai pertumbuhan
