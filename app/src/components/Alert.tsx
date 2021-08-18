import React from "react";
import Styled from "styled-components";

const Alert = ({ color, message }: { color: string; message: string }) => {
  return (
    <Container style={{ width: "100vw" }}>
      <span style={{ backgroundColor: color }}>{message}</span>
    </Container>
  );
};

const Container = Styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 10;
  text-align: center;
  top: 0px;
  margin: 0 auto;
  span {
    height: 30px;
    width: 400px;
    /* position: fixed; */
  }
`;

export default Alert;
