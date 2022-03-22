import { notification } from 'antd';

notification.config({
  maxCount: 1,
});

export const showNotification = (
  type: string,
  text?: string,
  displayName?: string | null
) => {
  if (type === 'error') {
    notification.error({
      message: text,
      style: { width: 'auto' },
    });
  } else if (type === 'success') {
    notification.success({
      message: displayName ? `Welcome ${displayName}!` : text,
      style: { width: 'auto' },
    });
  } else if (type === 'warning') {
    notification.warning({
      message: text,
      style: { width: 'auto' },
    });
  }
};
