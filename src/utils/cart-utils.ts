import { CartItemType } from '../store/slices/cart/cartSlice';

export const sortAddItemToCart = (
  cartItems: CartItemType[],
  cartItemToAdd: CartItemType
) => {
  const cartItemExists = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (cartItemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemIfQuantityValue = (
  cartItems: CartItemType[],
  cartItemToRemove: CartItemType
) => {
  const existedCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existedCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== existedCartItem.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === existedCartItem?.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
