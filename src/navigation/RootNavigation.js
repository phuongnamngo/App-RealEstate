import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator, Header, CardStyleInterpolators } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import StackNavigationData from './stackNavigationData';

const Stack = createStackNavigator();

export default function RootView(props) {

    return (
        <Stack.Navigator
            options={{
                gestureResponseDistance: { "horizontal": 30 },
            }}
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            {StackNavigationData.map((item, idx) => (
                <Stack.Screen
                    key={`stack_item-${idx + 1}`}
                    name={item.name}
                    options={{
                        headerShown: item.headerShown,
                    }}>{p => {
                        if (props.logout) {
                            p.logout = props.logout;
                        }
                        return (
                            <item.component {...p} />
                        )
                    }}</Stack.Screen>
            ))}
        </Stack.Navigator>
    );
}
