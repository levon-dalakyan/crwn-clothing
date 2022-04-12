import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux-hooks';
import { Title } from '../components/common/Title/Title';
import { Category } from '../components/shop/Category/Category';
import { selectCategories } from '../store/slices/categories/categoriesSelectors';

export const CategoryPage = () => {
  const categories: any = useAppSelector(selectCategories);

  const { category }: any = useParams();
  const products = categories[category];

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <Category products={products} />
    </>
  );
};
