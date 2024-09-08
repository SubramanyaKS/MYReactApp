import React from "react";
import { experiencedata } from "../data/data";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
// import Background from "../components/Background";
import Heading from "../components/common/Heading";
const Experience = () => {
  return (
    <section className="project py-5" id="project">
      <Heading title="Experience" />
      <Container fluid className="py-3">
        <Row className="row-cols-1 row-cols-md-2 row-eq-height">
          {experiencedata.map((project) => (
            <Col className=" mb-4  d-flex align-items-stretch">
              <div key={project.id}>
                <ProjectCard data={project} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      {/* <Background id="tsparticles" /> */}
    </section>
  );
};

export default Experience;
