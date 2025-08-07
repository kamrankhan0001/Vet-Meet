// backend/middleware/adminAuthMiddleware.js
const { auth } = require('../config/firebase-admin'); // Firebase Admin Auth for token verification
const User = require('../models/User'); // Your MongoDB User model

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const idToken = authHeader.split('Bearer ')[1];

  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    req.user = decodedToken; // Attach Firebase user info to request (uid, email, etc.)

    // Now, check the user's role from your MongoDB database
    const userDoc = await User.findOne({ firebaseUid: req.user.uid });

    if (!userDoc) {
      return res.status(404).json({ message: 'User profile not found in database.' });
    }

    if (userDoc.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Admin access required.' });
    }

    req.mongoUser = userDoc; // Attach the full MongoDB user document to the request
    next();
  } catch (error) {
    console.error("Error verifying ID token or checking role:", error); 
    res.status(403).json({ message: 'Unauthorized: Invalid token or access denied.', error: error.message });
  }
};

module.exports = authenticate; // <--- ENSURE THIS EXPORT IS PRESENT