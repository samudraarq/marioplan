const initState = {
  projects: [
    // { id: "1", title: "help me find peach", content: "blah blah blah" },
    // { id: "2", title: "collect all the stars", content: "blah blah blah" },
    // { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" },
  ],
  hasProjects: false,
  project: {},
  hasProject: false,
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PROJECTS":
      console.log("Getting projects", action.projects);
      return {
        ...state,
        projects: action.projects,
        hasProjects: true,
        project: {},
        hasProject: false,
      };
    case "GET_PROJECT":
      console.log("Getting project", action.project);
      return { ...state, project: action.project, hasProject: true };
    case "CREATE_PROJECT":
      console.log("Created a project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("Create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
