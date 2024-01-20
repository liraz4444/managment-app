import React, { useContext } from "react";
import { ProjectsContext } from "../store/projects-context";
import { Button } from "../styles/ButtonStyle";
import { Container } from "../styles/NavbarStyles";
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
