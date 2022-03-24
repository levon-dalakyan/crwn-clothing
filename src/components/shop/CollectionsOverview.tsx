import { CollectionsType } from '../../pages/ShopPage';

import { CollectionPreview } from './CollectionPreview';

export const CollectionsOverview: React.FC<{
  collections: any;
}> = ({ collections }) => {
  const collectionsArray = Object.keys(collections).map(
    (key) => collections[key].items
  );

  // const distrCollArr = collectionsArray.map((collection) =>
  //   distrCollArr.concat(collection)
  // );

  // console.log(distrCollArr);

  return (
    <>
      {/* {distrCollArr.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          routeName={collection.routeName}
          items={collection.items}
        /> */}
      {/* ))} */}
    </>
  );
};
