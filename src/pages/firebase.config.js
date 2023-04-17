import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByLUo9k0Jf6NGQBFwPv98HXKiSriRSgQY",
  authDomain: "otp-gen-f5345.firebaseapp.com",
  projectId: "otp-gen-f5345",
  storageBucket: "otp-gen-f5345.appspot.com",
  messagingSenderId: "609412877643",
  appId: "1:609412877643:web:82ebf62380d2073be42cce",
  measurementId: "G-WETSYQ8LV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);