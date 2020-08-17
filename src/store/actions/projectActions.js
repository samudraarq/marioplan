import { db } from "../../config/fbConfig";

export const createProject = (project) => {
  return (dispatch, getState) => {
    // make async call here
    db.collection("projects")
      .add({
        ...project,
        authorFirstName: "Net",
        authorLastName: "Ninja",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};

export const getProject = () => {
  return (dispatch, getState) => {
    db.collection("projects")
      .orderBy("createdAt", "desc")
      .get()
      .then((querySnapshot) => {
        const newProjects = [];
        querySnapshot.forEach((doc) => {
          newProjects.push({ ...doc.data(), id: doc.id });
        });
        dispatch({ type: "GET_PROJECTS", projects: newProjects });
      });
  };
};
