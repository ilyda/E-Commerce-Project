import axios from "axios";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
   headers: {
    Authorization: `${localStorage.getItem("token")}`
  }
});

export default api;
