export const PRODUCT_CATEGORIES = [
  'Printer',
  'Computer Parts',
  'Office Equipment',
  'Accessories',
  'Software',
  'Networking',
  'Storage',
  'Monitors'
];

export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled'
};

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  PAID: 'paid',
  FAILED: 'failed',
  REFUNDED: 'refunded'
};

export const USER_ROLES = {
  CUSTOMER: 'customer',
  SELLER: 'seller',
  ADMIN: 'admin'
};

export const PAYMENT_METHODS = [
  { id: 'bank_transfer', name: 'Transfer Bank', icon: '🏦' },
  { id: 'credit_card', name: 'Kartu Kredit', icon: '💳' },
  { id: 'e_wallet', name: 'E-Wallet', icon: '📱' },
  { id: 'cod', name: 'Bayar di Tempat', icon: '💵' }
];

export const SHIPPING_METHODS = [
  { id: 'regular', name: 'Regular (3-5 hari)', price: 15000 },
  { id: 'express', name: 'Express (1-2 hari)', price: 25000 },
  { id: 'same_day', name: 'Same Day', price: 50000 }
];
