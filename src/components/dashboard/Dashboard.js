import React, { useEffect } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { getProject } from "../../store/actions/projectActions";

function Dashboard({ projects, getProject }) {
  useEffect(() => {
    getProject();
  }, [getProject]);
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProject: () => dispatch(getProject()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
