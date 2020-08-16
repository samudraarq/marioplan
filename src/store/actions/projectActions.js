export const createProject = (project) => {
  return (dispatch, getState) => {
    // make async call here
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
