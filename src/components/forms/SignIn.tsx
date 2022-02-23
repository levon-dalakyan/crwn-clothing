import { Row, Typography } from 'antd';
import styled from 'styled-components';
import { Form, Input } from 'antd';

import { CustomButton } from '../UI/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';

const { Title } = Typography;

const SignInWrapper = styled.div`
  width: 30vw;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 35px;
`;

const StyledFormItem = styled(Form.Item)`
  margin-bottom: 30px;
`;

export const SignIn = () => {
  return (
    <SignInWrapper>
      <Title level={2}>I already have an account</Title>
      <Subtitle>Sign in with your email and password</Subtitle>

      <Form>
        <StyledFormItem
          name="email"
          rules={[
            { type: 'email', message: 'The input is not valid Email' },
            { required: true, message: 'Please input your Email' },
          ]}
        >
          <Input className="input" placeholder="Email" />
        </StyledFormItem>
        <StyledFormItem
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password',
            },
          ]}
        >
          <Input.Password
            className="input"
            placeholder="Password"
            visibilityToggle
          />
        </StyledFormItem>
        <Row justify="space-between" align="middle">
          <CustomButton type="default" htmlType="submit">
            SIGN IN
          </CustomButton>
          <CustomButton
            type="primary"
            htmlType="button"
            onGoogleClick={signInWithGoogle}
            googleButton
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </Row>
      </Form>
    </SignInWrapper>
  );
};
