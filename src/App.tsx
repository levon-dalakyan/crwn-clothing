import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import { onAuthStateChanged } from 'firebase/auth';

import { useAppDispatch, useAppSelector } from './hooks/redux-hooks';
import {
  addCollectionAndDocuments,
  auth,
  createUserProfileDocument,
  getCategoriesAndDocuments,
} from './utils/firebase-utils';
import { setCurrentUser } from './store/user-slice';

import { HeaderComponent } from './components/layout/HeaderComponent';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { AuthenticationPage } from './pages/AuthenticationPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { SHOP_DATA } from './components/shop/shop-data';

const HeaderWrapper = styled(Header)`
  padding: 0 20px;
  line-height: 35px;
  font-size: 18px;
`;

function App() {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        createUserProfileDocument(userAuth);
      }

      dispatch(setCurrentUser(userAuth));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();

      console.log(categoriesMap);
    };

    getCategoriesMap();
  }, []);

  return (
    <Layout>
      <HeaderWrapper>
        <HeaderComponent />
      </HeaderWrapper>
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop/*" element={<ShopPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route
            path="auth"
            element={currentUser ? <Navigate to="/" /> : <AuthenticationPage />}
          />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
