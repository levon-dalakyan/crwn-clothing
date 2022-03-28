import { useAppSelector } from '../../../hooks/redux-hooks';
import { CategoryPreview } from '../CategoryPreview/CategoryPreview';

export const CategoriesOverview = () => {
  const categoriesMap: any = useAppSelector(
    (state) => state.category.categories
  );

  return (
    <>
      {Object.keys(categoriesMap).map((key: string) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </>
  );
};
