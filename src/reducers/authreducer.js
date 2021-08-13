const INITIAL_STATE = {
    message : null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        message : action.payload
      };

    case "SIGN_OUT":
      return {
        ...state,
        message : action.payload
      };

    case "SIGN_UP":
      return {
        ...state,
        message : action.payload
      };

    default:
      return state;
  }
};
