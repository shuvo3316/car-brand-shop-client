// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-YKel_fp3qFXT1kJ_S8bIRb2spMJlbdk",
  authDomain: "carhub-auth.firebaseapp.com",
  projectId: "carhub-auth",
  storageBucket: "carhub-auth.appspot.com",
  messagingSenderId: "1049558415089",
  appId: "1:1049558415089:web:1fd20d0577c994a25d1b50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;