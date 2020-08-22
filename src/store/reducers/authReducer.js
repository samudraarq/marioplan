const initState = {
  authError: null,
  user: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("successfully login", action.user);
      return { ...state, authError: null, user: action.user };
    case "LOGIN_ERROR":
      console.log("login error");
      return { ...state, authError: "Login failed" };
    case "LOGOUT_SUCCESS":
      console.log("successfully logout");
      return { ...state, authError: null, user: null };
    case "LOGOUT_FAILED":
      console.log("failed to logout");
      return { ...state, authError: "Logout failed" };
    default:
      return state;
  }
};

export default authReducer;
