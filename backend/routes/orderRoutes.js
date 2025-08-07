// backend/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
// const { getUserOrders, createOrder } = require('../controllers/orderController'); // You'll create these later
// const authenticate = require('../middleware/authMiddleware');

// Example routes
// router.get('/', authenticate, getUserOrders);
// router.post('/', authenticate, createOrder);

// For now, a simple placeholder
router.get('/', (req, res) => {
  res.send('Order routes are working!');
});

module.exports = router; // <--- ENSURE THIS LINE IS PRESENT