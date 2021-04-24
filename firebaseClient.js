import firebase from 'firebase'

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDpDMUA26P8qKqEkUXoxhKMl_9Yf8Rbk0U',
  authDomain: 'usuarios-lp.firebaseapp.com',
  databaseURL: 'https://usuarios-lp-default-rtdb.firebaseio.com',
  projectId: 'usuarios-lp',
  storageBucket: 'usuarios-lp.appspot.com',
  messagingSenderId: '398830417354',
  appId: '1:398830417354:web:d7960744d636c4553ecb33',
}

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG)
  }
}
