import React, { useState } from "react";
import { styled } from "styled-components";
import { ProjectsContext } from "../store/projects-context";
import { useContext } from "react";
import { Button } from "../styles/ButtonStyle";
export default function AddProject() {
  const { onCancel, onAddNewProject } = useContext(ProjectsContext);
  const [project, setNewProject] = useState({ title: "", description: "" });

  function handleAddNewTitle(event) {
    setNewProject((prevValue) => {
      return {
        ...prevValue,
        title: event.target.value,
      };
    });
  }
  function handleAddNewDescription(event) {
    setNewProject((prevValue) => {
      return {
        ...prevValue,
        description: event.target.value,
      };
    });
  }
  function handleClickSaveBtn() {
    if (project.title.trim() === "" || project.description.trim() === "") {
      return;
    }
    onAddNewProject(project);
  }
  return (
    <>
      <Container>
        <ContainerForm>
          <ContainerBtn>
            <Button onClick={handleClickSaveBtn}>Save</Button>
            <Button onClick={() => onCancel()}>Cancel</Button>
          </ContainerBtn>
          <label>Title</label>
          <input
            type="text"
            onChange={handleAddNewTitle}
            value={project.title}
          ></input>
          <label>Description</label>
          <textarea
            type="text"
            onChange={handleAddNewDescription}
            value={project.description}
          ></textarea>
        </ContainerForm>
      </Container>
    </>
  );
}

const Container = styled.div`
  border-radius: 5px;
  background-color: #e6b325;
  padding: 20px;
  margin: 20px;
`;
const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 350px;
  gap: 20px;
  border: 3px solid;
  border-radius: 5px;
  & label {
    max-width: max-content;
    font-weight: bold;
    padding-left: 10px;
  }
  & input,
  textarea {
    background-color: #ebef95;
    border-radius: 5px;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const ContainerBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 20px;
`;
