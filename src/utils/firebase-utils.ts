import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  getDocs,
  orderBy,
} from 'firebase/firestore';
import { writeBatch } from 'firebase/firestore';
import { CategoriesType } from '../store/slices/categoriesSlice';

const firebaseConfig = {
  apiKey: 'AIzaSyClVtHToolcoDhgCgumKme1GP0CjC9Mgzk',
  authDomain: 'crwn-clothing-94b9e.firebaseapp.com',
  projectId: 'crwn-clothing-94b9e',
  storageBucket: 'crwn-clothing-94b9e.appspot.com',
  messagingSenderId: '567987085020',
  appId: '1:567987085020:web:ff415e45cfa22209611e19',
  measurementId: 'G-FX7GCQ722Q',
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: any
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((obj: any) => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(docRef, obj);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap: CategoriesType = querySnapshot.docs.reduce(
    (acc: any, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    },
    {}
  );

  return categoryMap;
};

export const getCollectionsAndDocuments = async () => {
  const collectionRef = collection(db, 'collections');
  const q = query(collectionRef, orderBy('id', 'asc'));

  const querySnapshot = await getDocs(q);
  const collections = querySnapshot.docs.reduce((acc: any, docSnapshot) => {
    const data = docSnapshot.data();
    acc[data.title] = data;
    return acc;
  }, {});

  return collections;
};

export const createUserProfileDocument = async (
  userAuth: User | null,
  additionalData?: any
) => {
  if (!userAuth) return;

  const userRef = doc(db, 'users', userAuth.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        createdAt,
        displayName,
        email,
        ...additionalData,
      });
    } catch (error: any) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
