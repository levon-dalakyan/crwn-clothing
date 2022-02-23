import { Row, Typography } from 'antd';
import styled from 'styled-components';
import { Form, Input } from 'antd';
import { CustomButton } from '../UI/CustomButton';

const { Title } = Typography;

const SignInWrapper = styled.div`
  width: 30vw;
`;

const Subtitle = styled.span`
  font-size: 18px;
`;

const StyledInput = styled(Input)`
  border: none;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
`;

export const SignIn = () => {
  return (
    <SignInWrapper>
      <Title level={2}>I already have an account</Title>
      <Subtitle>Sign in with your email and password</Subtitle>

      <Form>
        <Form.Item
          name="email"
          rules={[
            { type: 'email', message: 'The input is not valid Email' },
            { required: true, message: 'Please input your Email' },
          ]}
        >
          <StyledInput placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password',
            },
          ]}
        >
          <StyledInput placeholder="Password" />
        </Form.Item>
        <Row justify="space-between" align="middle">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="button" googleButton>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </Row>
      </Form>
    </SignInWrapper>
  );
};
