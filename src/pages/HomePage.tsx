import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux-hooks';
import { fetchCollections } from '../store/slices/collections/collectionsSlice';
import { Home } from '../components/home/Home/Home';

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  return <Home />;
};

export default HomePage;
