import React from 'react'
// import { projectsdata } from '../../data/data'
import { Card } from 'react-bootstrap'

const ProjectWidget = ({data,name}) => {
  console.log(data);
  return (
    <div className='project-chatbot'>
      <Card className='projectchatbot-card'>   
        {data.map((project) => (
          <div className='projectchatbot-content' key={project.id}>
            <div>
            <p className='projectchatbot-title'>{project.title}</p>
            {name==="experience" ? <p className='projectchatbot-subtitle'>{project.subtitle}</p> : <p className='projectchatbot-subtitle'>{project.description}</p>}
            {name==="project"?<a className='chatbot-link' href={project.githubLink}>link</a>:null}
            </div>
            </div>
        ))}
        <div className='moredetails'>For more details view {name} section</div>
      </Card>
    </div>
  )
}

export default ProjectWidget