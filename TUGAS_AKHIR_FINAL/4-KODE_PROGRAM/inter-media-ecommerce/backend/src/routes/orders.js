const express = require('express');
const { body } = require('express-validator');
const {
  createOrder,
  getOrders,
  getOrder,
  updateOrderStatus,
  cancelOrder
} = require('../controllers/orderController');
const { auth, authorize } = require('../middleware/auth');

const router = express.Router();

// Validation rules
const orderValidation = [
  body('items').isArray({ min: 1 }).withMessage('Order must contain at least one item'),
  body('items.*.product').isMongoId().withMessage('Valid product ID is required'),
  body('items.*.quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1'),
  body('shippingAddress.recipientName').trim().notEmpty().withMessage('Recipient name is required'),
  body('shippingAddress.phone').matches(/^[0-9]{10,15}$/).withMessage('Valid phone number is required'),
  body('shippingAddress.address').trim().notEmpty().withMessage('Address is required'),
  body('shippingAddress.city').trim().notEmpty().withMessage('City is required'),
  body('shippingAddress.province').trim().notEmpty().withMessage('Province is required'),
  body('shippingAddress.postalCode').trim().notEmpty().withMessage('Postal code is required'),
  body('paymentMethod').isIn(['bank_transfer', 'credit_card', 'e_wallet', 'cod']).withMessage('Valid payment method is required')
];

// Routes
router.post('/', auth, orderValidation, createOrder);
router.get('/', auth, getOrders);
router.get('/:id', auth, getOrder);
router.put('/:id/status', auth, authorize('seller', 'admin'), updateOrderStatus);
router.put('/:id/cancel', auth, cancelOrder);

module.exports = router;
