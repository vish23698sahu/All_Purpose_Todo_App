import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDgXH9RehrKqfAWAXcFQrK-maLxfDpOer8",
    authDomain: "react-authentication-d6c5b.firebaseapp.com",
    projectId: "react-authentication-d6c5b",
    storageBucket: "react-authentication-d6c5b.appspot.com",
    messagingSenderId: "182130772555",
    appId: "1:182130772555:web:c328108efda22faf7c5bce"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };