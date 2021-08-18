import axios from "../apis/axios";
// import history from "../history";

export function login(email, password, device_id) {
  return axios
    .post("/client/users/login", { email, password, device_id: "Acer-Nitro-5" })
    .then((response) => {

        data = response.data;
      localStorage.setItem("user", JSON.stringify(response.data));
      if (response.status === 200) {
        if (!response.data.error) {
          localStorage.setItem("user", JSON.stringify(response.data));
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
