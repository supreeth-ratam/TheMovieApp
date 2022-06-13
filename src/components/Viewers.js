import React from "react";
import styled from "styled-components";

export default function Viewers() {
  return (
    <>
      <Container>
        <Wrap>
          <img src="/assets/images/viewers-disney.png" alt="" />
          <video autoPlay loop muted>
            <source src="/assets/videos/disney.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Wrap>
        <Wrap>
          <img src="/assets/images/viewers-pixar.png" alt="" />
          <video autoPlay loop muted>
            <source src="/assets/videos/pixar.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Wrap>
        <Wrap>
          <img src="/assets/images/viewers-marvel.png" alt="" />
          <video autoPlay loop muted>
            <source src="/assets/videos/marvel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Wrap>
        <Wrap>
          <img src="/assets/images/viewers-national.png" alt="" />
          <video autoPlay loop muted>
            <source
              src="/assets/videos/national-geographic.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Wrap>
        <Wrap>
          <img src="/assets/images/viewers-starwars.png" alt="" />
          <video autoPlay loop muted>
            <source src="/assets/videos/star-wars.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Wrap>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 50px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  border-radius: 10px;
  padding: 0;
  transition: all 500ms;
  border: 3px solid rgb(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
  rgb(0 0 0/73%) 0px 16px 10px -10px;
  overflow:hidden;
  position: relative;
  
  
  &:hover {
    border: 3px solid white;
    transform: scale(1.1);
    video{
      
      opacity:1;
    }
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  video {
    heigth: 100%;
    width: 100%;
    border-radius: 10px;
    z-index: 0;
    opacity:0;
    postion:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
  }
`;
