import React from "react";
import Tasks from "./Tasks";
import { ProjectsContext } from "../store/projects-context";
import { useContext } from "react";
import { Button } from "../styles/ButtonStyle";
import {
  Container,
  ContainerStructs,
  ContainerBtn,
} from "../styles/ShowProjectStyles";
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
