import { Row, Empty } from 'antd';
import { useAppSelector } from '../../../../hooks/redux-hooks';
import { selectCartItems } from '../../../../store/slices/cart/cartSelectors';
import { CheckoutItem } from '../../../../components/cart/checkout/CheckoutItem/CheckoutItem';

export const CheckoutItems = () => {
  const cartItems = useAppSelector(selectCartItems);

  return (
    <Row justify="center">
      {cartItems.length ? (
        cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)
      ) : (
        <Empty description={'No products in cart yet'} />
      )}
    </Row>
  );
};
