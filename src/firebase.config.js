// Import the functions you need from the SDKs you need
import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1C901JZfDT1sWt4QC4E9FJfZEKcQz-fc",
  authDomain: "house-marketplace-3a95e.firebaseapp.com",
  projectId: "house-marketplace-3a95e",
  storageBucket: "house-marketplace-3a95e.appspot.com",
  messagingSenderId: "822306743141",
  appId: "1:822306743141:web:72dbb4843d0a905828f78c",
  measurementId: "G-H8FDTTPQ1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()