import styled from 'styled-components';
import { Row } from 'antd';

export const Wrapper = styled(Row)`
  font-size: 20px;
  line-height: 20px;

  @media screen and (max-width: 500px) {
    font-size: 17px;
  }
`;
