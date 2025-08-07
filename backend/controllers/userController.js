// backend/controllers/userController.js
const User = require('../models/User'); // Your MongoDB User model

// @desc    Get authenticated user's profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = async (req, res) => {
  try {
    // req.user.uid comes from Firebase ID token verification in authMiddleware
    // We select('-password') as passwords are not stored in our MongoDB User model
    const user = await User.findOne({ firebaseUid: req.user.uid });
    if (!user) {
      // If user is authenticated via Firebase but no profile in MongoDB,
      // it means they haven't synced yet or there was an issue.
      // You might want to trigger a sync here or guide the user.
      return res.status(404).json({ message: 'User profile not found in database. Please ensure your profile is synced.' });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Update authenticated user's profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = async (req, res) => {
  const { displayName, email, phoneNumber } = req.body; // Fields allowed to be updated from frontend

  try {
    const user = await User.findOne({ firebaseUid: req.user.uid });

    if (!user) {
      return res.status(404).json({ message: 'User profile not found.' });
    }

    // Update fields if they are provided in the request body
    if (displayName !== undefined) user.displayName = displayName;
    if (email !== undefined) user.email = email; // Note: Changing email here won't change Firebase Auth email directly
    if (phoneNumber !== undefined) user.phoneNumber = phoneNumber; // Note: Changing phone here won't change Firebase Auth phone directly

    user.updatedAt = Date.now(); // Update the timestamp on modification

    const updatedUser = await user.save();
    res.json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Sync user profile from Firebase Auth to MongoDB
//          This endpoint is typically called by the frontend after a successful Firebase login/signup
//          to ensure the user's basic profile exists in MongoDB.
// @route   POST /api/users/sync-profile
// @access  Private (authenticated via Firebase ID token)
const syncUserProfile = async (req, res) => {
  // Data from decoded Firebase token (provided by authMiddleware)
  const { uid, email, displayName, phoneNumber } = req.user;

  try {
    let user = await User.findOne({ firebaseUid: uid });

    if (user) {
      // User already exists in MongoDB, update their details if necessary
      // This handles cases where a user might update their Firebase profile (e.g., display name)
      // or if their email/phone number changes in Firebase Auth.
      user.email = email || user.email; // Use new email if available, else keep existing
      user.displayName = displayName || user.displayName;
      user.phoneNumber = phoneNumber || user.phoneNumber;
      user.updatedAt = Date.now(); // Update the timestamp
      await user.save();
      console.log(`User ${uid} updated in MongoDB.`);
      return res.status(200).json({ message: 'User profile synced (updated).', user });
    } else {
      // User does not exist in MongoDB, create a new entry
      const newUser = new User({
        firebaseUid: uid,
        email: email || '', // Email might be null if user signed up with phone number
        displayName: displayName || 'New User', // Default display name if not provided by Firebase
        phoneNumber: phoneNumber || '',
        role: 'user', // Assign default role for new users
      });
      await newUser.save();
      console.log(`User ${uid} created in MongoDB via API sync.`);
      return res.status(201).json({ message: 'User profile synced (created).', user: newUser });
    }
  } catch (error) {
    console.error(`Error syncing user ${uid} to MongoDB:`, error);
    res.status(500).json({ message: 'Server error during sync.', error: error.message });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
  syncUserProfile, // Export all functions
};