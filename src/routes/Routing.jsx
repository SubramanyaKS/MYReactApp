import React from 'react';
import Navbar from "../components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import { routing } from './routing';

const Routing = () => {
  return (
    <Router>
       <Navbar />
       <Routes>
        {routing.map((data)=>(
        <Route key={data.id} exact path={data.path} Component={data.element} />
        ))}
       </Routes>
       <Footer />
     </Router>
  )
}

export default Routing