import {initializeApp } from "firebase/app";
import "firebase/database";
// https://firebase.google.com/docs/web/setup#available-libraries

const app = initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
	appId: process.env.REACT_APP_APP_ID
});

export default app;

  //HOSTING REFERENCE: firebase init & firebase deploy after build to public dir