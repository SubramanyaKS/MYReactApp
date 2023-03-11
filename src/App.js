import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/NavBar1";
import About from "./pages/About";
import Header from "./pages/Header";
import Education from "./components/Education";
import Skills from "./pages/Skills";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Spinner1 from "./components/Loader";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
function App() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  return (
   
    <>
    {spinner ? (
     <Spinner1 />
   ) : (
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
       <Footer />
     </Router>
   )}
 </>
  );
}

export default App;
