import React from "react";
import Styled from "styled-components";

import { IFeature } from "../interfaces";

const Feature = ({ img, heading, text }: IFeature) => {
  return (
    <Container>
      <img
        src={img}
        alt={heading}
        style={{
          height: "50px",
          backgroundColor: "#c1221c",
          borderRadius: "50%",
          padding: "10px",
        }}
      />
      <h2>{heading}</h2>
      <p>{text}</p>
    </Container>
  );
};

const Container = Styled.section`
  width: 360px;
  height: 360px;
  background-color: #fdf6e4;
  color: #c1221c;
  border-radius: 5px;
  box-shadow: 1px 4px 7px 2px rgba(0, 0, 0, 0.3);
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: all .3s ease-in-out;
  p {
    text-align: center;
    line-height: 1.8;
  }
  :hover {
    transform: translateY(-5px);
  }
`;

export default Feature;
