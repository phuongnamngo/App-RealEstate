import React, {useMemo} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavData} from './MainNav.data';
import {goBack} from './MainNavigator';
import IconBack from '../../../assets/icons/ic-goback.png';
import {useTabNav} from '../Tab/TabNav.hook';

const MainStack = createNativeStackNavigator();

const MainNavStack = props => {
  const {initialRouteName, data} = useTabNav(props);
  const renderScreen = (item, index) => (
    <MainStack.Screen
      initialParams={{data: data}}
      key={`nav-${index}`}
      name={item.name}
      component={item.component}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
        },
        headerShadowVisible: false,
        headerShown: item.useDefaultHeader || item.headerShown,
        title: item.title,
        headerBackTitleVisible: false,
        headerLeft: p => (
          <TouchableOpacity onPress={goBack}>
            <Image source={IconBack} />
          </TouchableOpacity>
        ),
      }}
    />
  );

  const tabNavigation = useMemo(() => MainNavData.map(renderScreen), []);

  return (
    <MainStack.Navigator initialRouteName={initialRouteName}>
      {tabNavigation}
    </MainStack.Navigator>
  );
};

export default MainNavStack;
