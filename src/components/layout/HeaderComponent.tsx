import { Col, Row, Typography } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const { Text } = Typography;

const Options = styled(Row)`
  & > a {
    margin-left: 50px;
  }
`;

const SignOutButton = styled.div`
  cursor: pointer;
  margin-left: 50px;
`;

interface HeaderComponentProps {
  currentUser: any;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  currentUser,
}) => {
  return (
    <Row justify="space-between" align="middle">
      <Col span={12}>
        <Link to="/">
          <Logo />
        </Link>
      </Col>
      <Col span={12}>
        <Options justify="end">
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          {currentUser ? (
            <SignOutButton onClick={() => auth.signOut()}>
              SIGN OUT
            </SignOutButton>
          ) : (
            <NavLink to="/sign">SIGN IN</NavLink>
          )}
        </Options>
      </Col>
    </Row>
  );
};
