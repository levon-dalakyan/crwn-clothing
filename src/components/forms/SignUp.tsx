import { Typography, Form, Input } from 'antd';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import styled from 'styled-components';
import { CustomButton } from '../UI/CustomButton';

const { Title } = Typography;

const SignUpWrapper = styled.div`
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
      alert("Password don't match");
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignUpWrapper>
      <Title level={2}>I don't have an account</Title>
      <Subtitle>Sign in with your email and password</Subtitle>

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
            { type: 'email', message: 'The input is not valid E-mail!' },
            { required: true, message: 'Please input your E-mail!' },
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
    </SignUpWrapper>
  );
};
