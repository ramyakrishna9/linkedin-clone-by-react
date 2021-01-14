import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDqhbVbdjGvaV5AYDWu-P4su-VbMsi2nWw",
    authDomain: "linkedin-clone-b2611.firebaseapp.com",
    projectId: "linkedin-clone-b2611",
    storageBucket: "linkedin-clone-b2611.appspot.com",
    messagingSenderId: "619497748917",
    appId: "1:619497748917:web:adb401b703baf1980c41fc",
    measurementId: "G-FF94DLSRVE"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };