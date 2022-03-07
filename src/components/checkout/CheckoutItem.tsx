import { Col, Divider, Row } from 'antd';
import styled from 'styled-components';

import { CartItemType } from '../../store/cart-slice';

const Wrapper = styled(Row)`
  width: 100%;
  padding-bottom: 15px;
  font-size: 20px;
`;

const Image = styled.img`
  width: 100%;
`;

const Center = styled(Col)`
  text-align: center;
`;

const Right = styled(Col)`
  text-align: right;
`;

export const CheckoutItem: React.FC<{ item: CartItemType }> = ({
  item: { imageUrl, quantity, price, name },
}) => {
  return (
    <Wrapper align="middle">
      <Col span={5}>
        <Image src={imageUrl} />
      </Col>
      <Center span={5}>{name}</Center>
      <Center span={5}>{quantity}</Center>
      <Center span={7}>{price}</Center>
      <Right span={2}>&#10005;</Right>
      <Divider />
    </Wrapper>
  );
};
