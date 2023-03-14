import firebase from 'firebase/app';

// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyC7iRmULd7N9y0JROpynV1ifKPmSamfp-s',
  authDomain: 'chat-web-app-8dbb7.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-8dbb7-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web-app-8dbb7',
  storageBucket: 'chat-web-app-8dbb7.appspot.com',
  messagingSenderId: '65166886051',
  appId: '1:65166886051:web:a586f70345bcbd41376b16',
};

const app = firebase.initializeApp(config);
