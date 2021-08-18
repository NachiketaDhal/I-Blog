import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import Button from "../components/Button";

const Error = () => {
  return (
    <Container>
      <h1>404 😥</h1>
      <span>Not Found</span>
      <Link to="/">
        <Button text="Back to Home" />
      </Link>
    </Container>
  );
};

const Container = Styled.section`
  background-color: #fdf6e4;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #323232;
    font-size: 160px;
    font-weight: bolder;
  }
  span {
    font-size: 40px;
    font-weight: bold;
  }

  @media (max-width: 1200px) {
    min-height: 100vh;
  }
  @media (max-width: 600px) {
    min-height: 100vh;
    h1 {
      font-size: 100px;
    }
  }
`;

export default Error;
