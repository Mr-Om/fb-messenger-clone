import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQxfMBV_wmFF54RGrAqJO3-WY1VsLXmuo",
    authDomain: "fb-messenger-clone-349ec.firebaseapp.com",
    projectId: "fb-messenger-clone-349ec",
    storageBucket: "fb-messenger-clone-349ec.appspot.com",
    messagingSenderId: "172448501841",
    appId: "1:172448501841:web:80e3b39debbfe68665a870",
    measurementId: "G-7TZYY8XFCW"
})

const db = firebaseApp.firestore();
export default db;