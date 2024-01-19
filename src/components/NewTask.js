import React, { useContext } from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { ProjectsContext } from "../store/projects-context";
import { Button } from "../styles/ButtonStyle";
export default function NewTask() {
  const { onAddNewTaskToProject, selecteProject } = useContext(ProjectsContext);
  const [task, setTask] = useState("");

  function handleNewTask(event) {
    setTask(event.target.value);
  }
  function handleClick(id) {
    if (task.trim() === "") {
      return;
    }
    onAddNewTaskToProject(task, id);
    setTask("");
  }
  return (
    <>
      <ContainerStructs>
        <textarea type="text" onChange={handleNewTask} value={task}></textarea>
        <Button onClick={() => handleClick(selecteProject.id)}>Add Task</Button>
      </ContainerStructs>
    </>
  );
}
const ContainerStructs = styled.div`
  display: flex;
  font-family: "Indie Flower", cursive;
  justify-content: space-between;
  & textarea {
    background-color: #ebef95;
  }
`;
