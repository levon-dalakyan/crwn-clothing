import { Row } from 'antd';
import styled from 'styled-components';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { useAppSelector } from '../../hooks/redux-hooks';

const Wrapper = styled(Row)`
  width: 45px;
  height: 45px;
  margin-left: 40px;
  cursor: pointer;
`;

const ShoppingBagIcon = styled(ShoppingBag)`
  width: 24px;
  height: 24px;
`;

const Counter = styled.span`
  position: absolute;
  font-size: 12px;
  bottom: 2px;
  font-weight: bold;
  user-select: none;
`;

export const CartIcon = ({ ...props }) => {
  const itemQuantity = useAppSelector((state) =>
    state.cart.cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
  );

  return (
    <Wrapper {...props} justify="center" align="middle">
      <ShoppingBagIcon />
      <Counter>{itemQuantity}</Counter>
    </Wrapper>
  );
};
