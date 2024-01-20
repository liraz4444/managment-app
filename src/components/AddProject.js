import React, { useRef } from "react";
import { ProjectsContext } from "../store/projects-context";
import { useContext } from "react";
import { Button } from "../styles/ButtonStyle";
import {
  Container,
  ContainerForm,
  ContainerBtn,
} from "../styles/AddProjectStyles";
import Modal from "./Modal";
export default function AddProject() {
  const { onCancel, onAddNewProject } = useContext(ProjectsContext);
  const title = useRef();
  const description = useRef();
  const modal = useRef();

  function handleClickSaveBtn() {
    const enterTitle = title.current.value;
    const enterDescription = description.current.value;
    if (enterTitle.trim() === "" || enterDescription.trim() === "") {
      modal.current.open();
      return;
    }
    onAddNewProject({
      title: enterTitle,
      description: enterDescription,
    });
  }
  return (
    <>
      <Modal ref={modal}>
        <p>Oops... you forgot to fill in details</p>
        <p>Please try again!</p>
      </Modal>
      <Container>
        <ContainerForm>
          <ContainerBtn>
            <Button type="button" onClick={handleClickSaveBtn}>
              Save
            </Button>
            <Button onClick={() => onCancel()}>Cancel</Button>
          </ContainerBtn>
          <label>Title</label>
          <input type="text" ref={title}></input>
          <label>Description</label>
          <textarea type="text" ref={description}></textarea>
        </ContainerForm>
      </Container>
    </>
  );
}
