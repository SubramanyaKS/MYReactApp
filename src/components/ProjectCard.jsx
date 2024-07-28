import React,{useState} from 'react';
// import { projectsdata } from '../data/data';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faFolderOpen, faStar as Star } from "@fortawesome/free-solid-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import { faFolder, faStar } from '@fortawesome/free-regular-svg-icons';
import Reveal from './common/Reveal';
import SkillPill from './SkillPill';

const ProjectCard = ({data}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
         <Card onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave} style={{ width: "25rem", fontFamily: "cursive" }}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                  <div className='d-flex justify-content-between'>
                  {isHovered?<FontAwesomeIcon icon={faFolderOpen} color='#00ddff' size="lg"/>: <FontAwesomeIcon icon={faFolder} color="#00ddff" size="lg"/>}
  
                    {isHovered?<FontAwesomeIcon icon={Star} color='yellow' size="lg"/>:<FontAwesomeIcon icon={faStar} color='yellow' size="lg"/>}
                  </div>
                  <Reveal>
                  <Card.Title>{data.title}</Card.Title>
                  </Reveal>
                  <Card.Subtitle className="mb-2 text-muted">
                    {data.subtitle}
                  </Card.Subtitle>
                  {isHovered ?<> <Card.Text>
                    {data.description}
                  </Card.Text>
                 {data.techStack? <div className='d-flex'>
                  {data.techStack.map((tech,i)=>(
                    <div key={i} className='m-1'>
                      <SkillPill text={tech}/>
                    </div>
                  ))}
                  </div>:null}
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
                  </div></>:null}
                </Card.Body>
              </Card>
    
  )
}

export default ProjectCard