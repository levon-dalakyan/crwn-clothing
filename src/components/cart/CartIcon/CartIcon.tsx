import { useAppSelector } from '../../../hooks/redux-hooks';
import * as S from './CartIcon.styles';

export const CartIcon = ({ ...props }) => {
  const itemQuantity = useAppSelector((state) =>
    state.cart.cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
  );

  return (
    <S.Wrapper {...props} justify="center" align="middle">
      <S.ShoppingBagIcon />
      <S.Counter>{itemQuantity}</S.Counter>
    </S.Wrapper>
  );
};
