import React from 'react'
import IconContainer from "../components/IconContainer";
import { socialIcon } from '../data/data';
import Center from './common/Center';

const ContactIcons = () => {
  return (
    <Center>
      {
        socialIcon.map((data)=>(
          <IconContainer  href={data.href}
          className={data.className} icon={data.icon} iconClass={data.iconClass}/>
        ))
      }
    </Center>
  )
}

export default ContactIcons