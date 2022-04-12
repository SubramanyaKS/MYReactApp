import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
const Experience = () => {
    return(
        <section className="experience py-5" id="experience">
  <div className="container-fluid">
    <br></br><br></br>
    <center> <h2> &nbsp; Experience.</h2></center>
    <br /><br /><br />
    <div className="row row-cols-1 row-cols-md-2">
      <br></br><br></br><br></br>
      <div className="col sm-6  d-flex align-items-stretch">
        <div className="card">
          <img src="./images/ekathva.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Web Development Intern.</h5>
            <h6 className="card-subtitle mb-2 text-muted">Ekathva Innovations Pvt. Ltd.</h6>
            <p>Done a Project titled "Django Based REST API development for Ayucare Management".One month online industry level internship helped me to gain knowledge about resent technology, ideologies and aesthetics of the company.Learnt about Django and REST API</p>
            <div className="social-buttons mt-5"><a href="https://github.com/SubramanyaKS/AyuCareManagement"> <button className="neo-button"><FontAwesomeIcon icon={faGithub} style={{fontSize: '24px'}}/> </button></a></div>
          </div>
        </div>
      </div>
      <div className="col sm-6  d-flex align-items-stretch">
        <div className="card">
          <img src="./images/sparks.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Web Development and Design Intern.</h5>
            <h6 className="card-subtitle mb-2 text-muted">The Sparks Foundation.</h6>
            <p>My First Internship helped me to gain some knowledge on web development. Worked on the project title "Basic Banking System" which is demonstrate the basic banking operation.</p>
            <div className="social-buttons mt-5"><a href="https://github.com/SubramanyaKS/Task1-BasicBankingSystem"> <button className="neo-button"><FontAwesomeIcon icon={faGithub} style={{fontSize: '24px'}}/> </button></a></div>					
          </div>
          <br></br>
        </div>
      </div>
      <br></br>
    </div>
    
  </div>
  </section>
    )
}
export default Experience