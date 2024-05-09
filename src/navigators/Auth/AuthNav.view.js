import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Data} from './AuthNav.data';

const Stack = createStackNavigator();

const AuthNavStack = props => {
  const [data, setData] = useState(Data);
  return (
    <Stack.Navigator screenOptions={{headerMode: 'screen'}}>
      {data ? (
        data.map((item, idx) => {
          return (
            <Stack.Screen
              key={`stack_item-${idx + 1}`}
              name={item.name}
              component={item.component}
              options={{
                headerShown: item.useDefaultHeader || item.headerShown,
                title: item.headerTitle || '',
                //headerTintColor: colors.navigation.backAuth,
              }}
            />
          );
        })
      ) : (
        <></>
      )}
    </Stack.Navigator>
  );
};

export default AuthNavStack;
