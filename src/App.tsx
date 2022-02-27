import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';
import { onSnapshot, DocumentSnapshot } from 'firebase/firestore';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { HeaderComponent } from './components/layout/HeaderComponent';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { SignPage } from './pages/SignPage';

const { Header, Content } = Layout;

const HeaderWrapper = styled(Header)`
  padding: 0 20px;
  line-height: 35px;
  font-size: 18px;
`;

function App() {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    let unsubscribeFromAuth: any = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef: any = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapshot: DocumentSnapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }

      setCurrentUser(userAuth);
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <Layout>
      <HeaderWrapper>
        <HeaderComponent currentUser={currentUser} />
      </HeaderWrapper>
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/sign" element={<SignPage />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
