import React from 'react';
import Navbar from "../components/NavBar";
import About from "../pages/About";
import Header from "../pages/Header";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import ChatBotContiner from '../chatbot/components/ChatBotContainer';

const Routing = () => {
  return (
    <Router>
       <Navbar />
       <Routes>
         <Route exact path="/" element={<Header />} />
         <Route exact path="/about" element={<About />} />
         <Route exact path="/education" element={<Education />} />
         <Route exact path="/experience" element={<Experience />} />
         <Route exact path="/project" element={<Projects />} />
         <Route exact path="/skills" element={<Skills />} />
         <Route exact path="/contact" element={<Contact />} />
       </Routes>
       <ChatBotContiner/>
       <Footer />
     </Router>
  )
}

export default Routing