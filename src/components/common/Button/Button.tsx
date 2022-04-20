import { FC, MouseEventHandler } from 'react';
import { Form } from 'antd';
import { ButtonHTMLType, ButtonType } from 'antd/lib/button/button';
import * as S from './Button.styles';

export enum BUTTON_STYLE_CLASSES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
}

const getButton = (
  buttonStyle = BUTTON_STYLE_CLASSES.base
): typeof S.BaseButton =>
  ({
    [BUTTON_STYLE_CLASSES.base]: S.BaseButton,
    [BUTTON_STYLE_CLASSES.google]: S.GoogleSignInButton,
    [BUTTON_STYLE_CLASSES.inverted]: S.InvertedButton,
  }[buttonStyle]);

interface ButtonProps {
  htmlType: ButtonHTMLType;
  type: ButtonType;
  onClick?: MouseEventHandler<HTMLElement>;
  buttonStyle?: BUTTON_STYLE_CLASSES;
}

export const Button: FC<ButtonProps> = ({
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
