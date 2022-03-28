import { Typography } from 'antd';

export const Title: React.FC = ({ children }) => {
  return <Typography.Title level={2}>{children}</Typography.Title>;
};
