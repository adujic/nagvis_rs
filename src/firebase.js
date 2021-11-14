import firebase from 'firebase'
import 'firebase/database'


const config = {
    apiKey: "AIzaSyDVVfcTVmMP-yQuyj949MadsIlviTzyyeI",
    authDomain: "nagvisrs.firebaseapp.com",
    databaseURL: "https://nagvisrs-default-rtdb.firebaseio.com",
    projectId: "nagvisrs",
    storageBucket: "nagvisrs.appspot.com",
    messagingSenderId: "376755268021",
    appId: "1:376755268021:web:7be8f30abc92dfc5b7d1fc",
    measurementId: "G-R5KYD0X791"
  };


export const db = firebase.initializeApp(config).database();

//export const newsRef = db.ref('news');