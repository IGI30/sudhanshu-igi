import firebase from 'firebase/app';
import 'firebase/firestore';

// import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyDhW7apZs2sHtxaSESvMQJqXrIWnKwFD0o",
    authDomain: "sudhanshu-igi.firebaseapp.com",
    projectId: "sudhanshu-igi",
    storageBucket: "sudhanshu-igi.appspot.com",
    messagingSenderId: "575881925684",
    appId: "1:575881925684:web:adc37342fedaca1c2ba661",
    measurementId: "G-VNPZJ8306L"
});

export const firestore = firebase.firestore();
export const firebaseApp = firebase;