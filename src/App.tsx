import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './hooks/redux-hooks';
import {
  auth,
  createUserProfileDocument,
  getCategoriesAndDocuments,
  getCollectionsAndDocuments,
} from './utils/firebase-utils';
import { setCurrentUser } from './store/slices/userSlice';
import { setCategories } from './store/slices/categorySlice';
import { setCollections } from './store/slices/collectionsSlice';
import { AppContent } from './components/layout/AppContent/AppContent';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        createUserProfileDocument(userAuth);
      }

      dispatch(setCurrentUser(userAuth));
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    const getCategoriesFromFirestore = async () => {
      const categoriesMap = await getCategoriesAndDocuments();

      dispatch(setCategories(categoriesMap));
    };

    getCategoriesFromFirestore();
  }, [dispatch]);

  useEffect(() => {
    const getCategoriesFromFirestore = async () => {
      const collections = await getCollectionsAndDocuments();

      dispatch(setCollections(collections));
    };

    getCategoriesFromFirestore();
  }, [dispatch]);

  return <AppContent />;
}

export default App;
