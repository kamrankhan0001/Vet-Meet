// backend/controllers/adminController.js
const User = require('../models/User'); // Your MongoDB User model
const Product = require('../models/Product'); // Assuming you'll create a Product model
const Order = require('../models/Order');     // Assuming you'll create an Order model

// --- User Management ---

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private (Admin)
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select('-password'); // Exclude password if it were stored (Firebase handles it)
    res.json(users);
  } catch (error) {
    console.error("Error fetching all users:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get user by ID
// @route   GET /api/admin/users/:id
// @access  Private (Admin)
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Update user role
// @route   PUT /api/admin/users/:id/role
// @access  Private (Admin)
const updateUserRole = async (req, res) => {
  const { role } = req.body; // Expected: { "role": "admin" } or { "role": "user" }

  if (!role || !['user', 'admin', 'vet', 'seller'].includes(role)) {
    return res.status(400).json({ message: 'Invalid role provided.' });
  }

  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.role = role;
    await user.save();
    res.json({ message: `User role updated to ${role}`, user });
  } catch (error) {
    console.error("Error updating user role:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Delete a user
// @route   DELETE /api/admin/users/:id
// @access  Private (Admin)
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // Optional: Also delete user from Firebase Auth if desired (requires Firebase Admin SDK call)
    // await admin.auth().deleteUser(user.firebaseUid);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


// --- Product Management (Placeholder - you'll need to define Product model) ---

// @desc    Get all products
// @route   GET /api/admin/products
// @access  Private (Admin)
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error("Error fetching all products:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Add a new product
// @route   POST /api/admin/products
// @access  Private (Admin)
const addProduct = async (req, res) => {
  // Example fields for a product
  const { name, description, price, category, stock, imageUrls } = req.body;

  if (!name || !price || !category || !stock) {
    return res.status(400).json({ message: 'Please provide all required product fields.' });
  }

  try {
    const newProduct = new Product({
      name, description, price, category, stock, imageUrls
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Update a product
// @route   PUT /api/admin/products/:id
// @access  Private (Admin)
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Delete a product
// @route   DELETE /api/admin/products/:id
// @access  Private (Admin)
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// --- Order Management (Placeholder - you'll need to define Order model) ---

// @desc    Get all orders
// @route   GET /api/admin/orders
// @access  Private (Admin)
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate('userId', 'displayName email'); // Populate user info
    res.json(orders);
  } catch (error) {
    console.error("Error fetching all orders:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Update order status
// @route   PUT /api/admin/orders/:id/status
// @access  Private (Admin)
const updateOrderStatus = async (req, res) => {
  const { status } = req.body; // e.g., { "status": "shipped" }

  // Define valid statuses for your orders
  const validStatuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled', 'returned'];
  if (!status || !validStatuses.includes(status)) {
    return res.status(400).json({ message: 'Invalid order status provided.' });
  }

  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;
    await order.save();
    res.json({ message: `Order status updated to ${status}`, order });
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


module.exports = {
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
};