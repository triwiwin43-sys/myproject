const express = require('express');
const router = express.Router();

// Get all categories
router.get('/', (req, res) => {
  try {
    const categories = [
      { id: 'printers', name: 'Printer & Scanner', count: 2 },
      { id: 'computers', name: 'Komputer & PC', count: 2 },
      { id: 'laptops', name: 'Laptop & Notebook', count: 2 },
      { id: 'accessories', name: 'Aksesoris Komputer', count: 1 },
      { id: 'services', name: 'Layanan & Service', count: 1 }
    ];

    res.json({
      success: true,
      data: { categories }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
