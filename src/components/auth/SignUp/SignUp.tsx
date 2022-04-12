import { Form, Input } from 'antd';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, createUserProfileDocument } from '../../../utils/firebase-utils';
import { showNotification } from '../../../utils/notification-utils';
import { Button } from '../../common/Button/Button';
import { Title } from '../../common/Title/Title';
import * as S from './SignUp.styles';

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

      await createUserProfileDocument(user, { displayName });

      showNotification('success', 'You have successfully registered!');

      form.resetFields();
    } catch ({ code }) {
      if (code === 'auth/email-already-in-use') {
        showNotification('error', 'This email is already in use');
      }
    }
  };

  return (
    <S.Wrapper>
      <Title>I don't have an account</Title>
      <S.Subtitle>Sign up with your email and password</S.Subtitle>
      <Form form={form} onFinish={formSubmitHandler}>
        <S.StyledFormItem
          name="displayName"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input className="input" placeholder="Name" />
        </S.StyledFormItem>
        <S.StyledFormItem
          name="email"
          rules={[
            { type: 'email', message: 'The input is not valid e-mail!' },
            { required: true, message: 'Please input your email!' },
          ]}
        >
          <Input className="input" placeholder="Email" />
        </S.StyledFormItem>
        <S.StyledFormItem
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className="input" placeholder="Password" />
        </S.StyledFormItem>
        <S.StyledFormItem
          name="confirmPassword"
          rules={[{ required: true, message: 'Please confirm your password!' }]}
        >
          <Input.Password className="input" placeholder="Confirm Password" />
        </S.StyledFormItem>
        <Button type="default" htmlType="submit">
          SIGN UP
        </Button>
      </Form>
    </S.Wrapper>
  );
};
