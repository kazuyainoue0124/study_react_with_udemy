import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRE6XEaDzgV9-B5dSttUgMTSSB4ul3Du0",
  authDomain: "blog-b1a12.firebaseapp.com",
  projectId: "blog-b1a12",
  storageBucket: "blog-b1a12.appspot.com",
  messagingSenderId: "853055926419",
  appId: "1:853055926419:web:56bf22adcf028c327b1d66"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
