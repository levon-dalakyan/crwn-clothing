import { Link } from 'react-router-dom';
import { ProductType } from '../../../store/slices/categories/categoriesSlice';
import { Product } from '../Product/Product';
import { Title } from '../../common/Title/Title';
import * as S from './CategoryPreview.styles';

export const CategoryPreview: React.FC<{
  products: ProductType[];
  title: string;
}> = ({ products, title }) => {
  return (
    <S.Wrapper>
      <Title>
        <Link to={`/shop/${title}`}>{title.toUpperCase()} </Link>
      </Title>
      <S.Items>
        {products &&
          products
            .filter((_, idx) => idx < 4)
            .map((product) => <Product key={product.id} product={product} />)}
      </S.Items>
    </S.Wrapper>
  );
};
