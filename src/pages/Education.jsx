import React from "react";
import EducationCard from "../components/EducationCard";
import { Container } from "react-bootstrap";
import { educationdata } from "../data/data";
import Heading from "../components/common/Heading";

const Education1 = () => {
  return (
    <section className="education-content" id="education">
      <Heading title="Education" />
      <Container>
        <div className="timeline">
          {educationdata.map((data, i) => (
            <div
              className={`container-e ${
                i % 2 === 0 ? "left-container" : "right-container"
              }`}
            >
              <div className="timeline-bullet"></div>
              <EducationCard data={data} />
              <span
                className={
                  i % 2 === 0 ? "left-container-arrow" : "right-container-arrow"
                }
              ></span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education1;
