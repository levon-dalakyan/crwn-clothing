import { Typography } from 'antd';

import { SHOP_DATA } from '../components/shop/shop-data';
import { CollectionPreview } from '../components/shop/CollectionPreview';

const { Title } = Typography;

export interface CollectionItemType {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface CollectionType {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItemType[];
}

const COLLECTIONS: CollectionType[] = SHOP_DATA;

export const ShopPage = () => {
  return (
    <>
      <Title>Collections</Title>
      {COLLECTIONS.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </>
  );
};
