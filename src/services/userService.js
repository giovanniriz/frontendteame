import axios from "axios";

export const login = async (email, password) => {
  const url = "https://movieapp-be-tim-e.herokuapp.com/api/login";
  const data = {
    email,
    password,
  };
  const response = await axios.post(url, data);
  console.log("response axios", response);
  return response;
};

export const regis = async (fullname, email, password, user_img, username) => {
  const url = "https://movieapp-be-tim-e.herokuapp.com/api/register";
  const data = {
    fullname,
    email,
    password,
    user_img,
    username,
  };
  const response = await axios.post(url, data);
  console.log("response axios", response);
  return response;
};
