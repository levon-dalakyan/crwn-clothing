import { Row, Form, Input } from 'antd';
import styled from 'styled-components';
import Title from 'antd/lib/typography/Title';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { showNotification } from '../../utils/notification-utils';
import { auth, signInWithGooglePopup } from '../../utils/firebase-utils';

import { CustomButton } from '../UI/CustomButton';

const Wrapper = styled.div`
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

  const googleSignInHandler = async () => {
    const { user } = await signInWithGooglePopup();

    if (user) {
      showNotification('success', '', user.displayName);
    }
  };

  const formSubmitHandler = async (values: any) => {
    const { email, password } = values;

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      if (response) {
        showNotification('success', '', 'here');
      }

      form.resetFields();
    } catch ({ code }) {
      switch (code) {
        case 'auth/wrong-password':
          showNotification('error', 'Wrong email or password');
          break;
        case 'auth/user-not-found':
          showNotification('error', 'This email is not registered');
          break;
        case 'auth/too-many-requests':
          showNotification('error', 'Too many requests, try again later');
          break;
      }
    }
  };

  return (
    <Wrapper>
      <Title level={2}>I already have an account</Title>
      <Subtitle>Sign in with your email and password</Subtitle>
      <Form form={form} onFinish={formSubmitHandler}>
        <StyledFormItem
          name="email"
          rules={[
            { type: 'email', message: 'The input is not valid Email' },
            { required: true, message: 'Please input your email' },
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
            onClick={googleSignInHandler}
            buttonStyle="google"
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </Row>
      </Form>
    </Wrapper>
  );
};
