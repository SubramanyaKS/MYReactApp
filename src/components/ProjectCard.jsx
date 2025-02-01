import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Reveal from './common/Reveal';
import SkillPill from './common/SkillPill';
import NeoButton from './common/NeoButton';
import { useHover } from '../hook/useHover';
import { Download, ExternalLink, Folder, FolderOpen, Github, Star } from 'lucide-react';

const ProjectCard = ({ data }) => {
  const { handleMouseEnter, handleMouseLeave, isHovered } = useHover();

  return (
    <Card onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} style={{ width: "20rem", fontFamily: "cursive" }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <div className='d-flex justify-content-between'>
          {isHovered ? <FolderOpen color='#00ddff'/> : <Folder color="#00ddff"/>}

          {isHovered ? <Star color='yellow' fill="yellow" /> : <Star color='yellow' />}
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
            <NeoButton link={data.githubLink} Icon={Github}/>
            {data.websiteLink != null ?
              <NeoButton link={data.websiteLink} Icon={ExternalLink}/>
              : null}
            {data.downloadLink != null ?
              <NeoButton link={data.downloadLink} Icon={Download} />
              : null}
          </div></> : null}
      </Card.Body>
    </Card>
  )
}
export default ProjectCard