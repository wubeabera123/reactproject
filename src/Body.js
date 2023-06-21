import React from "react";
import "./index.css";
import study from "./Image/study.png";
function Body(){
    return(
      <div>
        <div className="container d-flex justify-content-between">
              <p className="bold-text">Find suitable <br/> courses from the <br/> best mentors</p>
              <img src={study} className="first-image" alt="studying"/>
        </div>
        <p className="light-text">Discover a world of knowledge of your fingertips and embark on <br/> a transformative learning journey like never before.</p>
      </div>
    )
}
export default Body;