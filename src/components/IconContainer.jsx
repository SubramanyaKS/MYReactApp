import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const IconContainer = ({containerClass,href,icon,className,iconClass}) => {
  return (
    <div className={`${containerClass} rounded-circle`}>
        <a
          href={href}
          target='_blank'
          className={className} rel="noreferrer"
        >
          <FontAwesomeIcon icon={icon} className={iconClass} size="2x" />
        </a>
    </div>
  )
}

export default IconContainer