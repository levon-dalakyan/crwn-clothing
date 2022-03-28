import { Col } from 'antd';
import * as S from './TableHeader.styles';

export const TableHeader = () => {
  return (
    <S.Wrapper justify="space-between">
      <Col span={6}>Product</Col>
      <Col span={5}>Description</Col>
      <Col span={6}>Quantity</Col>
      <Col span={4}>Price</Col>
      <Col>Remove</Col>
    </S.Wrapper>
  );
};
