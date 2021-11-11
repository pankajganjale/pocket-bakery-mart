import firebase from "firebase/app";
//import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF60IZAwzEKfGRfvN_vraFi6r8Cbe0j1E",
  authDomain: "againotp-ec978.firebaseapp.com",
  projectId: "againotp-ec978",
  storageBucket: "againotp-ec978.appspot.com",
  messagingSenderId: "171229602965",
  appId: "1:171229602965:web:c7aa17ca2a2e754cf3279c",
};

// Initialize Firebase

firebase.initializeApp({ firebaseConfig }, "name");

export default firebase;
