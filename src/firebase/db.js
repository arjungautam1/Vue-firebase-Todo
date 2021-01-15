import firebase from 'firebase';
import 'firebase/firestore';


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDmEsdrfhknZq70i3On9or3Qns6N0KJ-BM",
    authDomain: "vue-fire-todo-bc5e4.firebaseapp.com",
    projectId: "vue-fire-todo-bc5e4",
    storageBucket: "vue-fire-todo-bc5e4.appspot.com",
    messagingSenderId: "469259484097",
    appId: "1:469259484097:web:a980ffdf890dd11af04d40"
  };
  // Initialize Firebase
  export cost db=firebase.initializeApp(firebaseConfig).firestore();