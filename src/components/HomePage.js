import React from "react";
import image from "../images/main-img.png";
import { Container } from "../styles/HomePageStyles";
export default function HomePage() {
  return (
    <Container>
      <img src={image} alt="mainImage"></img>
    </Container>
  );
}
