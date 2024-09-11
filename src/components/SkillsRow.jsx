import React from "react";
import { Row } from "react-bootstrap";
import SkillsCard from "./SkillsCard";
import "bootstrap/dist/css/bootstrap.min.css";

const SkillsRow = ({ skill }) => {
  return (
    <Row className="card-example d-flex flex-row flex-wrap overflow-auto">
      {skill.map((item) => (
        <SkillsCard key={item.id} data={item} />
      ))}
    </Row>
  );
};

export default SkillsRow;
