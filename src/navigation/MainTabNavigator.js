import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import tabNavigationData from './tabNavigationData';
import MyTabBar from '../components/MyTabBar';
const Tab = createBottomTabNavigator();
const defaultRouteName = "Home";

export default function MainTabs(props) {

    const renderTab = React.useCallback((props) => <MyTabBar {...props} />, []);

    const renderScreen = React.useCallback((item, idx) => (
        <Tab.Screen
            key={`tab_item${idx + 1}`}
            name={item.name}
            options={{
                bgColor: item.bgColor || '#fff'
            }}
        >{p => {
            if (props.logout) {
                p.logout = props.logout;
            }
            return (
                <item.component {...p} />
            )
        }}</Tab.Screen>
    ), []);

    const tabNavigation = React.useMemo(() => tabNavigationData.map(renderScreen), []);

    return (
        <Tab.Navigator
            tabBar={renderTab}
            initialRouteName={defaultRouteName}
            screenOptions={{ headerShown: false }}
            options={{
                lazy: true,
                transitionConfig: () => ({
                    transitionSpec: {
                        duration: 0,
                    },
                }),
            }}
        >
            {tabNavigation}
        </Tab.Navigator>
    );
};
