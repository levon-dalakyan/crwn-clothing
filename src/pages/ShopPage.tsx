import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux-hooks';
import { fetchCategories } from '../store/slices/categories/categoriesSlice';
import { Shop } from '../components/shop/Shop/Shop';

export const ShopPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return <Shop />;
};
