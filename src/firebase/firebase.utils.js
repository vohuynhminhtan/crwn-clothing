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
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
          console.log('error creating user', error.message);  
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;