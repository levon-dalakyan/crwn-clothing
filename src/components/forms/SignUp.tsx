import { Form, Input } from 'antd';
import Title from 'antd/lib/typography/Title';
import styled from 'styled-components';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, createUserProfileDocument } from '../../utils/firebase-utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

export const SignUp = () => {
  const [form] = Form.useForm();

  const formSubmitHandler = async (values: any) => {
    const { displayName, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      notify('password');
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      form.resetFields();

      await createUserProfileDocument(user, { displayName });
    } catch ({ code }) {
      if (code === 'auth/email-already-in-use') {
        notify('email');
      }
    }
  };

  const notify = (param: string) => {
    if (param === 'email') {
      if (!toast.isActive('email-exists')) {
        toast.error('This email is already in use', {
          toastId: 'email-exists',
          containerId: 'sign-up',
        });
      }
    } else if (param === 'password') {
      if (!toast.isActive('password-match')) {
        toast.warning("Passwords don't match", {
          toastId: 'password-match',
          containerId: 'sign-up',
        });
      }
    }
  };

  return (
    <Wrapper>
      <ToastContainer
        style={{ width: 'auto' }}
        enableMultiContainer
        containerId={'sign-up'}
        limit={1}
        closeButton={false}
        pauseOnFocusLoss={false}
        autoClose={3000}
        hideProgressBar={true}
      />
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
