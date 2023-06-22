import React from "react";
import "./index.css";
import study from "./Image/study.png";
import join from "./Image/join.png";
import bar from "./Image/bar.png";
function Body(){
    return(
      <div>
        <div className="container d-flex justify-content-between">
              <p className="bold-text">Find suitable <br/> courses from the <br/> best mentors</p>
              <img src={study} className="first-image" alt="studying"/>
        </div>
        <p className="light-text">Discover a world of knowledge of your fingertips and embark on <br/> a transformative learning journey like never before.</p>

        <div className="container d-flex justify-content-between">
            <button type="button" className="button1">Browse courses</button>    
            <button type="button" className="button2">Become mentor</button>     
            <img src={join} className="second-image"/>   
            <img src={bar} className="third-image"/> 
        </div>
        <div className=" buttons d-flex">
            <p className="short-text">Popular directions</p>
            <button type="button" className="button3">UX/UI Design</button>    
            <button type="button" className="button4">Illustration</button>
         </div>
      </div>
    )    
}
export default Body;