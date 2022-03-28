import { useAppSelector } from '../../../../hooks/redux-hooks';
import * as S from './TotalPrice.styles';

export const TotalPrice = () => {
  const totalPrice = useAppSelector((state) =>
    state.cart.cartItems.reduce(
      (accumulatedTotalPrice, cartItem) =>
        accumulatedTotalPrice + cartItem.quantity * cartItem.price,
      0
    )
  );

  return <S.Total>TOTAL: ${totalPrice}</S.Total>;
};
