import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBAfnrMnqG6k-2fMFGEjxYAfbSa37eGbU",
  authDomain: "phunbyt.firebaseapp.com",
  projectId: "phunbyt",
  storageBucket: "phunbyt.appspot.com",
  messagingSenderId: "465126570595",
  appId: "1:465126570595:web:af4eb796db375b00d01656",
  measurementId: "G-3L2YG9KP98",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore() 
const auth = firebase.auth()

export {db, auth}