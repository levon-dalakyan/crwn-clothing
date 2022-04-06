import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux-hooks';
import { fetchCollections } from '../store/slices/collectionsSlice';
import { Home } from '../components/home/Home/Home';

export const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  return <Home />;
};
