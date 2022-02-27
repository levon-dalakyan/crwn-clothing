import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-1mZ4E-Uzqx4NJBcO0ZrtnYZNLhuoCkA',
  authDomain: 'crwn-db-87ba1.firebaseapp.com',
  projectId: 'crwn-db-87ba1',
  storageBucket: 'crwn-db-87ba1.appspot.com',
  messagingSenderId: '234167490147',
  appId: '1:234167490147:web:9ffb0f26d7cdcb65430a56',
  measurementId: 'G-4Q0X3CC2PJ',
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfileDocument = async (
  userAuth: User | null,
  additionalData?: any
) => {
  if (!userAuth) return;

  const userRef = doc(db, 'users', userAuth.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        createdAt,
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error: any) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
};
