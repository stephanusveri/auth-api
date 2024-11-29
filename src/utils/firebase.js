const admin = require("firebase-admin");

const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(require("../../api-auth-capstone-firebase-adminsdk-wseft-ecd4a0a4a3.json")),
});

const db = firebaseApp.firestore();

module.exports = { db };