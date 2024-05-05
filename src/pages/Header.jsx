import React from "react";
import {ReactTyped} from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faGithub,
  faYoutube,
  faTwitter,
  faFacebook,
  faLinkedin,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
//import Particles from "react-tsparticles";
//import particlesConfig from "./Particle-config";
import Background from '../components/Background';
import IconContainer from "../components/IconContainer";
const Header = () => {
  return (
    <section className="main py-5">
      <div className="container-fluid py-4">
        <br></br>
        <div className="row py-3">
          <div className="col-lg-12 col-mg-12 py-3 mr-auto">
            <br></br>
            <h1 style={{color:"#00ffdd"}}>Hi, I'm </h1>
            <h1 style={{color:"#00ff00", fontSize: "50px" }}>SUBRAMANYA K S</h1>
            <br></br>
            <br></br>
           <p style={{color:"#00ff00",fontSize:"35px"}}>$
           <ReactTyped
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
            />
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <IconContainer  href="https://www.linkedin.com/in/subramanya-k-s-b74a92204/"
          className="linkedin social" icon={faLinkedin}/>
          <IconContainer  href="https://github.com/SubramanyaKS" className="github social" icon={faGithub} />
        <IconContainer href="https://www.youtube.com/channel/UCg28-MrcK-8CCFos7FWp0Dg/"
          className="youtube social" icon={faYoutube}/>
        <IconContainer href="https://twitter.com/subbukshebbar" className="twitter social" icon={faTwitter}/>
        <IconContainer href="https://www.facebook.com/profile.php?id=100070944345090"
          className="facebook social" icon={faFacebook}/>
        <IconContainer href="https://www.instagram.com/subramanyakshebbar/"
          className="instagram social" icon={faInstagram} />
        <IconContainer icon={faGoogle} href="mailto:subramanyaks2205@gmail.com" className="gmail social" />
        
          </div>
          
        </div>
      </div>
    <Background id="tsparticles" />
    </section>
  );
};

export default Header;
