import { Row, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useAppSelector } from '../hooks/redux-hooks';

import { Product } from '../components/shop/Product';

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const Title = styled(Typography.Title)`
  font-size: 34px;
  text-align: center;
  margin-bottom: 25px;
`;

const Items = styled(Row)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
`;

export const CategoryPage = () => {
  const categories: any = useAppSelector((state) => state.category.categories);

  const { category }: any = useParams();
  const products = categories[category];

  return (
    <Wrapper>
      <Title level={2}>{category.toUpperCase()}</Title>
      <Items gutter={[0, 60]}>
        {products.map((product: any) => (
          <Product key={product.id} product={product} />
        ))}
      </Items>
    </Wrapper>
  );
};
