import { ICategory } from './../store/slices/categories/categoriesSlice';
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
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { writeBatch } from 'firebase/firestore';
import { ICategoriesMap } from '../store/slices/categories/categoriesSlice';
import {
  ICollection,
  ICollectionsMap,
} from '../store/slices/collections/collectionsSlice';

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

interface IObjectToAdd {
  title: string;
}

export const addCollectionAndDocuments = async <T extends IObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(docRef, obj);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async (): Promise<ICategoriesMap> => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoriesMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data() as ICategory;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as ICategoriesMap);

  return categoriesMap;
};

export const getCollectionsAndDocuments =
  async (): Promise<ICollectionsMap> => {
    const collectionRef = collection(db, 'collections');
    const q = query(collectionRef, orderBy('id', 'asc'));

    const querySnapshot = await getDocs(q);

    const collections = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const data = docSnapshot.data() as ICollection;
      acc[data.title] = data;
      return acc;
    }, {} as ICollectionsMap);

    return collections;
  };

interface AdditionalInformation {
  displayName?: string;
}

export interface UserData {
  createdAt: Date;
  displayName: string;
  email: string;
}

export const createUserProfileDocument = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<QueryDocumentSnapshot<UserData>> => {
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
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating user', error);
    }
  }

  return userSnap as QueryDocumentSnapshot<UserData>;
};
