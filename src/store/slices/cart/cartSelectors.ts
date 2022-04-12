import { createSelector, Selector } from 'reselect';
import { RootState } from './../../store';
import { CartStateType } from './cartSlice';

const selectCartReducer: Selector<RootState, CartStateType> = (state) =>
  state.cart;

export const selectCartItems = createSelector(
  selectCartReducer,
  (cart) => cart.cartItems
);

export const selectCartQuantity = createSelector(selectCartItems, (cartItems) =>
  cartItems.reduce(
    (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
    0
  )
);

export const selectCartTotalPrice = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce(
      (totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity,
      0
    )
);
