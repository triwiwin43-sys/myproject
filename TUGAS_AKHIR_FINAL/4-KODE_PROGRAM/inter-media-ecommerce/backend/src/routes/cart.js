const express = require('express');
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart
} = require('../controllers/cartController');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Routes
router.get('/', auth, getCart);
router.post('/items', auth, addToCart);
router.put('/items/:itemId', auth, updateCartItem);
router.delete('/items/:itemId', auth, removeFromCart);
router.delete('/', auth, clearCart);

module.exports = router;
