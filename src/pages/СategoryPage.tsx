import { useParams } from 'react-router-dom';
import { Row } from 'antd';
import { useAppSelector } from '../hooks/redux-hooks';
import { Title } from '../components/common/Title/Title';
import { Category } from '../components/shop/Category/Category';
import { selectCategories } from '../store/slices/categories/categoriesSelectors';

export const CategoryPage = () => {
  const categoriesMap = useAppSelector(selectCategories);

  interface CategoryRouteParams {
    category: string;
  }

  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;

  const products = categoriesMap[category];

  return (
    <>
      <Row justify="center">
        <Title>{category.toUpperCase()}</Title>
      </Row>
      <Category products={products} />
    </>
  );
};
