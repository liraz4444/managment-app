import { styled } from "styled-components";

export const Container = styled.div`
  border-radius: 5px;
  background-color: #e6b325;
  padding: 20px;
  margin: 20px;
`;
export const ContainerForm = styled.form`
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
export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 20px;
`;
