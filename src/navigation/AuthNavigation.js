import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator, Header, CardStyleInterpolators } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import StackNavigationAuthData from './stackNavigationAuthData';

const Stack = createStackNavigator();

export default function AuthView(props) {
    return (
        <Stack.Navigator
            options={{
                gestureResponseDistance: { "horizontal": 30 },
            }}
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            {StackNavigationAuthData.map((item, idx) => (
                <Stack.Screen
                    key={`stack_item-${idx + 1}`}
                    name={item.name}
                    component={item.component}
                    options={{
                        headerShown: item.headerShown,
                    }} />
            ))}
        </Stack.Navigator>
    );
}
