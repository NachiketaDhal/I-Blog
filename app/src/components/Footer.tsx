import React from "react";
import Styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <p>
        &copy; {new Date().getFullYear()} <span>I-BLOG</span> All rights
        reserved
      </p>
    </Container>
  );
};

const Container = Styled.section`
  padding: 50px 0;
  background-color: #222;
  color: #fff;
  display: grid;
  place-items: center;
  p span {
    color: #c1221c;
  }
`;

export default Footer;
