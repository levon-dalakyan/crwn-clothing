import { Row } from 'antd';
import { useAppSelector } from '../../../hooks/redux-hooks';
import { CollectionType } from '../../../store/slices/collectionsSlice';
// import { Spinner } from '../../common/Spinner/Spinner';
import { HomeCollection } from '../HomeCollection/HomeCollection';

export const Home = () => {
  const collections: CollectionType[] = useAppSelector(
    (state) => state.collections.collections
  );
  // const status = useAppSelector((state) => state.collections.status);
  // const error = useAppSelector((state) => state.collections.error);

  // if (status === 'loading') {
  //   return <Spinner />;
  // }

  // if (status === 'failed') {
  //   return <p>{error}</p>;
  // }

  return (
    <Row>
      {Object.keys(collections).map((key: any) => {
        const collection = collections[key];
        return <HomeCollection key={key} collection={collection} />;
      })}
    </Row>
  );
};
