// backend/config/firebase-admin.js
const admin = require('firebase-admin');
const path = require('path'); // Ensure path module is imported

// Checking if Firebase Admin SDK has already been initialized 
if (!admin.apps.length) {
  try {
    
    if (process.env.NODE_ENV === 'production') {
      admin.initializeApp({
        credential: admin.credential.applicationDefault(),
        projectId: process.env.FIREBASE_PROJECT_ID,
      });
      console.log("Firebase Admin SDK initialized using application default credentials.");
    } else {
      
      const serviceAccountPath = path.resolve(__dirname, process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH);
      const serviceAccount = require(serviceAccountPath); // Dynamically load the JSON file

      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        projectId: process.env.FIREBASE_PROJECT_ID,
      });
      console.log("Firebase Admin SDK initialized using service account key.");
    }
  } catch (error) {
    console.error("Failed to initialize Firebase Admin SDK:", error.message);
    
    process.exit(1); // Exit with a non-zero code indicating an error
  }
}

// Export Firebase Admin services only if initialization was successful
const auth = admin.auth();

// If you are using Firestore alongside MongoDB for some data, you can initialize it here:
 const db = admin.firestore();
 module.exports = { admin, auth, db };

//module.exports = { admin, auth }; //  if not using Firestore for app data