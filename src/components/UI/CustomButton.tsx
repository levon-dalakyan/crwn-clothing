import { Form, Button } from 'antd';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  type: any;
  googleButton?: boolean;
}

const StyledButton = styled(Button)`
  height: 50px;
  min-width: 165px;
  width: auto;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  padding: 0 35px;

  &.googleButton {
  }

  &:hover {
    border: 1px solid #000;
    color: black;
    background-color: #fff;
  }
`;

export const CustomButton: React.FC<ButtonProps> = ({
  children,
  type,
  googleButton,
}) => {
  const [form] = Form.useForm();

  return (
    <Form.Item shouldUpdate>
      {() => (
        <StyledButton
          className={googleButton ? 'googleButton' : ''}
          htmlType={type}
          disabled={
            !form.isFieldsTouched(true) ||
            !!form.getFieldsError().filter(({ errors }) => errors.length).length
          }
        >
          {children}
        </StyledButton>
      )}
    </Form.Item>
  );
};
