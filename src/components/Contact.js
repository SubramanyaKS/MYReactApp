import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import emailjs from 'emailjs-com';//
import {
  faGithub,
  faYoutube,
  faTwitter,
  faFacebook,
  faHackerrank,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [details, setDetails] = useState({
    email: "",
    name: "",
    subject: "",
    body: "",
  });

  const handleChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    var data = details;

    /* emailjs.sendForm('service_eb7zd3g', 'template_8e3unw5', e.target, '2zeOQk264Nxpdls2r')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()*/
  };
  return (
    <section className="contact" id="contact">
      <div className="container-fluid ">
        <br />
        <h2>Contact</h2>
        <div className="container">
          <form onSubmit={sendEmail}>
            <p style={{ color: "red" }}>Form is temporarily disabled</p>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  name="name"
                  value={details.name}
                  onClick={handleChange}
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  name="email"
                  value={details.email}
                  onClick={handleChange}
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  name="subject"
                  value={details.subject}
                  type="text"
                  onClick={handleChange}
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  name="body"
                  value={details.body}
                  onClick={handleChange}
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="col-8 pt-2 mx-auto">
                <input
                  type="submit"
                  className="resume"
                  value="Send Message"
                ></input>
              </div>
            </div>
          </form>
        </div>
        <br />
        <br />
        <h2>Let's connect</h2>

        <br></br>
        <a
          href="https://www.linkedin.com/in/subramanya-k-s-b74a92204/"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/SubramanyaKS" className="github social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.hackerrank.com/subramanyaks2205"
          className="hackerrank"
        >
          <FontAwesomeIcon icon={faHackerrank} size="2x" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCg28-MrcK-8CCFos7FWp0Dg/"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://twitter.com/subbukshebbar" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100070944345090"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="mailto:subramanyaks2205@gmail.com" className="gmail social">
          <FontAwesomeIcon icon={faGoogle} size="2x" />
        </a>
        <br />
        <br></br>
      </div>
    </section>
  );
};
export default Contact;
