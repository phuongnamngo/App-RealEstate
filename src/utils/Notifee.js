import notifee, {
  AndroidColor,
  AndroidImportance,
  AndroidLaunchActivityFlag,
  AndroidStyle,
  AndroidVisibility,
} from '@notifee/react-native';
import NotificationSounds from 'react-native-notification-sounds';
import { colors } from '../styled';

export default async function onDisplayNotification(notify) {
  if (!notify.data.notifee) {
    return;
  }
  const noti = JSON.parse(notify.data.notifee);
  // Request permissions (required for iOS)
  await notifee.requestPermission();
  const soundsList = await NotificationSounds.getNotifications('notification');
  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'sound',
    name: 'Default Channel',
    sound: soundsList[0].url,
    importance: AndroidImportance.HIGH,
    visibility: AndroidVisibility.PUBLIC,
  });
  const pictureStyle = noti.image
    ? {
        type: AndroidStyle.BIGPICTURE,
        picture: noti.image,
      }
    : undefined;

  await notifee.displayNotification({
    title: noti.title,
    body: noti.body,
    subtitle: '&#129395;',
    android: {
      channelId,
      smallIcon: 'ic_notification',
      color: colors.primary,
      style: pictureStyle,
      sound: soundsList[0].url,
      importance: AndroidImportance.HIGH,
      pressAction: {
        id: 'sound',
        launchActivity: 'default',
        launchActivityFlags: [AndroidLaunchActivityFlag.SINGLE_TOP],
      },
      vibrationPattern: [300, 500],
      visibility: AndroidVisibility.PUBLIC,
    },
    ios: {
      sound: soundsList[0].url,
    },
    // data: {
    //   screen: notify.data.screen ? notify.data.screen : '',
    //   navigate: notify.data.navigate ? notify.data.navigate : '',
    //   dataItem: notify.data.dataItem ? notify.data.dataItem : '',
    // },
  });
}
