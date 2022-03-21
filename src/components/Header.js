import React from "react";
import Typed from "react-typed";
import 'bootstrap/dist/css/bootstrap.min.css'
const Header = () => {
    return (
        <section  className="main py-5">
	        <div className="container-fluid py-5">
		        <div className="row py-5">
			        <div className = "col-lg-12 col-mg-12 py-5 mr-auto">
                        <h1>Hi I am </h1>
                        <h1>SUBRAMANYA K S</h1>
                <Typed
                className="typed-text"
                strings={["Learner", "Web Development", "Simple Coder", "Developer", "Java Application Development"]}
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