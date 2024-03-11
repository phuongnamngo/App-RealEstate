import React from "react";
import ProfileScreen from "../screens/Profile/Profile.view";

const StackNavigationData = [
    {
        name: "Accounts",
        component: ProfileScreen,
        headerLeft: null,
        tabBarVisible: false,
        // headerBackground: { source: imageTopBarBG },
        headerTitleStyle: {
            fontSize: 18,
        },
        headerShown: false
    },
];

export default StackNavigationData;
