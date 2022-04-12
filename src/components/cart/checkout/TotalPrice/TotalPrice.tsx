import { useTotalPrice } from '../../../../hooks/useTotalPrice';
import * as S from './TotalPrice.styles';

export const TotalPrice = () => {
  const totalPrice = useTotalPrice();

  return <S.Total>TOTAL: ${totalPrice}</S.Total>;
};
