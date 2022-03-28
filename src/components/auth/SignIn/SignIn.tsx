import { Row, Form, Input } from 'antd';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { showNotification } from '../../../utils/notification-utils';
import { auth, signInWithGooglePopup } from '../../../utils/firebase-utils';

import { BUTTON_STYLE_CLASSES, CustomButton } from '../../common/Button/Button';
import * as S from './SignIn.styles';
import { Title } from '../../common/Title/Title';

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
    <S.Wrapper>
      <Title>I already have an account</Title>
      <S.Subtitle>Sign in with your email and password</S.Subtitle>
      <Form form={form} onFinish={formSubmitHandler}>
        <S.StyledFormItem
          name="email"
          rules={[
            { type: 'email', message: 'The input is not valid Email' },
            { required: true, message: 'Please input your email' },
          ]}
        >
          <Input className="input" placeholder="Email" />
        </S.StyledFormItem>
        <S.StyledFormItem
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
        </S.StyledFormItem>
        <Row justify="space-between" align="middle">
          <CustomButton type="default" htmlType="submit">
            SIGN IN
          </CustomButton>
          <CustomButton
            type="primary"
            htmlType="button"
            onClick={googleSignInHandler}
            buttonStyle={BUTTON_STYLE_CLASSES.google}
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </Row>
      </Form>
    </S.Wrapper>
  );
};
