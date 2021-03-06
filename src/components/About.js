import React from "react";
import Me from "./subbu.jpg";
import Button from "@restart/ui/esm/Button";


const About=() =>{
    return(
		<div>
			<section className="about py-5" id="about">
        <div className="container-fluid py-5">
		    <div className="row ">
			    <div className="col-lg-5 col-md-6">
                    <img className="MeImg" src={Me} alt="me.." />
			    </div>
			    <div className="col-md-7  my-3">
				    <h2> &nbsp; About Me.</h2>
				    <p> &nbsp;&nbsp; Learner|Programmer|Developer</p>
				    <p className = "py-5"> &nbsp; I am <span className="font-weight-bold">Subramanya K S</span>. A curious minded individual who is eager to explore and solve different problems, and, doing so I try out new approaches with existing technologies, experiment with emerging tools, constantly updating my knowledge,
thereby getting better at it each time.

I'm passionate about Web Development, Android App Development. Also, I enthusiastically follow up the Data Science domain.
Accordingly, I'm equipped with HTML, CSS, JavaScript, SQL skills and proficient in OOP concepts and languages like Java and C.

Utilizing all of these skills, I have completed several projects regarding the same and thus am aware of the real world practical constraints that is usually encountered while solving problems.
I also actively interact with the open source community, contributing to it and also trying out new stuff.

I'm constantly open to new ideas and always look to reach out to others, share and discuss ideas with them, thereby learn and also help others grow too..</p>
                </div>
				<Button
					variant="primary"
      				href="https://drive.google.com/file/d/15V_I5zW-iQ8eYWvtQEmi6sZ-6DgWGvya/view"
      				color="transparent"
      				target="_blank"
      				download>
						  Download Resume
 				</Button>
			</div>
		</div>
		</section>
		</div>
    )

}
export default About