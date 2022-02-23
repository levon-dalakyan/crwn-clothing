import { Row } from 'antd';
import styled from 'styled-components';

import { SignIn } from '../components/forms/SignIn';
import { SignUp } from '../components/forms/SignUp';

const SignPageWrapper = styled(Row)``;

export const SignPage = () => {
  return (
    <SignPageWrapper justify="space-between" align="middle">
      <SignIn />
      <SignUp />
    </SignPageWrapper>
  );
};
