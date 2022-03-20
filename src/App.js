import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Header from './components/Header';
import Project1 from './components/Project1';
import Education from './components/Education';
function App() {
  return (
    <>
    <main className="text-black-400 bg-gray-900 body-font">
    <Navbar />
    <Header />
    <About />
    <Education />
    <Project1 />
    </main>
    </>
  );
}

export default App;
