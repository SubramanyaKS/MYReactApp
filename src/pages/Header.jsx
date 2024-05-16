import React from "react";
import {ReactTyped} from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";
import {Row,Col,Container} from 'react-bootstrap';
// import Background from '../components/Background';
import SocialMediaIcons from "../components/SocialMediaIcons";
import Reveal from "../components/common/Reveal";
// import Center from "../components/common/Center";
import { headerdata } from "../data/data";

const Header = () => {
  return (
    <section className="main py-5">
      <Container fluid className="py-4">
        <Row className="py-3">
          <Col className="col-lg-6 col-mg-12 py-3 mr-auto">
          <div className="ps-5">
            {/* <Center > */}
            <Reveal>
            
            <h1 className="mb-3 " style={{color:"#00ffdd",textAlign:"center"}}>Hi, I'm </h1>
            
            </Reveal>
            {/* b</Center> */}
            {/* <Center > */}
            <Reveal>
            <h1 className="mb-3" style={{color:"#00ff00", fontSize: "50px" }}>{headerdata.name}</h1>
            </Reveal>
            {/* </Center> */}
           <p style={{color:"#00ff00",fontSize:"35px"}}>$
           <ReactTyped
              className="typed-text"
              strings={headerdata.typedarr}
              typeSpeed={90}
              backSpeed={90}
              loop
              cursorChar= "_"
            />
            </p>
            <SocialMediaIcons/>
          </div>
          </Col>
          <Col className="col-lg-6 col-mg-12 pb-3 mr-auto">
          <div className="shadow-lg text-center ">
          <img className="avatar-img rounded-circle" src={headerdata.image} alt="avatar" height={300}/>
          </div>
          </Col>
          
        </Row>
      </Container>
    {/* <Background id="tsparticles" /> */}
    </section>
  );
};

export default Header;
