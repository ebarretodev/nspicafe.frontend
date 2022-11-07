import firebase from "firebase"

// Your web app's Firebase configuration+

// const firebaseConfig = {
//     apiKey: "AIzaSyBqQXfD4jXGYOjSLR8Tzt0oXK3mOsoi-5M",
//     authDomain: "nspicafe.firebaseapp.com",
//     projectId: "nspicafe",
//     storageBucket: "nspicafe.appspot.com",
//     messagingSenderId: "234008296458",
//     appId: "1:234008296458:web:686ad33b6e6936746533f3",
// }

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
