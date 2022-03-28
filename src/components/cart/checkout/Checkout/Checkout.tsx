import { CheckoutTable } from '../../../../components/cart/checkout/CheckoutTable/CheckoutTable';
import { TotalPrice } from '../../../../components/cart/checkout/TotalPrice/TotalPrice';
import * as S from './Checkout.styles';

export const Checkout = () => {
  return (
    <S.Wrapper>
      <CheckoutTable />
      <TotalPrice />
    </S.Wrapper>
  );
};
