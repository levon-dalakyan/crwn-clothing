import { CartItem } from '../store/slices/cart/cartSlice';

export const sortAddItemToCart = (
  cartItems: CartItem[],
  cartItemToAdd: CartItem
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
  cartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const existedCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existedCartItem && existedCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== existedCartItem.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === existedCartItem?.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
