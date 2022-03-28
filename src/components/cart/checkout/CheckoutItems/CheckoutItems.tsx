import { Row, Empty } from 'antd';
import { useAppSelector } from '../../../../hooks/redux-hooks';
import { CheckoutItem } from '../../../../components/cart/checkout/CheckoutItem/CheckoutItem';

export const CheckoutItems = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  return (
    <Row justify="center">
      {cartItems.length ? (
        cartItems.map((item) => <CheckoutItem item={item} />)
      ) : (
        <Empty description={'No products in cart yet'} />
      )}
    </Row>
  );
};
