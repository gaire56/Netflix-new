import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDGyDJmNwxk94iBICz28IgwOohCSQyePlo',
  authDomain: 'netflix-4331b.firebaseapp.com',
  projectId: 'netflix-4331b',
  storageBucket: 'netflix-4331b.appspot.com',
  messagingSenderId: '295301046522',
  appId: '1:295301046522:web:7fdcf0695b4362b238a943',
  measurementId: 'G-ZZY3TJ080W',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
