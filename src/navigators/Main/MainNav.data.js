import ChangePasswordScreen from '@/screens/ChangePassword/ChangePassword.view';
import HistoryDetailScreen from '@/screens/HistoryDetail/HistoryDetail.view';
import PostDetailScreen from '@/screens/PostDetail/PostDetail.view';
import ChangeProflieScreen from '@/screens/Profile/ChangeProfile/ChangeProflie.view';
import ProfileScreen from '@/screens/Profile/Profile.view';

export const MainNavData = [
  {
    name: 'Profile',
    component: ProfileScreen,
    title: 'Thông tin tài khoản',
  },
  {
    name: 'PostDetail',
    component: PostDetailScreen,
    title: 'Chi tiết bài viết',
  },
  {
    name: 'ChangePassword',
    component: ChangePasswordScreen,
    title: 'Đổi mật khẩu',
  },
  {
    name: 'ChangeProfle',
    component: ChangeProflieScreen,
    title: 'Chỉnh sửa thông tin',
  },
  {
    name: 'HistoryDetail',
    component: HistoryDetailScreen,
    title: 'Chi tiết lịch sử',
  },
  //endAppendNavData
];
