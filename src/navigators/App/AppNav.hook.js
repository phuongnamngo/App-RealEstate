import {useState, useEffect, useRef} from 'react';
import {
  initAppFirebase,
  loadRemoteConfig,
} from '@/Services/utils/handleRemoteConfig';
import {linking} from '@/Config';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {navigate} from '@/navigators/Root';
// import { appLoading } from '@/Actions/System/system';
import loadProvinces from '@/Store/Reducers/api/General/loadProvinces';
import loadAllLevel from '@/Store/Reducers/api/Target/loadAllLevel';
import {
  setInitializedFirebase,
  setInitializedUrl,
  appError,
} from '@/Actions/System/system';

const useAppNav = () => {
  const dispatch = useDispatch();

  // const [initializedFirebase, setInitializedFirebase] = useState(false);
  const {
    loading: applicationIsLoading,
    isLoggedIn,
    appSuccess,
    appSuccessEvaluate,
    isAppError,
    appMaintenance,
    initializedFirebase,
    initializedUrl,
    customer_type,
    appConfirm,
  } = useSelector(
    state => ({
      loading: state.main.system.loading,
      isLoggedIn: state.main.auth.isLoggedIn,
      appSuccess: state.main.system.success,
      appSuccessEvaluate: state.main.system.successPopup,
      isAppError: state.main.system.error,
      appMaintenance: state.main.system.maintenance,
      initializedFirebase: state.main.system.initializedFirebase,
      initializedUrl: state.main.system.initializedUrl,
      customer_type: state.main.auth.customer_type,
      appConfirm: state.main.system.confirm,
    }),
    shallowEqual,
  );
  const [customLoading, setCustomLoading] = useState(false);

  const onPressDrawerItem = item => {
    if (item.name === 'Logout') {
      // dispatch(signOut.action({})).then(() => {
      // navigate(Screen.Login)
      // })
    } else {
      navigate(item.name);
    }
  };

  const initFirebase = async () => {
    try {
      await initAppFirebase();
      dispatch(setInitializedFirebase(true));
    } catch (error) {
      console.error(error);
    }
  };

  const loadConfig = async () => {
    await loadRemoteConfig();
    dispatch(setInitializedUrl(true));
    loadDefaultData();
  };

  const loadDefaultData = async () => {
    try {
      setCustomLoading(true);
      const promises = [
        dispatch(loadAllLevel.action()),
      ];
      await Promise.all(promises);
      setCustomLoading(false);
    } catch (error) {
      console.log(error);
      setCustomLoading(false);
      dispatch(appError(true));
      // navigate('Main', {screen: Screen.Error});
    }
  };

  // useEffect(() => {
  //   loadDefaultData();
  // }, []);

  useEffect(() => {
    if (!initializedFirebase) {
      initFirebase();
    } else {
      if (!initializedUrl) {
        loadConfig();
      }
    }
  }, [initializedFirebase, initializedUrl]);

  return {
    isLoggedIn,
  };
};

export default useAppNav;
