// this is where all the crendiatials for the application will be installed. 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACb_TyXTo21wllXgpH-Oa-CnqsUwiUBew",
  authDomain: "water-controller2.firebaseapp.com",
  projectId: "water-controller2",
  storageBucket: "water-controller2.appspot.com",
  messagingSenderId: "464979903226",
  appId: "1:464979903226:web:68bc38a42a94de6ea57f43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app)
