import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const config = {
  apiKey: "AIzaSyDmt7GOlhDOqro4S7-OU4GFjoWL7XcuQAc",
  authDomain: "clothing-app-c6a82.firebaseapp.com",
  projectId: "clothing-app-c6a82",
  storageBucket: "clothing-app-c6a82.appspot.com",
  messagingSenderId: "932597096295",
  appId: "1:932597096295:web:438ed74b168e3a991799c2",
  measurementId: "G-53FL6E7CFY"
}
// Initialize Firebase
const app = initializeApp(config);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const firestore = getFirestore();

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>signInWithPopup(auth, provider)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  console.log('token',token,user)
  // ...
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.customData.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...
});

export default app;