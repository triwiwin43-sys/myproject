import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useOrderStore = create(
  persist(
    (set, get) => ({
      orders: [],
      
      // Create new order from checkout
      createOrder: (orderData) => {
        const newOrder = {
          id: Date.now(),
          orderNumber: `IM${Date.now()}${Math.floor(Math.random() * 1000)}`,
          customerId: orderData.customerId,
          customerName: orderData.customerName,
          items: orderData.items,
          shipping: orderData.shipping,
          payment: orderData.payment,
          subtotal: orderData.subtotal,
          shippingCost: orderData.shippingCost,
          total: orderData.total,
          customerNotes: orderData.customerNotes,
          status: 'pending_payment', // Initial status
          paymentStatus: 'unpaid',
          sellerStatus: 'waiting_payment',
          adminStatus: 'waiting_payment',
          createdAt: new Date().toISOString(),
          timeline: [
            {
              status: 'pending_payment',
              message: 'Pesanan dibuat, menunggu pembayaran',
              timestamp: new Date().toISOString(),
              actor: 'customer'
            }
          ]
        };
        
        set((state) => ({
          orders: [...state.orders, newOrder]
        }));
        
        return newOrder;
      },
      
      // Customer confirms payment
      confirmPayment: (orderId, paymentProof) => {
        set((state) => ({
          orders: state.orders.map(order => 
            order.id === orderId 
              ? {
                  ...order,
                  status: 'payment_confirmed',
                  paymentStatus: 'paid',
                  paymentProof,
                  sellerStatus: 'pending_approval',
                  adminStatus: 'pending_verification',
                  timeline: [
                    ...order.timeline,
                    {
                      status: 'payment_confirmed',
                      message: 'Pembayaran dikonfirmasi customer',
                      timestamp: new Date().toISOString(),
                      actor: 'customer'
                    }
                  ]
                }
              : order
          )
        }));
      },
      
      // Admin verifies payment
      verifyPayment: (orderId, isApproved, adminNotes = '') => {
        const newStatus = isApproved ? 'payment_verified' : 'payment_rejected';
        const sellerStatus = isApproved ? 'pending_approval' : 'waiting_payment';
        
        set((state) => ({
          orders: state.orders.map(order => 
            order.id === orderId 
              ? {
                  ...order,
                  status: newStatus,
                  sellerStatus,
                  adminStatus: isApproved ? 'verified' : 'rejected',
                  adminNotes,
                  timeline: [
                    ...order.timeline,
                    {
                      status: newStatus,
                      message: isApproved 
                        ? 'Pembayaran diverifikasi admin' 
                        : `Pembayaran ditolak admin: ${adminNotes}`,
                      timestamp: new Date().toISOString(),
                      actor: 'admin'
                    }
                  ]
                }
              : order
          )
        }));
      },
      
      // Seller approves order
      approveOrder: (orderId, isApproved, sellerNotes = '') => {
        const newStatus = isApproved ? 'processing' : 'cancelled';
        
        set((state) => ({
          orders: state.orders.map(order => 
            order.id === orderId 
              ? {
                  ...order,
                  status: newStatus,
                  sellerStatus: isApproved ? 'processing' : 'cancelled',
                  sellerNotes,
                  timeline: [
                    ...order.timeline,
                    {
                      status: newStatus,
                      message: isApproved 
                        ? 'Pesanan disetujui seller, sedang diproses' 
                        : `Pesanan dibatalkan seller: ${sellerNotes}`,
                      timestamp: new Date().toISOString(),
                      actor: 'seller'
                    }
                  ]
                }
              : order
          )
        }));
      },
      
      // Seller ships order with tracking number
      shipOrder: (orderId, trackingData) => {
        set((state) => ({
          orders: state.orders.map(order => 
            order.id === orderId 
              ? {
                  ...order,
                  status: 'shipped',
                  sellerStatus: 'shipped',
                  tracking: trackingData,
                  shippedAt: new Date().toISOString(),
                  timeline: [
                    ...order.timeline,
                    {
                      status: 'shipped',
                      message: `Pesanan dikirim via ${trackingData.courier} - Resi: ${trackingData.trackingNumber}`,
                      timestamp: new Date().toISOString(),
                      actor: 'seller'
                    }
                  ]
                }
              : order
          )
        }));
      },
      
      // Customer receives order
      receiveOrder: (orderId) => {
        set((state) => ({
          orders: state.orders.map(order => 
            order.id === orderId 
              ? {
                  ...order,
                  status: 'delivered',
                  deliveredAt: new Date().toISOString(),
                  canReview: true,
                  timeline: [
                    ...order.timeline,
                    {
                      status: 'delivered',
                      message: 'Pesanan diterima customer',
                      timestamp: new Date().toISOString(),
                      actor: 'customer'
                    }
                  ]
                }
              : order
          )
        }));
      },
      
      // Get orders by user role
      getOrdersByRole: (userId, role) => {
        const orders = get().orders;
        
        switch (role) {
          case 'customer':
            return orders.filter(order => order.customerId === userId);
          case 'seller':
            return orders; // In real app, filter by seller products
          case 'admin':
            return orders;
          default:
            return [];
        }
      },
      
      // Get orders by status for different roles
      getOrdersByStatus: (status, role) => {
        const orders = get().orders;
        
        switch (role) {
          case 'seller':
            return orders.filter(order => 
              order.sellerStatus === status || 
              (status === 'pending' && ['pending_approval', 'payment_verified'].includes(order.status))
            );
          case 'admin':
            return orders.filter(order => 
              order.adminStatus === status ||
              (status === 'pending' && order.status === 'payment_confirmed')
            );
          default:
            return orders.filter(order => order.status === status);
        }
      }
    }),
    {
      name: 'order-store'
    }
  )
);

export default useOrderStore;
