// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth from firebase/auth
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCryO37ZXEEnK8tPjwnVcZdopj7BUUdY-s",
  authDomain: "ai-travel-planner-df9da.firebaseapp.com",
  projectId: "ai-travel-planner-df9da",
  storageBucket: "ai-travel-planner-df9da.appspot.com",
  messagingSenderId: "763072274933",
  appId: "1:763072274933:web:d01182a686b061b13000bc",
  measurementId: "G-L30CDXTPL6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
