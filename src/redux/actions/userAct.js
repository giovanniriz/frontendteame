export const userAct = (username, token) => {
  return {
    type: "user/login",
    payload: {
      username,
      token,
    },
  };
};

export const RegAct = (username, email, token) => {
  return {
    type: "user/register",
    payload: {
      username,
      email,
      token,
    },
  };
};
