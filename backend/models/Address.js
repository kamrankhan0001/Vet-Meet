// backend/models/Address.js
const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  userId: {
    type: String, // Firebase UID
    required: true,
    index: true, // Good for querying addresses by user
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  mobileNo: {
    type: String,
    required: true,
    trim: true,
  },
  emailId: {
    type: String,
    trim: true,
    // match: [/.+@.+\..+/, 'Please fill a valid email address'], // Optional email validation
  },
  houseNo: {
    type: String,
    required: true,
    trim: true,
  },
  roadName: {
    type: String,
    required: true,
    trim: true,
  },
  landmark: {
    type: String,
    trim: true,
  },
  pincode: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    maxlength: 6,
  },
  townCity: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  isDefault: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Address', AddressSchema);