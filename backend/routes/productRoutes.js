// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
// const { getProducts, getProductById } = require('../controllers/productController'); // You'll create these later

// Example routes
// router.get('/', getProducts);
// router.get('/:id', getProductById);

// For now, a simple placeholder
router.get('/', (req, res) => {
  res.send('Product routes are working!');
});

module.exports = router; // <--- ENSURE THIS LINE IS PRESENT