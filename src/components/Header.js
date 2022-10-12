import React from "react";
import Typed from "react-typed";
import 'bootstrap/dist/css/bootstrap.min.css'
const Header = () => {
    return (
        <section  className="main py-5">
	        <div className="container-fluid py-5">
                <br></br>
		        <div className="row py-5">
			        <div className = "col-lg-12 col-mg-12 py-5 mr-auto">
                       <br></br>
                        <h1>Hi I am </h1>
                        <h1 style ={{fontSize:"50px"}}>SUBRAMANYA K S</h1>
                        <br></br>
                        <br></br>
                <Typed
                className="typed-text"
                strings={["Learner", "Web Developer", "Simple Coder", "Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
            
            </div>

        </div>
        </div>
        </section>
    )
}

export default Header