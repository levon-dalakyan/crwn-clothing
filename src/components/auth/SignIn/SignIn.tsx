import { Row, Form } from 'antd';
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { showNotification } from '../../../utils/notification-utils';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import {
  auth,
  createUserProfileDocument,
  signInWithGooglePopup,
} from '../../../utils/firebase-utils';
import { setCurrentUser } from '../../../store/slices/user/userSlice';
import { BUTTON_STYLE_CLASSES, Button } from '../../common/Button/Button';
import { Title } from '../../common/Title/Title';
import { Input, InputPassword } from '../../common/Input/Input.styles';
import {
  CommonFormSubtitle,
  CommonFormWrapper,
  CommonStyledFormItem,
} from '../Auth/Auth.styles';

interface IFormValues {
  email: string;
  password: string;
}

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const googleSignInHandler = async () => {
    const { user } = await signInWithGooglePopup();

    if (user) {
      showNotification('success', '', user.displayName);
    }
  };

  const formSubmitHandler = async ({ email, password }: IFormValues) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      const userSnap = await createUserProfileDocument(user);

      dispatch(setCurrentUser({ id: userSnap.id, ...userSnap.data() }));

      showNotification('success', '', userSnap.data().displayName);

      form.resetFields();
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          showNotification('error', 'Wrong email or password');
          break;
        case AuthErrorCodes.USER_DELETED:
          showNotification('error', 'This email is not registered');
          break;
        case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
          showNotification('error', 'Too many requests, try again later');
          break;
      }
    }
  };

  return (
    <CommonFormWrapper>
      <Title>I already have an account</Title>
      <CommonFormSubtitle>
        Sign in with your email and password
      </CommonFormSubtitle>
      <Form form={form} onFinish={formSubmitHandler}>
        <CommonStyledFormItem
          name="email"
          rules={[
            { type: 'email', message: 'The input is not valid Email' },
            { required: true, message: 'Please input your email' },
          ]}
        >
          <Input placeholder="Email" />
        </CommonStyledFormItem>
        <CommonStyledFormItem
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password',
            },
          ]}
        >
          <InputPassword placeholder="Password" />
        </CommonStyledFormItem>
        <Row justify="space-between" align="middle">
          <Button type="default" htmlType="submit">
            SIGN IN
          </Button>
          <Button
            type="primary"
            htmlType="button"
            onClick={googleSignInHandler}
            buttonStyle={BUTTON_STYLE_CLASSES.google}
          >
            SIGN IN WITH GOOGLE
          </Button>
        </Row>
      </Form>
    </CommonFormWrapper>
  );
};
