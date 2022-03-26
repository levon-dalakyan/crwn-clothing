import { Route, Routes } from 'react-router-dom';

import { CategoriesPreview } from '../components/shop/CategoriesPreview';
import { CategoryPage } from './СategoryPage';

export const ShopPage = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path="/:category" element={<CategoryPage />} />
    </Routes>
  );
};
