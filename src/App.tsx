import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout, { Content, Header as AntHeader } from 'antd/lib/layout/layout';
import { onAuthStateChanged } from 'firebase/auth';

import { useAppDispatch, useAppSelector } from './hooks/redux-hooks';
import {
  auth,
  createUserProfileDocument,
  getCategoriesAndDocuments,
} from './utils/firebase-utils';
import { setCurrentUser } from './store/user-slice';

import { Navigation } from './components/layout/Navigation';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { AuthenticationPage } from './pages/AuthenticationPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { setCategories } from './store/category-slice';

const Header = styled(AntHeader)`
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
  }, [dispatch]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();

      dispatch(setCategories(categoriesMap));
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Layout>
      <Header>
        <Navigation />
      </Header>
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
