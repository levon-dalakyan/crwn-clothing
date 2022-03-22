import { Form, Input } from 'antd';
import Title from 'antd/lib/typography/Title';
import styled from 'styled-components';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth, createUserProfileDocument } from '../../utils/firebase-utils';

import { CustomButton } from '../UI/CustomButton';
import { showNotification } from '../../utils/notification-utils';

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

export const SignUp = () => {
  const [form] = Form.useForm();

  const formSubmitHandler = async (values: any) => {
    const { displayName, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      showNotification('warning', "Passwords don't match");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      form.resetFields();

      showNotification('success', 'You have successfully registered!');

      await createUserProfileDocument(user, { displayName });
    } catch ({ code }) {
      if (code === 'auth/email-already-in-use') {
        showNotification('error', 'This email is already in use');
      }
    }
  };

  return (
    <Wrapper>
      <Title level={2}>I don't have an account</Title>
      <Subtitle>Sign up with your email and password</Subtitle>
      <Form form={form} onFinish={formSubmitHandler}>
        <StyledFormItem
          name="displayName"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input className="input" placeholder="Name" />
        </StyledFormItem>
        <StyledFormItem
          name="email"
          rules={[
            { type: 'email', message: 'The input is not valid e-mail!' },
            { required: true, message: 'Please input your email!' },
          ]}
        >
          <Input className="input" placeholder="Email" />
        </StyledFormItem>
        <StyledFormItem
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className="input" placeholder="Password" />
        </StyledFormItem>
        <StyledFormItem
          name="confirmPassword"
          rules={[{ required: true, message: 'Please confirm your password!' }]}
        >
          <Input.Password className="input" placeholder="Confirm Password" />
        </StyledFormItem>
        <CustomButton type="default" htmlType="submit">
          SIGN UP
        </CustomButton>
      </Form>
    </Wrapper>
  );
};
