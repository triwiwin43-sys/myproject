## 4.6 Model Data

### 4.6.1 Pemodelan Data Konseptual (Class Diagram)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                           CLASS DIAGRAM E-COMMERCE SYSTEM                          │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────┐         ┌─────────────────────┐         ┌─────────────────────┐
│       User          │         │      Product        │         │      Category       │
├─────────────────────┤         ├─────────────────────┤         ├─────────────────────┤
│ - _id: ObjectId     │         │ - _id: ObjectId     │         │ - _id: ObjectId     │
│ - name: String      │         │ - name: String      │         │ - name: String      │
│ - email: String     │         │ - description: Text │         │ - description: Text │
│ - password: String  │         │ - price: Number     │         │ - slug: String      │
│ - phone: String     │         │ - stock: Number     │         │ - isActive: Boolean │
│ - address: Object   │         │ - images: Array     │         │ - createdAt: Date   │
│ - role: String      │         │ - category: ObjectId│         │ - updatedAt: Date   │
│ - isActive: Boolean │         │ - seller: ObjectId  │         └─────────────────────┘
│ - createdAt: Date   │         │ - specifications: Obj│                │
│ - updatedAt: Date   │         │ - isActive: Boolean │                │
├─────────────────────┤         │ - createdAt: Date   │                │
│ + register()        │         │ - updatedAt: Date   │                │
│ + login()           │         ├─────────────────────┤                │
│ + updateProfile()   │         │ + create()          │                │
│ + changePassword()  │         │ + update()          │                │
└─────────────────────┘         │ + delete()          │                │
          │                     │ + updateStock()     │                │
          │                     └─────────────────────┘                │
          │                               │                            │
          │                               │                            │
          │                               │ belongs to                 │
          │                               ▼                            │
          │                     ┌─────────────────────┐                │
          │                     │    ProductCategory  │                │
          │                     ├─────────────────────┤                │
          │                     │ - product: ObjectId │◄───────────────┘
          │                     │ - category: ObjectId│
          │                     └─────────────────────┘
          │
          │ creates
          ▼
┌─────────────────────┐         ┌─────────────────────┐         ┌─────────────────────┐
│       Order         │         │     OrderItem       │         │      Payment        │
├─────────────────────┤         ├─────────────────────┤         ├─────────────────────┤
│ - _id: ObjectId     │         │ - _id: ObjectId     │         │ - _id: ObjectId     │
│ - orderNumber: String│         │ - order: ObjectId   │         │ - order: ObjectId   │
│ - customer: ObjectId│         │ - product: ObjectId │         │ - amount: Number    │
│ - items: Array      │         │ - quantity: Number  │         │ - method: String    │
│ - totalAmount: Number│         │ - price: Number     │         │ - status: String    │
│ - shippingAddress: Obj│        │ - subtotal: Number  │         │ - proofImage: String│
│ - shippingMethod: Obj│         └─────────────────────┘         │ - verifiedAt: Date  │
│ - status: String    │                   │                     │ - verifiedBy: ObjectId│
│ - notes: String     │                   │                     │ - createdAt: Date   │
│ - createdAt: Date   │                   │                     │ - updatedAt: Date   │
│ - updatedAt: Date   │                   │                     ├─────────────────────┤
├─────────────────────┤                   │                     │ + create()          │
│ + create()          │                   │                     │ + verify()          │
│ + updateStatus()    │                   │                     │ + reject()          │
│ + calculateTotal()  │                   │                     └─────────────────────┘
│ + addItem()         │                   │                               │
│ + removeItem()      │                   │                               │
└─────────────────────┘                   │                               │
          │                               │                               │
          │ has many                      │ belongs to                    │
          ▼                               ▼                               │
┌─────────────────────┐         ┌─────────────────────┐                   │
│      Shipping       │         │        Cart         │                   │
├─────────────────────┤         ├─────────────────────┤                   │
│ - _id: ObjectId     │         │ - _id: ObjectId     │                   │
│ - order: ObjectId   │         │ - user: ObjectId    │                   │
│ - courier: String   │         │ - items: Array      │                   │
│ - service: String   │         │ - totalAmount: Number│                   │
│ - trackingNumber: String│      │ - createdAt: Date   │                   │
│ - cost: Number      │         │ - updatedAt: Date   │                   │
│ - estimatedDays: Number│       ├─────────────────────┤                   │
│ - status: String    │         │ + addItem()         │                   │
│ - createdAt: Date   │         │ + removeItem()      │                   │
│ - updatedAt: Date   │         │ + updateQuantity()  │                   │
├─────────────────────┤         │ + clear()           │                   │
│ + create()          │         │ + calculateTotal()  │                   │
│ + updateStatus()    │         └─────────────────────┘                   │
│ + track()           │                                                   │
└─────────────────────┘                                                   │
                                                                          │
