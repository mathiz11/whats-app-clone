import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeq2_efSQOOoV-RsF1qMV5LPTus_a_WBQ",
  authDomain: "signal-clone-c712c.firebaseapp.com",
  projectId: "signal-clone-c712c",
  storageBucket: "signal-clone-c712c.appspot.com",
  messagingSenderId: "1061020934498",
  appId: "1:1061020934498:web:c39fa38867d0b5fd954c3b",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();

export { db, auth };
