import React from "react";
import ProfileScreen from "../screens/Profile/Profile.view";
import PostDetailScreen from "../screens/PostDetail/PostDetail.view";
import ChangePasswordScreen from "../screens/ChangePassword/ChangePassword.view";
import ChangeProflieScreen from "../screens/Profile/ChangeProfile/ChangeProflie.view";

const StackNavigationData = [
    {
        name: "Profile",
        component: ProfileScreen,
        headerShown: false
    },
    {
        name: "PostDetail",
        component: PostDetailScreen,
        headerShown: false
    },
    {
        name: "ChangePassword",
        component: ChangePasswordScreen,
        headerShown: false
    },
    {
        name: "ChangeProfle",
        component: ChangeProflieScreen,
        headerShown: false
    },
];

export default StackNavigationData;
