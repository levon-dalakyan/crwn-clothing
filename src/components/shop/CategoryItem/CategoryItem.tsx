import { FC } from 'react';
import { Col } from 'antd';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { addItemToCart } from '../../../store/slices/cart/cartSlice';
import { CategoryItem as CategoryItemType } from '../../../store/slices/categories/categoriesSlice';
import { BUTTON_STYLE_CLASSES, Button } from '../../common/Button/Button';
import * as S from './CategoryItem.styles';

interface CategoryItemProps {
  product: CategoryItemType;
}

export const CategoryItem: FC<CategoryItemProps> = ({ product }) => {
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
        <Button
          htmlType="button"
          type="primary"
          onClick={addItemToCartHandler}
          buttonStyle={BUTTON_STYLE_CLASSES.inverted}
        >
          ADD TO CART
        </Button>
      </S.ButtonWrapper>
    </S.CollectionItemWrapper>
  );
};
