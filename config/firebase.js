// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqndBIW6HFAktSwV_4QDdZtX3hh8ilRxE",
  authDomain: "franchise-portal-e0315.firebaseapp.com",
  projectId: "franchise-portal-e0315",
  storageBucket: "franchise-portal-e0315.appspot.com",
  messagingSenderId: "461023313864",
  appId: "1:461023313864:web:ec1d95164b441206674afd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();