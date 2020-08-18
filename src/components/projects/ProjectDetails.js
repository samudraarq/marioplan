import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";

const ProjectDetails = ({ getProject, project, hasProject }) => {
  const { id } = useParams();

  useEffect(() => {
    getProject(id);
  }, [getProject, id]);

  if (hasProject) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>August 18th, 2020</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    project: state.project.project,
    hasProject: state.project.hasProject,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProject: (id) => dispatch(getProject(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
