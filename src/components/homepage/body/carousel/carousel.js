import "react-responsive-carousel/lib/styles/carousel.min.css";
import {imageData} from "./imageData";
import { useState } from "react";
import "./carousel.css"

function ControlledCarousel() {
  const [curImage,setCurImage]=useState(0);
  const handleLeft=()=>{
    setCurImage(Math.abs((curImage-1+imageData.length))%imageData.length)
  }
  const handleRight=()=>{
    setCurImage((curImage+1)%imageData.length)
  }
  return (
    <div className="carousel">
      <div className="carouselComponent" style={{backgroundImage:`url(${imageData[curImage].url})`}}> Hi</div>  
      <button onClick={handleLeft}>prev</button>
      <button onClick={handleRight}>next</button>
    </div>
  );
}

export default ControlledCarousel;
