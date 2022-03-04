import styled from 'styled-components';
import { Col, Row } from 'antd';

import { addItemToCart } from '../../store/cart-slice';

import { CollectionItemType } from '../../pages/ShopPage';

import { CustomButton } from '../UI/CustomButton';
import { useAppDispatch } from '../../hooks/redux-hooks';

const CollectionItemWrapper = styled(Row)`
  height: 350px;
  width: 22%;
  position: relative;
`;

const BackgroundImage = styled(Col)`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  transition: all 0.3s ease 0s;

  ${CollectionItemWrapper}:hover & {
    opacity: 0.8;
  }
`;

const Footer = styled(Row)`
  font-size: 18px;
  width: 100%;
  height: 5%;
`;

const ButtonWrapper = styled(Row)`
  position: absolute;
  width: 100%;
  bottom: 10px;
  display: none;
  transition: all 0.3s ease 0s;
  opacity: 0.85;

  & button {
    padding: 10px 60px;
  }

  ${CollectionItemWrapper}:hover & {
    display: flex;
  }
`;

interface CollectionItemProps {
  item: CollectionItemType;
}

export const CollectionItem: React.FC<CollectionItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const { name, price, imageUrl } = item;

  const addItemToCartHandler = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <CollectionItemWrapper>
      <BackgroundImage
        style={{ backgroundImage: `url(${imageUrl})` }}
        span={24}
      />
      <Footer justify="space-between">
        <Col>{name}</Col>
        <Col>${price}</Col>
      </Footer>
      <ButtonWrapper justify="center">
        <CustomButton
          onClick={addItemToCartHandler}
          htmlType="button"
          type="primary"
          inverted
        >
          ADD TO CART
        </CustomButton>
      </ButtonWrapper>
    </CollectionItemWrapper>
  );
};
