import firebase from 'firebase'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCFNi8o2uSFCGOjcN9KefNcJwiGTQPxOEk",
    authDomain: "goldennuggets-b8a52.firebaseapp.com",
    databaseURL: "https://goldennuggets-b8a52.firebaseio.com",
    projectId: "goldennuggets-b8a52",
    storageBucket: "goldennuggets-b8a52.appspot.com",
    messagingSenderId: "760925300122"
  };

  export const firebaseApp = firebase.initializeApp(config)