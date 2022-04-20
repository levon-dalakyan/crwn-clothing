import { Form, Input } from 'antd';
import {
  createUserWithEmailAndPassword,
  AuthError,
  AuthErrorCodes,
} from 'firebase/auth';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setCurrentUser } from '../../../store/slices/user/userSlice';
import { auth, createUserProfileDocument } from '../../../utils/firebase-utils';
import { showNotification } from '../../../utils/notification-utils';
import { Button } from '../../common/Button/Button';
import { Title } from '../../common/Title/Title';
import * as S from './SignUp.styles';

interface IFormValues {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const formSubmitHandler = async ({
    displayName,
    email,
    password,
    confirmPassword,
  }: IFormValues) => {
    if (password !== confirmPassword) {
      showNotification('warning', "Passwords don't match");
      return;
    }

    if (password.length < 6 && confirmPassword.length < 6) {
      showNotification('warning', 'The password is too short');
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userSnap = await createUserProfileDocument(user, { displayName });

      dispatch(setCurrentUser({ id: userSnap.id, ...userSnap.data() }));

      showNotification('success', '', userSnap.data().displayName);

      form.resetFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
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
