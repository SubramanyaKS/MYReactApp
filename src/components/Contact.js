import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faYoutube, faTwitter, faFacebook,faHackerrank,faLinkedin,faGoogle} from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
    return(
        <div className="social-container">
            <h3>Follow me</h3>
            <a href="https://www.linkedin.com/in/subramanya-k-s-b74a92204/" className="linkedin social"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
            <a href="https://github.com/SubramanyaKS" className="github social" ><FontAwesomeIcon icon={faGithub} size="2x"/></a>
			<a href="https://www.hackerrank.com/subramanyaks2205" className ="hackerrank"><FontAwesomeIcon icon={faHackerrank} size="2x"/></a>
			<a href="https://www.youtube.com/channel/UCg28-MrcK-8CCFos7FWp0Dg/" className="youtube social"><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
			<a href="https://twitter.com/subbukshebbar" className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
			<a href="https://www.facebook.com/profile.php?id=100070944345090"className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
            <a href="mailto:subramanyaks2205@gmail.com"className="gmail social"><FontAwesomeIcon icon={faGoogle} size="2x"/></a>
        </div>
    );
}
export default Contact;