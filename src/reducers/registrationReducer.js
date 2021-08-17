// eslint-disable-next-line import/no-anonymous-default-export
export default (state={}, action) => {
    switch (action.type) {
      case "SIGN_UP_REQUEST":
        return {
            registering : true,
            user : action.payload
        };
      case "SIGN_UP_SUCCESS":
        return {
            registered : true,
            messsage : action.message,
            user : action.payload
        };
      case "SIGN_UP_FAILURE":
        return {
            registration : "failed",
            message : action.payload
        };
  
      default:
        return state;
    }
  };