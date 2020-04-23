import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDg7PfRkuIt2l1NhA9zR7kmaDc1EJBMTX8",
    authDomain: "kitlocker-db.firebaseapp.com",
    databaseURL: "https://kitlocker-db.firebaseio.com",
    projectId: "kitlocker-db",
    storageBucket: "kitlocker-db.appspot.com",
    messagingSenderId: "854260646757",
    appId: "1:854260646757:web:3b79e0d6ea9a917c03978c"
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
      console.log('Error creating user', error.message);
    }

  }

  return userRef;

}

firebase.initializeApp(config);

// export firebase services to be used anywhere in the app
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// configuring google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;