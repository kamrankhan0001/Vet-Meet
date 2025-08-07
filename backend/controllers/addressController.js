// backend/controllers/addressController.js
const Address = require('../models/Address');

// @desc    Get all addresses for a user
// @route   GET /api/addresses
// @access  Private
const getAddresses = async (req, res) => {
  try {
    // req.user.uid comes from the Firebase ID token verification
    const addresses = await Address.find({ userId: req.user.uid });
    res.json(addresses);
  } catch (error) {
    console.error("Error fetching addresses:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Add a new address for a user
// @route   POST /api/addresses
// @access  Private
const addAddress = async (req, res) => {
  const { fullName, mobileNo, emailId, houseNo, roadName, landmark, pincode, townCity, state, isDefault } = req.body;

  // Basic validation (more robust validation should be in utils/validation.js)
  if (!fullName || !mobileNo || !houseNo || !roadName || !pincode || !townCity || !state) {
    return res.status(400).json({ message: 'Please enter all required fields' });
  }

  try {
    // If setting as default, make sure other addresses for this user are not default
    if (isDefault) {
      await Address.updateMany({ userId: req.user.uid, isDefault: true }, { isDefault: false });
    }

    const newAddress = new Address({
      userId: req.user.uid, // Link address to Firebase UID
      fullName, mobileNo, emailId, houseNo, roadName, landmark, pincode, townCity, state, isDefault
    });

    const savedAddress = await newAddress.save();
    res.status(201).json(savedAddress);
  } catch (error) {
    console.error("Error adding address:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getAddresses,
  addAddress,
};