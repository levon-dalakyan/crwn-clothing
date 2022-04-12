import { Col } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../../utils/firebase-utils';
import { useAppSelector } from '../../../hooks/redux-hooks';
import { selectCurrentUser } from '../../../store/slices/user/userSelectors';
import { ReactComponent as Logo } from '../../../assets/crown.svg';
import { CartDropdown } from '../../cart/dropdown/CartDropdown/CartDropdown';
import * as S from './Navigation.styles';

export const Navigation = () => {
  const currentUser = useAppSelector(selectCurrentUser);

  return (
    <S.Wrapper justify="space-between" align="middle">
      <Col span={12}>
        <Link to="/">
          <Logo />
        </Link>
      </Col>
      <Col span={12}>
        <S.Options justify="end" align="middle">
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <S.SignOutButton onClick={() => auth.signOut()}>
              SIGN OUT
            </S.SignOutButton>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartDropdown />
        </S.Options>
      </Col>
    </S.Wrapper>
  );
};
