import { Col, Row } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Options = styled(Row)`
  & > a {
    margin-left: 60px;
  }
`;

export const HeaderComponent = () => {
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
          <NavLink to="/sign-in">SIGN IN</NavLink>
        </Options>
      </Col>
    </Row>
  );
};
