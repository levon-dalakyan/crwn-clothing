import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './hooks/redux-hooks';
import {
  auth,
  createUserProfileDocument,
  UserData,
} from './utils/firebase-utils';
import { setCurrentUser } from './store/slices/user/userSlice';
import { AppContent } from './components/layout/AppContent/AppContent';
import { QueryDocumentSnapshot } from 'firebase/firestore';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let userSnap: QueryDocumentSnapshot<UserData>;
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        userSnap = await createUserProfileDocument(userAuth);
        dispatch(setCurrentUser({ id: userSnap.id, ...userSnap.data() }));
      }

      dispatch(setCurrentUser(userAuth));
    });

    return unsubscribe;
  }, [dispatch]);

  return <AppContent />;
}

export default App;
