import { CustomButton } from '../../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import * as S from './CartDropdownButton.styles';

export const CartDropdownButton: React.FC<{
  setVisibility: () => void;
}> = ({ setVisibility }) => {
  const navigate = useNavigate();

  return (
    <S.ButtonWrapper justify="center" align="bottom">
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
    </S.ButtonWrapper>
  );
};
