import { Row } from 'antd';
import { useParams } from 'react-router-dom';

import { selectCollection } from '../utils/shop-utils';

import { CollectionType } from './ShopPage';
import { CollectionItem } from '../components/shop/CollectionItem';

export const CollectionPage: React.FC<{ collections: CollectionType[] }> = ({
  collections,
}) => {
  const params = useParams();

  const selectedCollection: CollectionType | undefined = selectCollection(
    collections,
    params.collectionId
  );

  return (
    <Row justify="space-between">
      {selectedCollection?.items.map((item) => (
        <CollectionItem item={item} />
      ))}
    </Row>
  );
};
