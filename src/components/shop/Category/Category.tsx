import { Product } from '../../../components/shop/Product/Product';
import { ProductType } from '../../../store/slices/categorySlice';
import * as S from './Category.styles';

export const Category: React.FC<{ products: ProductType[] }> = ({
  products,
}) => {
  return (
    <S.Items gutter={[0, 60]}>
      {products.map((product: any) => (
        <Product key={product.id} product={product} />
      ))}
    </S.Items>
  );
};
