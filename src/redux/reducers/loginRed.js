const initialState = {
  email: null,
  fullname: null,
  token: null,
  logstatus: null,
};

const loginRed = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        email: action.payload.email,
        fullname: action.payload.fullname,
        token: action.payload.token,
        logstatus: action.payload.status,
      };
    default:
      return { ...state };
  }
};

export default loginRed;
