export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call here
    dispatch({ type: "CREATE_PROJECT", project });
  };
};