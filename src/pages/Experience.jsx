import React from 'react'
import { experiencedata } from '../data/data';
import ProjectCard from '../components/ProjectCard';
import Background from '../components/Background';
const Experience = () => {
  return (
    <section className="project py-5" id="project">
      <div className="container-fluid ">
          <h1 className="text-center mb-5" style={{ color: "#00ddff" }}>
            {" "}
            &nbsp;&lt; Experience. /&gt;
          </h1>
          <div className="row row-cols-1 row-cols-md-2 row-eq-height">
            
      {experiencedata.map((project) => (
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

export default Experience;