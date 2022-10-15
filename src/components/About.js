import React from "react";
import Me from "./img/subbu.jpg";
import Button from "@restart/ui/esm/Button";
import Background from "./Background";
const About = () => {
  const resume = () => {
    window.open(
      "https://drive.google.com/file/d/15V_I5zW-iQ8eYWvtQEmi6sZ-6DgWGvya/view",
      "_blank"
    );
  };
  return (
    <div>
      <section className="about py-5" id="about">
        <div className="container-fluid py-5">
          <h2 style={{ fontSize: "35px", color: "#00ddff" }}>
            {" "}
            &nbsp;<b>&lt; About Me. /&gt;</b>{" "}
          </h2>{" "}
          <br />
          {/*<div className="row ">
			 } <div className="col-lg-5 col-md-6">*/}
          {/* </div>*/}
          <img className="MeImg" src={Me} alt="me.." />
          <br />
          <div className="col">
            <p  style={{color:"#00ff00"}}> &nbsp;&nbsp; Learner|Programmer|Developer</p>
            <p className="py-5">
              {" "}
              &nbsp; I am{" "}
              <span style={{color:"#00ff00"}} className="font-weight-bold">
                <b>Subramanya K S</b>
              </span>
              . A curious minded individual who is eager to explore and solve
              different problems, and, doing so I try out new approaches with
              existing technologies, experiment with emerging tools, constantly
              updating my knowledge, thereby getting better at it each time. I'm
              passionate about Web Development, Android App Development. Also, I
              enthusiastically follow up the Data Science domain. Accordingly,
              I'm equipped with HTML, CSS, JavaScript, SQL skills and proficient
              in OOP concepts and languages like Java and C. Utilizing all of
              these skills, I have completed several projects regarding the same
              and thus am aware of the real world practical constraints that is
              usually encountered while solving problems. I also actively
              interact with the open source community, contributing to it and
              also trying out new stuff. I'm constantly open to new ideas and
              always look to reach out to others, share and discuss ideas with
              them, thereby learn and also help others grow too..
            </p>
          </div>
          <Button
            className="resume"
            style={{ backgroundColor: "#00ff00" }}
            variant="primary"
            onClick={resume}
          >
            Download Resume
          </Button>
        </div>

        {/*</div>*/}
        <Background id="tsparticles" />
      </section>
    </div>
  );
};
export default About;
