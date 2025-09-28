
// Firebase initialization
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCnDyqeQj8bMtMbSXLLDe_roz7KPUozQhQ",
  authDomain: "pilateando-c534d.firebaseapp.com",
  projectId: "pilateando-c534d",
  storageBucket: "pilateando-c534d.firebasestorage.app",
  messagingSenderId: "595737907735",
  appId: "1:595737907735:web:d113392a022aa1ed5b4252",
  measurementId: "G-H2B69H0KP1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
