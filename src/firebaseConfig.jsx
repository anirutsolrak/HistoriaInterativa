import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import 'dotenv/config';


const firebaseConfig = {
  apiKey: 'AIzaSyDcZSNVSYWuH4GOhqf9rrMSYiesL7-O4us',
  authDomain: 'escolhafabula.firebaseapp.com',
  projectId: 'escolhafabula',
  storageBucket: 'escolhafabula.firebasestorage.app',
  messagingSenderId: '435568697459',
  appId: '1:435568697459:web:7427e675f72613a1a80a06',
  measurementId: 'G-KNTZX4RJCC',
};



/*
const firebaseConfig = {
  apiKey: Process.env.FIREBASE_API_KEY,
  authDomain: Process.env.FIREBASE_AUTH_DOMAIN,
  projectId: Process.env.FIREBASE_PROJECT_ID,
  storageBucket: Process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: Process.env.FIREBASE_APP_ID,
  measurementId: Process.env.FIREBASE_MEASUREMENT_ID,
}; */



// Verifica se todas as variáveis de ambiente estão definidas
if (Object.values(firebaseConfig).some(val => val === undefined)) {
  throw new Error("Variáveis de ambiente do Firebase não configuradas corretamente.");
}


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {
  auth,
  analytics,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
