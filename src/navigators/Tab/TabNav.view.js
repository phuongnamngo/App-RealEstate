import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTabNav} from './TabNav.hook';
import {TabData} from './TabNav.data';
import MyTabBar from '@/components/MyTabBar';

const Tab = createBottomTabNavigator();

const TabNavStack = props => {
  const {initialRouteName} = useTabNav(props);
  const renderScreen = (item, index) => (
    <Tab.Screen
      key={`tab-${index}`}
      name={item.name}
      title={item.title}
      component={item.component}
      options={{
        title: item.title,
        headerShown: item.headerShown || false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
        },
        headerShadowVisible: false,
      }}
    />
  );
  const renderTab = React.useCallback(props => <MyTabBar {...props} />, []);
  const tabNavigation = useMemo(() => TabData.map(renderScreen), []);

  return (
    <Tab.Navigator
      tabBar={renderTab}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initialRouteName}>
      {tabNavigation}
    </Tab.Navigator>
  );
};

export default TabNavStack;
