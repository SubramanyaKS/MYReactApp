import Card from "react-bootstrap/Card";
import React from "react";
import 'font-awesome/css/font-awesome.min.css'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
export default function Experience1() {
  return (
    <>
    <section className="experience py-5" id="experience">
  <div className="container-fluid">
    <center> <h2> &nbsp; Experience.</h2></center>
    <br /><br /><br />
    <div className="row row-cols-1 row-cols-md-2">
      <div className="col sm-6  d-flex align-items-stretch">
      <Card style={{ width: "25rem" }}>
      <Card.Img variant="top" src="./images/ekatvaI.jpg" />
        <Card.Body>
          <Card.Title style={{ color: "green" }}>Web Development Intern.</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          Ekathva Innovations Pvt. Ltd.
          </Card.Subtitle>
          <Card.Text>
          Done a Project titled "Django Based REST API development for Ayucare Management".One month online industry level internship helped me to gain knowledge about resent technology, ideologies and aesthetics of the company.Learnt about Django and REST API
          </Card.Text>
          <div className="social-buttons mt-5"><a href="https://github.com/SubramanyaKS/AyuCareManagement"> <button className="neo-button"><FontAwesomeIcon icon={faGithub} style={{fontSize: '24px'}}/> </button></a></div>
        </Card.Body>
      </Card>
    </div>
    <div className="col sm-6  d-flex align-items-stretch">
      <Card style={{ width: "25rem" }}>
      <Card.Img variant="top" src="./images/Thesparks.jpg" />
        <Card.Body>
          <Card.Title style={{ color: "green" }}>Web Development and Design Intern.</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          The Sparks Foundation.
          </Card.Subtitle>
          <Card.Text>
          My First Internship helped me to gain some knowledge on web development. Worked on the project title "Basic Banking System" which is demonstrate the basic banking operation.
          </Card.Text>
          <div className="social-buttons mt-5"><a href="https://github.com/SubramanyaKS/Task1-BasicBankingSystem"> <button className="neo-button"><FontAwesomeIcon icon={faGithub} style={{fontSize: '24px'}}/> </button></a></div>
        </Card.Body>
      </Card>
    </div>
    

      </div>
      
      </div>
      
      </section>
    </>
  );
}