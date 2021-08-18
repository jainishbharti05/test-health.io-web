import { combineReducers } from "redux";

import authReducer from "./authreducer";
import registrationReducer from "./registrationReducer";

export default combineReducers({
  authentication: authReducer,
  userRegistration: registrationReducer,
});
