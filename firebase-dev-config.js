// Development Firebase Configuration for dev.wrestling.systems
// This keeps development separate from production wrestlingsystems project

const DEV_FIREBASE_CONFIG = {
    apiKey: "AIzaSyDUKOn5OKq9XYwJF-loJ-1E8_P4jaCvnUM",
    authDomain: "wrestling-systems-dev.firebaseapp.com",
    projectId: "wrestling-systems-dev",
    storageBucket: "wrestling-systems-dev.firebasestorage.app",
    messagingSenderId: "115633693255",
    appId: "1:115633693255:web:3ddd3679f2038438c14762"
};

// Production Firebase Configuration (DO NOT USE FOR DEVELOPMENT)
const PROD_FIREBASE_CONFIG = {
    apiKey: "AIzaSyASn9xe5RRKFGXNi-Vha-NunDYj1mv7D3g",
    authDomain: "auth.wrestling.systems",
    projectId: "wrestlingsystems",
    storageBucket: "wrestlingsystems.appspot.com",
    messagingSenderId: "255692661115", 
    appId: "1:255692661115:web:7ad4f8d39b78fb1220ddde",
    measurementId: "G-E52GDENT1E"
};

// Export the development config
window.FIREBASE_CONFIG = DEV_FIREBASE_CONFIG;

console.log("🔧 Using DEVELOPMENT Firebase config:", DEV_FIREBASE_CONFIG.projectId);
console.log("⚠️ Production config protected:", PROD_FIREBASE_CONFIG.projectId);