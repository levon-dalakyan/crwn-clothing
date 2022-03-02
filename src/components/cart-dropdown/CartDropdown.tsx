import { Dropdown } from 'antd';

import { CartIcon } from './CartDropdownIcon';
import { CartDropdownMenu } from './CartDropdownMenu';

export const CartDropdown = () => {
  return (
    <Dropdown overlay={<CartDropdownMenu />} trigger={['click']}>
      <CartIcon />
    </Dropdown>
  );
};
