import React from "react";
import "./index.css"
function Header(){
    return(
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
       <div class="container-fluid">
          <a class="navbar-brand " className="title" href="#">learnable</a>
       </div>  
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Categories</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Mentors</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
          </ul>
       </div>
     </nav>
    )
}
export default Header;