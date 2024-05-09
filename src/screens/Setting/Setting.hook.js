import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../actions/Auth/auth';
import logoutApi from '@/store/reducers/api/Auth/logoutApi';
import getProfile from '@/store/reducers/api/Auth/getProfile';
import {useEffect, useState} from 'react';

const useSetting = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {infoUser} = useSelector(state => state.main.auth);
  const [refreshing, setRefreshing] = useState(false);
  const getClient = async () => {
    const res = await dispatch(getProfile.action());
  };

  const logoutSubmit = async () => {
    const res = await dispatch(logoutApi.action());
  };
  const loadDefault = async () => {
    const promises = [getClient()];
    Promise.all(promises).then(function () {
      refreshing && setRefreshing(false);
    });
  };
  const onRefresh = async () => {
    loadDefault();
  };
  useEffect(() => {
    loadDefault();
  }, []);
  return {
    infoUser,
    logoutSubmit,
    refreshing,
    onRefresh,
  };
};
export default useSetting;
