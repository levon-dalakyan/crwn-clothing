import { Form, Button } from 'antd';
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

  &.googleButton {
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

interface ButtonProps {
  children: React.ReactNode;
  htmlType: any;
  type: any;
  onClick?: React.MouseEventHandler<HTMLElement>;
  googleButton?: boolean;
  inverted?: boolean;
}

export const CustomButton: React.FC<ButtonProps> = ({
  children,
  htmlType,
  type,
  onClick,
  googleButton,
  inverted,
}) => {
  return (
    <Form.Item>
      <StyledButton
        className={`${googleButton ? 'googleButton' : ''}
				 ${inverted ? 'inverted' : ''}`}
        htmlType={htmlType}
        type={type}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    </Form.Item>
  );
};
