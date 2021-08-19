// eslint-disable-next-line import/no-anonymous-default-export
export default (state={}, action) => {
    switch (action.type) {
      case "SEND_OTP_REQUEST":
        return {
            otpStatus: "requested",
            user : action.payload
        };
      case "SEND_OTP_SUCCESS":
        return {
            otpStatus: "sent",
            message : action.message
        };
      case "SEND_OTP_FAILURE":
        return {
            otpStatus: "failed",
            message : action.payload
        };

      case "VERIFY_OTP_REQUEST":
        return {
            otpVerification: "requested",
            user : action.payload
        };
      case "VERIFY_OTP_SUCCESS":
        return {
            otpVerification: "successfull",
            message : action.message
        };
      case "VERIFY_OTP_FAILURE":
        return {
            otpVerification: "failed",
            message : action.payload
        };

      case "CHANGEPW_REQUEST":
        return {
            changePassword: "requested",
            user : action.payload
        };
      case "CHANGEPW_SUCCESS":
        return {
            changePassword: "successfull",
            message : action.message
        };
      case "CHANGEPW_FAILURE":
        return {
            changePassword: "failed",
            message : action.payload
        };
  
      default:
        return state;
    }
  };