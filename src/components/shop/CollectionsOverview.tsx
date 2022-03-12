import { CollectionType } from '../../pages/ShopPage';

import { CollectionPreview } from './CollectionPreview';

export const CollectionsOverview: React.FC<{
  collections: CollectionType[];
}> = ({ collections }) => {
  return (
    <>
      {collections.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </>
  );
};
