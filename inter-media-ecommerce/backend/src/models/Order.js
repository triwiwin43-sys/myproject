const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    name: {
      type: String,
      required: true
    },
    image: String,
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    subtotal: {
      type: Number,
      required: true
    }
  }],
  
  // Order Status Flow
  status: {
    type: String,
    enum: [
      'pending',        // Menunggu konfirmasi seller
      'confirmed',      // Dikonfirmasi seller
      'processing',     // Sedang diproses
      'shipped',        // Dikirim (ada resi)
      'delivered',      // Sampai tujuan
      'completed',      // Selesai (customer konfirmasi)
      'cancelled',      // Dibatalkan
      'refunded'        // Dikembalikan
    ],
    default: 'pending'
  },
  
  // Shipping Information
  shipping: {
    address: {
      recipientName: String,
      phone: String,
      address: String,
      city: String,
      postalCode: String
    },
    courier: {
      name: String,     // JNE, TIKI, POS, etc
      service: String,  // REG, YES, ONS, etc
      cost: Number
    },
    trackingNumber: String,
    estimatedDelivery: Date,
    actualDelivery: Date,
    
    // Real-time tracking
    trackingHistory: [{
      status: String,
      description: String,
      location: String,
      timestamp: {
        type: Date,
        default: Date.now
      }
    }]
  },
  
  // Payment
  payment: {
    method: {
      type: String,
      enum: ['transfer', 'cod', 'ewallet'],
      required: true
    },
    status: {
      type: String,
      enum: ['pending', 'paid', 'failed', 'refunded'],
      default: 'pending'
    },
    paidAt: Date,
    paymentProof: String
  },
  
  // Pricing
  subtotal: {
    type: Number,
    required: true
  },
  shippingCost: {
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    required: true
  },
  
  // Customer Feedback
  review: {
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    comment: String,
    reviewDate: Date,
    images: [String]
  },
  
  // Refund
  refund: {
    requested: {
      type: Boolean,
      default: false
    },
    reason: String,
    requestDate: Date,
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected', 'processed']
    },
    processedDate: Date,
    amount: Number
  },
  
  // Timestamps
  orderDate: {
    type: Date,
    default: Date.now
  },
  confirmedAt: Date,
  shippedAt: Date,
  deliveredAt: Date,
  completedAt: Date,
  
  // Notes
  customerNotes: String,
  sellerNotes: String,
  adminNotes: String
}, {
  timestamps: true
});

// Generate order number
orderSchema.pre('save', async function(next) {
  if (!this.orderNumber) {
    const count = await mongoose.model('Order').countDocuments();
    this.orderNumber = `IM${Date.now()}${String(count + 1).padStart(4, '0')}`;
  }
  next();
});

// Update timestamps based on status
orderSchema.pre('save', function(next) {
  if (this.isModified('status')) {
    const now = new Date();
    switch (this.status) {
      case 'confirmed':
        this.confirmedAt = now;
        break;
      case 'shipped':
        this.shippedAt = now;
        break;
      case 'delivered':
        this.deliveredAt = now;
        break;
      case 'completed':
        this.completedAt = now;
        break;
    }
  }
  next();
});

module.exports = mongoose.model('Order', orderSchema);
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    variant: {
      name: String,
      value: String
    },
    subtotal: {
      type: Number,
      required: true
    }
  }],
  shippingAddress: {
    recipientName: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    province: {
      type: String,
      required: true
    },
    postalCode: {
      type: String,
      required: true
    }
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['bank_transfer', 'credit_card', 'e_wallet', 'cod']
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending'
  },
  orderStatus: {
    type: String,
    enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
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
  total: {
    type: Number,
    required: true
  },
  notes: String,
  trackingNumber: String,
  shippingProvider: String,
  estimatedDelivery: Date,
  deliveredAt: Date,
  cancelledAt: Date,
  cancelReason: String,
  statusHistory: [{
    status: String,
    timestamp: {
      type: Date,
      default: Date.now
    },
    note: String
  }]
}, {
  timestamps: true
});

orderSchema.pre('save', function(next) {
  if (this.isNew) {
    this.orderNumber = 'IM' + Date.now() + Math.floor(Math.random() * 1000);
  }
  next();
});

module.exports = mongoose.model('Order', orderSchema);
