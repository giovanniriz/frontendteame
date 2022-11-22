export const handleRegis = (name, email, password, user_img, status) => {
  return {
    type: "REGIS",
    payload: {
      name,
      email,
      password,
      user_img,
      status,
    },
  };
};
