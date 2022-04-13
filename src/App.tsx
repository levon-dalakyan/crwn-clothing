import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { DocumentData, DocumentSnapshot } from 'firebase/firestore';
import { useAppDispatch } from './hooks/redux-hooks';
import { auth, createUserProfileDocument } from './utils/firebase-utils';
import { setCurrentUser } from './store/slices/user/userSlice';
import { AppContent } from './components/layout/AppContent/AppContent';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let userSnap: DocumentSnapshot<DocumentData> | undefined;
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        userSnap = await createUserProfileDocument(userAuth);
        dispatch(setCurrentUser({ id: userSnap!.id, ...userSnap!.data() }));
      }

      dispatch(setCurrentUser(userAuth));
    });

    return unsubscribe;
  }, [dispatch]);

  return <AppContent />;
}

export default App;
