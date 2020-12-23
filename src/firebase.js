import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyA7vIgRm2IKK8lSImZ1WhYm_m4kaqGm9Bs",
    authDomain: "messenger-35adb.firebaseapp.com",
    projectId: "messenger-35adb",
    storageBucket: "messenger-35adb.appspot.com",
    messagingSenderId: "931280617410",
    appId: "1:931280617410:web:ad52d36604a355a4c2605b",
    measurementId: "G-EC2FJ501BX"

})


const db = firebaseApp.firestore();

export { db };