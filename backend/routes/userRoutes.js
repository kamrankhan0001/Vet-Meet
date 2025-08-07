// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Import user controllers (ensure these functions are exported from userController.js)
const { getUserProfile, updateUserProfile, syncUserProfile } = require('../controllers/userController');
// Import general authentication middleware
const authenticate = require('../middleware/authMiddleware');

// Route for authenticated user's profile
router.route('/profile')
  .get(authenticate, getUserProfile)      // GET /api/users/profile - Get user's own profile
  .put(authenticate, updateUserProfile); // PUT /api/users/profile - Update user's own profile

// Route for syncing user profile from Firebase Auth to MongoDB
// This route requires Firebase ID token authentication
router.post('/sync-profile', authenticate, syncUserProfile);

module.exports = router;