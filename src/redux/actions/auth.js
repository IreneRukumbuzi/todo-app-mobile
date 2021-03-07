import {LOGIN, SIGNUP} from '../actionTypes/index';
import axios from '../../helpers/axios';

export const login = (email, password) => (dispatch) =>
  dispatch({
    type: LOGIN,
    payload: axios.post('/login', {email, password}),
  });

export const signup = (name, email, password) => (dispatch) =>
  dispatch({
    type: SIGNUP,
    payload: axios.post('/signup', {name, email, password}),
  });
