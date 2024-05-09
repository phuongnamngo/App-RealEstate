import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavStack from '@/navigators/Tab/TabNav.view';
import MainNavStack from '../Main/MainNav.view';

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = props => {
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={props.initialNavigate}>
      <HomeStack.Screen
        name="Tab"
        component={TabNavStack}
        initialParams={{buttonActive: props.buttonActive}}
      />
      <HomeStack.Screen
        name="Main"
        component={MainNavStack}
        initialParams={{buttonActive: props.buttonActive}}
      />
    </HomeStack.Navigator>
  );
};
