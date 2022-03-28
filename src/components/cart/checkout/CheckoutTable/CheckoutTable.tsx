import { Divider } from 'antd';
import { CheckoutItems } from '../../../../components/cart/checkout/CheckoutItems/CheckoutItems';
import { TableHeader } from '../../../../components/cart/checkout/TableHeader/TableHeader';

export const CheckoutTable = () => {
  return (
    <>
      <TableHeader />
      <Divider />
      <CheckoutItems />
    </>
  );
};
