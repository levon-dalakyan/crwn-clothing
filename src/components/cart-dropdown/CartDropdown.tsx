import { Dropdown } from 'antd';

import { CartIcon } from './CartDropdownIcon';
import { CartDropdownContent } from './CartDropdownContent';

export const CartDropdown = () => {
  return (
    <Dropdown overlay={<CartDropdownContent />} trigger={['click']}>
      <CartIcon />
    </Dropdown>
  );
};
