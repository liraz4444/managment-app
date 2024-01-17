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
    onAddNewTaskToProject(task, id);
    setTask("");
  }
  return (
    <>
      <ContainerStructs>
        <input type="text" onChange={handleNewTask} value={task}></input>
        <Buttton onClick={() => handleClick(selecteProject.id)}>
          Add Task
        </Buttton>
      </ContainerStructs>
    </>
  );
}
const ContainerStructs = styled.div`
  display: flex;
  font-family: "Indie Flower", cursive;
  & input,
  textarea {
    background-color: #eef0e5;
    border-radius: 5px;
  }
`;

const Buttton = styled.button`
  width: max-content;
  align-self: flex-end;
  background-color: #ddd;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
  font-family: "Indie Flower", cursive;

  &:hover {
    background-color: #f1f1f1;
  }
`;
