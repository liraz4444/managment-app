import React from "react";
import image from "../images/main-img.png";
import styled from "styled-components";
export default function HomePage() {
  return (
    <Container>
      <img src={image} alt="mainImage"></img>
    </Container>
  );
}

const Container = styled.div`
  margin-left: 350px;
  margin-top: 100px;
`;
