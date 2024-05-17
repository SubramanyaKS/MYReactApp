import React from "react";
import { projectsdata } from "../data/data.js";
import ProjectCard from "../components/ProjectCard.jsx";
// import Background from "../components/Background.js";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../components/common/Heading.jsx";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="project py-5" id="project">
      <Heading title="My Projects" />
      <Container fluid>
        <Row className="row-cols-1 row-cols-md-3 row-eq-height">
          {projectsdata.map((project,i) => (
            <Col className="mb-4  d-flex align-items-center justify-content-center">
              <motion.div
                key={project.id}
                initial={{ opacity: 0, translateX: -50 , translateY:-50}}
                animate={{ opacity: 1, translateX: 0, translateY:0 }}
                transition={{duration:0.3, delay:i+0.1}}
              >
                <ProjectCard data={project} />
              </motion.div>
            </Col>
          ))}
        </Row>
        <button onClick={()=>window.open(
      "https://github.com/SubramanyaKS?tab=repositories",
      "_blank"
    )} class="resume rounded-pill">View More</button>
      </Container>
      {/* <Background id="tsparticles" /> */}
    </section>
  );
};

export default Projects;
