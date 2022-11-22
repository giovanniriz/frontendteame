const store = window.localStorage;

const temp = JSON.parse(store.getItem("user"));

const initialState = {
  currentUser: temp || {
    username: "",
    email: "",
    token: "",
  },
  allUsers: {
    list: [],
    error: {},
  },
};

const userRed = (state = initialState, action) => {
  const { type, payload: { username, email, token } = {} } = action;
  switch (type) {
    case "user/login":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          username,
          token,
        },
      };
    case "user/register":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          username,
          email,
          token,
        },
      };
    default:
      return state;
  }
};

export default userRed;
