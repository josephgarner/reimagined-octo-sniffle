// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAq6YzcONQ7l9Fsl6goF7fP9eVdYJyJ_xc",
  authDomain: "portfolio2023-564d8.firebaseapp.com",
  projectId: "portfolio2023-564d8",
  storageBucket: "portfolio2023-564d8.appspot.com",
  messagingSenderId: "782510420674",
  appId: "1:782510420674:web:de5cc36ebed421b61f015b",
  measurementId: "G-HCFSESDG4Y",
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)
