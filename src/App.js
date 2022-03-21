import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Header from './components/Header';
import Project1 from './components/Project1';
import Education from './components/Education';
import Experience from './components/Experience';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Contact from './components/Contact';
function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route exact path="/header" element={<Header/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/education" element={<Education/>}/>
      <Route exact path="/experience" element={<Experience/>}/>
      <Route exact path="/project" element={<Project1/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
