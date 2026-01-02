import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import toast from 'react-hot-toast';

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isLoading: false,
      
      // Get cart items count
      getCartItemCount: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },

      // Add to cart (local storage)
      addToCart: (product) => {
        const { items } = get();
        const existingItem = items.find(item => item.id === product.id);
        
        if (existingItem) {
          // Update quantity
          const updatedItems = items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set({ items: updatedItems });
          toast.success(`${product.name} quantity updated in cart`);
        } else {
          // Add new item
          const newItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images?.[0] || '/api/placeholder/100/100',
            quantity: 1,
            category: product.category,
            seller: product.seller
          };
          set({ items: [...items, newItem] });
          toast.success(`${product.name} added to cart`);
        }
      },

      // Remove from cart
      removeFromCart: (productId) => {
        const { items } = get();
        const updatedItems = items.filter(item => item.id !== productId);
        set({ items: updatedItems });
        toast.success('Item removed from cart');
      },

      // Update quantity
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        
        const { items } = get();
        const updatedItems = items.map(item =>
          item.id === productId
            ? { ...item, quantity }
            : item
        );
        set({ items: updatedItems });
      },

      // Clear cart
      clearCart: () => {
        set({ items: [] });
        toast.success('Cart cleared');
      },

      // Get cart total
      getCartTotal: () => {
        const { items } = get();
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({
        items: state.items
      })
    }
  )
);

export default useCartStore;
