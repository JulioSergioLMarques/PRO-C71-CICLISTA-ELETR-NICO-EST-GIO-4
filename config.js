import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAWIEFbQcqLepesHrBQn7Jg9xNlS0N97a8",
  authDomain: "ciclista-eletronico-f5f19.firebaseapp.com",
  projectId: "ciclista-eletronico-f5f19",
  storageBucket: "ciclista-eletronico-f5f19.appspot.com",
  messagingSenderId: "482755161954",
  appId: "1:482755161954:web:2cf883b7b3b29a37ea463b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
