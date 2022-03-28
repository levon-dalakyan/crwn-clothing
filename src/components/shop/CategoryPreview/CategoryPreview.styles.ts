import styled from 'styled-components';
import { Row } from 'antd';

export const Wrapper = styled.div`
  margin-bottom: 50px;
`;

export const Items = styled(Row)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
`;
