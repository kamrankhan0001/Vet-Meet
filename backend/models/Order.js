// backend/models/Order.js
const mongoose = require('mongoose'); // This line should appear ONLY ONCE

const OrderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Reference to the Product model
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  // You might want to store the product name/image at the time of order
  // in case the product details change later
  productName: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
  },
});

const OrderSchema = new mongoose.Schema({
  userId: {
    type: String, // Firebase UID of the user who placed the order
    required: true,
    index: true,
  },
  items: [OrderItemSchema], // Array of order items
  totalAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  shippingAddress: { // Embedded address details for the order
    fullName: String,
    mobileNo: String,
    emailId: String,
    houseNo: String,
    roadName: String,
    landmark: String,
    pincode: String,
    townCity: String,
    state: String,
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled', 'returned'],
    default: 'pending',
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending',
  },
  paymentMethod: {
    type: String,
  },
  paymentId: { // Transaction ID from payment gateway
    type: String,
  },
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
OrderSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Order', OrderSchema);