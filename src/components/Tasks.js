import { styled } from "styled-components";
import NewTask from "./NewTask";
import { useContext } from "react";
import { ProjectsContext } from "../store/projects-context";
export default function Tasks() {
  const { selecteProject, onDeleteTask } = useContext(ProjectsContext);
  return (
    <Container>
      <h1>Tasks</h1>
      <NewTask />
      {selecteProject.tasks.length === 0 && null}
      {selecteProject.tasks.length > 0 && (
        <ul>
          {selecteProject.tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <ClearTaskkBtn
                onClick={() => onDeleteTask(task.id, selecteProject.id)}
              >
                Clear
              </ClearTaskkBtn>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
const Container = styled.div`
  border-radius: 5px;
  background-color: #e6b325;
  display: flex;
  flex-direction: column;
  font-family: "Indie Flower", cursive;
  border: 3px solid;
  border-radius: 5px;
  margin-top: 15px;
  padding-left: 10px;
  padding-bottom: 10px;

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
