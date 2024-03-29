import { FC, memo } from 'react';
import { Col, Divider } from 'antd';
import { useAppDispatch } from '../../../../hooks/redux-hooks';
import {
  addItemToCart,
  CartItem,
  clearItemFromCart,
  removeItemFromCart,
} from '../../../../store/slices/cart/cartSlice';
import * as S from './CheckoutItem.styles';

interface CheckoutItemProps {
  item: CartItem;
}

export const CheckoutItem: FC<CheckoutItemProps> = memo(({ item }) => {
  const dispatch = useAppDispatch();

  const { imageUrl, name, quantity, price } = item;

  return (
    <S.Wrapper align="middle">
      <Col span={5}>
        <S.Image src={imageUrl} />
      </Col>
      <S.Center span={5}>{name}</S.Center>
      <Col span={5}>
        <S.Quantity justify="center">
          <S.Arrow onClick={() => dispatch(removeItemFromCart(item))}>
            &#10094;
          </S.Arrow>
          <S.Center span={7}>{quantity}</S.Center>
          <S.Arrow onClick={() => dispatch(addItemToCart(item))}>
            &#10095;
          </S.Arrow>
        </S.Quantity>
      </Col>
      <S.Center span={7}>{price}</S.Center>
      <S.Remove span={2} onClick={() => dispatch(clearItemFromCart(item))}>
        &#10005;
      </S.Remove>
      <Divider />
    </S.Wrapper>
  );
});
