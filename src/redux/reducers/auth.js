import {fulfilled, pending, rejected} from '../../utils/action.utils';
import {LOGIN} from '../actionTypes';

let initialState = {
  isAuth: false,
  token: null,
  message: '',
  errorMessage: '',
  isLoading: false,
};

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case pending(LOGIN):
      return {
        ...state,
        isLoading: true,
  
      };
    case fulfilled(LOGIN):
      console.log(payload.data.token);
      return {
        ...state,
        token: payload.data.token,
        isLoading: false,
        
      };
    case rejected(LOGIN):
      return {
        ...state,
        errorMessage: payload.response,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