┌─────────────────────┐         ┌─────────────────────┐                   │
│       Review        │         │      Notification   │                   │
├─────────────────────┤         ├─────────────────────┤                   │
│ - _id: ObjectId     │         │ - _id: ObjectId     │                   │
│ - product: ObjectId │         │ - user: ObjectId    │                   │
│ - customer: ObjectId│         │ - title: String     │                   │
│ - rating: Number    │         │ - message: Text     │                   │
│ - comment: Text     │         │ - type: String      │                   │
│ - isVerified: Boolean│        │ - isRead: Boolean   │                   │
│ - createdAt: Date   │         │ - createdAt: Date   │                   │
│ - updatedAt: Date   │         └─────────────────────┘                   │
├─────────────────────┤                                                   │
│ + create()          │                                                   │
│ + update()          │                                                   │
│ + verify()          │                                                   │
└─────────────────────┘                                                   │
                                                                          │
                                                                          │
┌─────────────────────┐         ┌─────────────────────┐                   │
│      Analytics      │         │        Log          │                   │
├─────────────────────┤         ├─────────────────────┤                   │
│ - _id: ObjectId     │         │ - _id: ObjectId     │                   │
│ - date: Date        │         │ - user: ObjectId    │                   │
│ - visitors: Number  │         │ - action: String    │                   │
│ - pageViews: Number │         │ - details: Object   │                   │
│ - orders: Number    │         │ - ipAddress: String │                   │
│ - revenue: Number   │         │ - userAgent: String │                   │
│ - topProducts: Array│         │ - createdAt: Date   │                   │
│ - createdAt: Date   │         └─────────────────────┘                   │
├─────────────────────┤                                                   │
│ + generateDaily()   │                                                   │
│ + generateMonthly() │                                                   │
│ + getTopProducts()  │                                                   │
└─────────────────────┘                                                   │
                                                                          │
                                                                          │
                              ┌─────────────────────┐                     │
                              │      Setting        │                     │
                              ├─────────────────────┤                     │
                              │ - _id: ObjectId     │                     │
                              │ - key: String       │                     │
                              │ - value: Mixed      │                     │
                              │ - description: Text │                     │
                              │ - updatedBy: ObjectId│◄────────────────────┘
                              │ - updatedAt: Date   │
                              ├─────────────────────┤
                              │ + get()             │
                              │ + set()             │
                              │ + update()          │
                              └─────────────────────┘
```

**Gambar 4.7 Class Diagram Sistem E-Commerce Inter Medi-A**

### 4.6.2 Spesifikasi Basis Data MongoDB

#### **Collection: users**
```javascript
{
  _id: ObjectId,
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Invalid email']
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false
  },
  phone: {
    type: String,
    required: true,
    validate: [validator.isMobilePhone, 'Invalid phone number']
  },
  address: {
    street: String,
    city: String,
    province: String,
    postalCode: String,
    country: { type: String, default: 'Indonesia' }
  },
  role: {
    type: String,
    enum: ['customer', 'seller', 'admin'],
    default: 'customer'
  },
  avatar: {
    type: String,
    default: 'default-avatar.jpg'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  lastLogin: Date,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}

