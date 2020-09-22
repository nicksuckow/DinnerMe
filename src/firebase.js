import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCxlcmDy9UQ69QBxEzSn_TtYzEo6l7sczY",
    authDomain: "recipe-me-8d084.firebaseapp.com",
    databaseURL: "https://recipe-me-8d084.firebaseio.com",
    projectId: "recipe-me-8d084",
    storageBucket: "recipe-me-8d084.appspot.com",
    messagingSenderId: "1056369320008",
    appId: "1:1056369320008:web:2ad2ee01b1a835e78f387d",
    measurementId: "G-C6G6WW8H4F"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;