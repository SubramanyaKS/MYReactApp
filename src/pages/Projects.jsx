import React from 'react';
import {projectsdata} from '../data/data.js';
import ProjectCard from '../components/ProjectCard.jsx';
import Background from '../components/Background.js';


const Projects = () => {
  return (
    <section className="project py-5" id="project">
      <div className="container-fluid ">
          <h1 className="text-center mb-5" style={{ color: "#00ddff" }}>
            {" "}
            &nbsp;&lt; My Project. /&gt;
          </h1>
          <div className="row row-cols-1 row-cols-md-2 row-eq-height">
            
      {projectsdata.map((project) => (
        <div className="col mb-4  d-flex align-items-stretch">
           <ProjectCard data={project} />
           </div> 
          ))}
     
      </div>
      </div>
      <Background id="tsparticles" />
    </section>
  )
}

export default Projects;