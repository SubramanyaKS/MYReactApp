import React from 'react';
// import { projectsdata } from '../data/data';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";

const ProjectCard = ({data}) => {
  return (
         <Card style={{ width: "25rem", fontFamily: "cursive" }}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {data.subtitle}
                  </Card.Subtitle>
                  <Card.Text>
                    {data.description}
                  </Card.Text>
                  <div className="social-buttons mt-5">
                    <a href={data.githubLink}>
                      {" "}
                      <button className="neo-button">
                        <FontAwesomeIcon
                          icon={faGithub}
                          style={{ fontSize: "24px" }}
                        />{" "}
                      </button>
                    </a>
                   {data.websiteLink!=null? <a href={data.websiteLink}>
                      {" "}
                      <button className="neo-button">
                        <FontAwesomeIcon
                          icon={faExternalLink}
                          style={{ fontSize: "24px" }}
                        />{" "}
                      </button>
                    </a>:null}
                    {data.downloadLink!=null? <a href={data.downloadLink}>
                      {" "}
                      <button className="neo-button">
                        <FontAwesomeIcon
                          icon={faDownload}
                          style={{ fontSize: "24px" }}
                        />{" "}
                      </button>
                    </a>:null}
                  </div>
                </Card.Body>
              </Card>
    
  )
}

export default ProjectCard