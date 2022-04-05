import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './hooks/redux-hooks';
import {
  auth,
  createUserProfileDocument,
  getCollectionsAndDocuments,
} from './utils/firebase-utils';
import { setCurrentUser } from './store/slices/userSlice';
import { fetchCategories } from './store/slices/categoriesSlice';
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
    dispatch(fetchCategories());
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
