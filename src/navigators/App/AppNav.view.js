import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {mainNavigationRef} from '@/navigators/Main/MainNavigator';
import AuthNavStack from '@/navigators/Auth/AuthNav.view';
// import ActivityIndicator from '@/Components/ActivityIndicator';
import {HomeStackScreen} from '../Drawer/Drawer.data';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {shallowEqual, useSelector} from 'react-redux';
import styled from 'styled-components';
import {colors} from '@/styled';
import Loading from '@/components/Loading';

const AppNav = props => {
  const {screen, initialNavigate} = props;
  const {isLoggedIn, loading: applicationIsLoading} = useSelector(
    state => ({
      isLoggedIn: state.main.auth.isLoggedIn,
      loading: state.main.system.loading,
    }),
    shallowEqual,
  );
  const containerActivity = useMemo(() => {
    if (!applicationIsLoading) {
      return null;
    }
    return <Loading />;
  }, [applicationIsLoading]);

  const currentStack = useMemo(() => {
    if (!isLoggedIn) {
      return <AuthNavStack />;
    }
    return (
      <HomeStackScreen
        buttonActive={screen}
        initialNavigate={initialNavigate}
        initialScreen={screen}
      />
    );
  }, [isLoggedIn]);

  return (
    <SafeAreaView flex={1}>
      <NavigationContainer
        // initialState={initialState}
        onReady={() => {}}
        ref={mainNavigationRef}>
        {currentStack}
      </NavigationContainer>
      {containerActivity}
    </SafeAreaView>
  );
};

export default AppNav;
