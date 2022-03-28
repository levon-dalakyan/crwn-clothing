import { Col } from 'antd';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { addItemToCart } from '../../../store/slices/cartSlice';
import { ProductType } from '../../../store/slices/categorySlice';
import { BUTTON_STYLE_CLASSES, CustomButton } from '../../common/Button/Button';
import * as S from './Product.styles';

export const Product: React.FC<{ product: ProductType }> = ({ product }) => {
  const dispatch = useAppDispatch();

  const addItemToCartHandler = () => {
    dispatch(addItemToCart(product));
  };

  const { name, price, imageUrl } = product;

  return (
    <S.CollectionItemWrapper>
      <S.BackgroundImage
        style={{ backgroundImage: `url(${imageUrl})` }}
        span={24}
      />
      <S.Footer justify="space-between">
        <Col>{name}</Col>
        <Col>${price}</Col>
      </S.Footer>
      <S.ButtonWrapper justify="center">
        <CustomButton
          htmlType="button"
          type="primary"
          onClick={addItemToCartHandler}
          buttonStyle={BUTTON_STYLE_CLASSES.inverted}
        >
          ADD TO CART
        </CustomButton>
      </S.ButtonWrapper>
    </S.CollectionItemWrapper>
  );
};
