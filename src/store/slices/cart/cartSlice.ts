import { createSlice } from '@reduxjs/toolkit';
import { CategoryItem } from '../categories/categoriesSlice';
import {
  removeItemIfQuantityValue,
  sortAddItemToCart,
} from '../../../utils/cart-utils';

export type CartItem = CategoryItem & {
  quantity: number;
};

export interface ICartState {
  cartItems: CartItem[];
}

const initialState: ICartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems = sortAddItemToCart(state.cartItems, action.payload);
    },
    clearItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = removeItemIfQuantityValue(
        state.cartItems,
        action.payload
      );
    },
  },
});

export const { addItemToCart, clearItemFromCart, removeItemFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
