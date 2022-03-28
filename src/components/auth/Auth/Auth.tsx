import { SignIn } from '../../../components/auth/SignIn/SignIn';
import { SignUp } from '../../../components/auth/SignUp/SignUp';
import * as S from './Auth.styles';

export const Auth = () => {
  return (
    <S.Wrapper justify="space-between" align="top">
      <SignIn />
      <SignUp />
    </S.Wrapper>
  );
};
