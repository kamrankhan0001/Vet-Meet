// backend/server.js
require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // MongoDB connection
require('./config/firebase-admin'); // Initialize Firebase Admin SDK

// Import routes - ENSURE THESE PATHS ARE CORRECT AND FILES EXIST
const userRoutes = require('./routes/userRoutes');
const addressRoutes = require('./routes/addressRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const adminRoutes = require('./routes/adminRoutes'); // NEW: Admin routes

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all origins (adjust for production)
app.use(express.json()); // Body parser for JSON data

// API Routes - ENSURE YOU ARE PASSING THE IMPORTED ROUTER OBJECTS
app.use('/api/users', userRoutes);
app.use('/api/addresses', addressRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes); // This is likely line 30 or close to it

// Simple root route
app.get('/', (req, res) => {
  res.send('Vet&Meet Backend API is running!');
});

// Error handling middleware (optional, but good practice)
// app.use(require('./middleware/errorHandler')); // Uncomment if you create this middleware

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});