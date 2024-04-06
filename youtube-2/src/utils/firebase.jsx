// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKCo_qVOPRC4xRc7Jb5Dz5aY",
  authDomain: "fir-c3b56.firebas",
  projectId: "f3b56",
  storageBucket: "fir-c3b5spot.com",
  messagingSenderId: "662417",
  appId: "1:662001332417:web:4feb468dde440",
  measurementId: "G-5MT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export default app
