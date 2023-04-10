import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import '../assets/skill.css'
const SkillsCard = ({ data }) => {
  return (
    <Card style={{ width: "6rem" }}>
      <Card.Body>
        <Card.Img src={data.image} />
      </Card.Body>
    </Card>
  );
};

export default SkillsCard;
