import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux-hooks';
import { HomePage } from '../../../pages/HomePage';
import { ShopPage } from '../../../pages/ShopPage';
import { AuthPage } from '../../../pages/AuthPage';
import { CheckoutPage } from '../../../pages/CheckoutPage';

export const AppRoutes = () => {
  const currentUser = useAppSelector((state) => state.user.currentUser);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="shop/*" element={<ShopPage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route
        path="auth"
        element={currentUser ? <Navigate to="/" /> : <AuthPage />}
      />
    </Routes>
  );
};
