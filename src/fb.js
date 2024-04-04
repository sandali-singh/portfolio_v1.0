// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzaYuLpCvyB4C4mmxrymlaP5PBstxpec4",
  authDomain: "ss-myportfolio.firebaseapp.com",
  projectId: "ss-myportfolio",
  storageBucket: "ss-myportfolio.appspot.com",
  messagingSenderId: "120910844946",
  appId: "1:120910844946:web:61a535da406bc2039834cb",
  measurementId: "G-VB0YRPMRSK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
//const analytics = getAnalytics(app);
