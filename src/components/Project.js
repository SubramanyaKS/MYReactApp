import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
export default function Experience1() {
  return (
    <>
      <section className="project py-5" id="project">
        <div className="container-fluid ">
          <h1 className="text-center" style={{ color: "#00ddff" }}>
            {" "}
            &nbsp;&lt; My Project. /&gt;
          </h1>
          <br />
          <br></br>
          <div className="row row-cols-1 row-cols-md-2 row-eq-height">
            <div className="col mb-4  d-flex align-items-stretch">
              <Card style={{ width: "25rem", fontFamily: "cursive" }}>
                <Card.Img variant="top" src="./images/bus.jpg" />
                <Card.Body>
                  <Card.Title>Bus Reservation System.</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    A Dbms mini-project
                  </Card.Subtitle>
                  <Card.Text>
                    This Project is the DBMS mini-project and desktop
                    application where we can reserve the bus seat,check the seat
                    availability and view the seat arrangement do the payment
                    after seat reservation.
                  </Card.Text>
                  <div className="social-buttons mt-5">
                    <a href="https://github.com/SubramanyaKS/busreservation">
                      {" "}
                      <button className="neo-button">
                        <FontAwesomeIcon
                          icon={faGithub}
                          style={{ fontSize: "24px" }}
                        />{" "}
                      </button>
                    </a>
                    <a href="https://github.com/SubramanyaKS/busreservation/blob/main/BusReservation.jar">
                      {" "}
                      <button className="neo-button">
                        <FontAwesomeIcon
                          icon={faDownload}
                          style={{ fontSize: "24px" }}
                        />{" "}
                      </button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col mb-4  d-flex align-items-stretch">
              <Card style={{ width: "25rem", fontFamily: "cursive" }}>
                <Card.Img variant="top" src="./images/heart.jpg" />
                <Card.Body>
                  <Card.Title>Heart Disease Prediction System.</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Machine-learning project using regression model.
                  </Card.Subtitle>
                  <Card.Text>
                    In this project we predict the heart disease by collecting
                    various details and building various machine learning model
                    using ‘heart.csv’ dataset.
                  </Card.Text>
                  <div className="social-buttons mt-5">
                    <a href="https://github.com/SubramanyaKS/Heart_Attack_Prediction">
                      {" "}
                      <button className="neo-button">
                        <FontAwesomeIcon
                          icon={faGithub}
                          style={{ fontSize: "24px" }}
                        />
                      </button>
                    </a>
                    <a href="https://heart-attack-prediction-model.herokuapp.com/">
                      {" "}
                      <button className="neo-button">
                        <FontAwesomeIcon
                          icon={faSquareArrowUpRight}
                          style={{ fontSize: "24px" }}
                        />{" "}
                      </button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col mb-4  d-flex align-items-stretch">
              <Card style={{ width: "25rem", fontFamily: "cursive" }}>
                <Card.Img variant="top" src="./images/cal.jpg" />
                <Card.Body>
                  <Card.Title>VTU SGPA CGPA Calculator.</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Java jar application.
                  </Card.Subtitle>
                  <Card.Text>
                    In this project a java jar application is developed which
                    calculate the CGPA and SGPA of 2015,2017 and 2018 scheme
                    students of VTU.
                  </Card.Text>
                  <div className="social-buttons mt-5">
                    <a href="https://github.com/SubramanyaKS/VTU-CGPA_SGPA-Calculator/">
                      {" "}
                      <button className="neo-button">
                        <FontAwesomeIcon
                          icon={faGithub}
                          style={{ fontSize: "24px" }}
                        />{" "}
                      </button>
                    </a>
                    <a href="https://github.com/SubramanyaKS/VTU-CGPA_SGPA-Calculator/blob/main/VTU_SGPA_CGPA.jar">
                      {" "}
                      <button className="neo-button">
                        <FontAwesomeIcon
                          icon={faDownload}
                          style={{ fontSize: "24px" }}
                        />{" "}
                      </button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col mb-4  d-flex align-items-stretch">
              <Card style={{ width: "25rem", fontFamily: "cursive" }}>
                <Card.Img variant="top" src="./images/diabeties.jpg" />
                <Card.Body>
                  <Card.Title>Diabeties Prediction System.</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Machine-learning project using regression model.
                  </Card.Subtitle>
                  <Card.Text>
                    In this project we determine the diabetes by building
                    various machine learning model using ‘diabetes.csv’ dataset.
                  </Card.Text>
                  <div className="social-buttons mt-5">
                    <a href="https://github.com/SubramanyaKS/Diabetes_prediction">
                      {" "}
                      <button className="neo-button">
                        <FontAwesomeIcon
                          icon={faGithub}
                          style={{ fontSize: "24px" }}
                        />{" "}
                      </button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col mb-4  d-flex align-items-stretch">
              <Card style={{ width: "25rem", fontFamily: "cursive" }}>
                <Card.Img variant="top" src="./images/weather.jpg" />
                <Card.Body>
                  <Card.Title>Weather Application.</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    API Based Web Application.
                  </Card.Subtitle>
                  <Card.Text>
                    Developed a web application which uses openweathermap API to
                    fetch the weather details of various city across the globe
                    by giving city name as input.Used Django as web framework.
                  </Card.Text>
                  <div className="social-buttons mt-5">
                    <a href="https://github.com/SubramanyaKS/Weather-app/">
                      <button className="neo-button">
                        <FontAwesomeIcon
                          icon={faGithub}
                          style={{ fontSize: "24px" }}
                        />{" "}
                      </button>
                    </a>
                    <a href="https://subramanyaks.github.io/Weather-app/">
                      <button className="neo-button">
                        <FontAwesomeIcon
                          icon={faSquareArrowUpRight}
                          style={{ fontSize: "24px" }}
                        />{" "}
                      </button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col mb-4  d-flex align-items-stretch">
              <Card style={{ width: "25rem", fontFamily: "cursive" }}>
                <Card.Img variant="top" src="./images/media.jpg" />
                <Card.Body>
                  <Card.Title>Media Player Application.</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Android Application Project.
                  </Card.Subtitle>
                  <Card.Text>
                    In This Application we can play the audio and video.We can
                    move forward and backword using button.
                  </Card.Text>
                  <div className="social-buttons mt-5">
                    <a href="https://github.com/SubramanyaKS/MediaPlayer-Android-Application">
                      {" "}
                      <button className="neo-button">
                        <FontAwesomeIcon
                          icon={faGithub}
                          style={{ fontSize: "24px" }}
                        />{" "}
                      </button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
