import { Layout } from 'antd';
import styled from 'styled-components';

export const Header = styled(Layout.Header)`
  padding: 0 20px;
  line-height: 35px;
  font-size: 18px;

  @media screen and (max-width: 400px) {
    padding: 0 10px;
  }
`;
