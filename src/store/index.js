import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import createSensitiveStorage from 'redux-persist-sensitive-storage';
import {createFilter} from 'redux-persist-transform-filter';
import {apiReducer, mainReducer, sensitiveReducer} from './reducers';

const sensitiveStorage = createSensitiveStorage({
  keychainService: 'sensitiveKeychain',
  sharedPreferencesName: 'sensitiveSharedPrefs',
});

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['sensitive', 'main', 'api'],
};

const sensitivePersistConfig = {
  key: 'sensitive',
  storage: sensitiveStorage,
};
const mainPersistConfig = {
  key: 'main',
  storage: AsyncStorage,
  blacklist: ['system', 'general'],
};
const saveSubsetAPIFilter = createFilter('Auth.signIn');
const apiPersistConfig = {
  key: 'api',
  storage: AsyncStorage,
  whitelist: [],
  transforms: [saveSubsetAPIFilter],
};

const rootReducer = combineReducers({
  sensitive: persistReducer(sensitivePersistConfig, sensitiveReducer),
  main: persistReducer(mainPersistConfig, mainReducer),
  api: persistReducer(apiPersistConfig, apiReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      immutableCheck: {
        ignoredPaths: ['api'],
      },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ['api'],
      },
    });

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    } 
    return middlewares;
  },
});

const persistor = persistStore(store);

export {store, persistor};