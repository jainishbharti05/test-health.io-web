// import axios from '../apis/axios';
// import history from "../history";

import { login, logout, register } from "../services/authServices";

export const signIn = (email, password) => async (dispatch, getState) => {
  const response = await login(email, password);

  dispatch({ type: "SIGN_IN", payload: "loggedin" });
};

export const signOut = () => async (dispatch, getState) => {
  await logout();

  dispatch({ type: "SIGN_OUT", payload: "loggedout" });
};

export const signUp = (user) => async (dispatch, getState) => {
  const response = await register(user);

  dispatch({ type: "SIGN_UP", payload: "registered successfully" });
};
