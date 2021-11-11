import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgaye8hZ7tZ_RSS-36Y-jDAQId9jrTZc4",
  authDomain: "auth-c54db.firebaseapp.com",
  projectId: "auth-c54db",
  storageBucket: "auth-c54db.appspot.com",
  messagingSenderId: "866690576125",
  appId: "1:866690576125:web:84e70864ffe4981060d894",
  measurementId: "G-79LLZ7WPR0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
