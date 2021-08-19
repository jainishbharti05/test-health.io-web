import axios from "../apis/axios";
// import history from "../history";

export function login(email, password, device_id) {
  return axios
    .post("/client/users/login", { email, password, device_id: "Acer-Nitro-5" })
    .then((response) => {
      if (response.status === 200) {
        if (!response.data.error) {
          localStorage.setItem("user", JSON.stringify(response.data.dog_tag));
          return response.data;
        }
        const error = { message: response.data.error };
        return error;
      }
    });
}

export function logout() {
  localStorage.removeItem("user");
}

export function register(user) {
  return axios.post("/client/users/signup", user).then((response) => {
    if (response.status === 200) {
      if (!response.data.error) {
        
        return response.data;
      }
      const error = { message: response.data.error };
      return error;
    }
  });
}

export function sendOtp(email) {
  return axios.post("/client/users/resetPassword", {email: email}).then(response => {
    if(response.status === 200){
      if(!response.data.error){
        return response.data;
      }

      const error = { message: response.data.error}
      return error;
    }
  })
}

export function verifyOtp(email,otp) {
  return axios.post("client/users/verifyOtp", { email, otp}).then(response => { 
    if(response.status === 200){
      if(!response.data.error){
        return response.data;
      }

      const error = { message: response.data.error}
      return error;
    }
  })
}

export function changePw(email,otp,password) {
  return axios.post("client/users/updatePw", {email,otp, password}).then(response => { 
    if(response.status === 200){
      if(!response.data.error){
        return response.data;
      }

      const error = { message: response.data.error}
      return error;
    }
  })
}
