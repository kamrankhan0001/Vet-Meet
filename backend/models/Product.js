// backend/models/Product.js
const mongoose = require('mongoose'); // This line should appear ONLY ONCE

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Price cannot be negative
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0, // Stock cannot be negative
    default: 0,
  },
  imageUrls: {
    type: [String], // Array of strings for image URLs
    default: [],
  },
  brand: {
    type: String,
    trim: true,
  },
  // You can add more fields like reviews, ratings, etc.
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update `updatedAt` on every save
ProductSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Product', ProductSchema);