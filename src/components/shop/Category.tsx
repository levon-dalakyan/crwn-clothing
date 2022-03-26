import styled from 'styled-components';
import { Row, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { ProductType } from '../../store/category-slice';

import { Product } from './Product';

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const Title = styled(Typography.Title)`
  font-size: 28px;
`;

const Items = styled(Row)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
`;

export const Category: React.FC<{
  products: ProductType[];
  title: string;
}> = ({ products, title }) => {
  return (
    <Wrapper>
      <Title level={2}>
        <Link to={`/shop/${title}`}>{title.toUpperCase()} </Link>
      </Title>
      <Items>
        {products &&
          products
            .filter((_, idx) => idx < 4)
            .map((product) => <Product key={product.id} product={product} />)}
      </Items>
    </Wrapper>
  );
};
