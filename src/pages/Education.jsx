import React from 'react'
import Background from '../components/Background';
import { Col, Row } from 'react-bootstrap';
import EducationCard from '../components/EducationCard';
import { educationdata } from '../data/data';
const Education = () => {
  return (
    <section className="education py-5" id="education">
        <div className="container-fluid">
        <Row>
        <h1 className="mb-5" style={{ color: "#00ddff" }}>
              {" "}
              &nbsp; &lt; Education Details. /&gt;
        </h1>
        <Col>
        {educationdata.map((item)=>
             <EducationCard data={item}/>
        )}
           
        </Col>
        </Row>
        </div>
        <Background id="tsparticles"/>
    </section>
  )
}

export default Education