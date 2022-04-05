import { useAppSelector } from '../../../hooks/redux-hooks';
import { Spinner } from '../../common/Spinner/Spinner';
import { CategoryPreview } from '../CategoryPreview/CategoryPreview';

export const CategoriesOverview = () => {
  const categoriesMap: any = useAppSelector(
    (state) => state.categories.categories
  );
  const status = useAppSelector((state) => state.categories.status);
  const error = useAppSelector((state) => state.categories.error);

  if (status === 'loading') {
    return <Spinner />;
  }

  if (status === 'failed') {
    return <p>{error}</p>;
  }

  return (
    <>
      {Object.keys(categoriesMap).map((key: string) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </>
  );
};
