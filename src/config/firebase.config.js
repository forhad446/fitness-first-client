import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJcXVMjDM03wXsJoM2uMTBUwv-Zh6SbGQ",
  authDomain: "fitness-first-b6301.firebaseapp.com",
  projectId: "fitness-first-b6301",
  storageBucket: "fitness-first-b6301.appspot.com",
  messagingSenderId: "440280642793",
  appId: "1:440280642793:web:841f389e89f970b7f6ac78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);