// backend/routes/addressRoutes.js
const express = require('express');
const { getAddresses, addAddress } = require('../controllers/addressController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(authenticate, getAddresses).post(authenticate, addAddress);

module.exports = router; // <--- ENSURE THIS LINE IS PRESENT