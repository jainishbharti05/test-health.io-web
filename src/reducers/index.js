import { combineReducers } from "redux";

import authReducer from "./authreducer";
import forgotPwReducer from "./forgotPwReducer";
import registrationReducer from "./registrationReducer";

export default combineReducers({
  authentication: authReducer,
  userRegistration: registrationReducer,
  passwordRecovery: forgotPwReducer
});
