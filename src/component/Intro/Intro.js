import React from "react";
import Floating from "../Floating/Floating";
import "./Into.css";
import github from "./Image/github.png"
import insta from "./Image/insta.png"
import linkdel from "./Image/linkdel.png"
import Vector1 from"./Image/Vector1.png"
import v2 from"./Image/v2.png"
import boy from"./Image/boy.png"
import thumbup from"./Image/thumbup.png"
import crown from"./Image/crown.png"
import glassesimoji from"./Image/glassesimoji.png"
export default function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span> Hy! I Am </span>
          <span> Aman Kashyap </span>
          <span>
            Wanted to be Full Stack developer and wanted to be one of the best
            developer.<br/>This page to show I have knowledge Regarding <strong>Front End</strong> 
          </span>
        </div>
        <button className="i-button btn">Hire me</button>
     <div className="i-all-image">
      
       <img   className="i-icons"  src={github} alt="github" srcset="" />
        <img   className="i-icons"  src={insta} alt="github" srcset="" />
        <img  className="i-icons"   src={linkdel} alt="github" srcset="" />
        </div>
        </div>
      <div className="i-right">

        <img src={Vector1} alt= "" />
        <img src={v2} alt= "" />
        <img src={boy} alt= "" />
       <div className="Crown">
        <img src={crown} alt="" />
        <Floating  image={crown}  text1="Web" text2="Developer"/>
       </div>
       <div className="Thumbsup">
        <img src={thumbup} alt="" />
        <Floating  image={crown}  text1="Web" text2="Page Designer"/>
       </div>
       <div className="orange"  style={{backgroundColor:"orange"}}></div>
       <img className="Glass " src={glassesimoji} alt="" />
       <div className="blur"  style={{backgroundColor:"pink"}}></div>
        
    

  
      </div>
    </div>
  );
}
