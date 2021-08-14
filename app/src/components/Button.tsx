import React from "react";
import Styled from "styled-components";

import { IButton } from "../interfaces";

const Button = ({ text }: IButton) => {
  return <Container>{text}</Container>;
};

const Container = Styled.button`
 padding: 10px 8px;
    background-color: #323232;
    color: #ffffff;
    text-decoration: none;
    border-radius: 5px;
    border-color: transparent;
    transition: all .3s ease-in-out;
    :hover {
      background-color: transparent;
      border-color: #000000;
      color: #000000;
    }
`;

export default Button;
