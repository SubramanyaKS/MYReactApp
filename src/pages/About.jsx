import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { aboutdetails } from "../data/data";
// import Background from "../components/Background";
import Heading from "../components/common/Heading";
import splitWords from "../utils/splitWords";
import {motion} from 'framer-motion';

const About = () => {
  const description = splitWords(aboutdetails.description);

  const wordVarients = {
    hidden:{opacity:0},
    reveal:{opacity:1},
  }

  const resume = () => {
    window.open(
      aboutdetails.resumeLink,
      "_blank"
    );
  };
  return (
    <>
      <section className="about py-5" id="about">
        <Heading title="About Me." />
        <Container fluid>
          <Row>
            <Col>
              <img className="MeImg" src={aboutdetails.image} alt="me.." />
              <br />
            </Col>
            <Col>
              <motion.p initial="hidden" whileInView="reveal" transition={{staggerChildren:0.02}} className="py-5">
                {" "}
                I am{" "}
                <span style={{ color: "#00ff00" }} className="font-weight-bold">
                  <b>{aboutdetails.name}, </b>
                </span>
                {description.map((ch)=>(
<motion.span key={ch} transition={{duration:0.5}} variants={wordVarients}>
  {ch}
</motion.span>

                ))}
              </motion.p>
              <button
                className="resume rounded-pill"
                onClick={resume}
              >
                Resume
              </button>
            </Col>
          </Row>
        </Container>
        {/* <Background id="tsparticles" /> */}
      </section>
    </>
  );
};
export default About;
