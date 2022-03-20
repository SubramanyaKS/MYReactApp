import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Header from './components/Header';
import Project from './components/Project';
import Education from './components/Education';
function App() {
  return (
    <>
    
    <Navbar />
    <Header />
    <About />
    <Education />
    <Project />
    </>
  );
}

export default App;
