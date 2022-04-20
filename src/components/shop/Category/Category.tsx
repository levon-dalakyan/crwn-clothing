import { FC } from 'react';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { CategoryItem as CategoryItemType } from '../../../store/slices/categories/categoriesSlice';
import * as S from './Category.styles';

interface CategoryProps {
  products: CategoryItemType[];
}

export const Category: FC<CategoryProps> = ({ products }) => {
  return (
    <S.Items gutter={[0, 60]}>
      {products.map((product) => (
        <CategoryItem key={product.id} product={product} />
      ))}
    </S.Items>
  );
};
