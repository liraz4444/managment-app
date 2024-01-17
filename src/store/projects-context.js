import { createContext } from "react";

export const ProjectsContext = createContext({
  projects: [],
  tasks: [],
  selecteProject: null,
  clickNewProjectBtn: () => {},
  onClickProjectBtn: () => {},
  onAddNewProject: () => {},
  onAddNewTaskToProject: () => {},
  onDeleteProject: () => {},
  onDeleteTask: () => {},
  onCancel: () => {},
});
