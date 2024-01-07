// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLz_sjA7pBe68rSU2j3dSVB61kWEd_0dA",
    authDomain: "roadmap-backend-732d1.firebaseapp.com",
    projectId: "roadmap-backend-732d1",
    storageBucket: "roadmap-backend-732d1.appspot.com",
    messagingSenderId: "480687337533",
    appId: "1:480687337533:web:02e6b096cc2b28d7dfba54",
    measurementId: "G-JWYN4G3587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Data sourcing
export const db = getFirestore(app);