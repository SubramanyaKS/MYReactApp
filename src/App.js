import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/NavBar1';
import About from './components/About';
import Header from './components/Header';
import Project1 from './components/Project';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience1 from './components/Experience1';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Contact from './components/Contact';
import  Spinner1  from './components/Loader';
function App() {
  const [ spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000)
  }, []);

  return (
    <>
    {spinner?<Spinner1/>:
    <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Header/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/education" element={<Education/>}/>
      <Route exact path="/experience" element={<Experience1/>}/>
      <Route exact path="/project" element={<Project1/>}/>
      <Route exact path="/skills" element={<Skills/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
    </Routes>
    </Router>}
    
    </>
  );
}

export default App;
