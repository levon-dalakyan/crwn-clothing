import { useAppSelector } from '../../../../hooks/redux-hooks';
import { selectCartTotalPrice } from '../../../../store/slices/cart/cartSelectors';
import * as S from './TotalPrice.styles';

export const TotalPrice = () => {
  const totalPrice = useAppSelector(selectCartTotalPrice);

  return <S.Total>TOTAL: ${totalPrice}</S.Total>;
};
