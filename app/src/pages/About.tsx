import React from "react";
import Styled from "styled-components";

import PathStripe from "../components/PathStripe";
import Underline from "../components/Underline";

const About = () => {
  return (
    <Container>
      <PathStripe path="About" />
      <div className="main">
        <img
          src="https://images.pexels.com/photos/62691/pexels-photo-62691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400"
          alt="about-img"
        />
        <div className="about-text">
          <h1>About Us</h1>
          <Underline />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            asperiores ratione dolores error explicabo nemo a culpa illum,
            repellat, cupiditate dolore alias corrupti, libero sit reiciendis.
            Eius adipisci excepturi laborum cupiditate ea incidunt nesciunt, at
            fugiat amet deserunt exercitationem, nisi saepe rerum vero tempore
            obcaecati, sapiente voluptatum ipsa eveniet repellendus. Delectus
            facilis minus culpa tenetur, vel praesentium adipisci, labore
            possimus aperiam numquam alias mollitia corrupti recusandae sunt
            debitis expedita su
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = Styled.section`
  div.main {
    display: flex;
    justify-content: space-around;
    max-width: 80%;
    margin: 80px auto;
    padding: 0 60px;
    gap: 70px;
    img {
      flex: .5;
      width: 500px;
      height: 500px;
    }
    .about-text {
      flex: .5;
      h1 {
        font-weight: bold;
      }
      p{
        color: #617d98;
        line-height: 2;
        margin-top: 20px;
      }
    }
  }

  @media(max-width: 900px) {
    div.main {
      flex-direction: column;
      gap: 30px;
    }
  }
`;

export default About;
