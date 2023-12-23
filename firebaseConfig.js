// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN-awzFZOtLSfHUe0dYSn9bw1B0L9NEJk",
  authDomain: "mushroom-app-d9333.firebaseapp.com",
  projectId: "mushroom-app-d9333",
  storageBucket: "mushroom-app-d9333.appspot.com",
  messagingSenderId: "578705421615",
  appId: "1:578705421615:web:a03c231025fbde3e4fddda",
  measurementId: "G-20XMB1LMWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);