import NewTask from "./NewTask";
import { useContext } from "react";
import { ProjectsContext } from "../store/projects-context";
import { Container, ClearTaskkBtn } from "../styles/TasksStyle";
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
