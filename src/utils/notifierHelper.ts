import { Notifier, NotifierComponents } from 'react-native-notifier';

type AlertType = 'error' | 'success' | 'warn' | 'info';
const setNotifier = (value: {
  title: string;
  description: string;
  alertType: AlertType;
}) => {
  const { title, description, alertType } = value;
  return Notifier.showNotification({
    title,
    description,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType,
    },
  });
};

export default setNotifier;
