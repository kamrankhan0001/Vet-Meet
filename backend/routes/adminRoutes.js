// backend/routes/adminRoutes.js
const express = require('express');
const {
  getAllUsers,
  getUserById,
  updateUserRole,
  deleteUser,
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getAllOrders,
  updateOrderStatus,
} = require('../controllers/adminController');
const adminAuth = require('../middleware/adminAuthMiddleware');

const router = express.Router();

// All routes here will require admin authentication
router.use(adminAuth); // <--- This applies the middleware to all routes defined AFTER this line in this router

// User Management
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id/role', updateUserRole);
router.delete('/users/:id', deleteUser);

// Product Management
router.get('/products', getAllProducts);
router.post('/products', addProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

// Order Management
router.get('/orders', getAllOrders);
router.put('/orders/:id/status', updateOrderStatus);

module.exports = router; // <--- ENSURE THIS LINE IS PRESENT