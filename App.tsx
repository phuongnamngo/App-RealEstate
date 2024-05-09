import React, { useEffect, useState } from "react";
import { Provider as StoreProvider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import messaging from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';
import onDisplayNotification from "./src/utils/Notifee";
import CaseNotifee from "./src/utils/CaseNotifee";
import SplashScreen from "react-native-splash-screen";
import { store, persistor } from "./src/store";
import { ApplicationNavigator } from '@/navigators';

messaging().setBackgroundMessageHandler(onDisplayNotification);
notifee.onBackgroundEvent(async ({ type, detail }) => {
  CaseNotifee(type, detail);
});
const App = () => {
  const [isReady, setIsReady] = useState(__DEV__ ? false : true);
  const [initialRoute, setInitialRoute] = useState('Home');
  const [initialNavigate, setInitialNavigate] = useState();
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };
  const NotificationListner = () => {
    messaging().onMessage(onDisplayNotification);
  };
  useEffect(() => {
    return notifee.onForegroundEvent(async ({ type, detail }) => {
      CaseNotifee(type, detail);
    });
  }, []);
  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialNotification = await notifee.getInitialNotification();
        // if (initialNotification) {
        //   const {data} = initialNotification.notification;
        //   const {screen, navigate, dataItem} = data;
        //   if (navigate !== undefined) {
        //     setInitialNavigate(navigate);
        //   }
        //   if (screen) {
        //     setInitialRoute(screen);
        //   }
        //   if (dataItem) {
        //     setProduct(JSON.parse(`${dataItem}`));
        //   }
        // }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);
  useEffect(() => {
    requestUserPermission();
    NotificationListner();
  }, []);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <StoreProvider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        {isReady ? (
          <ApplicationNavigator
            screen={initialRoute}
            initialNavigate={initialNavigate}
           // dataItem={product}
          />
        ) : null}
      </PersistGate>
    </StoreProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default App;