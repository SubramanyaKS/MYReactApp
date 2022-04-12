import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';
import {faGithub, faYoutube, faTwitter, faFacebook,faHackerrank,faLinkedin,faGoogle} from '@fortawesome/free-brands-svg-icons';
const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_n17er2k', 'template_8e3unw5', e.target, 'KZLEAm3-rwyXgL5_-')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return(
        <section className="social-container" id="contact">
      <div className="social-container">
          <h3>Contact</h3>
      <div className="container">
      <form onSubmit={sendEmail}>
              <div className="row pt-5 mx-auto">
                  <div className="col-8 form-group mx-auto">
                      <input type="text" className="form-control"  placeholder="Name" name="from_name"/>
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                      <input type="email"  className="form-control" placeholder="Email Address" name="from_email"/>
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                      <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                      <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                  </div>
                  <div className="col-8 pt-2 mx-auto">
                      <input type="submit" className="btn btn-info" value="Send Message"></input>
                  </div>
              </div>
          </form>
      </div>
    <br></br>
            <h3>Let's connect</h3>

            <br></br>
            <a href="https://www.linkedin.com/in/subramanya-k-s-b74a92204/" className="linkedin social"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
            <a href="https://github.com/SubramanyaKS" className="github social" ><FontAwesomeIcon icon={faGithub} size="2x"/></a>
			<a href="https://www.hackerrank.com/subramanyaks2205" className ="hackerrank"><FontAwesomeIcon icon={faHackerrank} size="2x"/></a>
			<a href="https://www.youtube.com/channel/UCg28-MrcK-8CCFos7FWp0Dg/" className="youtube social"><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
			<a href="https://twitter.com/subbukshebbar" className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
			<a href="https://www.facebook.com/profile.php?id=100070944345090"className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
            <a href="mailto:subramanyaks2205@gmail.com"className="gmail social"><FontAwesomeIcon icon={faGoogle} size="2x"/></a>
        </div>
        </section>
    );
}
export default Contact;