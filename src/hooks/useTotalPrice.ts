import { useAppSelector } from './redux-hooks';

export const useTotalPrice = () => {
  const totalPrice = useAppSelector((state) =>
    state.cart.cartItems.reduce(
      (accumulatedTotalPrice, cartItem) =>
        accumulatedTotalPrice + cartItem.quantity * cartItem.price,
      0
    )
  );

  return totalPrice;
};
