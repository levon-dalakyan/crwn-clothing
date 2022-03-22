import { Row } from 'antd';
import styled from 'styled-components';

import { SignIn } from '../components/authentication/SignIn';
import { SignUp } from '../components/authentication/SignUp';

const Wrapper = styled(Row)`
  width: 1100px;
  margin: 50px auto 0 auto;
`;

export const AuthenticationPage = () => {
  return (
    <Wrapper justify="space-between" align="top">
      <SignIn />
      <SignUp />
    </Wrapper>
  );
};
