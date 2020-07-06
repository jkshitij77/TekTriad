import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyCvZhcjyN7acNQVcCUyGYeSU4Vqy2IIFp4",
    authDomain: "contact-tektriad.firebaseapp.com",
    databaseURL: "https://contact-tektriad.firebaseio.com",
    projectId: "contact-tektriad",
    storageBucket: "contact-tektriad.appspot.com",
    messagingSenderId: "550652925304",
    appId: "1:550652925304:web:3567680c1322e116c3248d",
    measurementId: "G-KLQ093VZN6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export default firebase;