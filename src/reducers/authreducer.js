let user = JSON.parse(localStorage.getItem("user"));
const INITIAL_STATE = user ? { loggedIn: true, user } : {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN_REQUEST":
      return {
        loggingIn: true,
        user: action.payload
      };

    case "SIGN_IN_SUCCESS":
      return {
        loggedIn: true,
        user: action.payload
      };

    case "SIGN_IN_FAILURE":
      return {
        logIn : "failed",
        message : action.payload
      };

    case "SIGN_OUT":
      return {
        loggedIn : false
      };

    default:
      return state;
  }
};
