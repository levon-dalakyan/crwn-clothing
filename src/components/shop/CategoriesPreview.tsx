import { useAppSelector } from '../../hooks/redux-hooks';

import { Category } from './Category';

export const CategoriesPreview = () => {
  const categoriesMap: any = useAppSelector(
    (state) => state.category.categories
  );

  return (
    <>
      {Object.keys(categoriesMap).map((key: string) => {
        const products = categoriesMap[key];
        return <Category key={key} title={key} products={products} />;
      })}
    </>
  );
};
