import firebase from 'firebase'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDd8rpojKaiYnvOBBWZ4VZLY2b6SJ_Pw0M",
    authDomain: "nuggets-d611f.firebaseapp.com",
    databaseURL: "https://nuggets-d611f.firebaseio.com",
    projectId: "nuggets-d611f",
    storageBucket: "nuggets-d611f.appspot.com",
    messagingSenderId: "698965367955"
  };

  export const firebaseApp = firebase.initializeApp(config)
