import React from "react";
// import Me from "./img/subbu.jpg";
import Button from "@restart/ui/esm/Button";
import { aboutdetails } from "../data/data";
import Background from "../components/Background";

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
        <div className="container-fluid ">
          
         <div  class="row">
         <h2 style={{ fontSize: "35px", color: "#00ddff" }} className="mb-3">
            
            &nbsp;<b>&lt; About Me. /&gt;</b>
          </h2>
           <div class="col">
           
           <img className="MeImg" src={aboutdetails.image} alt="me.." />
           <br />
           </div>
           <div className="col">
           
             {/* <p  style={{color:"#00ff00"}}> &nbsp;&nbsp; {aboutdetails.tagline}</p> */}
             <p className="py-5">
               {" "}
               &nbsp; I am{" "}
               <span style={{color:"#00ff00"}} className="font-weight-bold">
                 <b>{aboutdetails.name}</b>
               </span>
               {aboutdetails.description}
             </p>
             <Button
            className="resume rounded-pill"
            style={{  }}
            variant="primary"
            onClick={resume}
          >
            Download Resume
          </Button>
           </div>
         </div>
          
        </div>

        {/*</div>*/}
        <Background id="tsparticles" />
      </section>
    </div>
  );
};
export default About;
