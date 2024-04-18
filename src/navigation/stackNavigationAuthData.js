import ForgotPasswordScreen from '../screens/ForgotPassword/ForgotPassword.view';
import LoginScreen from '../screens/Login/Login.view';
import RegisterScreen from '../screens/Register/Register.view';

const StackNavigationAuthData = [
    {
        name: 'Login',
        component: LoginScreen,
        headerShown: false,
    },
    {
        name: 'Register',
        component: RegisterScreen,
        headerShown: false,
    },
    {
        name: 'ForgotPassword',
        component: ForgotPasswordScreen,
        headerShown: false,
    }
];

export default StackNavigationAuthData;