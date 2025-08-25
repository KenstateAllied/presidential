/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLsdno4BYso1_BS9t267DIVcrlI3GVVjQ",
  authDomain: "campaign-c83fb.firebaseapp.com",
  projectId: "campaign-c83fb",
  storageBucket: "campaign-c83fb.firebasestorage.app",
  messagingSenderId: "809053041773",
  appId: "1:809053041773:web:ad45a3d928fe13bf207b64",
  measurementId: "G-JD6SGJCY5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

*/

// base.js



import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";  // works in v9+
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLsdno4BYso1_BS9t267DIVcrlI3GVVjQ",
  authDomain: "campaign-c83fb.firebaseapp.com",
  projectId: "campaign-c83fb",
  storageBucket: "campaign-c83fb.firebasestorage.app",
  messagingSenderId: "809053041773",
  appId: "1:809053041773:web:ad45a3d928fe13bf207b64",
  measurementId: "G-JD6SGJCY5C"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional services
const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = getAuth(app);

export { app, db, auth, analytics };