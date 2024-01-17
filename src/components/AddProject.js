import React, { useState } from "react";
import { styled } from "styled-components";
import { ProjectsContext } from "../store/projects-context";
import { useContext } from "react";

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
    onAddNewProject(project);
  }
  return (
    <>
      <Container>
        <ContainerBtn>
          <Button onClick={handleClickSaveBtn}>Save</Button>
          <Button onClick={() => onCancel()}>Cancel</Button>
        </ContainerBtn>
        <ContainerForm>
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
  background-color: #f2f2f2;
  padding: 20px;
  margin: 20px;
`;
const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 350px;
  gap: 20px;
  & label {
    max-width: max-content;
    font-family: "Indie Flower", cursive;
  }
  & input,
  textarea {
    background-color: #eef0e5;
    border-radius: 5px;
  }
`;

const Button = styled.button`
  width: max-content;
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
const ContainerBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 20px;
`;
