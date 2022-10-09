import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { Link} from "react-router-dom"; 
import {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
const Navbar = ()=>{

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

