// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jarvuy-estate.firebaseapp.com",
  projectId: "jarvuy-estate",
  storageBucket: "jarvuy-estate.appspot.com",
  messagingSenderId: "571332996312",
  appId: "1:571332996312:web:b2bca0ad46e1756ab97bad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);