import { FC } from 'react';
import { CartDropdownButton } from '../CartDropdownButton/CartDropdownButton';
import { CartDropdownItems } from '../CartDropdownItems/CartDropdownItems';
import * as S from './CartDropdownContent.styles';

interface CartDropdownContentProps {
  setVisibility: () => void;
}

export const CartDropdownContent: FC<CartDropdownContentProps> = ({
  setVisibility,
}) => {
  return (
    <S.Wrapper>
      <CartDropdownItems />
      <CartDropdownButton setVisibility={setVisibility} />
    </S.Wrapper>
  );
};
