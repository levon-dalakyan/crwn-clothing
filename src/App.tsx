import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './hooks/redux-hooks';
import {
  auth,
  createUserProfileDocument,
  getCategoriesAndDocuments,
} from './utils/firebase-utils';
import { setCurrentUser } from './store/slices/userSlice';
import { setCategories } from './store/slices/categorySlice';
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
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();

      dispatch(setCategories(categoriesMap));
    };

    getCategoriesMap();
  }, [dispatch]);

  return <AppContent />;
}

export default App;
