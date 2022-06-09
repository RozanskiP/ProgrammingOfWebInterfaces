// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXlmV6PVVhlJQuy1QjaYwJTt8aMCYxoKs",
  authDomain: "piw-pawelrozanski.firebaseapp.com",
  projectId: "piw-pawelrozanski",
  storageBucket: "piw-pawelrozanski.appspot.com",
  messagingSenderId: "595350381146",
  appId: "1:595350381146:web:3c474b0b67e2af90a2ee63",
  measurementId: "G-QBP3JEK4JX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
