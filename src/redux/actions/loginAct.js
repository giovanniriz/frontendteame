export const handleLogin = (email, fullname, token, status) => {
  return {
    type: "LOGIN",
    payload: {
      email,
      fullname,
      token,
      status,
    },
  };
};
