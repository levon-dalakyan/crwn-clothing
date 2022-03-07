import { useState } from 'react';
import { Dropdown } from 'antd';

import { CartIcon } from './CartDropdownIcon';
import { CartDropdownContent } from './CartDropdownContent';

export const CartDropdown = () => {
  const [visible, setVisible] = useState(false);

  const visibleChangeHandler = (flag: boolean) => {
    setVisible(flag);
  };

  const closeDropdownHandler = () => {
    setVisible(false);
  };

  return (
    <Dropdown
      overlay={<CartDropdownContent setVisibility={closeDropdownHandler} />}
      trigger={['click']}
      visible={visible}
      onVisibleChange={visibleChangeHandler}
    >
      <CartIcon />
    </Dropdown>
  );
};
