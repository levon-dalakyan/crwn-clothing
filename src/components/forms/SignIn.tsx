import { Row, Typography, Form, Input } from 'antd';
import styled from 'styled-components';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { CustomButton } from '../UI/CustomButton';

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
  const [form] = Form.useForm();

  const formSubmitHandler = async (values: any) => {
    const { email, password } = values;

    try {
      signInWithEmailAndPassword(auth, email, password);

      form.resetFields();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignInWrapper>
      <Title level={2}>I already have an account</Title>
      <Subtitle>Sign in with your email and password</Subtitle>

      <Form form={form} onFinish={formSubmitHandler}>
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
            onClick={signInWithGoogle}
            googleButton
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </Row>
      </Form>
    </SignInWrapper>
  );
};
