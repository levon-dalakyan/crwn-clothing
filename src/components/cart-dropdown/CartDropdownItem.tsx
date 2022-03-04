import { Col, Row } from 'antd';
import styled from 'styled-components';

import { CartItemType } from '../../store/cart-slice';

const Wrapper = styled(Row)`
  height: 80px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 71px;
`;

interface CartDropdownItemProps {
  item: CartItemType;
}

export const CartDropdownItem: React.FC<CartDropdownItemProps> = ({
  item: { imageUrl, name, price, quantity },
}) => {
  return (
    <Wrapper align="middle">
      <Col span={7}>
        <Image src={imageUrl} alt="item" />
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
    </Wrapper>
  );
};
