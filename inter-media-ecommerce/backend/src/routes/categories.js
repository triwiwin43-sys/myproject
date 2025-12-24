const express = require('express');
const { body } = require('express-validator');
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categoryController');
const { auth, authorize } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

// Validation rules
const categoryValidation = [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Category name must be between 2 and 100 characters'),
  body('description').optional().isLength({ max: 500 }).withMessage('Description cannot exceed 500 characters')
];

// Public routes
router.get('/', getCategories);
router.get('/:id', getCategory);

// Admin routes
router.post('/', auth, authorize('admin'), upload.single('categoryImage'), categoryValidation, createCategory);
router.put('/:id', auth, authorize('admin'), upload.single('categoryImage'), updateCategory);
router.delete('/:id', auth, authorize('admin'), deleteCategory);

module.exports = router;
