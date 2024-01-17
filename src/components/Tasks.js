import { styled } from "styled-components";
import NewTask from "./NewTask";
import { useContext } from "react";
import { ProjectsContext } from "../store/projects-context";
export default function Tasks() {
  const { tasks, onDeleteTask } = useContext(ProjectsContext);
  return (
    <>
      <h1>Tasks</h1>
      <NewTask />
      <Container>
        {tasks.length === 0 && null}
        {tasks.length > 0 && (
          <ul>
            {tasks.map((task) => (
              <li>
                <span>{task.text}</span>
                <ClearTaskkBtn onClick={() => onDeleteTask(task.id)}>
                  Clear
                </ClearTaskkBtn>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
const Container = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  font-family: "Indie Flower", cursive;
  & ul {
    list-style-type: none;
    padding: 0;
  }
  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
`;

const ClearTaskkBtn = styled.button`
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
    background-color: red;
  }
`;
