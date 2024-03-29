import React from "react";
import Typed from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";
//import Particles from "react-tsparticles";
//import particlesConfig from "./Particle-config";
import Background from '../components/Background';
const Header = () => {
  return (
    <section className="main py-5">
      <div className="container-fluid py-5">
        <br></br>
        <div className="row py-5">
          <div className="col-lg-12 col-mg-12 py-5 mr-auto">
            <br></br>
            <h1 style={{color:"#00ffdd"}}>Hi I am </h1>
            <h1 style={{color:"#00ff00", fontSize: "50px" }}>SUBRAMANYA K S</h1>
            <br></br>
            <br></br>
           <p style={{color:"#00ff00",fontSize:"35px"}}>$<Typed
              className="typed-text"
              strings={[
                "Learner",
                "Developer",
                "Simple Coder",
                "MERN Stack Developer",
                "Open Source Contributor",
              ]}
              typeSpeed={90}
              backSpeed={90}
              loop
              cursorChar= "_"
            /></p>
          </div>
          
        </div>
      </div>
    <Background id="tsparticles" />
    </section>
  );
};

export default Header;
