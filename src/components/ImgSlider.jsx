import React from "react";
import styled from "styled-components";
import Slider from "react-slick";


export default function ImgSlider() {
  function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? "👉" : "👈";
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <>
      
        <Carousel {...settings}>
          <Wrap>
            <a href="">
            <img src="/assets/images/slider-badag.jpg" alt="" /></a></Wrap>
          <Wrap>
            <a href="">
            <img src="/assets/images/slider-badging.jpg" alt="" />
            </a></Wrap>

          <Wrap>
            <a href="">
            <img src="/assets/images/slider-scale.jpg" alt="" />
            </a></Wrap>
            
          <Wrap>
            <a href="">
            <img src="/assets/images/slider-scales.jpg" alt="" /></a>
            </Wrap>
        </Carousel>
        
      
     
    </>
  );
}

const Carousel = styled(Slider)`
margin-top:20px;



&>button{
  opacity:0;
  z-index:2;
  transition: opacity 500ms ease;
}

&:hover{
  &>button{
    opacity:1;
  }
}


ul li button{
  &:before
  {font-size:10px;
  color:rgb(150,150,171)}
}

li.slick-active button:before{
  color:white;
}
.slick-prev:before, .slick-next:before {
  font-size: 40px;
}
.slick-next{
  right:-10px;
}
.slick-list {
  overflow:initial;
}

`
const Wrap = styled.div`
border-radius:10px;
padding:10px;
transition: border 100ms linear;

img{
  height:100%;
  width:100%;
  border-radius:10px;
 
}
&:hover{
  padding:0;
  border:2px solid white;
}

`