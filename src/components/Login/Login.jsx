import React from "react";
import "./login.css";
import styled from "styled-components";

export default function Login() {
  return (
    <div className="login-section">
      <div className="login-content">
        <TopLogo src="/assets/images/cta-logo-one.svg"></TopLogo>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          voluptatum ipsa delectus consequatur quas aperiam, ipsam modi
          asperiores quos autem quisquam minus voluptatibus velit vero, beatae
          error placeat quia ducimus totam numquam.
        </Paragraph>
        <Button>GET IT HERE</Button>
        <BottomLogo src="/assets/images/cta-logo-two.png"></BottomLogo>
      </div>
    </div>
  );
}

const BottomLogo = styled.img`
  margin: 15px 0 20px;
  max-width: 400px;
  min-width: 300px;
`;
const TopLogo = styled.img`
  max-width: 600px;
  width: 100%;
`;
const Paragraph = styled.p`
  margin: 10px 0px;
  font-family: "Reem Kufi";
  font-size: 1rem;
  text-align: center;
  letter-spacing: 2px;
  line-height: 1.5;
  font-size: 1.2rem;
`;
const Button = styled.a`
  padding: 12px 50px;
  display: block;
  font-weight: bold;
  font-size: 1.5rem;
  font-family: "Reem Kufi";
  letter-spacing: 5px;
  background-color: #113ccf;
  border: 2px solid transparent;
  border-radius: 4px;
  max-width: 600px;
  text-align: center;
  margin: 10px 0;
`;
