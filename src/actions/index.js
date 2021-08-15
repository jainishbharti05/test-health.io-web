// import axios from '../apis/axios';
// import history from "../history";

import { login, logout, register } from "../services/authServices";

export const signIn = (email, password) => async (dispatch, getState) => {

  dispatch( { type: 'SIGN_IN_REQUEST', payload: email })
  const response = await login(email, password);
  if (response.message){
    dispatch({ type: "SIGN_IN_FAILURE", payload: response.message });
  }
  if (!response.message)
  dispatch({ type: 'SIGN_IN_SUCCESS', payload: response})
};

export const signOut = () => async (dispatch, getState) => {
  const response = await logout();

  dispatch({ type: "SIGN_OUT", payload: response });
};

export const signUp = (user) => async (dispatch, getState) => {
  dispatch( { type: 'SIGN_UP_REQUEST', payload: user })
  const response = await register(user);
  if (response.message){
    dispatch({ type: "SIGN_UP_FAILURE", payload: response.message });
  }
  if (!response.message)
  dispatch({ type: 'SIGN_UP_SUCCESS', payload: response})

};