// Indexes
db.users.createIndex({ email: 1 }, { unique: true })
db.users.createIndex({ role: 1 })
db.users.createIndex({ isActive: 1 })
```

#### **Collection: products**
```javascript
{
  _id: ObjectId,
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000
  },
  shortDescription: {
    type: String,
    maxlength: 500
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  comparePrice: {
    type: Number,
    min: 0
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  minStock: {
    type: Number,
    default: 5
  },
  images: [{
    url: String,
    alt: String,
    isPrimary: { type: Boolean, default: false }
  }],
  category: {
    type: ObjectId,
    ref: 'Category',
    required: true
  },
  seller: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  specifications: {
    brand: String,
    model: String,
    warranty: String,
    weight: Number,
    dimensions: {
      length: Number,
      width: Number,
      height: Number
    },
    technical: Object
  },
  tags: [String],
  sku: {
    type: String,
    unique: true,
    sparse: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  viewCount: {
    type: Number,
    default: 0
  },
  salesCount: {
    type: Number,
    default: 0
  },
  rating: {
    average: { type: Number, default: 0 },
    count: { type: Number, default: 0 }
  },
  seoTitle: String,
  seoDescription: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}

// Indexes
db.products.createIndex({ slug: 1 }, { unique: true })
db.products.createIndex({ category: 1 })
db.products.createIndex({ seller: 1 })
db.products.createIndex({ isActive: 1 })
db.products.createIndex({ name: "text", description: "text", tags: "text" })
db.products.createIndex({ price: 1 })
db.products.createIndex({ createdAt: -1 })
db.products.createIndex({ "rating.average": -1 })
```

#### **Collection: categories**
```javascript
{
  _id: ObjectId,
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    maxlength: 500
  },
  parent: {
    type: ObjectId,
    ref: 'Category',
    default: null
  },
  image: {
    url: String,
    alt: String
  },
  icon: String,
  isActive: {
    type: Boolean,
    default: true
  },
  sortOrder: {
    type: Number,
    default: 0
  },
  productCount: {
    type: Number,
    default: 0
  },
  seoTitle: String,
  seoDescription: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}

// Indexes
db.categories.createIndex({ slug: 1 }, { unique: true })
db.categories.createIndex({ parent: 1 })
db.categories.createIndex({ isActive: 1 })
db.categories.createIndex({ sortOrder: 1 })
```

#### **Collection: orders**
```javascript
{
  _id: ObjectId,
  orderNumber: {
    type: String,
    required: true,
    unique: true
  },
  customer: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    product: {
      type: ObjectId,
      ref: 'Product',
      required: true
    },
    name: String,
    price: Number,
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    subtotal: Number
  }],
  subtotal: {
    type: Number,
    required: true
  },
  shippingCost: {
    type: Number,
    default: 0
  },
  tax: {
    type: Number,
    default: 0
  },
  discount: {
    type: Number,
    default: 0
  },
  totalAmount: {
    type: Number,
    required: true
  },
  shippingAddress: {
    name: String,
    phone: String,
    street: String,
    city: String,
    province: String,
    postalCode: String,
    country: String
  },
  shippingMethod: {
    courier: String,
    service: String,
    estimatedDays: Number
  },
  status: {
    type: String,
    enum: ['pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending'
  },
  notes: String,
  trackingNumber: String,
  statusHistory: [{
    status: String,
    timestamp: Date,
    note: String,
    updatedBy: ObjectId
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}

// Indexes
db.orders.createIndex({ orderNumber: 1 }, { unique: true })
db.orders.createIndex({ customer: 1 })
db.orders.createIndex({ status: 1 })
db.orders.createIndex({ paymentStatus: 1 })
db.orders.createIndex({ createdAt: -1 })
db.orders.createIndex({ "items.product": 1 })
```

#### **Collection: payments**
```javascript
{
  _id: ObjectId,
  order: {
    type: ObjectId,
    ref: 'Order',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  method: {
    type: String,
    enum: ['bank_transfer', 'credit_card', 'e_wallet', 'cod'],
    default: 'bank_transfer'
  },
  status: {
    type: String,
    enum: ['pending', 'verified', 'rejected', 'refunded'],
    default: 'pending'
  },
  proofImage: String,
  bankAccount: {
    bank: String,
    accountNumber: String,
    accountName: String
  },
  transactionId: String,
  verifiedAt: Date,
  verifiedBy: {
    type: ObjectId,
    ref: 'User'
  },
  rejectionReason: String,
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}

// Indexes
db.payments.createIndex({ order: 1 })
db.payments.createIndex({ status: 1 })
db.payments.createIndex({ method: 1 })
db.payments.createIndex({ createdAt: -1 })
```

### 4.6.3 Estimasi Kebutuhan Simpanan Data

#### **Analisis Kapasitas Data**

**Estimasi Data per Collection (1 Tahun Operasi):**

1. **Users Collection**
   - Estimasi: 5,000 users
   - Size per document: ~2KB
   - Total size: 5,000 × 2KB = 10MB
   - Dengan index: ~15MB

2. **Products Collection**
   - Estimasi: 2,000 products
   - Size per document: ~5KB (termasuk specifications)
   - Total size: 2,000 × 5KB = 10MB
   - Dengan index: ~15MB

3. **Categories Collection**
   - Estimasi: 100 categories
   - Size per document: ~1KB
   - Total size: 100 × 1KB = 100KB
   - Dengan index: ~150KB

4. **Orders Collection**
   - Estimasi: 50,000 orders/tahun
   - Size per document: ~3KB
   - Total size: 50,000 × 3KB = 150MB
   - Dengan index: ~200MB

5. **Payments Collection**
   - Estimasi: 50,000 payments/tahun
   - Size per document: ~2KB
   - Total size: 50,000 × 2KB = 100MB
   - Dengan index: ~130MB

**Total Estimasi Storage:**
- Data: ~270MB
- Indexes: ~90MB
- **Total: ~360MB untuk tahun pertama**

**Growth Projection:**
- Year 1: 360MB
- Year 2: 650MB (80% growth)
- Year 3: 1.1GB (70% growth)
- Year 5: 2.5GB (50% annual growth)

**MongoDB Atlas Cluster Recommendation:**
- **Tier**: M10 (2GB RAM, 10GB Storage)
- **Backup**: Automated daily backups
- **Scaling**: Auto-scaling enabled
- **Monitoring**: Real-time performance monitoring

#### **Storage Optimization Strategy**

1. **Data Archiving**
   - Archive orders older than 2 years
   - Compress old payment records
   - Move inactive products to archive collection

2. **Index Optimization**
   - Regular index usage analysis
   - Remove unused indexes
   - Compound indexes for common queries

3. **Image Storage**
   - Use CDN for product images
   - Compress images before upload
   - Multiple image sizes for responsive design

4. **Backup Strategy**
   - Daily automated backups
   - Weekly full backups
   - Monthly backup to external storage
   - Point-in-time recovery capability
