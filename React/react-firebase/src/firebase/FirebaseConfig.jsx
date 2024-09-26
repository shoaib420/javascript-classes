
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzMFceANoWPpmEeviC8gKeP8Zy9bEz6qU",
  authDomain: "auth-b249a.firebaseapp.com",
  projectId: "auth-b249a",
  storageBucket: "auth-b249a.appspot.com",
  messagingSenderId: "374660770889",
  appId: "1:374660770889:web:ea2839e22757da92dc2398"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const fireDB = getFirestore(app)