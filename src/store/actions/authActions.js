import firebase from "../../config/fbConfig";

export const signIn = (credentials) => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        const user = firebase.auth().currentUser;
        const userData = {
          email: user.email,
          uid: user.uid,
        };
        dispatch({ type: "LOGIN_SUCCESS", user: userData });
      })
      .catch((error) => {
        // handles error here
        dispatch({ type: "LOGIN_ERROR", error });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch((error) => {
        dispatch({ type: "LOGOUT_FAILED", error });
      });
  };
};
