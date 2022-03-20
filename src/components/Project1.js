import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {faSquareArrowUpRight} from '@fortawesome/free-solid-svg-icons';
const  Project1 = ()=>{
    return ( 
        <div>
            <section className="project py-5" id="project">
        <div className="container-fluid ">
            <h2 className="text-center"> &nbsp; My Project.</h2><br />
            <div className="row row-cols-1 row-cols-md-2 row-eq-height">
            <div className="col mb-4  d-flex align-items-stretch">
                <div className="card">
                <img src="./images/bus.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Bus Reservation System.</h5>
                    <h6 className="card-subtitle mb-2 text-muted">A Dbms mini-project</h6>
                    <p className="card-text">This Project is the DBMS mini-project and desktop application where we can reserve the bus seat,check the seat availability and view the seat arrangement do the payment after seat reservation.</p>
                    <div className="social-buttons mt-5"><a href="https://github.com/SubramanyaKS/busreservation"> <button className="neo-button"><FontAwesomeIcon icon={faGithub} style={{fontSize: '24px'}}/> </button></a></div>
                </div>
                </div>
            </div>
            <div className="col mb-4  d-flex align-items-stretch">
                <div className="card">
                <img src="./images/diabeties.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Diabeties Prediction System.</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Machine-learning project using regression model.</h6>
                    <p className="card-text">In this project we determine the diabetes by building various machine learning model using ‘diabetes.csv’ dataset.</p>
                    <div className="social-buttons mt-5"><a href="https://github.com/SubramanyaKS/Diabetes_prediction"> <button className="neo-button"><FontAwesomeIcon icon={faGithub} style={{fontSize: '24px'}}/> </button></a></div>					
                </div>
                </div>
            </div>
            <div className="col mb-4  d-flex align-items-stretch">
                <div className="card">
                <img src="./images/heart.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Heart Disease Prediction System.</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Machine-learning project using regression model.</h6>
                    <p className="card-text">In this project we predict the heart disease  by collecting various details and building various machine learning model using ‘heart.csv’ dataset.</p>
                    
                    <div className="social-buttons mt-5"><a href="https://github.com/SubramanyaKS/Heart_Attack_Prediction"> <button className="neo-button"><FontAwesomeIcon icon={faGithub} style={{fontSize: '24px'}} /></button></a><a href="https://heart-attack-prediction-model.herokuapp.com/"> <button className="neo-button"><FontAwesomeIcon icon={faSquareArrowUpRight} style={{fontSize: '24px'}} /> </button></a></div>					
                </div>
                </div>
            </div>
            <div className="col mb-4  d-flex align-items-stretch">
                <div className="card">
                <img src="./images/cal.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">VTU SGPA CGPA Calculator.</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Java jar application.</h6>
                    <p className="card-text">In this project a java jar application is developed which calculate the CGPA and SGPA of 2015,2017 and 2018 scheme students of VTU.</p>
                    <div className="social-buttons mt-5"><a href="https://github.com/SubramanyaKS/VTU-CGPA_SGPA-Calculator/"> <button className="neo-button"><FontAwesomeIcon icon={faGithub} style={{fontSize: '24px'}}/> </button></a><a href="https://github.com/SubramanyaKS/VTU-CGPA_SGPA-Calculator/blob/main/VTU_SGPA_CGPA.jar"> <button className="neo-button"><FontAwesomeIcon icon={faDownload} style={{fontSize: '24px'}} /> </button></a></div>		
                </div>
                </div>
            </div>
            <div className="col mb-4  d-flex align-items-stretch">
                <div className="card">
                <img src="./images/media.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Media Player Application.</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Android application.</h6>
                    <p className="card-text">In This Application we can play the audio and video.We can move forward and backword using button.</p>                                      
                    <div className="social-buttons mt-5"><a href="https://github.com/SubramanyaKS/MediaPlayer-Android-Application"> <button className="neo-button"><FontAwesomeIcon icon={faGithub} style={{fontSize: '24px'}}/> </button></a></div>
                </div>
                </div>
            </div>
            <div className="col mb-4  d-flex align-items-stretch">
                <div className="card">
                <img src="./images/weather.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Weather Application.</h5>
                    <h6 className="card-subtitle mb-2 text-muted">API Based Web Application.</h6>
                    <p className="card-text">Developed a web application which uses openweathermap API to fetch the weather details of various city across the globe by giving city name as input.Used Django as web framework.</p>
                    <div className="social-buttons mt-5"><a href="https://github.com/SubramanyaKS/WeatherProject/"> </a><button className="neo-button"><a href="https://github.com/SubramanyaKS/WeatherProject/"><FontAwesomeIcon icon={faGithub} style={{fontSize: '24px'}} /> </a></button></div>				
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
    )
}

export default Project1