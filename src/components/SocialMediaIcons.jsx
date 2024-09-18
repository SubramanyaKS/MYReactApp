import React from 'react';
import IconContainer from "../components/IconContainer";
import { socialIcon } from '../data/data';

function SocialMediaIcons() {
  return (
    <div className="d-flex flex-wrap">
      {socialIcon.map((data)=>(
        <div key={data.id}>
          <IconContainer containerClass={'icon-container'} href={data.href}
            className={data.className} icon={data.icon} label={data.label} />
          </div>
      ))}
           
      </div>
  )
}

export default SocialMediaIcons