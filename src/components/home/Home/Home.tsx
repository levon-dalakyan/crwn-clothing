import { Row } from 'antd';
import { useAppSelector } from '../../../hooks/redux-hooks';
import {
  selectCollections,
  selectCollectionsError,
  selectCollectionsStatus,
} from '../../../store/slices/collections/collectionsSelectors';
import { ICollectionsMap } from '../../../store/slices/collections/collectionsSlice';
import { Spinner } from '../../common/Spinner/Spinner';
import { HomeCollection } from '../HomeCollection/HomeCollection';

export const Home = () => {
  const collections: ICollectionsMap = useAppSelector(selectCollections);
  const status = useAppSelector(selectCollectionsStatus);
  const error = useAppSelector(selectCollectionsError);

  if (status === 'loading') {
    return <Spinner />;
  }

  if (status === 'failed') {
    return <p>{error}</p>;
  }

  return (
    <Row>
      {Object.keys(collections).map((key: any) => (
        <HomeCollection key={key} collection={collections[key]} />
      ))}
    </Row>
  );
};
