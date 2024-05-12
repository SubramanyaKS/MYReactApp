import React from 'react';
import IconContainer from "../components/IconContainer";
import { socialIcon } from '../data/data';

function SocialMediaIcons() {
  return (
    <div  className="d-flex">
      {socialIcon.map((data)=>(
        <IconContainer containerClass={'icon-container'} href={data.href}
        className={data.className} icon={data.icon}/>
      ))}
           
      </div>
  )
}

export default SocialMediaIcons