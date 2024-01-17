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
        <ContainerStructs>
          <ContainerBtn>
            <Button onClick={() => onDeleteProject(selecteProject.id)}>
              Delete
            </Button>
          </ContainerBtn>
          <h1>{selecteProject.title}</h1>
          <p>{selecteProject.description}</p>
        </ContainerStructs>
        <Tasks />
      </Container>
    </>
  );
}
const Container = styled.div`
  border-radius: 5px;
  background-color: #e6b325;
  padding: 20px;
`;

const ContainerStructs = styled.div`
  display: flex;
  width: 600px;
  height: 350px;
  flex-direction: column;
  font-family: "Indie Flower", cursive;
  border: 3px solid;
  border-radius: 5px;
  padding-left: 10px;
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
const ContainerBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 20px;
`;
