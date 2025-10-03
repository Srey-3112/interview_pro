// Import the functions you need from the SDKs you need

import {initializeApp, getApp,getApps} from "firebase/app";
import{getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyCT_hti2nuFm6gCQOdJ3cejG1bQkLj57Oo",
  authDomain: "interviewpro-79e9e.firebaseapp.com",
  projectId: "interviewpro-79e9e",
  storageBucket: "interviewpro-79e9e.firebasestorage.app",
  messagingSenderId: "671718796625",
  appId: "1:671718796625:web:d226770fd25a9b72afb770",
  measurementId: "G-GLZ0504CV6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);