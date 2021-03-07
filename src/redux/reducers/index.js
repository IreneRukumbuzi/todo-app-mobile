import {combineReducers} from 'redux';
import loginReducer from './auth';

const rootReducer = combineReducers({
  auth: loginReducer
});

export default rootReducer;