import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://food-truck-trakr.herokuapp.com/api"
  });
};

export default axiosWithAuth;
