import { FC } from 'react';
import { Col, Row } from 'antd';
import { CartItem } from '../../../../store/slices/cart/cartSlice';
import * as S from './CartDropdownItem.styles';

interface CartDropdownItemProps {
  item: CartItem;
}

export const CartDropdownItem: FC<CartDropdownItemProps> = ({
  item: { imageUrl, name, price, quantity },
}) => {
  return (
    <S.Wrapper align="middle">
      <Col span={7}>
        <S.Image src={imageUrl} alt="item" />
      </Col>
      <Col span={15}>
        <Row>
          <Col span={24} offset={2}>
            {name}
          </Col>
          <Col offset={2}>
            {quantity} x ${price}
          </Col>
        </Row>
      </Col>
    </S.Wrapper>
  );
};
