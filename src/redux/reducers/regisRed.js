const initialState = {
  name: null,
  email: null,
  password: null,
  user_img: null,
  status: null,
};

const regisRed = (state = initialState, action) => {
  switch (action.type) {
    case "REGIS":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        user_img: action.payload.user_img,
        status: action.payload.status,
      };
    default:
      return { ...state };
  }
};

export default regisRed;
