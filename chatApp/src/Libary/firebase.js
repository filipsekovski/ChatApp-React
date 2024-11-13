import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-28876.firebaseapp.com",
  projectId: "reactchatapp-28876",
  storageBucket: "reactchatapp-28876.firebasestorage.app",
  messagingSenderId: "980870049053",
  appId: "1:980870049053:web:337007abadd876259505f4",
  measurementId: "G-7MZQENTX1E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const dataBase = getFirestore()