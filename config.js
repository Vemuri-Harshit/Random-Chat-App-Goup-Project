import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYFknKV9IWOBbjMT84mWRqtQ0WuLZ46Ac",
    authDomain: "randomchatapp-4a4c2.firebaseapp.com",
    projectId: "randomchatapp-4a4c2",
    storageBucket: "randomchatapp-4a4c2.appspot.com",
    messagingSenderId: "1012070667515",
    appId: "1:1012070667515:web:22db025636d8b1ffd18c5e",
    measurementId: "G-NSZ73LZVQF"
};


if(!firebase.apps.length){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
