import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux-hooks';
import { selectCurrentUser } from '../../../store/slices/user/userSelectors';
import { Spinner } from '../../common/Spinner/Spinner';

const HomePage = lazy(() => import('../../../pages/HomePage'));
const ShopPage = lazy(() => import('../../../pages/ShopPage'));
const CheckoutPage = lazy(() => import('../../../pages/CheckoutPage'));
const AuthPage = lazy(() => import('../../../pages/AuthPage'));

export const AppRoutes = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop/*" element={<ShopPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route
          path="auth"
          element={currentUser ? <Navigate to="/" /> : <AuthPage />}
        />
      </Routes>
    </Suspense>
  );
};
