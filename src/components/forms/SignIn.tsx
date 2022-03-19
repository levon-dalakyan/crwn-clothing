import { Row, Form, Input } from 'antd';
import styled from 'styled-components';
import Title from 'antd/lib/typography/Title';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  auth,
  createUserProfileDocument,
  signInWithGooglePopup,
} from '../../utils/firebase-utils';
import { toast, ToastContainer } from 'react-toastify';

import WavingHand from '../../assets/waving-hand.png';
import { CustomButton } from '../UI/CustomButton';
import { DocumentSnapshot, onSnapshot } from 'firebase/firestore';

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

const notify = (param: string, displayName: string | null) => {
  if (param === 'welcome') {
    toast.success(`Welcome${displayName ? `, ${displayName}` : ' here'}!`, {
      icon: () => (
        <img style={{ width: '20px' }} src={WavingHand} alt="waving hand" />
      ),
      toastId: 'welcome',
      containerId: 'sign-in',
    });
  } else if (param === 'wrong-password') {
    if (!toast.isActive('sign-in')) {
      toast.error('Wrong email or password', {
        toastId: 'wrong-inputs',
        containerId: 'sign-in',
      });
    }
  } else if (param === 'requests-limit') {
    if (!toast.isActive('requests')) {
      toast.error('Too many requests, try again later', {
        toastId: 'requests',
        containerId: 'sign-in',
      });
    }
  }
};

export const SignIn = () => {
  const googleSignInHandler = async () => {
    const { user } = await signInWithGooglePopup();

    if (user) {
      notify('welcome', user.displayName);
    }

    const userRef: any = await createUserProfileDocument(user);

    onSnapshot(userRef, (snapshot: DocumentSnapshot) =>
      console.log(snapshot.data())
    );
  };

  const [form] = Form.useForm();

  const formSubmitHandler = async (values: any) => {
    const { email, password } = values;

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      if (response) {
        notify('welcome', null);
      }

      form.resetFields();
    } catch ({ code }) {
      console.log({ code });

      if (code === 'auth/wrong-password') {
        notify('wrong-password', null);
      } else if (code === 'auth/too-many-requests') {
        notify('requests-limit', null);
      }
    }
  };

  return (
    <Wrapper>
      <ToastContainer
        style={{ width: 'auto' }}
        enableMultiContainer
        containerId={'sign-in'}
        position={'top-left'}
        limit={1}
        closeButton={false}
        pauseOnFocusLoss={false}
        autoClose={3000}
        hideProgressBar={true}
      />
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
            googleButton
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </Row>
      </Form>
    </Wrapper>
  );
};
