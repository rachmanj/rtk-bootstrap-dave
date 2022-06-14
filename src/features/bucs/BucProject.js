import { useSelector } from "react-redux";
import { selectAllProjects } from "../projects/projectsSlice";

const BucProject = ({ projectId }) => {
  const projects = useSelector(selectAllProjects);

  const project = projects.find((project) => project.id === projectId);

  return <span>{project ? project.code : "unknown project"}</span>;
};

export default BucProject;
