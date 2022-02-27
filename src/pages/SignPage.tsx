import { Row } from 'antd';
import styled from 'styled-components';

import { SignIn } from '../components/forms/SignIn';
import { SignUp } from '../components/forms/SignUp';

const SignPageWrapper = styled(Row)`
  width: 1100px;
  margin: 50px auto 0 auto;
`;

export const SignPage = () => {
  return (
    <SignPageWrapper justify="space-between" align="top">
      <SignIn />
      <SignUp />
    </SignPageWrapper>
  );
};
