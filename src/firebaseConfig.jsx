import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDcZSNVSYWuH4GOhqf9rrMSYiesL7-O4us',
  authDomain: 'escolhafabula.firebaseapp.com',
  projectId: 'escolhafabula',
  storageBucket: 'escolhafabula.firebasestorage.app',
  messagingSenderId: '435568697459',
  appId: '1:435568697459:web:7427e675f72613a1a80a06',
  measurementId: 'G-KNTZX4RJCC',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {
  auth,
  analytics,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
