import React, { useContext, useRef } from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { ProjectsContext } from "../store/projects-context";
import { Button } from "../styles/ButtonStyle";
import Modal from "./Modal";
export default function NewTask() {
  const { onAddNewTaskToProject, selecteProject } = useContext(ProjectsContext);
  const [task, setTask] = useState("");
  const modal = useRef();
  function handleNewTask(event) {
    setTask(event.target.value);
  }
  function handleClick(id) {
    if (task.trim() === "") {
      modal.current.open();
      return;
    }
    onAddNewTaskToProject(task, id);
    setTask("");
  }
  return (
    <>
      <Modal ref={modal}>
        <p>Oops... you forgot to fill in details</p>
        <p>Please try again!</p>
      </Modal>
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
