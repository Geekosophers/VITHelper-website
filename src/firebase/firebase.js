import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD-YCSsdHnRFuMtkNx_GuVUIMb-hyxe5vc",
  authDomain: "test-app-f6863.firebaseapp.com",
  databaseURL: "https://test-app-f6863.firebaseio.com",
  projectId: "test-app-f6863",
  storageBucket: "test-app-f6863.appspot.com",
  messagingSenderId: "149760926890"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
