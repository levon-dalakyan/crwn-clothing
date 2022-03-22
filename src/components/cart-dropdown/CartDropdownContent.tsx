import { Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/redux-hooks';

import { CustomButton } from '../UI/CustomButton';
import { CartDropdownItem } from './CartDropdownItem';

const Wrapper = styled(Row)`
  width: 240px;
  height: 340px;
  padding: 15px 15px 0 15px;
  border: 1px solid #000;
  background-color: #fff;
`;

const CartItems = styled(Row)`
  height: 240px;
  overflow: auto;
`;

const Empty = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const ButtonWrapper = styled(Row)`
  width: 100%;

  & button {
    padding: 0 50px;
  }
`;

export const CartDropdownContent: React.FC<{
  setVisibility: () => void;
}> = ({ setVisibility }) => {
  const navigate = useNavigate();

  const cartItems = useAppSelector((state) => state.cart.cartItems);

  return (
    <Wrapper>
      {cartItems.length ? (
        <CartItems align="top">
          {cartItems.map((cartItem) => (
            <CartDropdownItem key={cartItem.id} item={cartItem} />
          ))}
        </CartItems>
      ) : (
        <Empty>Your cart is empty</Empty>
      )}

      <ButtonWrapper justify="center" align="bottom">
        <CustomButton
          htmlType="button"
          type="primary"
          onClick={() => {
            navigate('/checkout');
            setVisibility();
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </ButtonWrapper>
    </Wrapper>
  );
};
