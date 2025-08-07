// backend/middleware/authMiddleware.js
const { auth } = require('../config/firebase-admin');

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const idToken = authHeader.split('Bearer ')[1];

  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    req.user = decodedToken; // Attach Firebase user info to request
    next();
  } catch (error) {
    console.error("Error verifying ID token:", error);
    res.status(403).json({ message: 'Unauthorized: Invalid token', error: error.message });
  }
};

module.exports = authenticate;