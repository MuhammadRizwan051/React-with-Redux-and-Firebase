// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfOCyxE6PFPcS-ETAjRqhmI-qX_CdPeVQ",
  authDomain: "saylani-form-assignment-fe33c.firebaseapp.com",
  databaseURL: "https://saylani-form-assignment-fe33c.firebaseio.com",
  projectId: "saylani-form-assignment-fe33c",
  storageBucket: "saylani-form-assignment-fe33c.appspot.com",
  messagingSenderId: "196580265917",
  appId: "1:196580265917:web:9fa650774e509631b18cd4",
  measurementId: "G-M1FL8RLXMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app