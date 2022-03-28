import styled from 'styled-components';
import { Row } from 'antd';

export const Wrapper = styled(Row)`
  margin-bottom: 20px;
`;

export const Options = styled(Row)`
  & > a {
    margin-left: 50px;
  }
`;

export const SignOutButton = styled.div`
  cursor: pointer;
  margin-left: 50px;
`;
