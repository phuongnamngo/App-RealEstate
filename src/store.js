import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { thunk } from "redux-thunk";
import rootReducer from "./reducers"

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: []
};
const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);