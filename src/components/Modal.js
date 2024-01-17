import { useImperativeHandle, forwardRef, useRef } from "react";
import { createPortal } from "react-dom";
import { styled } from "styled-components";
const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <ContainerDialog ref={dialog}>
      {children}
      <form method="dialog">
        <Button>Close</Button>
      </form>
    </ContainerDialog>,
    document.getElementById("root")
  );
});

export default Modal;

const ContainerDialog = styled.dialog`
  font-family: "Indie Flower", cursive;
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
