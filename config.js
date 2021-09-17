import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyDPOeXNUJrNu-jtdXqN-JJNyUrjkjdurEA",
  authDomain: "info-provider-9b875.firebaseapp.com",
  projectId: "info-provider-9b875",
  storageBucket: "info-provider-9b875.appspot.com",
  messagingSenderId: "527959115894",
  appId: "1:527959115894:web:bdfea85197389c3d557757"
};
//Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
