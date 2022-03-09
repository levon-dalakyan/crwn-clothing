import { Col, Divider, Row } from 'antd';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/redux-hooks';

import {
  addItemToCart,
  CartItemType,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart-slice';

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

const Quantity = styled(Row)`
  text-align: center;
`;

const Arrow = styled(Col)`
  cursor: pointer;
  user-select: none;
`;

const Remove = styled(Col)`
  text-align: right;
  cursor: pointer;
`;

export const CheckoutItem: React.FC<{ item: CartItemType }> = ({ item }) => {
  const dispatch = useAppDispatch();

  const { imageUrl, name, quantity, price } = item;

  return (
    <Wrapper align="middle">
      <Col span={5}>
        <Image src={imageUrl} />
      </Col>
      <Center span={5}>{name}</Center>
      <Col span={5}>
        <Quantity justify="center">
          <Arrow onClick={() => dispatch(removeItemFromCart(item))}>
            &#10094;
          </Arrow>
          <Center span={7}>{quantity}</Center>
          <Arrow onClick={() => dispatch(addItemToCart(item))}>&#10095;</Arrow>
        </Quantity>
      </Col>
      <Center span={7}>{price}</Center>
      <Remove span={2} onClick={() => dispatch(clearItemFromCart(item))}>
        &#10005;
      </Remove>
      <Divider />
    </Wrapper>
  );
};
