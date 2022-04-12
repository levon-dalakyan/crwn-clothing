import { Empty } from 'antd';
import { useAppSelector } from '../../../../hooks/redux-hooks';
import { selectCartItems } from '../../../../store/slices/cart/cartSelectors';
import { CartDropdownItem } from '../CartDropdownItem/CartDropdownItem';
import * as S from './CartDropdownItems.styles';

export const CartDropdownItems = () => {
  const cartItems = useAppSelector(selectCartItems);

  return (
    <>
      {cartItems.length ? (
        <S.CartItems align="top">
          {cartItems.map((cartItem) => (
            <CartDropdownItem key={cartItem.id} item={cartItem} />
          ))}
        </S.CartItems>
      ) : (
        <Empty description={'Your cart is empty'} />
      )}
    </>
  );
};
