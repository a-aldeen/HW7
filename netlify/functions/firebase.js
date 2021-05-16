const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBfODmXfUBbVeN0g77acFliBr2yoWkTqHw",
  authDomain: "kiei-hw7.firebaseapp.com",
  projectId: "kiei-hw7",
  storageBucket: "kiei-hw7.appspot.com",
  messagingSenderId: "325719503717",
  appId: "1:325719503717:web:4eeb74a6e0fa132422a78c"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase