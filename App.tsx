import React, { useEffect } from "react";
import RNBootSplash from 'react-native-bootsplash';
import { Provider as StoreProvider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import AppView from "./src/AppView";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/store";
const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: false })
  }, []);

  return (
    <StoreProvider store={store}>
      <NavigationContainer onReady={() => RNBootSplash.hide({ fade: false })}>
        <PersistGate
          loading={
            <View style={styles.container}>
              <ActivityIndicator size="large" color="#2b77ff" />
            </View>
          }
          persistor={persistor}
        >
          <AppView />
        </PersistGate>
      </NavigationContainer>
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