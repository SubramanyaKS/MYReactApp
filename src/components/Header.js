import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
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
    )
}

export default Header