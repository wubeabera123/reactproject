import React from "react";
import "./index.css"
function Header(){
    return(
     <nav class="navbar navbar-expand-lg bg-body-tertiary mx-auto">
       <div class="container-fluid">
          <a class="navbar-brand " className="title" href="#">learnable</a>
       </div>  
       <div class="container mx-auto"  id="navbarSupportedContent">
          <ul className="navbar-nav ">
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
          <form class="d-flex" role="search"> 
             <input class="form-control me-2" type="search" placeholder="Search"></input>
             <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
       </div>
      </nav>
    )
}
export default Header;