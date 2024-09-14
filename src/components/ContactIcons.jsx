import React from 'react'
import IconContainer from "../components/IconContainer";
import { socialIcon } from '../data/data';
import Center from './common/Center';

const ContactIcons = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {
        socialIcon.map((data)=>(
          <div key={data.id}>
            <IconContainer href={data.href}
              className={data.className} icon={data.icon} iconClass={data.iconClass} />
          </div>
        ))
      }
    </div>
  )
}

export default ContactIcons