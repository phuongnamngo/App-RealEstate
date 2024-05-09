
import * as React from 'react';
import {CommonActions} from '@react-navigation/native';

export const mainNavigationRef = React.createRef();

export function navigate(name, params) {
  mainNavigationRef.current?.navigate(name, params);
}

export function goBack() {
  if (mainNavigationRef.current?.canGoBack()) {
    mainNavigationRef.current?.goBack();
  } else {
    navigateAndSimpleReset('Tab', {screen: 'Home'}, 0);
  }
}

export function navigateAndSimpleReset(name, params, index = 0) {
  mainNavigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes: [{name, params}],
    }),
  );
}