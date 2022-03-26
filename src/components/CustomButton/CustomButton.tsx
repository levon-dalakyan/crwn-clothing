import { Form } from 'antd';
import { ButtonHTMLType, ButtonType } from 'antd/lib/button/button';
import * as S from './CustomButton.styles';

interface ButtonProps {
  children: React.ReactNode;
  htmlType: ButtonHTMLType;
  type: ButtonType;
  onClick?: React.MouseEventHandler<HTMLElement>;
  buttonStyle?: string;
}

export const BUTTON_STYLE_CLASSES: any = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonStyle = BUTTON_STYLE_CLASSES.base) =>
  ({
    [BUTTON_STYLE_CLASSES.base]: S.BaseButton,
    [BUTTON_STYLE_CLASSES.google]: S.GoogleSignInButton,
    [BUTTON_STYLE_CLASSES.inverted]: S.InvertedButton,
  }[buttonStyle]);

export const CustomButton: React.FC<ButtonProps> = ({
  children,
  htmlType,
  type,
  onClick,
  buttonStyle,
}) => {
  const CustomButton = getButton(buttonStyle);

  return (
    <Form.Item>
      <CustomButton htmlType={htmlType} type={type} onClick={onClick}>
        {children}
      </CustomButton>
    </Form.Item>
  );
};
