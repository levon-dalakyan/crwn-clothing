import { CollectionsType } from '../../pages/ShopPage';

import { CollectionPreview } from './CollectionPreview';

export const CollectionsOverview: React.FC<{
  collections: any;
}> = ({ collections }) => {
  return (
    <>
      {/* {collections.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          routeName={collection.routeName}
          items={collection.items}
        />
      ))} */}
    </>
  );
};
