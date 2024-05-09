import React, {useEffect, useState} from 'react';
import imgBanner1 from '../../../assets/images/image-banner1.jpg';
import imgBanner2 from '../../../assets/images/image-banner2.jpg';
import imgBanner3 from '../../../assets/images/image-banner3.jpg';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import getProfile from '@/store/reducers/api/Auth/getProfile';
import {navigate} from '@/navigators/Root';
const useHome = () => {
  const dispatch = useDispatch();
  const {infoUser, isLoggedIn} = useSelector(
    state => ({
      infoUser: state.main.auth.infoUser,
      isLoggedIn: state.main.auth.isLoggedIn,
    }),
    shallowEqual,
  );
  const [refreshing, setRefreshing] = useState(false);
  const dataBanner = [
    {
      id: 1,
      image: imgBanner1,
    },
    {
      id: 2,
      image: imgBanner2,
    },
    {
      id: 3,
      image: imgBanner3,
    },
  ];
  const dataNews = [
    {
      id: 1,
      title: 'Bất động sản 1',
      image: imgBanner1,
    },
    {
      id: 2,
      title: 'Bất động sản 2',
      image: imgBanner2,
    },
    {
      id: 3,
      title: 'Bất động sản 3',
      image: imgBanner3,
    },
    {
      id: 4,
      title: 'Bất động sản 3',
      image: imgBanner3,
    },
    {
      id: 5,
      title: 'Bất động sản 3',
      image: imgBanner3,
    },
  ];
  const dataDiscount = [
    {
      id: 1,
      title: 'Ưu đãi 1',
      image: imgBanner1,
    },
    {
      id: 2,
      title: 'Ưu đãi 2',
      image: imgBanner2,
    },
    {
      id: 3,
      title: 'Ưu đãi 3',
      image: imgBanner3,
    },
    {
      id: 4,
      title: 'Bất động sản 3',
      image: imgBanner3,
    },
    {
      id: 5,
      title: 'Bất động sản 3',
      image: imgBanner3,
    },
  ];

  const getClient = async () => {
    const res = await dispatch(getProfile.action());
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

  const goPostDetail = item => {
    navigate('Main', {screen: 'PostDetail', params: {item}});
  };

  const goPageLogin = item => {
    navigate('Auth', {screen: 'Login'});
  };

  useEffect(() => {
    loadDefault();
  }, []);
  return {
    dataBanner,
    dataDiscount,
    dataNews,
    goPostDetail,
    infoUser,
    goPageLogin,
    isLoggedIn,
    refreshing,
    onRefresh,
  };
};
export default useHome;
