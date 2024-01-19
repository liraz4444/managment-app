import React, { useContext } from "react";
import { styled } from "styled-components";
import { ProjectsContext } from "../store/projects-context";
import { Button } from "../styles/ButtonStyle";
export default function Navbar() {
  const { projects, clickNewProjectBtn, onClickProjectBtn } =
    useContext(ProjectsContext);
  return (
    <>
      <Container>
        <h1>App Management</h1>
        <Button
          type="button"
          class="btn btn-secondary btn-lg"
          onClick={() => clickNewProjectBtn()}
        >
          Add Project +
        </Button>
        {projects.length === 0 && null}
        {projects.length > 0 && (
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <span>
                  <Button onClick={() => onClickProjectBtn(project.id)}>
                    {project.title}
                  </Button>
                </span>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  width: 400px;
  background-color: #61481c;
  border-radius: 25px;
  h1 {
    width: max-content;
    font-family: "Indie Flower", cursive;
    background-color: #61481c;
    color: white;
  }
  & ul {
    list-style-type: none;
    align-self: flex-start;
    background-color: #61481c;
  }
  & li,
  span {
    background-color: #61481c;
  }
`;
