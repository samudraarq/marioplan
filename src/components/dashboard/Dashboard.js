import React, { useEffect } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { getProjects } from "../../store/actions/projectActions";

function Dashboard({ projects, getProjects, hasProjects }) {
  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          {hasProjects ? (
            <ProjectList projects={projects} />
          ) : (
            <h4>Loading...</h4>
          )}
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
    hasProjects: state.project.hasProjects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: () => dispatch(getProjects()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
