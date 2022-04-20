import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CategoryItem as CategoryItemType } from '../../../store/slices/categories/categoriesSlice';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { Title } from '../../common/Title/Title';
import * as S from './CategoryPreview.styles';

interface CategoryPreviewProps {
  products: CategoryItemType[];
  title: string;
}

export const CategoryPreview: FC<CategoryPreviewProps> = ({
  products,
  title,
}) => {
  return (
    <S.Wrapper>
      <Title>
        <Link to={`/shop/${title}`}>{title.toUpperCase()} </Link>
      </Title>
      <S.Items>
        {products &&
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <CategoryItem key={product.id} product={product} />
            ))}
      </S.Items>
    </S.Wrapper>
  );
};
