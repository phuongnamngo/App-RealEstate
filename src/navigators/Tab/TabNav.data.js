import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@/screens/Home/Home.view';
import HistoryScreen from '@/screens/History/History.view';
import PostScreen from '@/screens/Post/Post.view';
import SettingScreen from '@/screens/Setting/Setting.view';

const HistorytStack = createNativeStackNavigator();

export const HistoryStackScreen = () => {
  return (
    <HistorytStack.Navigator screenOptions={{headerShown: false}}>
      <AccountStack.Screen
        name={'History'}
        component={HistoryScreen}
        options={{
          title: 'Lịch sử giao dịch',
          headerTitleAlign: 'center',
          headerShown: true,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
          headerShadowVisible: false,
        }}
      />
    </HistorytStack.Navigator>
  );
};

const PosttStack = createNativeStackNavigator();

export const PostStackScreen = () => {
  return (
    <PosttStack.Navigator screenOptions={{headerShown: false}}>
      <AccountStack.Screen
        name={'Post'}
        component={PostScreen}
        options={{
          title: 'Bài viết',
          headerTitleAlign: 'center',
          headerShown: true,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
          headerShadowVisible: false,
        }}
      />
    </PosttStack.Navigator>
  );
};

const AccountStack = createNativeStackNavigator();

export const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator screenOptions={{headerShown: false}}>
      <AccountStack.Screen
        name={'Account'}
        component={SettingScreen}
        options={{
          title: 'Tài khoản',
          headerTitleAlign: 'center',
          headerShown: true,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
          headerShadowVisible: false,
        }}
      />
    </AccountStack.Navigator>
  );
};

export const TabData = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'TabHistory',
    component: HistoryStackScreen,
  },
  {
    name: 'TabPost',
    component: PostStackScreen,
  },
  {
    name: 'TabAccount',
    component: AccountStackScreen,
  },
  //endAppendTabData
];
