// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "flamingo-6bc2c.firebaseapp.com",
  projectId: "flamingo-6bc2c",
  storageBucket: "flamingo-6bc2c.appspot.com",
  messagingSenderId: "848044526898",
  appId: "1:848044526898:web:8d6ca0c190720b0951db2b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);