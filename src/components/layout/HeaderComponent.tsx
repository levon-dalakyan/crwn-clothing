import { Col, Row } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { useAppSelector } from '../../hooks';

import { CartDropdown } from '../cart-dropdown/CartDropdown';

const Options = styled(Row)`
  & > a {
    margin-left: 50px;
  }
`;

const SignOutButton = styled.div`
  cursor: pointer;
  margin-left: 50px;
`;

export const HeaderComponent = () => {
  const currentUser = useAppSelector((state) => state.user.currentUser);

  return (
    <Row justify="space-between" align="middle">
      <Col span={12}>
        <Link to="/">
          <Logo />
        </Link>
      </Col>
      <Col span={12}>
        <Options justify="end" align="middle">
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          {currentUser ? (
            <SignOutButton onClick={() => auth.signOut()}>
              SIGN OUT
            </SignOutButton>
          ) : (
            <NavLink to="/sign">SIGN IN</NavLink>
          )}
          <CartDropdown />
        </Options>
      </Col>
    </Row>
  );
};
