import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  width: 400px;
  background-color: #61481c;
  border-radius: 25px;
  h1 {
    width: max-content;
    font-family: "Indie Flower", cursive;
    background-color: #61481c;
    color: white;
  }
  & ul {
    list-style-type: none;
    align-self: flex-start;
    background-color: #61481c;
  }
  & li,
  span {
    background-color: #61481c;
  }
`;
