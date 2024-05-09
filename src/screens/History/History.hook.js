import {useNavigation} from '@react-navigation/native';
import icHouse from '../../../assets/icons/ic_house.png';
const useHistory = () => {
  const navigation = useNavigation();
  const dataHistory = [
    {
      id: 1,
      image: icHouse,
      content: 'Chuyển diamond',
      to: 'Đăng Chánh',
      time: '10/04/2024 - 10:30',
      price: 10000,
      status: 1,
    },
    {
      id: 2,
      image: icHouse,
      content: 'Chuyển diamond',
      to: 'Đăng Chánh',
      time: '10/04/2024 - 10:30',
      price: 10000,
      status: 2,
    },
    {
      id: 3,
      image: icHouse,
      content: 'Chuyển diamond',
      to: 'Đăng Chánh',
      time: '10/04/2024 - 10:30',
      price: 10000,
      status: 2,
    },
  ];
  const statusHistory = item => {
    switch (item) {
      case 1:
        return 'Hoàn thành';
      case 2:
        return 'Đã hủy';
      default:
        break;
    }
  };
  const goHistoryDetail = item => {
    navigation.navigate('Main', {screen: 'HistoryDetail', params: {item}});
  };
  return {dataHistory, statusHistory, goHistoryDetail};
};
export default useHistory;
