import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB9Djbk97uxxFR7IRZpP-6OeoE-Bbw5l1c",
    authDomain: "crwn-db-bb9b1.firebaseapp.com",
    databaseURL: "https://crwn-db-bb9b1.firebaseio.com",
    projectId: "crwn-db-bb9b1",
    storageBucket: "",
    messagingSenderId: "938240124151",
    appId: "1:938240124151:web:c288ff1a89465dc8"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;