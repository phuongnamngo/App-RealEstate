import HistoryScreen from '../screens/History/History.view';
import HomeScreen from '../screens/Home/Home.view';
import PostScreen from '../screens/Post/Post.view';
import SettingScreen from '../screens/Setting/Setting.view';
const tabNavigationData = [
    {
        name: 'Home',
        component: HomeScreen,
    },
    {
        name: 'History',
        component: HistoryScreen,
    },
    {
        name: 'Post',
        component: PostScreen,
    },
    {
        name: 'Account',
        component: SettingScreen,
    },
];

export default tabNavigationData;