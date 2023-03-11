import React from 'react'
import { Container, Row } from "react-bootstrap";
import Background from '../components/Background';
import { programskills, databaseskills, webskills, ide, framework, other } from '../data/data';
import SkillsRow from '../components/SkillsRow';

const Skills = () => {
  return (
    <section className="skills py-5">
         <Container fluid className="App py-2 overflow-hidden">
          <Row className="justify-content-center mb-5">
            <h2 style={{fontSize:"35px",color:"#00ddff"}}>&lt; Skills /&gt;</h2>
          </Row>
          <h4>&lt; Programming Language &gt;</h4>
            <SkillsRow skill={programskills}/>
            <h4>&lt; Database &gt;</h4>
            <SkillsRow skill={databaseskills} />
            <h4>&lt; Web Development &gt;</h4>
            <SkillsRow skill={webskills} />
            <h4>&lt; Framework &gt;</h4>
            <SkillsRow skill={framework} />
            <h4>&lt; IDE &gt;</h4>
            <SkillsRow skill={ide} />
            <h4>&lt; Others &gt;</h4>
            <SkillsRow skill={other} />
          </Container>
          <Background id="tsparticles"/>
    </section>
  )
}

export default Skills;