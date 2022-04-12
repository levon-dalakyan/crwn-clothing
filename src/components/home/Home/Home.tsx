import { Row } from 'antd';
import { useAppSelector } from '../../../hooks/redux-hooks';
import {
  selectCollections,
  selectCollectionsError,
  selectCollectionsStatus,
} from '../../../store/slices/collections/collectionsSelectors';
import { CollectionType } from '../../../store/slices/collections/collectionsSlice';
// import { Spinner } from '../../common/Spinner/Spinner';
import { HomeCollection } from '../HomeCollection/HomeCollection';

export const Home = () => {
  const collections: CollectionType[] = useAppSelector(selectCollections);
  // const status = useAppSelector(selectCollectionsStatus);
  // const error = useAppSelector(selectCollectionsError);

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
