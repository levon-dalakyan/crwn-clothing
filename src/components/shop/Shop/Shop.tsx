import { Route, Routes } from 'react-router-dom';
import { CategoriesOverview } from '../CategoriesOverview/CategoriesOverview';
import { CategoryPage } from '../../../pages/СategoryPage';

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesOverview />} />
      <Route path="/:category" element={<CategoryPage />} />
    </Routes>
  );
};
