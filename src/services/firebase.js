import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCuP6N3t7DLo7cyvflOM2vwismSxg2hhYw",
    authDomain: "notp-8e252.firebaseapp.com",
    projectId: "notp-8e252",
    storageBucket: "notp-8e252.appspot.com",
    messagingSenderId: "488224415964",
    appId: "1:488224415964:web:dbe4d3299fd33645d81419",
    // measurementId: "G-TZYYRF9FFY"
  };
 
firebase.initializeApp(config);

// setup a provider
const googleProvider = new firebase.auth.GoogleAuthProvider();
// const githubProvider = new firebase.auth.GithubAuthProvider();

// Reference to firebase auth
const auth = firebase.auth();

// Auth functions
function login() {
    auth.signInWithPopup(googleProvider);
}

function logout() {
    auth.signOut();
}

// Named exports 
export {
    login,
    logout, 
    auth
}


