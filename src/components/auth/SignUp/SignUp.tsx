import { Form } from 'antd';
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
import { Input, InputPassword } from '../../common/Input/Input.styles';
import {
  CommonFormSubtitle,
  CommonFormWrapper,
  CommonStyledFormItem,
} from '../Auth/Auth.styles';

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
    <CommonFormWrapper>
      <Title>I don't have an account</Title>
      <CommonFormSubtitle>
        Sign up with your email and password
      </CommonFormSubtitle>
      <Form form={form} onFinish={formSubmitHandler}>
        <CommonStyledFormItem
          name="displayName"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Name" />
        </CommonStyledFormItem>
        <CommonStyledFormItem
          name="email"
          rules={[
            { type: 'email', message: 'The input is not valid e-mail!' },
            { required: true, message: 'Please input your email!' },
          ]}
        >
          <Input placeholder="Email" />
        </CommonStyledFormItem>
        <CommonStyledFormItem
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <InputPassword placeholder="Password" />
        </CommonStyledFormItem>
        <CommonStyledFormItem
          name="confirmPassword"
          rules={[{ required: true, message: 'Please confirm your password!' }]}
        >
          <InputPassword placeholder="Confirm Password" />
        </CommonStyledFormItem>
        <Button type="default" htmlType="submit">
          SIGN UP
        </Button>
      </Form>
    </CommonFormWrapper>
  );
};
