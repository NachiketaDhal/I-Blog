import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const PathStripe = ({ path }: { path: string }) => {
  return (
    <Container className="main">
      <div>
        {<Link to="/">Home</Link>}
        {` `}/{` ${path}`}
      </div>
    </Container>
  );
};

const Container = Styled.section`
  background-color: #fdf6e4;
  div {
    color: #000;
    padding: 40px 0;
    margin-left: 150px;
    font-size: 40px;
    font-weight: bold;
    a {
      color: #000;
      text-decoration: none;
    }
  }

  @media(max-width: 900px) {
    div {
      margin-left: 0;
      display: flex;
      justify-content: center;
    }
  }

`;

export default PathStripe;
