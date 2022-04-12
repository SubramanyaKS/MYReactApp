import React from "react";
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter, Link} from "react-router-dom"; 
import {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,faCode} from '@fortawesome/free-solid-svg-icons';
const Navbar = ()=>{

       /**  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
        <a className="navbar-brand" href="/"><FontAwesomeIcon icons={faCode} style={{color: "#fff"}} /></a>
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
        <NavLink ClassName={({isActive}) => (isActive ? "nav_link" : 'none')} to="/skills">Skills</NavLink>
      </li>
      <li className="nav-item">
        <NavLink ClassName={({isActive}) => (isActive ? "nav_link" : 'none')} to="/contact">Contact</NavLink>
      </li>
      
    </ul>
    
  </div>
  </div>
</nav>*/

const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 768) && (
      <ul className="list ms-auto">
      <li className="items"><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></li>
      <li className="items"><Link to='/about' style={{ textDecoration: 'none' }}>About</Link></li>
      <li className="items"><Link to='/education' style={{ textDecoration: 'none' }}>Education</Link></li>
      <li className="items"><Link to='/experience' style={{ textDecoration: 'none' }}>Experience</Link></li>
      <li className="items"><Link to='/skills' style={{ textDecoration: 'none' }}>Skills</Link></li>
      <li className="items"><Link to='/project' style={{ textDecoration: 'none' }}>Projects</Link></li>
      <li className="items"><Link to='/contact' style={{ textDecoration: 'none' }}>Contact</Link></li>
    </ul>
      )}

      <button onClick={toggleNav} className="btn"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
    </nav>

    );
}

export default Navbar;

