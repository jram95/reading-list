// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADKaqTb24RdJWanjTmoxRyzqQVlJQgwz4",
  authDomain: "books-app-e60d5.firebaseapp.com",
  projectId: "books-app-e60d5",
  storageBucket: "books-app-e60d5.appspot.com",
  messagingSenderId: "444598314982",
  appId: "1:444598314982:web:81ff3ecf849f90d0efd827"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth}