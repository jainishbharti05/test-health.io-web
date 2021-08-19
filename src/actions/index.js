// import axios from '../apis/axios';
import history from "../history";

import { login, logout, register, sendOtp, verifyOtp, changePw } from "../services/authServices";

export const signIn = (email, password) => async (dispatch, getState) => {
  dispatch({ type: "SIGN_IN_REQUEST", payload: email });
  const response = await login(email, password);
  if (response.message) {
    dispatch({ type: "SIGN_IN_FAILURE", payload: response.message });
  }
  if (!response.message)
    dispatch({ type: "SIGN_IN_SUCCESS", payload: response });
  history.push("/dashboard");
};

export const signOut = () => async (dispatch, getState) => {
  const response = await logout();

  dispatch({ type: "SIGN_OUT", payload: response });
  history.push("/");
};

export const signUp = (user) => async (dispatch, getState) => {
  dispatch({ type: "SIGN_UP_REQUEST", payload: user });
  const response = await register(user);
  if (response.message) {
    dispatch({ type: "SIGN_UP_FAILURE", payload: response.message });
  }
  if (!response.message)
    dispatch({
      type: "SIGN_UP_SUCCESS",
      payload: response,
      message: "User registered successfully",
    });
};

export const sendOTP = (email) => async (dispatch) => {
  dispatch({ type: "SEND_OTP_REQUEST", payload: email });
  const response = await sendOtp(email);
  if (response.message) {
    dispatch({ type: "SEND_OTP_FAILURE", payload: response.message });
  }
  if (!response.message)
    dispatch({
      type: "SEND_OTP_SUCCESS",
      payload: response,
      message: response.status
    });
};

export const verifyOTP = (email,otp) => async (dispatch) => {
  dispatch({ type: "VERIFY_OTP_REQUEST", payload: email });
  const response = await verifyOtp(email,otp);
  if (response.message) {
    dispatch({ type: "VERIFY_OTP_FAILURE", payload: response.message });
  }
  if (!response.message)
    dispatch({
      type: "VERIFY_OTP_SUCCESS",
      payload: response,
      message: response.status
    });
};

export const changePassword = (email,otp,password) => async (dispatch) => {
  dispatch({ type: "CHANGEPW_REQUEST", payload: email });
  const response = await changePw(email,otp,password);
  if (response.message) {
    dispatch({ type: "CHANGEPW_FAILURE", payload: response.message });
  }
  if (!response.message)
    dispatch({
      type: "CHANGEPW_SUCCESS",
      payload: response,
      message: response.status
    });
    history.push('/')
}



