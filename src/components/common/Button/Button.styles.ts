import styled from 'styled-components';
import { Button } from 'antd';

export const BaseButton = styled(Button)`
  height: 50px;
  min-width: 165px;
  width: auto;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  padding: 9px 35px;

  &:hover {
    border: 1px solid #000;
    color: #000;
    background-color: #fff;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;

  &:hover {
    background-color: #357ae8;
    border: 1px solid #4285f4;
    color: #fff;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #fff;
  color: #000;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
