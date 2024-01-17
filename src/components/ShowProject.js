import React from "react";
import Tasks from "./Tasks";
import { styled } from "styled-components";
import { ProjectsContext } from "../store/projects-context";
import { useContext } from "react";
export default function ShowProject() {
  const { selecteProject, onDeleteProject } = useContext(ProjectsContext);
  return (
    <>
      <Container>
        <ContainerBtn>
          <Button onClick={() => onDeleteProject(selecteProject.id)}>
            Delete
          </Button>
        </ContainerBtn>
        <ContainerStructs>
          <h1>{selecteProject.title}</h1>
          <p>{selecteProject.description}</p>
          <Tasks />
        </ContainerStructs>
      </Container>
    </>
  );
}
const Container = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`;

const ContainerStructs = styled.div`
  display: flex;
  width: 600px;
  height: 350px;
  flex-direction: column;
  font-family: "Indie Flower", cursive;
`;
const Button = styled.button`
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
const ContainerBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 20px;
`;
