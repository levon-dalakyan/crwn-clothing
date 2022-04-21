import styled from 'styled-components';
import { Input as AntInput } from 'antd';

export const Input = styled(AntInput)`
  border: none !important;
  border-bottom: 1px solid #000 !important;
  border-radius: 0 !important;
  padding: 10px !important;
`;

export const InputPassword = styled(Input).attrs({ as: AntInput.Password })``;
