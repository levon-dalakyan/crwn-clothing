import { CollectionType } from '../pages/ShopPage';

export const COLLECTION_ID_MAP: any = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export const selectCollection = (collections: CollectionType[], param: any) => {
  return collections.find(
    (collection) => collection.id === COLLECTION_ID_MAP[param]
  );
};
