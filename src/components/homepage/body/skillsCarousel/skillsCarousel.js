import React from "react";
import "./skillsCarousel.css";
import { icon } from "./iconData";
export default function SkillsCarousel() {
  const skillCard = (val) => {
    return (
      <div className="card" key={val.key}>
        card no. {val.value}
      </div>
    );
  };

  let box=document.querySelector('.skillCarousel');
  console.log(box);
  const handlePrev=()=>{
    let width=box.clientWidth;
    box.scrollLeft=(box.scrollLeft-width);
    console.log(width);
  }
  const handleNext=()=>{
    let width=box.clientWidth;
    box.scrollLeft=(box.scrollLeft+width);
    console.log(width);
  }
  return (
    <div className="skillCarousel">
        <button className="prevBtn" onClick={handlePrev}><p>&lt;</p></button>
        <button className="nextBtn" onClick={handleNext}><p>&gt;</p></button>
        <div className="skills">{icon.map(skillCard)}</div>
    </div>
  );
}
