import React from "react";
import "./index.css"
function Header(){
    return(
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
       <div class="container">
          <a class="navbar-brand " href="#">learnable</a>
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
       </div>
       <div class="container-fluid ">
       <form class="d-flex" role="search"> 
          <div class="col-auto">
             <input class="form-control " type="search" placeholder="Search"></input>
          </div>
       </form>
             <div class="col-auto">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
             </div>
             <div class="col-auto">
                 <a class="navbar-login" href="#">Login</a>
             </div>
             <div class="col-auto">
                 <button type="button" class="btn btn-outline-primary" id="signup">Sign up</button>
             </div>
      </div>
      </nav>
    )
}
export default Header;