import { Row } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 240px;
  height: 340px;
  background-color: #121212;
  color: #fff;
  padding: 20px;
`;

const Menu = styled(Row)``;

export const CartDropdownMenu = () => {
  return (
    <Wrapper>
      <Menu>elements</Menu>
    </Wrapper>
  );
};
