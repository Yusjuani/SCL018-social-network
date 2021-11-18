/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCRXzTGFbssFI_Vgt69WYFu5HAtJeW2vhk',
  authDomain: 'red-social-sport-fem.firebaseapp.com',
  projectId: 'red-social-sport-fem',
  storageBucket: 'red-social-sport-fem.appspot.com',
  messagingSenderId: '136278586908',
  appId: '1:136278586908:web:90cef68cefc0a1dc1751d9',
  measurementId: 'G-QK2DZJ2H58',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signInGoogle = () => {
  const provider = new GoogleAuthProvider(app);
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      window.location.hash = '#/templateHome';
      return user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};
// REGISTRO EMAIL Y PASSWORD NUEVOS USUARIOS

export const newEmail = (email, newpassword) => {
  // retornar esta funcion, hacer cambio de hash
  createUserWithEmailAndPassword(auth, email, newpassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      window.location.hash = '#/login';
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      return errorCode + errorMessage;
    });
  return createUserWithEmailAndPassword;
};

export const logEmail = (emaiLogin, passwordLogin) => {
  signInWithEmailAndPassword(auth, emaiLogin, passwordLogin)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.hash = '#/templateHome';
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorCode + errorMessage;
    });
};
