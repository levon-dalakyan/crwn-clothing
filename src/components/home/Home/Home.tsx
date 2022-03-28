import { Row } from 'antd';
import { useAppSelector } from '../../../hooks/redux-hooks';
import { CollectionType } from '../../../store/slices/collectionsSlice';
import { HomeCollection } from '../HomeCollection/HomeCollection';

export const Home = () => {
  const collections: CollectionType[] = useAppSelector(
    (state) => state.collections.collections
  );

  return (
    <Row>
      {Object.keys(collections).map((key: any) => {
        const collection = collections[key];
        return <HomeCollection key={key} collection={collection} />;
      })}
    </Row>
  );
};
