import React from 'react'
import {
    faGithub,
    faYoutube,
    faTwitter,
    faFacebook,
    faLinkedin,
    faGoogle,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
  import IconContainer from "../components/IconContainer";

const ContactIcons = () => {
  return (
    <div className='d-flex mb-3 mt-3 justify-content-center align-items-center'>
        <IconContainer  href="https://www.linkedin.com/in/subramanyakshebbar/"
          className="linkedin social" icon={faLinkedin} iconClass={"fa-bounce"}/>
         <IconContainer href="https://github.com/SubramanyaKS" className="github social" icon={faGithub} iconClass={'fa-flip'} />
        <IconContainer href="https://www.youtube.com/@subramanyakshebbar/"
          className="youtube social" icon={faYoutube} iconClass={'fa-beat'}/>
        <IconContainer href="https://twitter.com/subbukshebbar" className="twitter social" icon={faTwitter} iconClass={"fa-shake"}/>
        <IconContainer href="https://www.facebook.com/profile.php?id=100070944345090"
          className="facebook social" icon={faFacebook} iconClass={'fa-fade'}/>
        <IconContainer href="https://www.instagram.com/subramanyakshebbar/"
          className="instagram social" icon={faInstagram} iconClass={'fa-spin'} />
        <IconContainer icon={faGoogle} href="mailto:subramanyaks2205@gmail.com" className="gmail social" iconClass={'fa-beat-fade'}/>
    </div>
  )
}

export default ContactIcons