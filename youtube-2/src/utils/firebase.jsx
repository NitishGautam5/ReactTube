// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKCo_qVOPRC4xRc7JbncCsBf-iq5Dz5aY",
  authDomain: "fir-c3b56.firebaseapp.com",
  projectId: "fir-c3b56",
  storageBucket: "fir-c3b56.appspot.com",
  messagingSenderId: "662001332417",
  appId: "1:662001332417:web:43fb57a5a1feb468dde440",
  measurementId: "G-DK9PLC5MT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export default app