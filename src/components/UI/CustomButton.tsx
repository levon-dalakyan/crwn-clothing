import { Form, Button } from 'antd';
import { ButtonHTMLType, ButtonType } from 'antd/lib/button/button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  height: 50px;
  min-width: 165px;
  width: auto;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  padding: 0 35px;

  &:hover {
    border: 1px solid #000;
    color: #000;
    background-color: #fff;
  }

  &.google-sign-in {
    border: none;
    background-color: #4285f4;

    &:hover {
      background-color: #357ae8;
      color: #fff;
    }
  }

  &.inverted {
    background-color: #fff;
    color: #000;
    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

const BUTTON_STYLE_CLASSES: any = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

interface ButtonProps {
  children: React.ReactNode;
  htmlType: ButtonHTMLType;
  type: ButtonType;
  onClick?: React.MouseEventHandler<HTMLElement>;
  buttonStyle?: string;
}

export const CustomButton: React.FC<ButtonProps> = ({
  children,
  htmlType,
  type,
  onClick,
  buttonStyle,
}) => {
  return (
    <Form.Item>
      <StyledButton
        className={`${buttonStyle && BUTTON_STYLE_CLASSES[buttonStyle]}`}
        htmlType={htmlType}
        type={type}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    </Form.Item>
  );
};
