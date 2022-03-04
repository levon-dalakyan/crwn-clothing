import { createSlice } from '@reduxjs/toolkit';

import { sortAddItemToCart } from '../utils/cart-utils';

export interface CartItemType {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartStateType {
  cartItems: CartItemType[];
}

const initialState: CartStateType = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems = sortAddItemToCart(state.cartItems, action.payload);
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
