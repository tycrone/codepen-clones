import firebase from 'firebase';
import {initializeApp} from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const Firebase = () => {
  const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
    appId: process.env.REACT_APP_APP_ID
  };
  
  const app = initializeApp(config);
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const db = app.database();
  const databaseData = db.ref('/data');

  const doSignInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);
  const doSignInWithRedirect = () => auth.signInWithRedirect(provider);
  const doSignOut = () => auth.signOut();

  const onAuthUserListener = (next, fallback) => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {        
        next(authUser);
      } else {
        fallback();
      }
    });
  }  

  return {
    doSignInWithEmailAndPassword,
    doSignInWithRedirect,
    doSignOut,
    onAuthUserListener,
    databaseData
  }
}

export default Firebase;