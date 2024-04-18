import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabs from './MainTabNavigator';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import RootView from './RootNavigation';
import { useNavigation, StackActions } from '@react-navigation/native';
import AuthView from './AuthNavigation';
import { logout } from '../actions/Auth/auth';

const RootStack = createStackNavigator();

const rootStacks = [
    { name: "Main", component: MainTabs, customProps: true },
    { name: "Auth", component: AuthView },
    { name: "Root", component: RootView, customProps: true }
];

export default function App() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const sourceCancelToken = axios.CancelToken.source();
    const hasRequestStreamUser = React.useRef(false);

    const handleLogout = React.useCallback((data) => {
        const { backLogin } = data;
        dispatch(logout(data));
        if (!!backLogin && navigation.getCurrentRoute().name != 'Login') {
            navigation.dispatch(StackActions.replace('Auth', { screen: 'Login' }));
        }
    }, [navigation]);

    React.useEffect(() => {
        return () => {
            sourceCancelToken.cancel();
            hasRequestStreamUser.current = false;
        }
    }, []);

    React.useEffect(() => {
        if (isLoggedIn) {
            hasRequestStreamUser.current = true;
        } else if (!!!isLoggedIn && hasRequestStreamUser.current) {
            hasRequestStreamUser.current = false;
        }
    }, [isLoggedIn]);

    return (
        <RootStack.Navigator
            drawerStyle={{
                backgroundColor: '#1C2789',
            }}
            screenOptions={{ gestureEnabled: false, swipeEnabled: false, headerShown: false }}
        >{rootStacks.map((item, idx) => <RootStack.Screen
            key={`root_item-${idx + 1}`}
            name={item.name}>{props => {
                if (item.customProps) {
                    props.logout = handleLogout;
                }
                return (
                    <item.component {...props} />
                )
            }}
        </RootStack.Screen>)}</RootStack.Navigator>
    );
}
