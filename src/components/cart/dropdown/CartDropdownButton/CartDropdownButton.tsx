import { FC } from 'react';
import { Button } from '../../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import * as S from './CartDropdownButton.styles';

interface CartDropdownButtonProps {
  setVisibility: () => void;
}

export const CartDropdownButton: FC<CartDropdownButtonProps> = ({
  setVisibility,
}) => {
  const navigate = useNavigate();

  return (
    <S.ButtonWrapper justify="center" align="bottom">
      <Button
        htmlType="button"
        type="primary"
        onClick={() => {
          navigate('/checkout');
          setVisibility();
        }}
      >
        GO TO CHECKOUT
      </Button>
    </S.ButtonWrapper>
  );
};
