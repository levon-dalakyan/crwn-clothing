import styled from 'styled-components';
import { Row } from 'antd';

export const Items = styled(Row)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 50px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: unset;
  }
`;
