import React from "react";
import HertEmoji from "../Intro/Image/heartemoji.png";
import Glasses from "../Intro/Image/glasses.png";
import humble from "../Intro/Image/humble.png";
import "./Services.css"
import Card from "../Card/Card";
export default function Services() {
  return (
    <div className="services">
          <span className="blue-blure"></span>
      <div className="awesome">
        
        <span>My Awesome</span>
        <span>services</span>
        <span style={{fontWeight:"bold"}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>Commodi,
          doloribus impedit quae qui nemo obcaecati odit<br/> laudantium repudiandae
          reiciendis alias.
        </span>
        <button className="btn i-button">Download CV</button>
      </div>
    





      <div className="cards">
      <Card emoji={HertEmoji} heading ={'Design'} detail={"Figma, Sketch, Photoshop, Adobe,"}/>
      </div>
      <div className="glass">
      <Card emoji={Glasses} heading ={'Developer'} detail={"Html,Css,JavaScript,React"}/>
       </div>
      <div className="glas">
      <Card emoji={humble} heading ={'Backend'} detail={"Mongodb,MYsql,Nodejs"}/>
       </div>
       <span className="blu"></span>
    </div>
  );
}
