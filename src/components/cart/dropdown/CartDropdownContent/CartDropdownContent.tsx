import { CartDropdownButton } from '../CartDropdownButton/CartDropdownButton';
import { CartDropdownItems } from '../CartDropdownItems/CartDropdownItems';
import * as S from './CartDropdownContent.styles';

export const CartDropdownContent: React.FC<{
  setVisibility: () => void;
}> = ({ setVisibility }) => {
  return (
    <S.Wrapper>
      <CartDropdownItems />
      <CartDropdownButton setVisibility={setVisibility} />
    </S.Wrapper>
  );
};
