import { create } from 'zustand';

const usePaymentMethodStore = create((set, get) => ({
  paymentMethods: [
    {
      id: 1,
      sellerId: 'seller1',
      type: 'bank',
      bankName: 'BCA',
      accountNumber: '1234567890',
      accountHolder: 'PT Inter Medi-A',
      status: 'approved',
      isActive: true,
      createdAt: '2024-01-15',
      approvedAt: '2024-01-16',
      approvedBy: 'admin@intermedia.com'
    },
    {
      id: 2,
      sellerId: 'seller1',
      type: 'ewallet',
      provider: 'GoPay',
      accountNumber: '081234567890',
      accountHolder: 'Inter Medi-A',
      status: 'pending',
      isActive: false,
      createdAt: '2024-01-20'
    }
  ],

  // Seller functions
  addPaymentMethod: (method) => {
    const newMethod = {
      ...method,
      id: Date.now(),
      status: 'pending',
      isActive: false,
      createdAt: new Date().toISOString().split('T')[0]
    };
    set(state => ({
      paymentMethods: [...state.paymentMethods, newMethod]
    }));
  },

  updatePaymentMethod: (id, updates) => {
    set(state => ({
      paymentMethods: state.paymentMethods.map(method =>
        method.id === id ? { ...method, ...updates } : method
      )
    }));
  },

  deletePaymentMethod: (id) => {
    set(state => ({
      paymentMethods: state.paymentMethods.filter(method => method.id !== id)
    }));
  },

  // Admin functions
  approvePaymentMethod: (id, adminEmail) => {
    set(state => ({
      paymentMethods: state.paymentMethods.map(method =>
        method.id === id ? {
          ...method,
          status: 'approved',
          isActive: true,
          approvedAt: new Date().toISOString().split('T')[0],
          approvedBy: adminEmail
        } : method
      )
    }));
  },

  rejectPaymentMethod: (id, adminEmail, reason) => {
    set(state => ({
      paymentMethods: state.paymentMethods.map(method =>
        method.id === id ? {
          ...method,
          status: 'rejected',
          isActive: false,
          rejectedAt: new Date().toISOString().split('T')[0],
          rejectedBy: adminEmail,
          rejectionReason: reason
        } : method
      )
    }));
  },

  // Get methods by seller
  getSellerPaymentMethods: (sellerId) => {
    return get().paymentMethods.filter(method => method.sellerId === sellerId);
  },

  // Get pending methods for admin
  getPendingPaymentMethods: () => {
    return get().paymentMethods.filter(method => method.status === 'pending');
  },

  // Get active payment methods for checkout
  getActivePaymentMethods: () => {
    return get().paymentMethods.filter(method => method.status === 'approved' && method.isActive);
  }
}));

export default usePaymentMethodStore;
