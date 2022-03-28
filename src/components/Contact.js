import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import {faGithub, faYoutube, faTwitter, faFacebook,faHackerrank,faLinkedin,faGoogle} from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_n17er2k', 'template_8e3unw5', form.current, 'KZLEAm3-rwyXgL5_-')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <div className="social-container">
            <div class="container">
      <div class="row">
        <div class="col align-self-center">
          <h1 class="text-center">Email - JavaScript Contact Form</h1>
          {/* <!-- contact form --> */}
          <form ref={form} onSubmit={sendEmail}>
            {/* <!-- name --> */}
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                name="name"
                class="form-control"
                id="name"
                placeholder="enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="enter your email"
              />
            </div>

            {/* <!-- subject --> */}
            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                name="subject"
                class="form-control"
                id="subject"
                placeholder="enter email subject"
              />
            </div>

            <div class="form-group">
              <label for="email_body">Message</label>
              <textarea
                class="form-control"
                id="email_body"
                rows="5"
              ></textarea>
            </div>
            <br></br>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
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
    );
}
export default Contact;