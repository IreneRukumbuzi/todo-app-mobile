import Thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';

const initialState = {};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: [],
};

// const allReducers = persistReducer(persistConfig, RootReducer);

const middlewares = [Thunk];

export const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
