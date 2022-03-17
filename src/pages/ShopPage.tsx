import { Route, Routes } from 'react-router-dom';
import { CollectionsOverview } from '../components/shop/CollectionsOverview';
import { SHOP_DATA } from '../components/shop/shop-data';
import { CollectionPage } from './CollectionPage';

export interface CollectionItemType {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface CollectionType {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItemType[];
}

export interface CollectionsType {
  hats: CollectionType;
  sneakers: CollectionType;
  jackets: CollectionType;
  womens: CollectionType;
  mens: CollectionType;
}

const COLLECTIONS: CollectionsType = SHOP_DATA;

export const ShopPage = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<CollectionsOverview collections={COLLECTIONS} />}
      />
      <Route
        path="/:collectionId"
        element={<CollectionPage collections={COLLECTIONS} />}
      />
    </Routes>
  );
};
