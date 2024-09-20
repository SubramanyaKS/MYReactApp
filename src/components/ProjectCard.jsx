import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faFolderOpen, faStar as Star } from "@fortawesome/free-solid-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import { faFolder, faStar } from '@fortawesome/free-regular-svg-icons';
import Reveal from './common/Reveal';
import SkillPill from './common/SkillPill';
import NeoButton from './common/NeoButton';
import { useHover } from '../hook/useHover';

const ProjectCard = ({ data }) => {
  const { handleMouseEnter, handleMouseLeave, isHovered } = useHover();

  return (
    <Card onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} style={{ width: "20rem", fontFamily: "cursive" }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <div className='d-flex justify-content-between'>
          {isHovered ? <FontAwesomeIcon icon={faFolderOpen} color='#00ddff' size="lg" /> : <FontAwesomeIcon icon={faFolder} color="#00ddff" size="lg" />}

          {isHovered ? <FontAwesomeIcon icon={Star} color='yellow' size="lg" /> : <FontAwesomeIcon icon={faStar} color='yellow' size="lg" />}
        </div>
        <Reveal>
          <Card.Title>{data.title}</Card.Title>
        </Reveal>
        <Card.Subtitle className="mb-2 text-muted">
          {data.subtitle}
        </Card.Subtitle>
        {isHovered ? <> <Card.Text>
          {data.description}
        </Card.Text>
          {data.techStack ? <div className='d-flex flex-wrap'>
            {data.techStack.map((tech, i) => (
              <div key={i} className='m-1'>
                <SkillPill text={tech} />
              </div>
            ))}
          </div> : null}
          <div className="social-buttons mt-5">
            <NeoButton link={data.githubLink} icon={faGithub} />
            {data.websiteLink != null ?
              <NeoButton link={data.websiteLink} icon={faExternalLink} />
              : null}
            {data.downloadLink != null ?
              <NeoButton link={data.downloadLink} icon={faDownload} />
              : null}
          </div></> : null}
      </Card.Body>
    </Card>
  )
}
export default ProjectCard