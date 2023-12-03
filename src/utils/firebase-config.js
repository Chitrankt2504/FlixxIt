import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIEUkxgVYH1qXXJKqgnCGAKQ6wt8TO1yQ",
  authDomain: "flixxit-2c2c8.firebaseapp.com",
  projectId: "flixxit-2c2c8",
  storageBucket: "flixxit-2c2c8.appspot.com",
  messagingSenderId: "567092930497",
  appId: "1:567092930497:web:f9cd07d896398b43be3140",
  measurementId: "G-3J76DN1BQN"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);