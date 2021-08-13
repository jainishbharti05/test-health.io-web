import axios from "../apis/axios";

export function login(email, password, device_id) {
    let data = null;
  axios
    .post("/client/users/login", { email, password, device_id: "Acer-Nitro-5" })
    .then(handleResponse)
    .then((response) => {
        data = response.data;
        console.log(data)
      localStorage.setItem("user", JSON.stringify(response.data));
    });
    return data;
}

export function logout() {
  localStorage.removeItem("user");
}

export function register(user) {
  axios.post("/client/users/signup", user).then(handleResponse);
}

export function handleResponse(response) {
  return response.text().then((text) => {
    const data = JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
      }

      const error = response.statusText;
      return Promise.reject(error);
    }
    if (response.error) {
      const error = response.error;
      return error;
    }
    return data;
  });
}
