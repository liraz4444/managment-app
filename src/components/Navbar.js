import React, { useContext } from "react";
import { styled } from "styled-components";
import { ProjectsContext } from "../store/projects-context";
export default function Navbar() {
  const { projects, clickNewProjectBtn, onClickProjectBtn } =
    useContext(ProjectsContext);
  return (
    <>
      <Container>
        <h1>App Management</h1>
        <Button onClick={() => clickNewProjectBtn()}>Add Project +</Button>
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
  background-color: #80bcbd;
  border-radius: 25px;
  h1 {
    width: max-content;
    font-family: "Indie Flower", cursive;
  }
  & ul {
    list-style-type: none;
    align-self: flex-start;
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
const ProjectBtn = styled.button`
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
