import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '@/actions/Auth/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import signIn from '@/store/reducers/api/Auth/signIn';
import {showAlertError} from '@/services/utils/Alert';
import {navigate} from '@/navigators/Root';

const useLogin = () => {
  const dispatch = useDispatch();
  const [tokenFirebase, setTokenFirebase] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const goPage = text => {
    navigate(text);
  };
  const changePhone = e => {
    setPhoneNumber(e);
  };
  const changePass = e => {
    setPassword(e);
  };
  const onSubmit = async item => {
    if (!phoneNumber || !password) {
      showAlertError({message: 'Thông tin không được để trống'});
      return;
    }
    const payload = {phone: phoneNumber, password};
    const rs = await dispatch(signIn.action(payload));
    if (rs.payload.statuscode === 200) {
      dispatch(login(rs.payload.data));
    } else {
      showAlertError({
        message:
          Object.values(rs?.payload?.data?.errors ?? {}).flat()[0] ??
          'Lỗi không xác định',
      });
    }
  };
  const getFCMToken = async () => {
    const fcmToken = await AsyncStorage.getItem('fcmtoken');
    if (!fcmToken) {
      try {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
          setTokenFirebase(fcmToken);
          await AsyncStorage.setItem('fcmToken', fcmToken);
        }
      } catch (error) {
        console.log(error, 'error in fcmtoken');
      }
    }
  };
  useEffect(() => {
    getFCMToken();
  }, []);
  return {goPage, onSubmit, changePhone, changePass};
};
export default useLogin;
