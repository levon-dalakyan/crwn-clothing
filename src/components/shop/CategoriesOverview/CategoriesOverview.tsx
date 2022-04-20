import { useAppSelector } from '../../../hooks/redux-hooks';
import {
  selectCategories,
  selectCategoriesError,
  selectCategoriesStatus,
} from '../../../store/slices/categories/categoriesSelectors';
import { Spinner } from '../../common/Spinner/Spinner';
import { CategoryPreview } from '../CategoryPreview/CategoryPreview';

export const CategoriesOverview = () => {
  const categoriesMap = useAppSelector(selectCategories);
  const status = useAppSelector(selectCategoriesStatus);
  const error = useAppSelector(selectCategoriesError);

  if (status === 'loading') {
    return <Spinner />;
  }

  if (status === 'failed') {
    return <p>{error}</p>;
  }

  return (
    <>
      {Object.keys(categoriesMap).map((key) => (
        <CategoryPreview key={key} title={key} products={categoriesMap[key]} />
      ))}
    </>
  );
};
