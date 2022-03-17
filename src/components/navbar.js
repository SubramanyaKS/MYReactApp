import React from "react";
import 'font-awesome/css/font-awesome.min.css'; 

const Navbar = ()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#"><i className="fa fa-code"></i></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Education</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Project</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      
    </ul>
    
  </div>
  </div>
</nav>
    )
}

export default Navbar

