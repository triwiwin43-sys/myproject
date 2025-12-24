const Order = require('../models/Order');
const Product = require('../models/Product');
const Cart = require('../models/Cart');
const { validationResult } = require('express-validator');

// @desc    Create order
// @route   POST /api/orders
// @access  Private
const createOrder = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { items, shippingAddress, paymentMethod, notes } = req.body;
    
    // Validate and calculate totals
    let subtotal = 0;
    const orderItems = [];
    
    for (const item of items) {
      const product = await Product.findById(item.product).populate('seller', 'name');
      
      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Product ${item.product} not found`
        });
      }
      
      if (product.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for ${product.name}`
        });
      }
      
      const itemSubtotal = product.price * item.quantity;
      subtotal += itemSubtotal;
      
      orderItems.push({
        product: product._id,
        seller: product.seller._id,
        name: product.name,
        image: product.images[0]?.url,
        price: product.price,
        quantity: item.quantity,
        variant: item.variant,
        subtotal: itemSubtotal
      });
      
      // Update product stock
      product.stock -= item.quantity;
      product.totalSold += item.quantity;
      await product.save();
    }
    
    const shippingCost = 15000; // Fixed shipping cost
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + shippingCost + tax;
    
    const order = await Order.create({
      customer: req.user.id,
      items: orderItems,
      shippingAddress,
      paymentMethod,
      subtotal,
      shippingCost,
      tax,
      total,
      notes,
      statusHistory: [{
        status: 'pending',
        timestamp: new Date(),
        note: 'Order created'
      }]
    });
    
    // Clear cart after successful order
    await Cart.findOneAndUpdate(
      { user: req.user.id },
      { $set: { items: [] } }
    );
    
    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: { order }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get user orders
// @route   GET /api/orders
// @access  Private
const getOrders = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    let query = {};
    
    if (req.user.role === 'customer') {
      query.customer = req.user.id;
    } else if (req.user.role === 'seller') {
      query['items.seller'] = req.user.id;
    }
    
    // Status filter
    if (req.query.status) {
      query.orderStatus = req.query.status;
    }
    
    const orders = await Order.find(query)
      .populate('customer', 'name email')
      .populate('items.product', 'name images')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    
    const total = await Order.countDocuments(query);
    
    res.json({
      success: true,
      data: {
        orders,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get single order
// @route   GET /api/orders/:id
// @access  Private
const getOrder = async (req, res) => {
  try {
    let query = { _id: req.params.id };
    
    // Customers can only see their own orders
    if (req.user.role === 'customer') {
      query.customer = req.user.id;
    } else if (req.user.role === 'seller') {
      query['items.seller'] = req.user.id;
    }
    
    const order = await Order.findOne(query)
      .populate('customer', 'name email phone')
      .populate('items.product', 'name images')
      .populate('items.seller', 'name sellerInfo.storeName');
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }
    
    res.json({
      success: true,
      data: { order }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update order status
// @route   PUT /api/orders/:id/status
// @access  Private (Seller/Admin)
const updateOrderStatus = async (req, res) => {
  try {
    const { status, note } = req.body;
    
    let query = { _id: req.params.id };
    
    // Sellers can only update orders containing their products
    if (req.user.role === 'seller') {
      query['items.seller'] = req.user.id;
    }
    
    const order = await Order.findOne(query);
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }
    
    // Add to status history
    order.statusHistory.push({
      status,
      timestamp: new Date(),
      note
    });
    
    order.orderStatus = status;
    
    // Set delivery date if status is delivered
    if (status === 'delivered') {
      order.deliveredAt = new Date();
    }
    
    await order.save();
    
    res.json({
      success: true,
      message: 'Order status updated successfully',
      data: { order }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Cancel order
// @route   PUT /api/orders/:id/cancel
// @access  Private
const cancelOrder = async (req, res) => {
  try {
    const { reason } = req.body;
    
    let query = { _id: req.params.id };
    
    // Customers can only cancel their own orders
    if (req.user.role === 'customer') {
      query.customer = req.user.id;
    }
    
    const order = await Order.findOne(query);
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }
    
    // Check if order can be cancelled
    if (['shipped', 'delivered'].includes(order.orderStatus)) {
      return res.status(400).json({
        success: false,
        message: 'Cannot cancel order that has been shipped or delivered'
      });
    }
    
    // Restore product stock
    for (const item of order.items) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { 
          stock: item.quantity,
          totalSold: -item.quantity
        }
      });
    }
    
    order.orderStatus = 'cancelled';
    order.cancelledAt = new Date();
    order.cancelReason = reason;
    
    order.statusHistory.push({
      status: 'cancelled',
      timestamp: new Date(),
      note: reason
    });
    
    await order.save();
    
    res.json({
      success: true,
      message: 'Order cancelled successfully',
      data: { order }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrder,
  updateOrderStatus,
  cancelOrder
};
