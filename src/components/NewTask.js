import React, { useContext } from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { ProjectsContext } from "../store/projects-context";
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

const Button = styled.button`
  width: max-content;
  background-color: #bf9742;
  color: black;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
  font-family: "Indie Flower", cursive;
  margin: 10px;
  font-weight: bold;
  font-size: 1.2rem;
  &:hover {
    background-color: #f1f1f1;
  }
`;
