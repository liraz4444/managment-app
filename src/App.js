import "./index.css";
import Navbar from "./components/Navbar";
import AddProject from "./components/AddProject";
import HomePage from "./components/HomePage";
import ShowProject from "./components/ShowProject";
import styled from "styled-components";
import { useState } from "react";
import { ProjectsContext } from "./store/projects-context";
function App() {
  let content;
  const [pickProject, setPickProject] = useState(null);
  const [projectStatus, setStatus] = useState({
    page: "HomePage",
    projects: [],
    tasks: [],
  });

  //we clicked on add project btn in the navbar
  function addingNewProjectClicked() {
    setStatus((prevValue) => {
      return {
        ...prevValue,
        page: "AddingNewProject",
      };
    });
  }
  //we clicked a button of project in the navbar
  function clickOnProjectInNavbar(id) {
    const pick = projectStatus.projects.find((project) => project.id === id);
    setPickProject(() => pick);
    setStatus((prevValue) => {
      return {
        ...prevValue,
        page: "ShowProject",
      };
    });
  }
  //Adding new project to the projects array
  function addingNewProject(data) {
    setStatus((prevValue) => {
      const newId = Math.random();
      const newProject = {
        id: newId,
        title: data.title,
        description: data.description,
      };
      return {
        ...prevValue,
        page: "HomePage",
        projects: [...prevValue.projects, newProject],
      };
    });
  }

  //Adding new task to project
  function addingNewTask(text, id) {
    setStatus((prevValue) => {
      const newId = Math.random();
      const newTask = {
        id: newId,
        text: text,
      };
      return {
        ...prevValue,
        tasks: [...prevValue.tasks, newTask],
      };
    });
  }
  //Delete project from the list
  function deleteProjectFromList(id) {
    const delProject = projectStatus.projects.filter(
      (project) => project.id !== id
    );
    setStatus((prevValue) => {
      return {
        ...prevValue,
        page: "HomePage",
        projects: delProject,
      };
    });
  }
  function deleteTaskFromList(id) {
    const delTask = projectStatus.tasks.filter((task) => task.id !== id);
    setStatus((prevValue) => {
      return {
        ...prevValue,
        page: prevValue.page,
        tasks: delTask,
      };
    });
  }
  //Cancel from AddProjectPage To HomePage
  function clickCancelToHomePage() {
    setStatus((prevValue) => {
      return {
        ...prevValue,
        page: "HomePage",
      };
    });
  }
  if (projectStatus.page === "HomePage") {
    content = <HomePage />;
  } else if (projectStatus.page === "AddingNewProject") {
    content = <AddProject />;
  } else if (projectStatus.page === "ShowProject") {
    content = <ShowProject />;
  }
  const ctxValue = {
    projects: projectStatus.projects,
    tasks: projectStatus.tasks,
    selecteProject: pickProject,
    clickNewProjectBtn: addingNewProjectClicked,
    onClickProjectBtn: clickOnProjectInNavbar,
    onAddNewProject: addingNewProject,
    onAddNewTaskToProject: addingNewTask,
    onDeleteProject: deleteProjectFromList,
    onDeleteTask: deleteTaskFromList,
    onCancel: clickCancelToHomePage,
  };
  return (
    <>
      <ProjectsContext.Provider value={ctxValue}>
        <Container>
          <Navbar />
          {content}
        </Container>
      </ProjectsContext.Provider>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;
