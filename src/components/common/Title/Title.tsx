import { FC } from 'react';
import { Typography } from 'antd';

export const Title: FC = ({ children }) => {
  return <Typography.Title level={2}>{children}</Typography.Title>;
};
