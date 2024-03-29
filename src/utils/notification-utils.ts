import { notification } from 'antd';

notification.config({
  maxCount: 1,
  placement: 'topLeft',
});

const style = {
  width: 'auto',
};

export const showNotification = (
  type: string,
  text?: string,
  displayName?: string | null
) => {
  if (type === 'error') {
    notification.error({
      message: text,
      style: style,
    });
  } else if (type === 'success') {
    notification.success({
      message: displayName ? `Welcome ${displayName}!` : text,
      style: style,
    });
  } else if (type === 'warning') {
    notification.warning({
      message: text,
      style: style,
    });
  }
};
