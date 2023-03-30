// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK7CniBRgMBP30rZw9xU7y5nyd8g9K6jY",
  authDomain: "rj-39585-c1ed4.firebaseapp.com",
  projectId: "rj-39585-c1ed4",
  storageBucket: "rj-39585-c1ed4.appspot.com",
  messagingSenderId: "373509191172",
  appId: "1:373509191172:web:fda67d742f1fbc90e4e751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)