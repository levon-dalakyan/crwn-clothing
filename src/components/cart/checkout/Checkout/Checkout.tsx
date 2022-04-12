import { CheckoutTable } from '../../../../components/cart/checkout/CheckoutTable/CheckoutTable';
import { TotalPrice } from '../../../../components/cart/checkout/TotalPrice/TotalPrice';
import { PaymentForm } from '../PaymentForm/PaymentForm';
import * as S from './Checkout.styles';

export const Checkout = () => {
  return (
    <S.Wrapper>
      <CheckoutTable />
      <TotalPrice />
      <PaymentForm />
    </S.Wrapper>
  );
};
