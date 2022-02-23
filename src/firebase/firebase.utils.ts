import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-1mZ4E-Uzqx4NJBcO0ZrtnYZNLhuoCkA',
  authDomain: 'crwn-db-87ba1.firebaseapp.com',
  projectId: 'crwn-db-87ba1',
  storageBucket: 'crwn-db-87ba1.appspot.com',
  messagingSenderId: '234167490147',
  appId: '1:234167490147:web:9ffb0f26d7cdcb65430a56',
  measurementId: 'G-4Q0X3CC2PJ',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
