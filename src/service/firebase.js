// get firebase initalisation
import { initializeApp } from "firebase/app";

// get required firebase functions
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjGNnd8K4U-cXarwJx-DBaU7DjxXFEMxY",
  authDomain: "ifridge-9bb1e.firebaseapp.com",
  projectId: "ifridge-9bb1e",
  storageBucket: "ifridge-9bb1e.appspot.com",
  messagingSenderId: "505666645968",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// initialise Firebase
const app = initializeApp(firebaseConfig);

// initialise analytics
const analytics = null; // getAnalytics(app);

// initialise Cloud Firestore and get a reference to the database service
const firestore = getFirestore(app); 

// initialise Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// export objects
export { app, analytics, firestore, auth };