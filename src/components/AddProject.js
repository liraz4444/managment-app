import React, { useRef } from "react";
import { styled } from "styled-components";
import { ProjectsContext } from "../store/projects-context";
import { useContext } from "react";
import { Button } from "../styles/ButtonStyle";
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

const Container = styled.div`
  border-radius: 5px;
  background-color: #e6b325;
  padding: 20px;
  margin: 20px;
`;
const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 350px;
  gap: 20px;
  border: 3px solid;
  border-radius: 5px;
  & label {
    max-width: max-content;
    font-weight: bold;
    padding-left: 10px;
  }
  & input,
  textarea {
    background-color: #ebef95;
    border-radius: 5px;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const ContainerBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 20px;
`;
