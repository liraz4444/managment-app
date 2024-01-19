import { useImperativeHandle, forwardRef, useRef } from "react";
import { createPortal } from "react-dom";
import { styled } from "styled-components";
import { Button } from "../styles/ButtonStyle";
const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <ContainerDialog ref={dialog}>
      {children}
      <form method="dialog">
        <Button type="button" onClick={() => dialog.current.close()}>
          Close
        </Button>
      </form>
    </ContainerDialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;

const ContainerDialog = styled.dialog`
  font-family: "Indie Flower", cursive;
`;
