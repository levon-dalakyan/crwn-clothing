import styled from 'styled-components';
import { Col, Row } from 'antd';

export const Wrapper = styled(Row)`
  width: 100%;
  padding-bottom: 15px;
  font-size: 20px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Center = styled(Col)`
  text-align: center;
`;

export const Quantity = styled(Row)`
  text-align: center;
  user-select: none;
`;

export const Arrow = styled(Col)`
  cursor: pointer;
  user-select: none;
`;

export const Remove = styled(Col)`
  text-align: right;
  user-select: none;
  cursor: pointer;
`;
