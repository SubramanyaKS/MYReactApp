import React from "react";
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
const Navbar = ()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
        <a className="navbar-brand" href="#"><i className="fa fa-code"></i></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icons={faBars} style={{color: "#fff"}}/>
        </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <NavLink activeClassName="nav_link" to="/">Home</NavLink>
      </li>
      {({isActive}) => (isActive ? "nav_link" : 'none')}
      <li className="nav-item">
      <NavLink ClassName={({isActive}) => (isActive ? "nav_link" : 'none')} to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink ClassName={({isActive}) => (isActive ? "nav_link" : 'none')}to="/education">Education</NavLink>
      </li>
      <li className="nav-item">
        <NavLink ClassName={({isActive}) => (isActive ? "nav_link" : 'none')} to="/experience">Experience</NavLink>
      </li>
      <li className="nav-item">
        <NavLink ClassName={({isActive}) => (isActive ? "nav_link" : 'none')} to="/project">Project</NavLink>
      </li>
      <li className="nav-item">
        <NavLink ClassName={({isActive}) => (isActive ? "nav_link" : 'none')} to="/contact">Contact</NavLink>
      </li>
      
    </ul>
    
  </div>
  </div>
</nav>
    )
}

export default Navbar;

