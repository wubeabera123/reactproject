import React from "react";
import "./index.css";
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
       <div class="container mx-auto">
        <ul className="navbar-nav">
          <li class="nav-item">
             <form role="search"> 
                <input class="form-control form-control-sm " type="search" placeholder="Search"></input>
             </form>
          </li>
          <li class="nav-item">
             <button class="btn btn-outline-success btn-sm" type="button" >Search</button>
          </li>
          <li class="nav-item">
            <a class="navbar-login" href="#">Login</a>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-outline-primary btn-sm" id="signup">Sign up</button>
          </li>
        </ul>       
      </div>
      </nav>
    )
}
export default Header;