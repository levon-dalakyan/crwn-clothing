import { Row } from 'antd';
import styled from 'styled-components';
import { ReactComponent as ShoppingBag } from '../../../assets/shopping-bag.svg';

export const Wrapper = styled(Row)`
  width: 45px;
  height: 45px;
  margin-left: 40px;
  cursor: pointer;
`;

export const ShoppingBagIcon = styled(ShoppingBag)`
  width: 24px;
  height: 24px;
`;

export const Counter = styled.span`
  position: absolute;
  font-size: 12px;
  bottom: 2px;
  font-weight: bold;
  user-select: none;
`;
