import { Col, Divider, Row } from 'antd';
import styled from 'styled-components';
import { CheckoutItem } from '../components/checkout/CheckoutItem';
import { useAppSelector } from '../hooks/redux-hooks';

const Wrapper = styled.div`
  width: 55%;
  margin: 50px auto 0;
`;

const Header = styled(Row)`
  font-size: 20px;
  line-height: 20px;
`;

const Total = styled.div`
  width: 100%;
  margin-top: 50px;
  text-align: right;
  font-size: 40px;
`;

export const CheckoutPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector((state) =>
    state.cart.cartItems.reduce(
      (accumulatedTotalPrice, cartItem) =>
        accumulatedTotalPrice + cartItem.quantity * cartItem.price,
      0
    )
  );

  return (
    <Wrapper>
      <Header justify="space-between">
        <Col span={6}>Product</Col>
        <Col span={5}>Description</Col>
        <Col span={6}>Quantity</Col>
        <Col span={4}>Price</Col>
        <Col>Remove</Col>
      </Header>
      <Divider />
      <Row>
        {cartItems.map((item) => (
          <CheckoutItem item={item} />
        ))}
      </Row>
      <Total>TOTAL: ${totalPrice}</Total>
    </Wrapper>
  );
};
